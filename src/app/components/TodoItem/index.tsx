import styled from 'styled-components';
import CheckBox from '../CheckBox';
import Block from '../Block';
import { TodoContent } from 'app/pages/HomePage';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <Box>
      <CheckBox checked={todo.completed} />
      <Block marginRight="10px" />
      <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
    </Box>
  );
}
