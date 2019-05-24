import React from 'react';
import AccountInfo from './AccountInfo';
import { connect } from 'react-redux';
import actions from '../../duck/actions';

const FormContainer = props => {
  console.log(props);
  return (
    <>
      <AccountInfo {...props} />
    </>
  );
};

const mapStateToProps = state => ({
  nick: state.nick,
  email: state.email,
  password: state.password
});

const mapDispatchToProps = dispatch => ({
  setNick: text => dispatch(actions.setNick(text)),
  setEmail: text => dispatch(actions.setEmail(text)),
  setPassword: text => dispatch(actions.setPassword(text))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
