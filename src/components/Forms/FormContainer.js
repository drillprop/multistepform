import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { animated, useTransition } from 'react-spring';
import actions from '../../duck/actions';
import Success from './Success';
const AccountInfo = lazy(() => import('./AccountInfo'));
const Adress = lazy(() => import('./Adress'));
const PersonalDetails = lazy(() => import('./PersonalDetails'));
const Summary = lazy(() => import('./Summary'));

const FormContainer = props => {
  const steps = [
    <AccountInfo {...props} />,
    <PersonalDetails {...props} />,
    <Adress {...props} />,
    <Summary {...props} />,
    <Success {...props} />
  ];
  const transitions = useTransition(props.activeStep, null, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 'auto' },
    leave: { opacity: 0, height: 0 }
  });
  return transitions.map(({ item, key, props }) => (
    <animated.div style={props} key={item}>
      <Suspense fallback={null}>{steps[item]}</Suspense>
    </animated.div>
  ));
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
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
