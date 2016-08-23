import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BaseComponent from 'libs/components/BaseComponent';

import CommentScreen from '../components/CommentScreen/CommentScreen';
import * as sagaCommentsActionCreators from '../actions/sagaCommentsActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { data: state.$$commentsStore };
}

class SagaCommentsContainer extends BaseComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, data } = this.props;
    const actions = bindActionCreators(sagaCommentsActionCreators, dispatch);
    return (
      <CommentScreen {...{ actions, data }} />
    );
  }
}

// Don't forget to actually use connect!
export default connect(select)(SagaCommentsContainer);
