/**
 * 게시판 목록 & 게시글 상세 페이지용 Mock 데이터
 */

import { PostDetail, PostFull, Comment } from "@/types/board";

// ===== 자유게시판 게시글 목록 (게시판 페이지) =====
export const mockFreeBoardPosts: PostDetail[] = [
  {
    id: 1,
    title: "앵무새",
    content: "귀여워",
    author: "익명",
    createdAt: "14분 전",
    likes: 0,
    comments: 0,
    imageUrl: "/placeholder-bird.png",
  },
  {
    id: 2,
    title: "메디컬생들은 고딩과외 시급 얼마나 함?",
    content: "",
    author: "익명",
    createdAt: "22분 전",
    likes: 0,
    comments: 2,
  },
  {
    id: 3,
    title: "부동산 50빠지면 난 정상화라 생각하는데 왜 진짜 50하락하면 다들 나라 망한다 하는거임",
    content: "잔재를 좀 물라서 그러는데 왜 망함? 오히려 빠지니까 살기에는 좋아지는거 아님?",
    author: "익명",
    createdAt: "33분 전",
    likes: 0,
    comments: 0,
  },
  {
    id: 4,
    title: "먼저선톡 -> 1분만에 답장 -> 안읽씹",
    content: "ㅅㅂ 심리가 뭐냐",
    author: "익명",
    createdAt: "36분 전",
    likes: 0,
    comments: 5,
  },
  {
    id: 5,
    title: "아 국장 갑자기 갈등 생기네",
    content: "사실 나는 작년 12월 그 사건 있은 후보더 목적한 후 매도 그리고 시금까지 홀딩인데 이제 너무 올라서 팔까 말까...",
    author: "익명",
    createdAt: "55분 전",
    likes: 0,
    comments: 0,
  },
  {
    id: 6,
    title: "동문회 결과 발표 언제 나지?",
    content: "지변학기보다 더 느리네",
    author: "익명",
    createdAt: "18:22",
    likes: 1,
    comments: 0,
  },
  {
    id: 7,
    title: "컴공 3학년 1학기",
    content: "시간표 다들 어째들음?? 캡스톤 들으시나요?? 캡아기 다비 서로 기머리 네트워크 들으면 시간이 안밀기 같은데 필수연거요??",
    author: "익명",
    createdAt: "18:01",
    likes: 0,
    comments: 2,
  },
  {
    id: 8,
    title: "영어강의 질문",
    content: "전공 영어강이가 본면 전공 아니여도 되는거임?",
    author: "익명",
    createdAt: "18:01",
    likes: 0,
    comments: 4,
  },
  {
    id: 9,
    title: "장학금이",
    content: "좋았네.",
    author: "익명",
    createdAt: "17:46",
    likes: 0,
    comments: 0,
  },
  {
    id: 10,
    title: "등록금인상지원장학금 이제 없어진거임?",
    content: "??",
    author: "익명",
    createdAt: "17:42",
    likes: 0,
    comments: 0,
  },
  {
    id: 11,
    title: "허스 메일",
    content: "답 은 사람 없지?",
    author: "익명",
    createdAt: "17:41",
    likes: 0,
    comments: 0,
  },
  {
    id: 12,
    title: "ㅈㄴ 힘든게 사실 정상임",
    content: "즐거우면 뭔가 잘못되어가고 있단거임",
    author: "익명",
    createdAt: "17:31",
    likes: 0,
    comments: 0,
  },
  {
    id: 13,
    title: "기전실 젓주",
    content: "안녕하세요 급하게 여쭤게 있어서 ㅠㅠ 혹시 젓주 기초전자공학심험...",
    author: "익명",
    createdAt: "17:13",
    likes: 0,
    comments: 5,
  },
  {
    id: 14,
    title: "등록금고지서",
    content: "나중",
    author: "익명",
    createdAt: "17:06",
    likes: 4,
    comments: 1,
  },
  {
    id: 15,
    title: "중1 수학 과외",
    content: "시급 25면 적당?",
    author: "익명",
    createdAt: "16:46",
    likes: 0,
    comments: 1,
  },
];

// ===== 게시글 상세 (게시글 상세 페이지) =====
export const mockPostFull: PostFull = {
  id: 8,
  title: "개설교과목 정보에 나오는 학석사연계과목은 일반 학부생은 못듣는 과목인가요?",
  content:
    "2학기에 들어보고 싶은 과목이 있는데, 타과 학부생이면 못듣는건지 궁금합니!",
  author: "익명",
  createdAt: "02/13 16:38",
  likes: 0,
  comments: 4,
  scraps: 0,
};

// ===== 댓글 목록 (게시글 상세 페이지) =====
export const mockComments: Comment[] = [
  {
    id: 1,
    content: "그냥 신청되고 전공학점으로 인정되지 않나?",
    author: "익명1",
    isAuthor: false,
    createdAt: "02/13 16:40",
    likes: 0,
    replies: [
      {
        id: 2,
        content: "알려주셔서 감사합니다!!",
        author: "익명(글쓴이)",
        isAuthor: true,
        createdAt: "02/13 16:57",
        likes: 0,
      },
    ],
  },
  {
    id: 3,
    content: "특별히 전공제한 있는거 아니면 다 들을 수 있음 학부수업처럼",
    author: "익명2",
    isAuthor: false,
    createdAt: "02/13 16:44",
    likes: 0,
    replies: [
      {
        id: 4,
        content: "알려주셔서 감사합니다!!",
        author: "익명(글쓴이)",
        isAuthor: true,
        createdAt: "02/13 16:57",
        likes: 0,
      },
    ],
  },
];

// ===== 게시판 상단 태그 =====
export const mockBoardTags = [
  "혹시 학구 확인되나요?",
  "컴공 3학년 1학기",
  "자연과학대학 사불참 새로 신청해야 하...",
  "일반휴학 취소해야함?",
];
