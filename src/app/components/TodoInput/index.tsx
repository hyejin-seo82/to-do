import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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

interface Props {
  setTodoList: (todo: ITodoItem) => void;
}

export default function TodoInput({ setTodoList }: Props) {
  const [content, setContent] = React.useState<string>('');
  return (
    <Box>
      <Input
        placeholder="할일 입력?"
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyPress={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          setTodoList({
            id: '0',
            content: content,
            completed: false,
            editing: false,
          });
          setContent('');
        }}
      />
    </Box>
  );
}
