import React from "react";
import * as S from "../recruit/Recruit.styles";
import BoardNav from "../../commons/utils/boards/boardNav/BoardNav";
import BoardBody from "../../commons/utils/boards/boardBody/BoardBody";
import { recruitBodyData, recruitHeaderData } from "../share/Share.setting";
import ButtonComponent from "../../commons/utils/buttons";
import theme from "../../../../styles/theme";

function EducationPresenter() {
  return (
    <S.Wrapper>
      <S.Title>교육</S.Title>
      <BoardNav nav={["전체", "이슈", "후기", "자유게시판"]} />
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

export default EducationPresenter;
