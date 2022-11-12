import BoardWriteContainer from "../../../src/components/commons/utils/boards/boardWrite/BoardWrite.container";

function Index() {
  return (
    <BoardWriteContainer
      title={"채용"}
      category={["예술단체", "종교", "기타"]}
      imageDisplay={"none"}
    />
  );
}

export default Index;
