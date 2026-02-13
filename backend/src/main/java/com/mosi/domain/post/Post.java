package com.mosi.domain.post;

import com.mosi.domain.user.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * Post 엔티티 - 게시글 정보
 *
 * @ManyToOne: Post → User 다대일 관계 (여러 게시글이 한 유저에 속함)
 * FetchType.LAZY: 게시글 조회 시 User를 바로 가져오지 않고, 필요할 때 조회 (성능 최적화)
 */
@Entity
@Table(name = "posts")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT") // 긴 본문을 위해 TEXT 타입
    private String content;

    @Column(nullable = false, length = 30)
    private String board; // 게시판 이름 (free, secret, freshmen 등)

    @Column(nullable = false)
    private boolean anonymous; // 익명 여부

    @Column(nullable = false)
    private int viewCount;

    @Column(nullable = false)
    private int likeCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User author;

    @Column(updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    @Builder
    public Post(String title, String content, String board, boolean anonymous, User author) {
        this.title = title;
        this.content = content;
        this.board = board;
        this.anonymous = anonymous;
        this.author = author;
        this.viewCount = 0;
        this.likeCount = 0;
    }

    // 게시글 수정 메서드
    public void update(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public void increaseViewCount() {
        this.viewCount++;
    }
}
