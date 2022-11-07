import styled from "@emotion/styled";
import BoardHeader from "./boardHeader/BoardHeader";
import { IBoard } from "./Board.types";
import { BoardBody } from "./boardBody/BoardBody";

function Board(props: IBoard) {
  const { columnSetting, bodyData, boadrStyle } = props;
  const width = "70%";
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${boadrStyle?.width ? boadrStyle?.width : width};
    @media (max-width: 575.98px) {
      width: 100%;
    }
  `;

  return (
    <Wrapper>
      <BoardHeader columnSetting={columnSetting} />
      <BoardBody columnSetting={columnSetting} bodyData={bodyData} />
    </Wrapper>
  );
}

export default Board;
