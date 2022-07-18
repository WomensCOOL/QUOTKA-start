import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMyComment } from 'modules/actions/user';
import AddBoard from 'components/Board/Section/Board/AddBoard';
import styled from 'styled-components';

function MyComment() {
  const dispatch = useDispatch();
  const [CommentsFrom, setCommentsFrom] = useState([]);

  const onRemove = id => {
    setCommentsFrom(
      CommentsFrom.filter(CommentsFrom => CommentsFrom._id !== id),
    );
  };

  useEffect(() => {
    const userFrom = localStorage.getItem('userId');
    dispatch(getMyComment({ userFrom: userFrom })).then(response => {
      if (response.payload.success) {
        saveOptions(response.payload.comments);
      } else {
        alert('댓글을 불러오는데 실패했습니다.');
      }
    });
  }, []);

  const saveOptions = comments => {
    const commentsList = [];

    comments.forEach(element => {
      commentsList.push(element.boardFrom);
    });
    setCommentsFrom(
      [...new Set(commentsList.map(JSON.stringify))].map(JSON.parse),
    );
  };

  return (
    <>
      <BoardUl>
        <ul className="boardTitle">
          <li className="num">번호</li>
          <li className="date">일자</li>
          <li className="title">글 제목</li>
          <li className="content">댓글 내용</li>
        </ul>
      </BoardUl>
      <hr></hr>
      {CommentsFrom.length === 0 && (
        <NothingBox>
          <NothingAlert>댓글 목록이 없습니다.</NothingAlert>
        </NothingBox>
      )}
      {CommentsFrom &&
        CommentsFrom.map((board, index) => {
          return (
            <React.Fragment key={index}>
              <AddBoard
                id={board._id}
                user={board.userFrom}
                time={board.createdAt}
                writer={board.boardWriter}
                title={board.boardTitle}
                content={board.boardContent}
                onRemove={onRemove}
              />
            </React.Fragment>
          );
        })}
    </>
  );
}

export default withRouter(MyComment);

const NothingBox = styled.div`
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

const NothingAlert = styled.p`
  font-size: 25px;
  color: #ff0200;
`;

const BoardUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .boardTitle {
    display: float;
    padding: 7px;
    font-size: 14px;
    font-family: 'SCDream-bold';
    font-weight: 100;
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
