import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

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
const TdoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;
const TodoCheck = styled.input`
  margin-right: 15px;
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
          <TodoList>
            <TdoItem>
              <TodoCheck type="checkbox" />
              나는 투두
            </TdoItem>
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
