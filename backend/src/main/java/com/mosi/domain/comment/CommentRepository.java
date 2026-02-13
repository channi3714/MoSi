package com.mosi.domain.comment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * CommentRepository - 댓글 DB 접근
 */
public interface CommentRepository extends JpaRepository<Comment, Long> {

    // 특정 게시글의 최상위 댓글만 조회 (parent가 null인 것 = 대댓글이 아닌 것)
    List<Comment> findByPostIdAndParentIsNullOrderByCreatedAtAsc(Long postId);

    // 특정 부모 댓글의 대댓글 조회
    List<Comment> findByParentIdOrderByCreatedAtAsc(Long parentId);

    // 특정 게시글의 댓글 수
    long countByPostId(Long postId);
}
