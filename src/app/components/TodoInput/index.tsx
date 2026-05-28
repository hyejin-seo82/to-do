import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%auto;
  padding: 15px 25px;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.1em;
`;

export default function TodoInput() {
  return (
    <Box>
      <Input placeholder="할일 입력?" />
    </Box>
  );
}
