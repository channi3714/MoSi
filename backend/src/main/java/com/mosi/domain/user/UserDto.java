package com.mosi.domain.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * User 관련 DTO (Data Transfer Object)
 *
 * Java 21의 Record 클래스 활용:
 * - record는 불변(immutable) 데이터 객체를 간결하게 만드는 Java 16+ 기능
 * - 생성자, getter, equals, hashCode, toString이 자동 생성됨
 * - DTO처럼 데이터만 담아서 전달하는 용도에 적합
 */
public class UserDto {

    // 회원가입 요청 DTO
    public record SignupRequest(
            @NotBlank(message = "이메일은 필수입니다")
            @Email(message = "올바른 이메일 형식이 아닙니다")
            String email,

            @NotBlank(message = "비밀번호는 필수입니다")
            @Size(min = 6, message = "비밀번호는 6자 이상이어야 합니다")
            String password,

            @NotBlank(message = "닉네임은 필수입니다")
            @Size(min = 2, max = 20, message = "닉네임은 2~20자여야 합니다")
            String nickname,

            @NotBlank(message = "대학교명은 필수입니다")
            String university
    ) {}

    // 로그인 요청 DTO
    public record LoginRequest(
            @NotBlank(message = "이메일은 필수입니다")
            String email,

            @NotBlank(message = "비밀번호는 필수입니다")
            String password
    ) {}

    // 유저 응답 DTO (비밀번호 제외)
    public record UserResponse(
            Long id,
            String email,
            String nickname,
            String university
    ) {
        // User 엔티티 → UserResponse DTO 변환 팩토리 메서드
        public static UserResponse from(User user) {
            return new UserResponse(
                    user.getId(),
                    user.getEmail(),
                    user.getNickname(),
                    user.getUniversity()
            );
        }
    }
}
