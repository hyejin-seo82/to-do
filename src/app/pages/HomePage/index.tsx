import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eeeaea;
`;
const Box = styled.div`
  width: 400px;
  height: 600px;
  background: #fff;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;
const TodoList = styled.div``;

const TodoCheck = styled.input`
  margin-right: 15px;
`;
export const TodoContent = styled.span<{ checked: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#212121')};
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>main</title>
        <meta name="description" content="todo main app" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할 일</Title>
          <TodoInput />
          <TodoList>
            <TodoItem
              todo={{
                id: '1',
                completed: false,
                content: '투두입니다 1',
                editing: false,
              }}
            ></TodoItem>
            <TodoItem
              todo={{
                id: '2',
                completed: true,
                content: '투두입니다 2',
                editing: true,
              }}
            ></TodoItem>
            <TodoItem
              todo={{
                id: '3',
                completed: false,
                content: '투두입니다 3',
                editing: false,
              }}
            ></TodoItem>
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
