import React from 'react';
import AccountInfo from './AccountInfo';
import { connect } from 'react-redux';
import actions from '../../duck/actions';
import PersonalDetails from './PersonalDetails';
import Adress from './Adress';
import { useTransition, animated } from 'react-spring';

const FormContainer = props => {
  const steps = [
    <AccountInfo {...props} />,
    <PersonalDetails {...props} />,
    <Adress {...props} />
  ];
  const transitions = useTransition(props.activeStep, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: 'absolute', top: '12rem' }
  });
  console.log(transitions);
  return transitions.map(({ item, key, props }) => (
    <animated.div style={props} key={item}>
      {steps[item]}
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
