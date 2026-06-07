import styled from 'styled-components';
import CheckBox from '../CheckBox';
import Block from '../Block';
import { TodoContent } from 'app/pages/HomePage';
import CircleButton from '../Button/CircleButton';
import TodoInput from '../TodoInput';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;

  & > .delete-button {
    display: none;
  }

  &:hover {
    padding: 10px 15px 10px 25px;
    > .delete-button {
      display: flex;
    }
  }
`;

export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <Box>
      <div style={{ width: '100% ', display: 'flex', alignItems: 'center' }}>
        <CheckBox checked={todo.completed} />
        <Block marginRight="10px" />
        {todo.editing ? (
          <TodoInput />
        ) : (
          <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
        )}
      </div>
      <CircleButton
        className="delete-button"
        onClick={() => {}}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        )}
      />
    </Box>
  );
}
