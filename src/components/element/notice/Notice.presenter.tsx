import React from "react";
import * as S from "../recruit/Recruit.styles";
import Board from "../../commons/utils/boards/Board";
import { noticeBodyData, noticeHeaderData } from "./Notice.setting";
import ButtonComponent from "../../commons/utils/buttons/Button";
import theme from "../../../../styles/theme";

function NoticePresenter() {
  return (
    <S.Wrapper>
      <S.Title>공지</S.Title>
      <Board columnSetting={noticeHeaderData} bodyData={noticeBodyData} />
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

export default NoticePresenter;
