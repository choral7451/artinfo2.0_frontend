import BoardWriteContainer from "../../../src/components/commons/utils/boards/boardWrite/BoardWrite.container";

function Index() {
  return (
    <BoardWriteContainer
      title={"교육"}
      category={["이슈", "후기", "자유게시판"]}
      imageDisplay={"none"}
    />
  );
}

export default Index;
