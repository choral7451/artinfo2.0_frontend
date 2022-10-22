import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { AccessTokenState } from "../../../../commons/store";

import HeaderUI from "./Header.presenter";
import { MUTATION_LOGOUT } from "./Header.queries";
import theme from "../../../../../styles/theme";

export default function Header() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);
  const [searchState, setSearchState] = useState(false);
  const [logout] = useMutation(MUTATION_LOGOUT);

  const btnValue = {
    login: {
      text: "로그인",
      push: "/login",
      backgourndColor: { from: "white", to: theme.colors.primary },
      color: { from: "black", to: "white" },
      margin: { up: "0", right: "15px", down: "0", left: "15px" },
      padding: { up: "6px", right: "20px", down: "6px", left: "20px" },
    },
    signup: {
      text: "회원가입",
      push: "/signup",
      backgourndColor: { from: theme.colors.primary, to: "white" },
      color: { from: "white", to: "black" },
      margin: { up: "0", right: "15px", down: "0", left: "15px" },
      padding: { up: "6px", right: "20px", down: "6px", left: "20px" },
    },
  };

  const onClickPush = (url: string) => () => {
    router.push(url);
  };

  const onClickLogout = async () => {
    const logoutReq = await logout();
    if (logoutReq) {
      setAccessToken("");
    }
  };

  const onClickSearch = (btn: string) => () => {
    if (btn === "search") {
      if (!searchState) setSearchState(true);
    } else {
    }

    if (btn === "exit") setSearchState(false);
  };

  return (
    <HeaderUI
      onClickPush={onClickPush}
      onClickLogout={onClickLogout}
      onClickSearch={onClickSearch}
      searchState={searchState}
      btnValue={btnValue}
    />
  );
}
