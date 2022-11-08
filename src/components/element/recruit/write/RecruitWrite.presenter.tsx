import * as S from "./RecruitWrite.styles";
import { ko } from "date-fns/locale";
import { modules } from "./RecruitWrite.setting";
import { BtnWrapper } from "./RecruitWrite.styles";
import ButtonComponent from "../../../commons/utils/buttons/Button";
import theme from "../../../../../styles/theme";

function RecruitWritePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.TitleInput placeholder="제목을 입력해주세요." />
      <S.InfoWrapper>
        <S.InfoElementWrapper>
          <S.InfoTitle>장소</S.InfoTitle>
          <S.InfoInput placeholder={"장소를 입력해주세요."} />
        </S.InfoElementWrapper>
        <S.InfoElementWrapper>
          <S.InfoTitle>일시</S.InfoTitle>
          <S.PickWrapper>
            <S.DatePick
              selected={props.startDate}
              locale={ko}
              dateFormat={"yyyy년 MM월 dd일"}
              closeOnScroll={true}
              onChange={(date: Date) => props.setStartDate(date)}
            />
            <S.TimePick format={"HH:mm"} />
          </S.PickWrapper>
        </S.InfoElementWrapper>
      </S.InfoWrapper>
      <S.TextArea modules={modules} />
      <S.BtnWrapper>
        <ButtonComponent
          text={"확인"}
          width={{ from: "200px" }}
          padding={{ up: "0", right: "0", down: "0", left: "0" }}
          color={{ from: "white", to: "black" }}
          fontSize={"14px"}
          backgourndColor={{ from: theme.colors.primary, to: "white" }}
          height={"40px"}
          margin={{ right: "20px" }}
        />
        <ButtonComponent
          text={"취소"}
          width={{ from: "200px" }}
          padding={{ up: "0", right: "0", down: "0", left: "0" }}
          color={{ from: "black", to: "white" }}
          fontSize={"14px"}
          backgourndColor={{ from: "white", to: theme.colors.primary }}
          height={"40px"}
          margin={{ right: "20px" }}
        />
      </S.BtnWrapper>
    </S.Wrapper>
  );
}

export default RecruitWritePresenter;
