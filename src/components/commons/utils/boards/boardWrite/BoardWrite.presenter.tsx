import * as S from "./BoardWrite.styles";
import { ko } from "date-fns/locale";
import { modules } from "./BoardWrite.setting";
import ButtonComponent from "../../buttons/Button";
import theme from "../../../../../../styles/theme";
import Select from "../../select/Select";
import { ImageInputWrapper } from "./BoardWrite.styles";

function BoardWritePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Title>{props.title}</S.Title>
      <S.BoardWriteWrapper>
        <S.SelectWrapper>
          <S.SelectLabel>분류</S.SelectLabel>
          <Select
            elementArr={props.category}
            elementAll={false}
            display={{ pc: "initial", mobile: "initial" }}
          />
        </S.SelectWrapper>
        <S.TitleInput placeholder="제목을 입력해주세요." />
        <S.InfoWrapper style={{ display: props.concertDisplay }}>
          <S.InfoElementWrapper>
            <S.InfoTitle>장소</S.InfoTitle>
            <S.InfoInput placeholder={"장소를 입력해주세요."} />
          </S.InfoElementWrapper>
          <S.InfoElementWrapper>
            <S.InfoTitle>일시</S.InfoTitle>
            <S.PickWrapper>
              <S.DatePick
                selected={props.date}
                locale={ko}
                dateFormat={"yyyy년 MM월 dd일"}
                closeOnScroll={true}
                onChange={(date: Date) => props.setDate(date)}
              />
              <S.TimePick format={"HH:mm"} />
            </S.PickWrapper>
          </S.InfoElementWrapper>
        </S.InfoWrapper>
        <S.ImageWrapper style={{ display: props.concertDisplay }}>
          <S.ImageInputLabel>포스터</S.ImageInputLabel>
          <ImageInputWrapper>
            <S.ImageInputText>{props.imageTitle}</S.ImageInputText>
            <S.ImageInput type="file" onChange={props.onChange} />
          </ImageInputWrapper>
        </S.ImageWrapper>
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
      </S.BoardWriteWrapper>
    </S.Wrapper>
  );
}

export default BoardWritePresenter;
