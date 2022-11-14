import BoardWriteContainer from "../../../src/components/commons/utils/boards/boardWrite/BoardWrite.container";

function Index() {
  return (
    <BoardWriteContainer
      title={"나눔"}
      category={["이슈", "후기", "자유게시판"]}
      concertDisplay={"none"}
    />
  );
}

export default Index;
