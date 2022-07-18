import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { likeList } from 'modules/actions/like';
import MyLikeBoard from 'components/Board/Section/Like/MyLikeBoard';
import styled from 'styled-components';

function myFavorite() {
  const dispatch = useDispatch();
  const [myFavorites, setMyFavorites] = useState([]);

  const getMyFavorite = () => {
    const userFrom = localStorage.getItem('userId');
    dispatch(likeList({ userFrom: userFrom }))
      .then(response => {
        setMyFavorites(response.payload.likes);
      })
      .catch(e => alert('좋아요한 게시글을 불러오는데 실패했습니다,'));
  };

  useEffect(() => {
    getMyFavorite();
  }, []);

  return (
    <>
      <BoardUl>
        <ul className="boardTitle">
          <li className="num">번호</li>
          <li className="date">일자</li>
          <li className="name">작성자</li>
          <li className="title">글 제목</li>
          <li className="content">본문 내용</li>
        </ul>
      </BoardUl>
      <hr></hr>
      {myFavorites.length === 0 && (
        <NothingBox>
          <NothingAlert>좋아요한 게시글이 없습니다.</NothingAlert>
        </NothingBox>
      )}
      {myFavorites &&
        myFavorites.map((likes, index) => {
          return (
            <React.Fragment key={index}>
              <MyLikeBoard
                href="{`../board/${likes.boardFrom}`}"
                id={likes.boardFrom}
                time={likes.createdAt}
                writer={likes.boardWriter}
                title={likes.boardTitle}
                content={likes.boardContent}
              />
            </React.Fragment>
          );
        })}
    </>
  );
}

export default withRouter(myFavorite);

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
    margin-right: 7%;
  }
  .date {
    margin-right: 10%;
  }
  .title {
    margin-right: 20%;
  }
  .content {
    margin-right: 20%;
  }
  .name {
    margin-right: 10%;
  }
`;
