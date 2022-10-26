import { from } from "@apollo/client";
import AnchorComponent from "../../commons/utils/anchor";
import ButtonComponent from "../../commons/utils/buttons";
import * as S from "./Login.styles";
import theme from "../../../../styles/theme";

export default function LoginPresenter() {
  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
      <S.LoginForm>
        <S.InputWrapper>
          <S.Input placeholder="이메일" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input placeholder="비밀번호" />
        </S.InputWrapper>
        <AnchorComponent
          text="비밀번호 찾기"
          push="/findPassword"
          justifyContent="flex-end"
          color={{ from: theme.colors.primary }}
          padding="0 0 20px 0"
        />
        <ButtonComponent
          text="로그인"
          width={{ from: "100%" }}
          color={{ from: "white", to: "black" }}
          backgourndColor={{ from: theme.colors.primary, to: "white" }}
          padding={{ up: "10px", right: "0", down: "10px", left: "0" }}
          fontSize="16px"
        />
      </S.LoginForm>
      <S.SocialBtn
        style={{ backgroundColor: "rgb(3, 199, 90)", color: "white" }}
      >
        <S.BtnImg src={"/images/login/naver.svg"} />
        <S.BtnText>네이버 로그인</S.BtnText>
      </S.SocialBtn>
      <S.SocialBtn style={{ backgroundColor: "rgb(254, 229, 0)" }}>
        <S.BtnImg src={"/images/login/kakao.svg"} />
        <S.BtnText>카카오 로그인</S.BtnText>
      </S.SocialBtn>
      <S.SocialBtn>
        <S.BtnImg src={"/images/login/google.svg"} />
        <S.BtnText>구글 로그인</S.BtnText>
      </S.SocialBtn>
    </S.Wrapper>
  );
}
