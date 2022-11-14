import * as S from "./Signup.styles";
import Input from "../../commons/utils/input/Input";
import ButtonComponent from "../../commons/utils/buttons/Button";
import theme from "../../../../styles/theme";

function SignupPresenter() {
  return (
    <S.Wrapper>
      <S.Title>회원가입</S.Title>
      <S.InputWrapper>
        <Input width={"70%"} placeholder={"이메일을 입력해주세요."} />
        <ButtonComponent
          text={"인증번호 전송"}
          width={{ from: "25%" }}
          margin={{ up: "0", right: "0", down: "0", left: "5%" }}
          color={{ from: "black", to: "white" }}
          fontSize={"12px"}
          backgourndColor={{ from: "white", to: theme.colors.primary }}
          height={"100%"}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <Input width={"70%"} placeholder={"인증번호를 입력해주세요."} />
        <S.Count>180</S.Count>
        <ButtonComponent
          text={"인증"}
          width={{ from: "11%" }}
          padding={{ up: "0", right: "0", down: "0", left: "0" }}
          margin={{ up: "0", right: "0", down: "0", left: "3%" }}
          color={{ from: "white", to: "black" }}
          fontSize={"12px"}
          backgourndColor={{ from: theme.colors.primary, to: "white" }}
          height={"100%"}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <Input width={"100%"} placeholder={"이름을 입력해주세요."} />
      </S.InputWrapper>
      <S.InputWrapper>
        <Input width={"100%"} placeholder={"비밀번호를 입력해주세요."} />
      </S.InputWrapper>
      <S.InputWrapper>
        <Input width={"100%"} placeholder={"비밀번호를 다시 입력해주세요."} />
      </S.InputWrapper>
      <S.AgreeWrapper style={{ marginTop: "20px" }}>
        <S.CheckBox id="checkAll" type={"checkbox"} />
        <S.AgreeTitle>전체 동의</S.AgreeTitle>
      </S.AgreeWrapper>
      <S.AgreeWrapper>
        <S.CheckBox type={"checkbox"} />
        <S.AgreeTitle>(필수) 이용약관 동의</S.AgreeTitle>
        <S.Arrow>{">"}</S.Arrow>
      </S.AgreeWrapper>
      <S.AgreeWrapper>
        <S.CheckBox type={"checkbox"} />
        <S.AgreeTitle>(필수) 개인정보 처리방침 동의</S.AgreeTitle>
        <S.Arrow>{">"}</S.Arrow>
      </S.AgreeWrapper>
      <S.AgreeWrapper>
        <S.CheckBox type={"checkbox"} />
        <S.AgreeTitle>(선택) 마케팅 수신 동의</S.AgreeTitle>
      </S.AgreeWrapper>
      <ButtonComponent
        text={"회원가입"}
        width={{ from: "80%" }}
        color={{ from: "white", to: "black" }}
        fontSize={"16px"}
        margin={{ up: "30px" }}
        backgourndColor={{ from: theme.colors.primary, to: "white" }}
        height={"50px"}
      />
    </S.Wrapper>
  );
}

export default SignupPresenter;
