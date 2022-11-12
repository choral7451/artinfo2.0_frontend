import React from "react";
import * as S from "../recruit/Recruit.styles";
import BoardNav from "../../commons/utils/boards/boardNav/BoardNav";
import Board from "../../commons/utils/boards/Board";
import ButtonComponent from "../../commons/utils/buttons/Button";
import theme from "../../../../styles/theme";
import { educationBodyData, educationHeaderData } from "./Education.setting";
import Search from "../../commons/utils/search/Search";
import Select from "../../commons/utils/select/Select";

function EducationPresenter() {
  return (
    <S.Wrapper>
      <S.Title>교육</S.Title>
      <BoardNav nav={["전체", "이슈", "후기", "자유게시판"]} />
      <S.BoardToolWapper>
        <Search />
        <S.BoardMobileNavAndWriterWapper>
          <Select
            elementArr={["전체", "이슈", "후기", "자유게시판"]}
            elementAll={false}
            display={{ pc: "none", mobile: "initial" }}
          />
          <ButtonComponent
            text={"글쓰기"}
            width={{ from: "100px" }}
            padding={{ up: "0", right: "0", down: "0", left: "0" }}
            color={{ from: "white", to: "black" }}
            fontSize={"14px"}
            backgourndColor={{ from: theme.colors.primary, to: "white" }}
            height={"100%"}
            push={"/education/write"}
          />
        </S.BoardMobileNavAndWriterWapper>
      </S.BoardToolWapper>
      <Board columnSetting={educationHeaderData} bodyData={educationBodyData} />
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
