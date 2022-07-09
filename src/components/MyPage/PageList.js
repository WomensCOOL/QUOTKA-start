import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Profile from 'assests/Profile.png';
import Uploader from 'components/MyPage/Section/Uploader';
import {
  MyPageBox,
  MyPageTitle,
  MyPageList,
  MyPagefollow,
  MyInform,
  MyChange,
} from 'styles/mypage/styles';

function PageList() {
  return (
    <>
      <MyPageBox>
        <MyPageTitle>MY PAGE</MyPageTitle>
        <Uploader />
        <img src={Profile} className="profile" />

        <div className="id">쿼억하</div>
        <MyChange>
          <ul>
            <li>
              <Link to="/mypage/email">개인정보 수정</Link>
            </li>
            <li>
              <Link to="/mypage/password">프로필 수정</Link>
            </li>
          </ul>
        </MyChange>
        <MyPagefollow>
          <div>Follower</div>0<div>Following</div>0
        </MyPagefollow>
        <MyInform>안녕하세요 쿼억하 입니다. 행복하세요 ^^</MyInform>
        <ul>
          <MyPageList>
            <li>
              <Link to="/mypage/boardList">내가 쓴 글(게시글 수정)</Link>
            </li>
            <li>
              <Link to="/mypage/myComment">내 쓴 댓글(댓글 수정)</Link>
            </li>
            <li>
              <Link to="/mypage/comment">내가 댓글 단 글</Link>
            </li>
            <li>
              <Link to="/mypage/reply">내가 대댓글 단 댓글</Link>
            </li>
            <li>
              <Link to="/mypage/favorite">내가 좋아요 누른 글</Link>
            </li>
          </MyPageList>
        </ul>
        <ul>
          <MyPageList>
            <li>
              <Link to="/mypage/withdrawal">회원탈퇴</Link>
            </li>
          </MyPageList>
        </ul>
      </MyPageBox>
    </>
  );
}

export default withRouter(PageList);
