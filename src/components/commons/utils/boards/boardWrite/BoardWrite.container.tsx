import { useState } from "react";
import BoardWritePresenter from "./BoardWrite.presenter";
import { IBoardWriteContainer } from "./BoardWrite.types";

function BoardWriteContainer(props: IBoardWriteContainer) {
  const [date, setDate] = useState(new Date());
  const [imageTitle, setImageTitle] = useState(
    "메인 포스터 이미지를 등록해주세요."
  );

  const onChange = (e: any) => {
    const value = e.target.value;
    if (value === "") {
      setImageTitle("메인 포스터 이미지를 등록해주세요.");
    } else {
      let image = value.split("\\");
      setImageTitle(image[image.length - 1]);
    }
  };

  return (
    <BoardWritePresenter
      date={date}
      setDate={setDate}
      onChange={onChange}
      imageTitle={imageTitle}
      title={props.title}
      category={props.category}
      concertDisplay={props.concertDisplay}
    />
  );
}

export default BoardWriteContainer;
