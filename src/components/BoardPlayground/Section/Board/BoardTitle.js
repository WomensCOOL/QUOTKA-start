import React from 'react';
import styled from 'styled-components';

//수정사항
const BoardTitleBlock = styled.div`
  width: 1000px;
  padding-top: 0rem;
  font-family: 'SCDream4R';
  font-size: 20px;
  font-weight: normal;
  margin-left: -5px;
  margin-bottom: 20px;
`;

const BoardTitleBox = ({}) => {
  return (
    <BoardTitleBlock>
      <div>쿼카놀이터</div>
    </BoardTitleBlock>
  );
};

export default BoardTitleBox;
