package com.mosi.domain.user;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * User 엔티티 - 회원 정보를 담는 테이블
 *
 * JPA 어노테이션 설명:
 * - @Entity: 이 클래스가 DB 테이블과 매핑됨을 선언
 * - @Id + @GeneratedValue: 자동 증가하는 기본키(PK)
 * - @Column: 컬럼의 제약조건 설정 (unique, nullable 등)
 */
@Entity
@Table(name = "users") // "user"는 MySQL 예약어이므로 "users"로 지정
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED) // JPA는 기본 생성자 필수
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true, length = 20)
    private String nickname;

    @Column(nullable = false, length = 50)
    private String university;

    @Column(updatable = false)
    private LocalDateTime createdAt;

    @PrePersist // 엔티티가 처음 저장될 때 자동으로 현재 시간 세팅
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    @Builder
    public User(String email, String password, String nickname, String university) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.university = university;
    }
}
