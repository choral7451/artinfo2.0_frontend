import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import Search from "../../search/Search";
import theme from "../../../../../../styles/theme";
import MobileBoardNav from "../boardNav/MobileBoardNav";
import ButtonComponent from "../../buttons";

interface IBoardBody {}
interface IHeaderColumn {
  width: { mobile?: string; pc: string };
  mobileDisplay: string;
  text: string;
}
interface IBodyColumn {
  bodyData: string[][];
  headerData: {
    width: { mobile?: string; pc: string };
    text: string;
    mobileDisplay?: string;
  }[];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

const AddMoreBtn = styled.div`
  background-color: ${theme.colors.primary};
  cursor: pointer;
  padding: 10px 0;
  margin-top: 50px;
  text-align: center;
  font-size: 18px;
  border-radius: 5px;
  color: white;
  width: 100%;
  font-weight: bold;
`;

const BoardUntilWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;

const BoardUntilWrapperForMobile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: beige;
  @media (max-width: 575.98px) {
    margin-top: 20px;
    justify-content: space-between;
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
    width: ${width.pc};
    padding: 10px 20px;
    font-size: ${theme.fontSize(16)};
    @media (max-width: 575.98px) {
      width: ${width.mobile};
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

  const bodyElement = bodyData.map((el) => {
    const row = el.map((el, idx) => {
      return (
        <BodyColumn
          key={uuidv4()}
          width={headerData[idx].width}
          mobileDisplay={headerData[idx].mobileDisplay}
          text={el}
        />
      );
    });

    return <Row key={uuidv4()}>{row}</Row>;
  });
  return <BodyWrapper>{bodyElement}</BodyWrapper>;
}

function BoardBody(props: IBoardBody) {
  const Header = styled.div`
    width: 100%;
    display: flex;
    border-top: 2px solid ${theme.colors.primary};
    border-bottom: 2px solid ${theme.colors.primary};
  `;

  const headerData = [
    { width: { pc: "5%" }, mobileDisplay: "none", text: "번호" },
    {
      width: { pc: "20%" },
      mobileDisplay: "none",
      text: "단체명",
    },
    {
      width: { pc: "45%", mobile: "60%" },
      mobileDisplay: "initial",
      text: "제목",
    },
    { width: { pc: "10%" }, mobileDisplay: "none", text: "조회수" },
    {
      width: { pc: "20%", mobile: "40%" },
      mobileDisplay: "initial",
      text: "등록일",
    },
  ];

  const bodyData = [
    [
      "1",
      "국립합창단",
      "국립합창단 제 5차 정규직 직원 모집",
      "5",
      "2022-09-20",
    ],
    [
      "1",
      "국립합창단",
      "국립합창단 제 5차 정규직 직원 모집",
      "5",
      "2022-09-20",
    ],
  ];

  const headerElement = headerData.map((el) => {
    return (
      <HeaderColumn
        key={uuidv4()}
        text={el.text}
        width={el.width}
        mobileDisplay={el.mobileDisplay}
      />
    );
  });

  return (
    <Wrapper>
      <BoardUntilWrapper>
        <Search />
        <BoardUntilWrapperForMobile>
          <MobileBoardNav />
          <ButtonComponent
            text={"글쓰기"}
            padding={{ up: "5px", right: "30px", down: "5px", left: "30px" }}
            color={{ from: "white" }}
            backgourndColor={{ from: theme.colors.primary }}
          />
        </BoardUntilWrapperForMobile>
      </BoardUntilWrapper>
      <Header>{headerElement}</Header>
      <Body headerData={headerData} bodyData={bodyData} />
      <AddMoreBtn>더 보기</AddMoreBtn>
    </Wrapper>
  );
}

export default BoardBody;
