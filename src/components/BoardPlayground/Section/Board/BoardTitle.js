import React from 'react';
import styled from 'styled-components';

const BoardTitleBlock = styled.div`
  width: 1000px;
  padding-top: 0rem;
  font-family: 'SCDream4R';
  font-size: 15px;
  font-weight: normal;
  margin-left: -5px;
  margin-bottom: 20px;
`;

const BoardTitleBox = ({}) => {
  return (
    <BoardTitleBlock>
      <h3>쿼카놀이터</h3>
    </BoardTitleBlock>
  );
};

export default BoardTitleBox;
