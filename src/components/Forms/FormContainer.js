import React from 'react';
import AccountInfo from './AccountInfo';
import { connect } from 'react-redux';
import actions from '../../duck/actions';

const FormContainer = props => {
  return (
    <>
      <AccountInfo {...props} />
    </>
  );
};

const mapStateToProps = state => ({
  nick: state.nick,
  email: state.email,
  password: state.password,
  firstName: state.firstName,
  secondName: state.secondName,
  dateOfBirth: state.dateOfBirth
});

const mapDispatchToProps = dispatch => ({
  setField: (field, text) => dispatch(actions.setField(field, text))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
