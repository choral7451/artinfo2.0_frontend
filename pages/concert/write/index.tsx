import BoardWriteContainer from "../../../src/components/commons/utils/boards/boardWrite/BoardWrite.container";

function Index() {
  return (
    <BoardWriteContainer
      title={"공연"}
      category={["오케스트라", "합창", "앙상블", "솔로", "기타"]}
    />
  );
}

export default Index;
