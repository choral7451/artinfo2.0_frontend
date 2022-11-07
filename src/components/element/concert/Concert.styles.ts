import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media (max-width: 575.98px) {
    width: 85%;
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

export const ConcertWrapper = styled.div`
  text-align: center;
  width: 80%;
  @media (max-width: 575.98px) {
    width: 90%;
  }
`;

export const BoardToolWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 20px;
  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;

export const BoardMobileNavAndWriterWapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  @media (max-width: 575.98px) {
    margin-top: 50px;
    margin-bottom: 10px;
    justify-content: space-between;
  }
`;
