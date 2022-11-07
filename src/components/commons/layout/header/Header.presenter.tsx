import * as S from "./Header.styles";
import { IHeaderUI } from "./Header.types";
import ButtonComponent from "../../utils/buttons/Button";
import AnchorComponent from "../../utils/anchor";

export default function HeaderUI(props: IHeaderUI) {
  const { onClickPush, btnValue } = props;
  return (
    <S.Header>
      <S.HeaderTop>
        <S.HeaderTopContents>
          {/* {props.user ? (
            <>
              {props.user.email === "admin" ? (
                <>
                  <S.SettingIcon onClick={props.onClickPush("/admin")} />
                </>
              ) : (
                <></>
              )}
              <S.LoginUserIncon />
              <S.LoginUserName>{props.user.name}</S.LoginUserName>
              <S.LoginUserText>님 환영합니다.</S.LoginUserText>
              <S.LogoutBtn onClick={props.onClickLogout}>로그아웃</S.LogoutBtn>
            </>
          ) : (
            <>
              
            </>
          )} */}
          <ButtonComponent {...btnValue.login} />
          <ButtonComponent {...btnValue.signup} />
        </S.HeaderTopContents>
      </S.HeaderTop>
      <S.HeaderMid>
        <S.HeaderMidContents>
          <S.Menu />
          <S.Logo onClick={onClickPush("/")}>ARTINFO</S.Logo>
          <S.LoginUserInconForMobile />
          <S.Nav>
            <AnchorComponent
              text="채용"
              push="/recruit"
              fontSize="20px"
              padding="0 20px 0 20px"
              color={{ from: "black", to: "#427ed1" }}
            />
            <AnchorComponent
              text="나눔"
              push="/share"
              fontSize="20px"
              padding="0 20px 0 20px"
              color={{ from: "black", to: "#427ed1" }}
            />
            <AnchorComponent
              text="공연"
              push="/concert"
              fontSize="20px"
              padding="0 20px 0 20px"
              color={{ from: "black", to: "#427ed1" }}
            />
            <AnchorComponent
              text="교육"
              push="/education"
              fontSize="20px"
              padding="0 20px 0 20px"
              color={{ from: "black", to: "#427ed1" }}
            />
            <AnchorComponent
              text="공지"
              push="/notice"
              fontSize="20px"
              padding="0 20px 0 20px"
              color={{ from: "black", to: "#427ed1" }}
            />
          </S.Nav>
        </S.HeaderMidContents>
      </S.HeaderMid>
      <S.HeaderBottom />
    </S.Header>
  );
}
