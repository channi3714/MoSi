/**
 * BookCard 컴포넌트
 * 에브리타임 하단의 도서 추천 카드 (가로 스크롤 리스트)
 * 각 카드에는 책 표지 플레이스홀더 + 제목 + 가격 표시
 */

// Mock 도서 데이터
const MOCK_BOOKS = [
  { id: 1, title: "세계종교 둘러보기", price: "12,000원", color: "bg-amber-100" },
  { id: 2, title: "학문 목적 한국어 말하기", price: "15,000원", color: "bg-emerald-100" },
  { id: 3, title: "원가관리회계", price: "10,000원", color: "bg-sky-100" },
  { id: 4, title: "K-IFRS 회계원리", price: "17,000원", color: "bg-rose-100" },
];

export default function BookCard() {
  return (
    <div className="mt-4">
      {/* 도서 카드 가로 스크롤 리스트 */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {MOCK_BOOKS.map((book) => (
          <div
            key={book.id}
            className="flex-shrink-0 w-[140px] cursor-pointer group"
          >
            {/* 책 표지 플레이스홀더 */}
            <div
              className={`${book.color} rounded-lg h-[180px] flex items-center justify-center
                          group-hover:shadow-md transition-shadow`}
            >
              <span className="text-xs text-text-muted text-center px-2">
                {book.title}
              </span>
            </div>
            {/* 가격 */}
            <p className="text-xs text-primary font-semibold mt-2">
              {book.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
