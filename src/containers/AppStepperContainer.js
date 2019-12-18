import React from 'react';
import { connect } from 'react-redux';
import AppStepper from '../components/AppStepper';

const AppStepperContainer = ({ activeStep }) => {
  return <AppStepper activeStep={activeStep} />;
};

const mapStateToProps = state => ({
  activeStep: state.activeStep
});

export default connect(mapStateToProps)(AppStepperContainer);
