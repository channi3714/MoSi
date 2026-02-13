package com.mosi.domain.comment;

import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Comment 관련 DTO - Java 21 Record
 */
public class CommentDto {

    // 댓글 작성 요청
    public record CreateRequest(
            @NotBlank(message = "댓글 내용은 필수입니다")
            String content,

            boolean anonymous,
            Long userId,
            Long parentId // null이면 최상위 댓글, 값이 있으면 대댓글
    ) {}

    // 댓글 응답 (대댓글 포함)
    public record CommentResponse(
            Long id,
            String content,
            String author,
            boolean isAuthor,
            LocalDateTime createdAt,
            List<CommentResponse> replies
    ) {
        // Comment 엔티티 → DTO 변환 (대댓글 포함)
        public static CommentResponse from(Comment comment, List<Comment> replies, Long postAuthorId) {
            boolean isPostAuthor = comment.getAuthor().getId().equals(postAuthorId);
            String displayAuthor;

            if (isPostAuthor) {
                displayAuthor = "익명(글쓴이)";
            } else if (comment.isAnonymous()) {
                displayAuthor = "익명";
            } else {
                displayAuthor = comment.getAuthor().getNickname();
            }

            List<CommentResponse> replyResponses = replies.stream()
                    .map(reply -> CommentResponse.from(reply, List.of(), postAuthorId))
                    .toList();

            return new CommentResponse(
                    comment.getId(),
                    comment.getContent(),
                    displayAuthor,
                    isPostAuthor,
                    comment.getCreatedAt(),
                    replyResponses
            );
        }
    }
}
