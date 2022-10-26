import * as S from "./Recruit.styles";
import BoardNav from "../../commons/utils/boards/boardNav/BoardNav";
import { recruitBodyData, recruitHeaderData } from "./Recruit.setting";
import BoardBody from "../../commons/utils/boards/boardBody/BoardBody";
import ButtonComponent from "../../commons/utils/buttons";
import theme from "../../../../styles/theme";

export default function RecruitPresenter() {
  return (
    <S.Wrapper>
      <S.Title>채용</S.Title>
      <BoardNav nav={["전체", "예술단체", "종교", "기타"]} />
      <BoardBody
        headerData={recruitHeaderData}
        bodyData={recruitBodyData}
        search={"flex"}
      />
      <ButtonComponent
        text={"더보기"}
        color={{ from: "white", to: "black" }}
        backgourndColor={{ from: theme.colors.primary, to: "white" }}
        padding={{ up: "10px", down: "10px" }}
        margin={{ up: "50px" }}
        width={{ from: "70%", to: "100%" }}
      />
    </S.Wrapper>
  );
}
