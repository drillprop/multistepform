import React from 'react';
import { Grid, Typography, List, ListItem, Divider } from '@material-ui/core';
import { StyledPaper, StyledH3, StyledButton } from './styles';

const Summary = ({ user, setActiveStep, activeStep }) => {
  const data = Object.entries(user);
  data.splice(2, 1);
  const reducedData = data.reduce((acc, item) => {
    const title = item[0]
      .split(/(?=[A-Z])/)
      .join(' ')
      .toLowerCase();
    const content = { [title]: item[1] };
    acc.push(content);
    return acc;
  }, []);
  return (
    <StyledPaper elevation={4}>
      <Grid container alignContent={'center'} direction='column'>
        <StyledH3 color='primary' align='center' variant='h3'>
          Summary
        </StyledH3>
        <List style={{ width: '300px' }}>
          {reducedData.map(item => (
            <div key={Object.keys(item)}>
              <ListItem component='li' alignItems='flex-start'>
                <Grid container justify='space-between'>
                  <Typography color='primary' variant='body2' align='left'>
                    {Object.keys(item)}:
                  </Typography>
                  <Typography align='right' variant='body2'>
                    {Object.values(item)}
                  </Typography>
                </Grid>
              </ListItem>
              <Divider variant='middle' component='li' />
            </div>
          ))}
        </List>
      </Grid>
      <Grid container justify='space-around'>
        <StyledButton
          onClick={() => setActiveStep(activeStep, -1)}
          variant='contained'
        >
          Back
        </StyledButton>
        <StyledButton
          onClick={() => setActiveStep(activeStep, 1)}
          color='primary'
          variant='contained'
        >
          Register
        </StyledButton>
      </Grid>
    </StyledPaper>
  );
};

export default Summary;
