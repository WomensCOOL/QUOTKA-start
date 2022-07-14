import React from 'react';
import styled from 'styled-components';
import Banner from 'assests/Logo.png';
import TrendingBox from '../components/Main/TrendingBox';

const Main = () => {
  return (
    <>
      <MainBox>
        <MainImg src={Banner} /> banner
      </MainBox>
      <MainTitle>
        <Img src={Banner} />
        Trending on QUOTKA
      </MainTitle>
      <TrendingBox />
    </>
  );
};

export default Main;

const MainTitle = styled.h2`
  margin: 0 auto;
  padding-top: 15px;
  font-size: 25px;
  font-weight: 900;
`;

const MainImg = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 17%;
  margin-top: 5%;
`;
const Img = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 5px;
  padding-top: 5px;
`;
const MainBox = styled.div`
  font-weight: 900;
  font-size: 150px;

  height: 300px;
  width: 1080px;
  background-color: gray;
  margin-left: -200px;
  margin-top: -50px;
`;
