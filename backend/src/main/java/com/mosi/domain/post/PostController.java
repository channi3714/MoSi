package com.mosi.domain.post;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * PostController - 게시글 CRUD REST API
 *
 * API 목록:
 * POST   /api/posts         → 게시글 작성
 * GET    /api/posts          → 게시글 목록 (board, page, size 파라미터)
 * GET    /api/posts/{id}     → 게시글 상세
 * PUT    /api/posts/{id}     → 게시글 수정
 * DELETE /api/posts/{id}     → 게시글 삭제
 */
@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping
    public ResponseEntity<PostDto.DetailResponse> create(
            @Valid @RequestBody PostDto.CreateRequest request
    ) {
        PostDto.DetailResponse response = postService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<Page<PostDto.ListResponse>> getList(
            @RequestParam(required = false) String board,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        Page<PostDto.ListResponse> response = postService.getList(board, page, size);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDto.DetailResponse> getDetail(@PathVariable Long id) {
        PostDto.DetailResponse response = postService.getDetail(id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PostDto.DetailResponse> update(
            @PathVariable Long id,
            @Valid @RequestBody PostDto.UpdateRequest request
    ) {
        PostDto.DetailResponse response = postService.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
