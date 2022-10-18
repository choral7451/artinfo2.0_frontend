import BoardNav from "../../commons/utils/boards/boardNav";
import * as S from "./Recruit.styles";

export default function RecruitPresenter() {
  return (
    <S.Wrapper>
      <BoardNav nav={["예술단체", "종교", "기타"]} />
    </S.Wrapper>
  );
}
