import { IButtonProps } from "../../utils/buttons/Button";

interface IUser {
  name: string;
  email: string;
}
export interface IHeaderUI {
  onClickPush: (url: string) => () => void;
  onClickLogout: () => void;
  onClickSearch: (btn: string) => () => void;
  searchState: Boolean;
  btnValue: {
    login: IButtonProps;
    signup: IButtonProps;
  };
}
