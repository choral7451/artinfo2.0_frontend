import * as S from "./Recruit.styles";
import PcBoardNav from "../../commons/utils/boards/boardNav/PcBoardNav";
import BoardBody from "../../commons/utils/boards/boardBody/BoardBody";

export default function RecruitPresenter() {
  return (
    <S.Wrapper>
      <S.Title>채용</S.Title>
      <PcBoardNav nav={["전체", "예술단체", "종교", "기타"]} />
      <BoardBody />
    </S.Wrapper>
  );
}
