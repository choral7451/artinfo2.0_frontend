import styled from "@emotion/styled";
import { useRouter } from "next/router";

export interface IAnchorProps {
  text: string;
  push: string;
  fontSize?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: number;
  color?: { from?: string; to?: string };
  margin?: string;
  padding?: string;
}

export default function AnchorComponent(props: IAnchorProps) {
  const router = useRouter();

  const {
    text,
    justifyContent,
    alignItems,
    fontSize,
    width,
    color,
    margin,
    padding,
    push,
  } = props;

  const Anchor = styled.a`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    font-size: ${fontSize};
    width: ${width};
    color: ${color?.from};
    padding: ${padding};
    margin: ${margin};
    :hover {
      color: ${color?.to};
      font-weight: bold;
    }
  `;

  const onClickPush = (url: string) => () => {
    router.push(url);
  };

  return (
    <Anchor onClick={push ? onClickPush(`${push}`) : undefined}>{text}</Anchor>
  );
}
