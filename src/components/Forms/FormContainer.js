import React from 'react';
import AccountInfo from './AccountInfo';
import { connect } from 'react-redux';
import actions from '../../duck/actions';
import PersonalDetails from './PersonalDetails';
import Adress from './Adress';

const FormContainer = props => {
  const steps = [
    <AccountInfo {...props} />,
    <PersonalDetails {...props} />,
    <Adress {...props} />
  ];
  return <>{steps[props.activeStep]}</>;
};

const mapStateToProps = state => ({
  user: state.user,
  activeStep: state.activeStep
});

const mapDispatchToProps = dispatch => ({
  setField: (field, text) => dispatch(actions.setField(field, text)),
  setActiveStep: (activeStep, number) =>
    dispatch(actions.setActiveStep(activeStep, number))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
