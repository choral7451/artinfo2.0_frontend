import styled from "@emotion/styled";
import { SettingOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/react";

export const Header = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const HeaderTop = styled.div`
  width: 100%;
  height: 25%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 575.98px) {
    display: none;
  }
`;

export const HeaderTopContents = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 65%;
`;

export const LoginBtn = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 6px 20px;
  margin-right: 20px;
  border: 1px solid #427ed1;
  border-radius: 10px;
  :hover {
    background-color: #427ed1;
    color: white;
  }
`;

export const SignupBtn = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 6px 20px;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid #427ed1;
  color: white;
  background-color: #427ed1;
  :hover {
    background-color: white;
    color: black;
  }
`;

export const SettingIcon = styled(SettingOutlined)`
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

export const LoginUserIncon = styled(UserOutlined)`
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

export const LoginUserName = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-left: 20px;
`;

export const LoginUserText = styled.div`
  font-size: 18px;
  padding-right: 20px;
`;

export const LogoutBtn = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 6px 20px;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid #427ed1;
  color: white;
  background-color: #427ed1;
  :hover {
    background-color: white;
    color: black;
  }
`;

export const HeaderMid = styled.div`
  width: 100%;
  height: 50%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #a1b4cf;
  border-bottom: 1px solid #a1b4cf;
  @media (max-width: 575.98px) {
    padding: 30px 0;
    border-top: none;
    border-bottom: none;
  }
`;

export const HeaderMidContents = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 65%;
  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

export const Menu = styled(MenuOutlined)`
  display: none;

  @media (max-width: 575.98px) {
    display: initial;
    font-size: 26px;
    width: 25%;
    cursor: pointer;
  }

  @media (max-width: 280px) {
    font-size: 20px;
  }
`;

export const Logo = styled.div`
  font-weight: bold;
  cursor: pointer;
  color: #2b2e32;
  font-size: 40px;
  height: fit-content;

  @media (max-width: 575.98px) {
    display: flex;
    justify-content: center;
    width: 50%;
  }

  @media (max-width: 280px) {
    font-size: 30px;
    width: 50%;
  }
`;

export const LoginUserInconForMobile = styled(UserOutlined)`
  display: none;

  @media (max-width: 575.98px) {
    display: initial;
    font-size: 26px;
    width: 25%;
    cursor: pointer;
  }

  @media (max-width: 280px) {
    font-size: 20px;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  padding: 0 20px;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  cursor: pointer;
  padding: 0 20px;
  font-size: 1.3rem;
  :hover {
    color: #427ed1;
  }
`;

export const Open = keyframes`
 0% {
    width: 0%;
  }
  100% {
    width: 25%;
  }
`;

export const HeaderBottom = styled.div`
  width: 100%;
  height: 25%;
  @media (max-width: 575.98px) {
    display: none;
  }
`;
