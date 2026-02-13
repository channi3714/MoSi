package com.mosi.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * UserRepository - User 엔티티의 DB 접근을 담당
 *
 * JpaRepository<User, Long>을 상속하면
 * save(), findById(), findAll(), delete() 등 기본 CRUD 메서드가 자동 생성됨
 *
 * 커스텀 메서드: 메서드 이름 규칙만 지키면 JPA가 자동으로 쿼리를 만들어줌
 * - findByEmail → SELECT * FROM users WHERE email = ?
 */
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByNickname(String nickname);
}
