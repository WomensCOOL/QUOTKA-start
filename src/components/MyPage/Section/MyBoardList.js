import React, { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
//npm i react-bootstrap bootstrap
import { useDispatch } from 'react-redux';
import { getMyBoard } from 'modules/actions/user';
import { updateBoard } from 'modules/actions/board';
import AddBoard from 'components/Board/Section/Board/AddBoard';
import styled from 'styled-components';
import BoardTextarea from 'components/Board/Section/Board/BoardTextarea';
import BoardInput from 'components/Board/Section/Board/BoardInput';
import axios from 'axios';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from '@loadable/component';

function MyBoardList({ history }) {
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');
  const [MyBoard, setMyBoard] = useState([]);
  const [show, setShow] = useState(false);
  const [boardId, getBoardId] = useState('');
  const [inputs, setInput] = useState({
    boardTitle: '',
    boardContent: '',
  });
  const { boardTitle, boardContent } = inputs;
  const onChange = e => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onRemove = id => {
    setMyBoard(MyBoard.filter(MyBoard => MyBoard._id !== id));
    history.push('/mypage/boardlist');
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!boardTitle) {
      alert('제목을 작성해주세요.');
      return;
    } else if (!boardContent) {
      alert('내용을 작성해주세요.');
      return;
    } else if (boardContent.length > 300) {
      alert('내용을 300자 이내로 작성해주세요.');
      return;
    }
    dispatch(
      updateBoard(userFrom, boardId, {
        boardTitle: boardTitle,
        boardContent: boardContent,
      }),
    ).then(response => {
      if (!response.payload.success) {
        alert('게시글 수정에 실패했습니다.');
      } else {
        if (response.payload.success) {
          alert('게시글이 수정되었습니다.');
          window.location.replace('/mypage/boardList');
        } else {
          alert(response.payload.message);
        }
      }
    });
  };

  useEffect(() => {
    dispatch(getMyBoard({ userFrom: userFrom })).then(response => {
      if (response.payload.success) {
        setMyBoard(response.payload.boards);
      } else {
        alert('게시글 정보를 가져오는데 실패했습니다.');
      }
    });
  }, []);

  return (
    <>
      <BoardUl>
        <ul className="boardTitle">
          <li className="num">번호</li>
          <li className="date">일자</li>
          <li className="title">글 제목</li>
          <li className="content">본문 내용</li>
        </ul>
      </BoardUl>
      <hr></hr>
      <BoardUl striped bordered hover>
        <thead>
          <tr className="boardTitle">
            <th className="num">번호</th>
            <th className="date">제목</th>
            <th className="title">작성자</th>
            <th className="content">작성일</th>
          </tr>
        </thead>
      </BoardUl>

      <tbody>
        <tr>
          <td>1</td>
          <td className="num">게시글1</td>
          <td>에어니는</td>
          <td>2022-03-19</td>
        </tr>
        <tr>
          <td>2</td>
          <td>게시글2</td>
          <td>게시판이</td>
          <td>2022-03-19</td>
        </tr>
        <tr>
          <td>3</td>
          <td>게시글2</td>
          <td>어려워요</td>
          <td>2022-03-19</td>
        </tr>
      </tbody>
    </>
  );
}

export default withRouter(MyBoardList);

const BoardButton = styled.button`
  border-radius: 8px;
  font-weight: 600;
  width: 450px;
  height: 30px;
  padding-left: 30px;
  letter-spacing: 20px;
  text-align: center;
  background-color: #1a83ff;
  color: #fff;
  &:active {
    opacity: 0.7;
  }
  margin-bottom: 30px;
`;

const EditButton = styled.button`
  color: #ff0200;
  font-size: 12px;
  top: 30px;
  right: 48px;
  position: absolute;
`;

const BoardUl = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'SCDream-bold';
  font-weight: 100;
  .boardTitle {
    display: float;
    padding: 7px;
    font-size: 14px;
  }
  .num {
    margin-right: 10%;
  }
  .date {
    margin-right: 20%;
  }
  .title {
    margin-right: 20%;
  }
  .content {
    margin-right: 20%;
  }
`;

const NothingBox = styled.div`
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

const NothingAlert = styled.p`
  font-family: 'SCDream';
  font-weigt: 900;
  font-size: 20px;
  color: #ff0200;
`;
