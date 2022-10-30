import React from "react";
import * as S from "./Concert.styles";
import BoardNav from "../../commons/utils/boards/boardNav/BoardNav";
import ButtonComponent from "../../commons/utils/buttons";
import theme from "../../../../styles/theme";
import Poster from "../../commons/utils/cards/poster/Poster";

function ConcertPresenter() {
  return (
    <S.Wrapper>
      <S.Title>공연</S.Title>
      <BoardNav
        nav={["전체", "오케스트라", "합창", "앙상블", "솔로", "기타"]}
      />

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
