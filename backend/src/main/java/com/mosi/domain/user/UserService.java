package com.mosi.domain.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * UserService - 회원 관련 비즈니스 로직
 *
 * @Service: Spring이 이 클래스를 서비스 빈으로 등록
 * @Transactional: 메서드 실행을 하나의 트랜잭션으로 묶음 (실패 시 롤백)
 * @RequiredArgsConstructor: final 필드에 대한 생성자를 Lombok이 자동 생성 (DI용)
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true) // 기본적으로 읽기 전용 (성능 최적화)
public class UserService {

    private final UserRepository userRepository;

    // 회원가입
    @Transactional // 쓰기 작업이므로 readOnly = false
    public UserDto.UserResponse signup(UserDto.SignupRequest request) {
        // 이메일 중복 검사
        if (userRepository.existsByEmail(request.email())) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다");
        }

        // 닉네임 중복 검사
        if (userRepository.existsByNickname(request.nickname())) {
            throw new IllegalArgumentException("이미 사용 중인 닉네임입니다");
        }

        // User 엔티티 생성 (Builder 패턴)
        User user = User.builder()
                .email(request.email())
                .password(request.password()) // TODO: 실제 서비스에서는 BCrypt 암호화 필요
                .nickname(request.nickname())
                .university(request.university())
                .build();

        User savedUser = userRepository.save(user);
        return UserDto.UserResponse.from(savedUser);
    }

    // 로그인 (간단한 이메일+비밀번호 확인)
    public UserDto.UserResponse login(UserDto.LoginRequest request) {
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 이메일입니다"));

        // TODO: 실제 서비스에서는 BCrypt 매칭 필요
        if (!user.getPassword().equals(request.password())) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다");
        }

        return UserDto.UserResponse.from(user);
    }

    // ID로 유저 조회 (내부 사용)
    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사용자입니다"));
    }
}
