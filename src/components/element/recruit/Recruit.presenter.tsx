import * as S from "./Recruit.styles";
import BoardNav from "../../commons/utils/boards/boardNav/BoardNav";
import BoardBody from "../../commons/utils/boards/boardBody/BoardBody";

export default function RecruitPresenter() {
  return (
    <S.Wrapper>
      <S.Title>채용</S.Title>
      <BoardNav nav={["전체", "예술단체", "종교", "기타"]} />
      <BoardBody />
    </S.Wrapper>
  );
}
