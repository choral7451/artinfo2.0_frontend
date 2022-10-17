import styled from "@emotion/styled";
import { useRouter } from "next/router";

export interface IAnchorProps {
  text: string;
  push: string;
  justifyContent?: string;
  alignItems?: string;
  width?: number;
  color?: string;
  margin?: string;
  padding?: string;
}

export default function AnchorComponent(props: IAnchorProps) {
  const router = useRouter();

  const {
    text,
    justifyContent,
    alignItems,
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
    width: ${width};
    color: ${color};
    padding: ${padding};
    margin: ${margin};
    :active {
      color: ${color};
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
