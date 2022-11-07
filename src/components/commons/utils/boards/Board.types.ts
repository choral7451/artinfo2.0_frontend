export interface IBoard {
  bodyData: string[][];
  columnSetting: IBoardColumns;
  boadrStyle?: { width?: string };
}

export interface IBoardBody {
  bodyData: string[][];
  columnSetting: IBoardColumns;
}

export interface IBoardColumns {
  columnTitleDisplay?: string;
  settingValue?: {
    width?: { mobile?: string; pc?: string };
    text?: string;
    mobileDisplay?: string;
  }[];
}

export interface IBoardColumn {
  width: { pc?: string | undefined; mobile?: string | undefined } | undefined;
  text?: string;
  mobileDisplay?: string;
}
