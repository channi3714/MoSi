/**
 * Banner 컴포넌트
 * 에브리타임 중앙 상단의 광고 배너 영역
 * 실제로는 이미지 슬라이더가 들어가지만, 현재는 플레이스홀더
 */

export default function Banner() {
  return (
    <div className="bg-white rounded-lg overflow-hidden mb-3">
      {/* 배너 이미지 영역 - 에브리타임의 광고 배너와 유사한 비율 */}
      <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 h-[120px] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-lg font-bold text-text-primary mb-1">
            MoSi 설맞이 할인전
          </p>
          <p className="text-xs text-text-secondary">
            좋은느낌, 크리넥스, 스카트
          </p>
        </div>
      </div>
    </div>
  );
}
