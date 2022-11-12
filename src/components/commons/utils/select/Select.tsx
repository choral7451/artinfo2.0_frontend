import styled from "@emotion/styled";
import theme from "../../../../../styles/theme";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface ISelect {
  elementArr: string[];
  elementAll?: boolean;
  display: { pc: string; mobile: string };
}

function Select(props: ISelect) {
  let navInital = "전체";
  if (!props.elementAll) navInital = props.elementArr[0];
  const [nav, setNav] = useState(navInital);
  const [dropDown, setDropDown] = useState("hidden");

  const onClick = (navSelect: string) => () => {
    setNav(navSelect);
    onClickDropDown();
  };

  const onClickDropDown = () => {
    if (dropDown === "hidden") {
      setDropDown("initial");
    } else {
      setDropDown("hidden");
    }
  };

  const Wrapper = styled.div`
    height: 100%;
    overflow: ${dropDown};
    border-radius: 5px;
    width: 100px;
    display: ${props.display.pc};
    z-index: 1;
    :hover {
      cursor: pointer;
    }
    @media (max-width: 575.98px) {
      display: ${props.display.mobile};
    }
  `;

  const NavAll = styled.div`
    border-radius: 5px;
    background-color: ${theme.colors.primary};
  `;

  const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: white;
    text-align: center;
    height: 40px;
    width: 100px;
    z-index: 1;
    :hover {
      border: 1px solid ${theme.colors.primary};
      background-color: white;
      color: black;
    }
  `;

  const navArr: any[] = [];
  props.elementArr.forEach((el) => {
    if (el !== nav) {
      navArr.push(
        <Nav key={uuidv4()} onClick={onClick(el)}>
          {el}
        </Nav>
      );
    }
  });

  return (
    <>
      <Wrapper>
        <NavAll>
          <Nav onClick={onClickDropDown}>{nav}</Nav>
          {navArr}
        </NavAll>
      </Wrapper>
    </>
  );
}

export default Select;
