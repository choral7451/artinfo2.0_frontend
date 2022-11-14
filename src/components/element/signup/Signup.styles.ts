import styled from "@emotion/styled";
import theme from "../../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  @media (max-width: 575.98px) {
    width: 95%;
  }
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 50%;
  }
`;

export const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: black;
  @media (max-width: 575.98px) {
    padding-top: 40px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 50px;
  width: 80%;
  margin: 10px 0;
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 11%;
  font-size: 12px;
  margin-left: 5%;
  border-radius: 5px;
  border: 1px solid ${theme.colors.primary};
`;

export const AgreeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 30px;
`;
export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #427ed1;
`;

export const AgreeTitle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30px;
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 575.98px) {
    font-size: 12px;
    padding-left: 20px;
  }
`;

export const Arrow = styled.div`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
