import styled from "@emotion/styled";
import theme from "../../../../../styles/theme";
import DatePickenpm from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from "antd";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  border: 1px solid ${theme.colors.primary};
  padding: 30px 0;
  margin: 70px 0;
`;

export const TitleInput = styled.input`
  border: none;
  font-size: 20px;
  border-bottom: 2px solid ${theme.colors.primary};
  width: 90%;
  margin: 50px 0;
  padding: 20px 10px;
  :focus {
    outline: none;
  }
  :focus::placeholder {
    color: transparent;
  }
  ::placeholder {
    color: #a1b4cf;
    transition: all 0.3s ease-in-out;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 90%;
  padding: 0 10px;
`;
export const InfoElementWrapper = styled.div`
  display: flex;
  width: 50%;
`;

export const InfoTitle = styled.div`
  font-size: 20px;
  padding: 10px 30px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  background-color: ${theme.colors.primary};
`;

export const InfoInput = styled.input`
  border: none;
  font-size: 16px;
  text-align: center;
  border-bottom: 2px solid ${theme.colors.primary};
  margin-left: 20px;
  width: 70%;
  :focus {
    outline: none;
  }
  :focus::placeholder {
    color: transparent;
  }
  ::placeholder {
    color: #a1b4cf;
    transition: all 0.3s ease-in-out;
  }
`;
export const PickWrapper = styled.div`
  display: flex;
`;

export const DatePick = styled(DatePickenpm)`
  text-align: center;
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  margin-left: 30px;
`;

export const TimePick = styled(TimePicker)`
  width: 200px;
  border: 1px solid ${theme.colors.primary};
  text-align: center;
  cursor: pointer;
`;

export const TextArea = styled(ReactQuill)`
  margin: 50px 0;
  height: 500px;
  width: 90%;
`;

export const BtnWrapper = styled.div`
  display: flex;
`;
