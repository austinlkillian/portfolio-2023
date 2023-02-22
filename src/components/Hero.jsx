import React from 'react';
import { Grid } from '@mui/material';

function Hero({data}) {
  return (
    <Grid className="full-height" container alignItems="center">
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={8}><h1>{data.heading.toUpperCase()}</h1></Grid>
        <Grid item xs={8}><h2>{data.subheading.toUpperCase()}</h2></Grid>
        <Grid item xs={8}><p>{data.flare.toUpperCase()}</p></Grid>
      </Grid>
    </Grid>
  )
}

export default Hero