import Poster from "../../commons/utils/cards/poster/Poster";
import * as S from "./Home.styles";
import Banner from "../../commons/utils/banner/Banner";
import BoardBody from "../../commons/utils/boards/boardBody/BoardBody";
import { HomeBoardLeftHeader, HomeBoardLeftBody } from "./Home.setting";
import { IHomePresenter } from "./Home.types";

function HomePresenter(props: IHomePresenter) {
  return (
    <S.Wrapper>
      <Banner
        images={[
          "images/home/banner/test2.gif",
          "images/home/banner/test2.gif",
        ]}
      />
      <S.SubTitle>주목할 연주 ✨</S.SubTitle>
      <S.Concerts>
        <Poster infoDisplay={"none"} />
        <Poster infoDisplay={"none"} />
        <Poster infoDisplay={"none"} />
        <Poster infoDisplay={"none"} />
      </S.Concerts>
      <Banner
        images={["images/home/banner/test.gif", "images/home/banner/test.gif"]}
      />
      <S.BoardWrapper>
        <S.Board>
          <S.BoardTitle onClick={props.onClickPush("/recruit")}>
            채용 정보 🚀
          </S.BoardTitle>
          <S.BoardElement>
            <BoardBody
              headerData={HomeBoardLeftHeader}
              bodyData={HomeBoardLeftBody}
              headerDisplay={"none"}
              boardUtil={"none"}
              write={"none"}
              search={"none"}
              width={"100%"}
            />
          </S.BoardElement>
        </S.Board>
        <S.Board>
          <S.BoardTitle onClick={props.onClickPush("/share")}>
            나눔 💬
          </S.BoardTitle>
          <S.BoardElement>
            <BoardBody
              headerData={HomeBoardLeftHeader}
              bodyData={HomeBoardLeftBody}
              headerDisplay={"none"}
              boardUtil={"none"}
              write={"none"}
              search={"none"}
              width={"100%"}
            />
          </S.BoardElement>
        </S.Board>
      </S.BoardWrapper>
    </S.Wrapper>
  );
}

export default HomePresenter;
