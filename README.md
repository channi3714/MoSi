# MoSi (모든 시간)

한국 내 유학생들을 위한 대학생 커뮤니티 서비스

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS |
| Backend | Java 21, Spring Boot 3.x, Spring Data JPA |
| Database | MySQL |
| DevOps | Docker, Docker Compose |

## Project Structure

```
MoSi/
├── frontend/    # Next.js 프론트엔드
├── backend/     # Spring Boot 백엔드
└── docker-compose.yml
```

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
# http://localhost:3000
```

### Backend
```bash
cd backend
./gradlew bootRun
# http://localhost:8080
```

### Docker (전체 실행)
```bash
docker compose up
```
