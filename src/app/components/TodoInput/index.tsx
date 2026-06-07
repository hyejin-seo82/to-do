import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${props => (props.isEditing ? '5px 0px' : '15px 25px')};
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.1em;
`;

function TodoInput({
  setTodoList,
  isEditing,
  editContent,
  editModeTodo,
  editTodo,
}: {
  setTodoList?: (todo: ITodoItem) => void;
  isEditing?: boolean;
  editContent?: string;
  editTodo?: (content: string) => void;
  editModeTodo?: () => void;
}) {
  const [content, setContent] = React.useState<string>('');
  return (
    <Box isEditing={isEditing}>
      <Input
        placeholder="할일 입력?"
        value={content}
        onBlur={e => {
          if (e.currentTarget === e.target) {
            editTodo && editTodo(content);
          }
        }}
        onChange={e => setContent(e.target.value)}
        onKeyDown={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          if (isEditing) {
            editTodo && editTodo(content);
          } else {
            setTodoList &&
              setTodoList({
                id: '0',
                content: content,
                completed: false,
                editing: false,
              });
            setContent('');
          }
        }}
      />
    </Box>
  );
}

export default TodoInput;
