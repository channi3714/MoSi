package com.mosi.domain.post;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

/**
 * Post 관련 DTO - Java 21 Record 활용
 */
public class PostDto {

    // 게시글 작성 요청
    public record CreateRequest(
            @NotBlank(message = "제목은 필수입니다")
            @Size(max = 200, message = "제목은 200자 이내여야 합니다")
            String title,

            @NotBlank(message = "내용은 필수입니다")
            String content,

            @NotBlank(message = "게시판을 선택해주세요")
            String board,

            boolean anonymous,
            Long userId
    ) {}

    // 게시글 수정 요청
    public record UpdateRequest(
            @NotBlank(message = "제목은 필수입니다")
            String title,

            @NotBlank(message = "내용은 필수입니다")
            String content
    ) {}

    // 게시글 목록 응답 (간략 정보)
    public record ListResponse(
            Long id,
            String title,
            String content,
            String author,
            String board,
            int viewCount,
            int likeCount,
            LocalDateTime createdAt
    ) {
        public static ListResponse from(Post post) {
            String displayAuthor = post.isAnonymous() ? "익명" : post.getAuthor().getNickname();
            return new ListResponse(
                    post.getId(),
                    post.getTitle(),
                    post.getContent().length() > 100
                            ? post.getContent().substring(0, 100) + "..."
                            : post.getContent(),
                    displayAuthor,
                    post.getBoard(),
                    post.getViewCount(),
                    post.getLikeCount(),
                    post.getCreatedAt()
            );
        }
    }

    // 게시글 상세 응답
    public record DetailResponse(
            Long id,
            String title,
            String content,
            String author,
            Long authorId,
            String board,
            boolean anonymous,
            int viewCount,
            int likeCount,
            LocalDateTime createdAt
    ) {
        public static DetailResponse from(Post post) {
            String displayAuthor = post.isAnonymous() ? "익명" : post.getAuthor().getNickname();
            return new DetailResponse(
                    post.getId(),
                    post.getTitle(),
                    post.getContent(),
                    displayAuthor,
                    post.getAuthor().getId(),
                    post.getBoard(),
                    post.isAnonymous(),
                    post.getViewCount(),
                    post.getLikeCount(),
                    post.getCreatedAt()
            );
        }
    }
}
