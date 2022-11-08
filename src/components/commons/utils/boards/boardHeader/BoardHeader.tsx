import React from "react";
import styled from "@emotion/styled";
import theme from "../../../../../../styles/theme";
import { v4 as uuidv4 } from "uuid";
import { IBoardHeader } from "./BoardHeader.types";
import { IBoardColumn } from "../Board.types";

function HeaderColumn(props: IBoardColumn) {
  const { width, text, mobileDisplay } = props;

  const Column = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width?.pc};
    padding: 40px 0;
    font-weight: bold;
    font-size: 18px;
    @media (max-width: 575.98px) {
      width: ${width?.mobile};
      text-align: center;
      display: ${mobileDisplay};
    }
  `;

  return <Column>{text}</Column>;
}

function BoardHeader(props: IBoardHeader) {
  const { columnSetting } = props;
  const headerResult = columnSetting?.settingValue?.map((el) => {
    return (
      <HeaderColumn
        key={uuidv4()}
        width={el.width}
        text={el.text}
        mobileDisplay={el.mobileDisplay}
      />
    );
  });

  const Header = styled.div`
    width: 100%;
    display: ${columnSetting?.columnTitleDisplay
      ? columnSetting.columnTitleDisplay
      : "flex"};
    border-top: 2px solid ${theme.colors.primary};
    border-bottom: 2px solid ${theme.colors.primary};
  `;

  return <Header>{headerResult}</Header>;
}

export default BoardHeader;
