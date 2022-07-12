import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Profile from 'assests/Profile.png';
import Uploader from 'components/MyPage/Section/Uploader';
import MyBoardList from './Section/MyBoardList';
import MyComment from './Section/MyComment';
import Favorite from './Section/MyFavorite';
import Tab from './Section/TabMenu';
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
        <Tab />

        <ul>
          <MyPageList>
            <li>
              <p>내가 쓴 게시글</p>
              <MyBoardList />
            </li>
          </MyPageList>
          <MyPageList>
            <li>
              내가 쓴 댓글
              <MyComment />
            </li>
          </MyPageList>
          <MyPageList>
            <li>
              저장한 게시글
              <Favorite />
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
