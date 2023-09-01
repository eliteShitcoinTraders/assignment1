import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NaviBar from './components/header.js';
import Footer from './components/footer';
import { Text } from './components/textbox.js';
import Buttons from './components/buttons.js';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Inputs from './components/inputfield.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const content = (
  <div style={{textAlign:'left'}}>
    {`Please provide your information to complete purchase.
    `}
  </div>
);

export default function AutoGrid() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid item xs={12} sm={12} md={12}>
          <Item><NaviBar/> </Item>
      </Grid>
      

      <Grid  direction="row" justifyContent="center" alignItems="center" container spacing={2}>
      
        <Grid item xs={6}>
          <Item>
          <h1>Checkout</h1>
            <Text texttitle={<h2>Subtotal: $5,000</h2>} content={content}/>
            <Inputs/>
            <Buttons icon={<MonetizationOnIcon/>} label={"BUY"} />

          </Item>
        </Grid>
       
      </Grid>
      
      <Grid item xs={12} sm={12} md={12}>
        <Item><Footer/></Item>
      </Grid>
    </Box>
  );
}