import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
import theme from "../../../../../styles/theme";

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border: 1px solid ${theme.colors.primary};
  padding: 10px 40px 10px 30px;
  border-radius: 20px;
`;

const SearchIcon = styled(SearchOutlined)`
  width: 20%;
  margin-right: 20px;
  cursor: pointer;
  font-size: 20px;
`;

const Input = styled.input`
  width: 80%;
  border: none;
  :focus {
    outline: none;
  }
`;

function Search() {
  return (
    <Wrapper>
      <SearchIcon />
      <Input placeholder={"검색어를 입력해주세요."} spellCheck="false" />
    </Wrapper>
  );
}

export default Search;
