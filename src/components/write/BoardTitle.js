import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const BoardTitleBlock = styled.div`


 width: 100%;
border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;

h2 {
    color: ${palette.gray[8]}
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const BoardTitleBox = ({}) => {
  return (
    <BoardTitleBlock>
      <h2>쿼카마스터</h2>
    </BoardTitleBlock>
  );
};

export default BoardTitleBox;
