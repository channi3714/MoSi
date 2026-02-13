package com.mosi.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * CORS 설정
 * 프론트엔드(localhost:3000)에서 백엔드(localhost:8080) API를 호출할 수 있도록 허용
 *
 * CORS란? Cross-Origin Resource Sharing
 * - 브라우저는 보안상 다른 도메인(포트 포함)으로의 요청을 기본 차단함
 * - 백엔드에서 "이 출처(origin)에서 오는 요청은 허용한다"고 명시해야 함
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")           // /api/로 시작하는 모든 경로
                .allowedOrigins("http://localhost:3000", "http://localhost:3001") // 프론트엔드 주소
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
