package com.mosi.domain.user;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * UserController - 회원 관련 REST API 엔드포인트
 *
 * @RestController: JSON 응답을 자동으로 반환 (@Controller + @ResponseBody)
 * @RequestMapping: 이 컨트롤러의 모든 API 경로 앞에 /api/users가 붙음
 * @Valid: DTO의 유효성 검증 어노테이션(@NotBlank 등)을 실행
 */
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // POST /api/users/signup - 회원가입
    @PostMapping("/signup")
    public ResponseEntity<UserDto.UserResponse> signup(
            @Valid @RequestBody UserDto.SignupRequest request
    ) {
        UserDto.UserResponse response = userService.signup(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // POST /api/users/login - 로그인
    @PostMapping("/login")
    public ResponseEntity<UserDto.UserResponse> login(
            @Valid @RequestBody UserDto.LoginRequest request
    ) {
        UserDto.UserResponse response = userService.login(request);
        return ResponseEntity.ok(response);
    }
}
