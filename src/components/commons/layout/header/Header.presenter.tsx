import * as S from "./Header.styles";
import { IHeaderUI } from "./Header.types";
import ButtonComponent from "../../utils/buttons";

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
            <S.NavBtn onClick={onClickPush("/courses")}>채용</S.NavBtn>
            <S.NavBtn onClick={onClickPush("/courses")}>나눔</S.NavBtn>
            <S.NavBtn onClick={onClickPush("/courses")}>공연</S.NavBtn>
            <S.NavBtn onClick={onClickPush("/scores")}>교육</S.NavBtn>
            <S.NavBtn onClick={onClickPush("/notice")}>공지</S.NavBtn>
          </S.Nav>
        </S.HeaderMidContents>
      </S.HeaderMid>
      <S.HeaderBottom />
    </S.Header>
  );
}
