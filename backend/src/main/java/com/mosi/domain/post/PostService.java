package com.mosi.domain.post;

import com.mosi.domain.user.User;
import com.mosi.domain.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * PostService - 게시글 비즈니스 로직
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PostService {

    private final PostRepository postRepository;
    private final UserService userService;

    // 게시글 작성
    @Transactional
    public PostDto.DetailResponse create(PostDto.CreateRequest request) {
        User author = userService.findById(request.userId());

        Post post = Post.builder()
                .title(request.title())
                .content(request.content())
                .board(request.board())
                .anonymous(request.anonymous())
                .author(author)
                .build();

        Post saved = postRepository.save(post);
        return PostDto.DetailResponse.from(saved);
    }

    // 게시글 목록 조회 (게시판별, 페이지네이션)
    public Page<PostDto.ListResponse> getList(String board, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);

        Page<Post> posts = (board == null || board.isBlank())
                ? postRepository.findAllByOrderByCreatedAtDesc(pageRequest)
                : postRepository.findByBoardOrderByCreatedAtDesc(board, pageRequest);

        return posts.map(PostDto.ListResponse::from);
    }

    // 게시글 상세 조회
    @Transactional
    public PostDto.DetailResponse getDetail(Long id) {
        Post post = findById(id);
        post.increaseViewCount(); // 조회수 증가
        return PostDto.DetailResponse.from(post);
    }

    // 게시글 수정
    @Transactional
    public PostDto.DetailResponse update(Long id, PostDto.UpdateRequest request) {
        Post post = findById(id);
        post.update(request.title(), request.content());
        return PostDto.DetailResponse.from(post);
    }

    // 게시글 삭제
    @Transactional
    public void delete(Long id) {
        Post post = findById(id);
        postRepository.delete(post);
    }

    // ID로 게시글 조회 (내부 사용)
    public Post findById(Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다"));
    }
}
