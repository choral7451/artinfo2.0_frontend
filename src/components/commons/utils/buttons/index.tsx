import styled from "@emotion/styled";
import { useRouter } from "next/router";

export interface IButtonProps {
  text: string;
  push?: string;
  color?: {
    from: string;
    to?: string;
  };
  backgourndColor?: {
    from: string;
    to?: string;
  };
  width?: number;
  padding?: {
    up: string;
    right: string;
    down: string;
    left: string;
  };
  margin?: {
    up: string;
    right: string;
    down: string;
    left: string;
  };
  fontSize?: string;
}

export default function ButtonComponent(props: IButtonProps) {
  const router = useRouter();

  const { color, padding, margin, backgourndColor, width, fontSize } = props;
  const Button = styled.button`
    padding: ${padding?.up} ${padding?.right} ${padding?.down} ${padding?.left};
    margin: ${margin?.up} ${margin?.right} ${margin?.down} ${margin?.left};
    cursor: pointer;
    font-weight: bold;
    font-size: ${fontSize};
    border-radius: 10px;
    border: 1px solid #427ed1;
    color: ${color?.from};
    width: ${width}%;
    background-color: ${backgourndColor?.from};
    :hover {
      background-color: ${backgourndColor?.to};
      color: ${color?.to};
    }
  `;

  const onClickPush = (url: string) => () => {
    router.push(url);
  };

  return (
    <>
      <Button onClick={props.push ? onClickPush(`${props.push}`) : undefined}>
        {props.text}
      </Button>
    </>
  );
}
