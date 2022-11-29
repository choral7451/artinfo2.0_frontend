import styled from "@emotion/styled";
import { useRouter } from "next/router";
import theme from "../../../../../styles/theme";

export interface IButtonProps {
  display?: string;
  text?: string;
  onPush?: string;
  onClick?: string;
  color?: {
    from: string;
    to?: string;
  };
  width?: {
    from?: string;
    to?: string;
  };
  height?: string;
  backgourndColor?: {
    from: string;
    to?: string;
  };
  padding?: {
    up?: string;
    right?: string;
    down?: string;
    left?: string;
  };
  margin?: {
    up?: string;
    right?: string;
    down?: string;
    left?: string;
  };
  fontSize?: string;
}

export default function ButtonComponent(props: IButtonProps) {
  const router = useRouter();

  const { color, padding, margin, backgourndColor, fontSize, height, width } =
    props;

  const Button = styled.button`
    display: ${props.display};
    padding: ${padding?.up} ${padding?.right} ${padding?.down} ${padding?.left};
    margin: ${margin?.up} ${margin?.right} ${margin?.down} ${margin?.left};
    height: ${height};
    cursor: pointer;
    font-weight: bold;
    font-size: ${fontSize};
    border-radius: 5px;
    border: 1px solid ${theme.colors.primary};
    color: ${color?.from};
    width: ${width?.from};
    background-color: ${backgourndColor?.from};
    :hover {
      background-color: ${backgourndColor?.to};
      color: ${color?.to};
    }
    @media (max-width: 575.98px) {
      width: ${width?.to};
    }
  `;

  const onClickPush = (url: string) => () => {
    router.push(url);
  };

  return (
    <>
      <Button
        onClick={props.onPush ? onClickPush(props.onPush) : props.onClick}
      >
        {props.text}
      </Button>
    </>
  );
}
