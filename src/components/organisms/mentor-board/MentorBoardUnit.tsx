interface SlideType {
  slide: () => void;
}

const MentorBoardUnit = ({ slide }: SlideType) => {
  return (
    <div style={{ width: 1100 }}>
      <div onClick={slide}>이전</div>
      <div>멘토게시글에 대한 슬라이드</div>
    </div>
  );
};

export default MentorBoardUnit;
