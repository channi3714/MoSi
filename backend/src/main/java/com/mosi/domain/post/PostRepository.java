package com.mosi.domain.post;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * PostRepository - 게시글 DB 접근
 *
 * Page<Post>: 페이지네이션이 적용된 결과 (전체 개수, 페이지 번호 등 포함)
 * Pageable: 페이지 번호, 페이지 크기, 정렬 조건을 담는 객체
 */
public interface PostRepository extends JpaRepository<Post, Long> {

    // 게시판별 게시글 목록 (최신순, 페이지네이션)
    Page<Post> findByBoardOrderByCreatedAtDesc(String board, Pageable pageable);

    // 전체 게시글 목록 (최신순, 페이지네이션)
    Page<Post> findAllByOrderByCreatedAtDesc(Pageable pageable);
}
