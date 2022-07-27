import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import TitleBoxContainer from 'components/BoardPlayground/Section/Board/BoardTitle';
import { Link } from 'react-router-dom';
import BoardListTextBox from './Section/List/BoardListText';
import styled from 'styled-components';
import WriteButton from './Section/List/WriteButton';

/**
 * BoardList class
 */

const BoardTopBlock = styled.ul`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

function BoardList(history) {
  /**
   *
   */

  return (
    <>
      <TitleBoxContainer></TitleBoxContainer>
      <BoardTopBlock>
        <BoardListTextBox></BoardListTextBox>
        <WriteButton></WriteButton>
      </BoardTopBlock>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/playground/board/quotkaId"
              >
                New Title Test
              </Link>
            </td>
            <td>쿼억하</td>
            <td>2022-03-19</td>
            <td>32</td>
          </tr>
          <tr>
            <td>2</td>
            <td>게시글2</td>
            <td>aaaaa</td>
            <td>2022-03-19</td>
            <td>18</td>
          </tr>
          <tr>
            <td>3</td>
            <td>게시글2</td>
            <td>bbbbb</td>
            <td>2022-03-19</td>
            <td>21</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default BoardList;
