package com.mosi.domain.comment;

import com.mosi.domain.post.Post;
import com.mosi.domain.user.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * Comment 엔티티 - 댓글 정보
 *
 * 자기참조(Self-referencing) 관계:
 * - parent: 이 댓글의 부모 댓글 (대댓글일 경우)
 * - null이면 최상위 댓글, 값이 있으면 대댓글
 */
@Entity
@Table(name = "comments")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(nullable = false)
    private boolean anonymous;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User author;

    // 대댓글 구현: 부모 댓글을 참조 (null이면 최상위 댓글)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private Comment parent;

    @Column(updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    @Builder
    public Comment(String content, boolean anonymous, Post post, User author, Comment parent) {
        this.content = content;
        this.anonymous = anonymous;
        this.post = post;
        this.author = author;
        this.parent = parent;
    }
}
