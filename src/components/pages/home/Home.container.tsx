import React from "react";
import HomePresenter from "./Home.presenter";
import { useRouter } from "next/router";

function HomeContainer() {
  const router = useRouter();

  const onClickPush = (path: string) => () => {
    router.push(path);
  };

  return <HomePresenter onClickPush={onClickPush} />;
}

export default HomeContainer;
