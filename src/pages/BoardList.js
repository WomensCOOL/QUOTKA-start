import React from 'react';
import { Route, withRouter } from 'react-router';
import BoardView from 'components/Board/BoardView';
import BoardDetail from 'components/Board/BoardDetail';
import BoardList from 'components/Board/BoardList';

function Board({ match }) {
  return (
    <>
      <Route exact path={match.path} component={BoardList} />
    </>
  );
}

export default withRouter(Board);
