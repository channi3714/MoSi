package com.mosi.domain.comment;

import com.mosi.domain.post.Post;
import com.mosi.domain.post.PostService;
import com.mosi.domain.user.User;
import com.mosi.domain.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * CommentService - 댓글 비즈니스 로직
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CommentService {

    private final CommentRepository commentRepository;
    private final PostService postService;
    private final UserService userService;

    // 댓글 작성
    @Transactional
    public CommentDto.CommentResponse create(Long postId, CommentDto.CreateRequest request) {
        Post post = postService.findById(postId);
        User author = userService.findById(request.userId());

        // 대댓글인 경우 부모 댓글 조회
        Comment parent = null;
        if (request.parentId() != null) {
            parent = commentRepository.findById(request.parentId())
                    .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 댓글입니다"));
        }

        Comment comment = Comment.builder()
                .content(request.content())
                .anonymous(request.anonymous())
                .post(post)
                .author(author)
                .parent(parent)
                .build();

        Comment saved = commentRepository.save(comment);
        return CommentDto.CommentResponse.from(saved, List.of(), post.getAuthor().getId());
    }

    // 게시글의 댓글 목록 (대댓글 포함)
    public List<CommentDto.CommentResponse> getComments(Long postId) {
        Post post = postService.findById(postId);
        Long postAuthorId = post.getAuthor().getId();

        // 최상위 댓글 조회
        List<Comment> topLevelComments =
                commentRepository.findByPostIdAndParentIsNullOrderByCreatedAtAsc(postId);

        // 각 최상위 댓글에 대해 대댓글 조회
        return topLevelComments.stream()
                .map(comment -> {
                    List<Comment> replies =
                            commentRepository.findByParentIdOrderByCreatedAtAsc(comment.getId());
                    return CommentDto.CommentResponse.from(comment, replies, postAuthorId);
                })
                .toList();
    }

    // 댓글 삭제
    @Transactional
    public void delete(Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 댓글입니다"));
        commentRepository.delete(comment);
    }
}
