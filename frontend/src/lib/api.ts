/**
 * API 클라이언트 모듈
 *
 * 백엔드 API 호출을 위한 유틸리티 함수들
 * 모든 API 호출은 이 파일을 통해 이루어짐
 *
 * 사용법:
 *   import { postApi } from "@/lib/api";
 *   const posts = await postApi.getList("free", 0);
 */

// 백엔드 API 기본 주소 (환경변수 또는 기본값)
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

// 공통 fetch 래퍼 (에러 처리 포함)
async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: "요청에 실패했습니다" }));
    throw new Error(error.error || `HTTP ${res.status}`);
  }

  // 204 No Content (DELETE 등)
  if (res.status === 204) return null as T;

  return res.json();
}

// ===== User API =====
export const userApi = {
  signup: (data: { email: string; password: string; nickname: string; university: string }) =>
    request("/api/users/signup", { method: "POST", body: JSON.stringify(data) }),

  login: (data: { email: string; password: string }) =>
    request("/api/users/login", { method: "POST", body: JSON.stringify(data) }),
};

// ===== Post API =====
export const postApi = {
  create: (data: {
    title: string;
    content: string;
    board: string;
    anonymous: boolean;
    userId: number;
  }) => request("/api/posts", { method: "POST", body: JSON.stringify(data) }),

  getList: (board?: string, page = 0, size = 20) => {
    const params = new URLSearchParams({ page: String(page), size: String(size) });
    if (board) params.set("board", board);
    return request(`/api/posts?${params}`);
  },

  getDetail: (id: number) => request(`/api/posts/${id}`),

  update: (id: number, data: { title: string; content: string }) =>
    request(`/api/posts/${id}`, { method: "PUT", body: JSON.stringify(data) }),

  delete: (id: number) =>
    request(`/api/posts/${id}`, { method: "DELETE" }),
};

// ===== Comment API =====
export const commentApi = {
  create: (
    postId: number,
    data: { content: string; anonymous: boolean; userId: number; parentId?: number }
  ) =>
    request(`/api/posts/${postId}/comments`, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getList: (postId: number) => request(`/api/posts/${postId}/comments`),

  delete: (id: number) =>
    request(`/api/comments/${id}`, { method: "DELETE" }),
};
