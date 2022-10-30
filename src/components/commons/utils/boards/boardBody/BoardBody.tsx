import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import Search from "../../search/Search";
import theme from "../../../../../../styles/theme";
import Select from "../../select/Select";
import ButtonComponent from "../../buttons";

interface IHeaderColumn {
  width: { mobile?: string; pc: string };
  mobileDisplay?: string;
  text: string;
  display?: string;
}
interface IBodyColumn {
  bodyData: string[][];
  headerData: {
    width: { mobile?: string; pc: string };
    text: string;
    mobileDisplay?: string;
  }[];
}

const BoardUntilWrapperForMobile = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media (max-width: 575.98px) {
    margin-top: 50px;
    margin-bottom: 10px;
    justify-content: space-around;
  }
`;

function HeaderColumn(props: IHeaderColumn) {
  const { width, text, mobileDisplay } = props;

  const HeaderColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width.pc};
    padding: 40px 0;
    font-weight: bold;
    font-size: 18px;
    @media (max-width: 575.98px) {
      width: ${width.mobile};
      text-align: center;
      display: ${mobileDisplay};
    }
  `;

  return <HeaderColumn>{text}</HeaderColumn>;
}

function BodyColumn(props: IHeaderColumn) {
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

function Body(props: IBodyColumn) {
  const { headerData, bodyData } = props;
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
          width={headerData[idx]?.width}
          mobileDisplay={headerData[idx]?.mobileDisplay}
          text={el}
        />
      );
    });

    return <Row key={uuidv4()}>{row}</Row>;
  });
  return <BodyWrapper>{bodyElement}</BodyWrapper>;
}

interface IBoardBody {
  headerData?: IHeaderColumn;
  bodyData?: IBodyColumn;
  dropdown?: string[];
}

function BoardBody(props: any) {
  const width = "70%";
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props.width ? props.width : width};
    @media (max-width: 575.98px) {
      width: 100%;
    }
  `;

  const Header = styled.div`
    width: 100%;
    display: ${props.headerDisplay ? props.headerDisplay : "flex"};
    border-top: 2px solid ${theme.colors.primary};
    border-bottom: 2px solid ${theme.colors.primary};
  `;

  const headerElement = props.headerData?.map((el: IHeaderColumn) => {
    return (
      <HeaderColumn
        key={uuidv4()}
        text={el.text}
        width={el.width}
        mobileDisplay={el.mobileDisplay}
      />
    );
  });

  const BoardUntilWrapper = styled.div`
    display: ${props.boardUtil ? props.boardUtil : "flex"};
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    @media (max-width: 575.98px) {
      flex-direction: column;
    }
  `;

  return (
    <Wrapper>
      <BoardUntilWrapper>
        <Search display={props.search} />
        <BoardUntilWrapperForMobile>
          <Select elementArr={["전체", "예술단체", "종교", "기타"]} />
          <ButtonComponent
            text={"글쓰기"}
            width={{ from: "100px" }}
            padding={{ up: "0", right: "0", down: "0", left: "0" }}
            color={{ from: "white", to: "black" }}
            fontSize={"14px"}
            backgourndColor={{ from: theme.colors.primary, to: "white" }}
            height={"100%"}
            display={props.write}
          />
        </BoardUntilWrapperForMobile>
      </BoardUntilWrapper>
      <Header>{headerElement}</Header>
      <Body headerData={props.headerData} bodyData={props.bodyData} />
    </Wrapper>
  );
}

export default BoardBody;
