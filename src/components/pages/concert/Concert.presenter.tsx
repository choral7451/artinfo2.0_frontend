import React from "react";
import * as S from "./Concert.styles";
import BoardNav from "../../commons/utils/boards/boardNav/BoardNav";
import ButtonComponent from "../../commons/utils/buttons/Button";
import theme from "../../../../styles/theme";
import Poster from "../../commons/utils/cards/poster/Poster";
import Search from "../../commons/utils/search/Search";
import Select from "../../commons/utils/select/Select";

function ConcertPresenter() {
  return (
    <S.Wrapper>
      <S.Title>공연</S.Title>
      <BoardNav
        nav={["전체", "오케스트라", "합창", "앙상블", "솔로", "기타"]}
      />
      <S.BoardToolWapper>
        <Search />
        <S.BoardMobileNavAndWriterWapper>
          <Select
            elementArr={[
              "전체",
              "오케스트라",
              "합창",
              "앙상블",
              "솔로",
              "기타",
            ]}
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
            onPush={"/concert/write"}
          />
        </S.BoardMobileNavAndWriterWapper>
      </S.BoardToolWapper>
      <S.ConcertWrapper>
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
      </S.ConcertWrapper>
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

export default ConcertPresenter;
