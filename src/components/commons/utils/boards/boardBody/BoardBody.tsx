import { IBoardBody, IBoardColumn } from "../Board.types";
import styled from "@emotion/styled";
import theme from "../../../../../../styles/theme";
import { v4 as uuidv4 } from "uuid";

function BodyColumn(props: IBoardColumn) {
  const { width, text, mobileDisplay } = props;
  const Column = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width?.pc};
    padding: 10px 20px;
    font-size: ${theme.fontSize(16)};
    @media (max-width: 575.98px) {
      width: ${width?.mobile};
      text-align: center;
      display: ${mobileDisplay};
      font-size: ${theme.fontSize(12)};
    }
  `;

  return <Column>{text}</Column>;
}

export function BoardBody(props: IBoardBody) {
  const { columnSetting, bodyData } = props;
  const { settingValue } = columnSetting;

  const Row = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid ${theme.colors.primary};
  `;

  const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
  `;

  const bodyElement = bodyData?.map((el) => {
    const row = el?.map((el, idx) => {
      return (
        <BodyColumn
          key={uuidv4()}
          width={settingValue ? settingValue[idx].width : undefined}
          mobileDisplay={
            settingValue ? settingValue[idx].mobileDisplay : undefined
          }
          text={el}
        />
      );
    });

    return <Row key={uuidv4()}>{row}</Row>;
  });
  return <BodyWrapper>{bodyElement}</BodyWrapper>;
}
