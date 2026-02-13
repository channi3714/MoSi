/**
 * BoardGrid 컴포넌트
 * 에브리타임 메인 페이지의 게시판 2열 그리드
 *
 * 구조 (2열 그리드):
 * ┌──────────────┬──────────────┐
 * │ 자유게시판     │ 비밀게시판     │
 * ├──────────────┼──────────────┤
 * │ 졸업생게시판   │ 새내기게시판   │
 * ├──────────────┼──────────────┤
 * │ 시사·이슈     │ 장터게시판     │
 * ├──────────────┼──────────────┤
 * │ 정보게시판     │ 이벤트게시판   │
 * ├──────────────┼──────────────┤
 * │ 취업·진로     │ 교직이수      │
 * └──────────────┴──────────────┘
 *
 * mockBoardSections에서 데이터를 가져와 BoardSection으로 렌더링
 */

import { mockBoardSections } from "@/mocks/boards";
import BoardSection from "./BoardSection";

export default function BoardGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {mockBoardSections.map((section) => (
        <BoardSection
          key={section.id}
          name={section.name}
          posts={section.posts}
        />
      ))}
    </div>
  );
}
