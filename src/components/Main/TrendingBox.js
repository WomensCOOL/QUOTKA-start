import React, { useState } from 'react';
import styled from 'styled-components';
import Quotka from 'assests/Logo.png';

const TrendingBox = () => {
  return (
    <>
      <Box>
        <ul className="boxUl">
          <li>
            <Num>01</Num>
          </li>
          <li>
            <Infrom>
              <ul className="informUl">
                <li>
                  <Img src={Quotka} />
                </li>
                <li className="name">name</li>
                <li className="content">쿼카는 행복한가? 해피쿼카에 대해</li>
              </ul>
            </Infrom>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default TrendingBox;

const Box = styled.h2`
  margin: 0 auto;
  width: 30%;
  height: 150px;
  background-color: gray;

  .boxUl li {
    float: left;
  }
`;

const Infrom = styled.ul`
  margin: 0 auto;
  height: 150px;
  float: left;
  margin-top: 20px;
  background-color: yellow;
  .name {
    margin-left: 10px;
    font-weight: 600;
  }
  .content {
    padding: 10px;
  }
`;
const Num = styled.h2`
  margin: 0 auto;
  padding-top: 15px;
  font-size: 25px;
  font-weight: 900;
`;
const Img = styled.img`
  width: 27px;
  height: 27px;
  margin-left: 10px;
`;
