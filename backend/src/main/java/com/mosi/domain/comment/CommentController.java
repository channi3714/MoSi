package com.mosi.domain.comment;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * CommentController - 댓글 REST API
 *
 * API 목록:
 * POST   /api/posts/{postId}/comments  → 댓글 작성
 * GET    /api/posts/{postId}/comments  → 댓글 목록
 * DELETE /api/comments/{id}            → 댓글 삭제
 */
@RestController
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/api/posts/{postId}/comments")
    public ResponseEntity<CommentDto.CommentResponse> create(
            @PathVariable Long postId,
            @Valid @RequestBody CommentDto.CreateRequest request
    ) {
        CommentDto.CommentResponse response = commentService.create(postId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/api/posts/{postId}/comments")
    public ResponseEntity<List<CommentDto.CommentResponse>> getComments(
            @PathVariable Long postId
    ) {
        List<CommentDto.CommentResponse> response = commentService.getComments(postId);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/api/comments/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        commentService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
