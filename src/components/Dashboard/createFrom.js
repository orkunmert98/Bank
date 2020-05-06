import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
export default function AddressForm() {
    

      const classes = useStyles();
    return (
        
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>


        <FormControl className={classes.formControl} style={{width:"70%"}}>
        <InputLabel id="demo-simple-select-label">Account type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          
        >


          <MenuItem value={10}>Drawing Account</MenuItem>
          <MenuItem value={20}>Credit Card</MenuItem>
          <MenuItem value={30}>General Credit </MenuItem>
          <MenuItem value={30}>Deposit Account</MenuItem>
          <MenuItem value={30}>Checking Account</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl className={classes.formControl} style={{width:"70%"}}>
        <InputLabel id="demo-simple-select-label">Currency Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          
        >
          <MenuItem value={10}>Dolar</MenuItem>
          <MenuItem value={20}>Coin</MenuItem>
          <MenuItem value={30}>Euro</MenuItem>
          <MenuItem value={30}>TL</MenuItem>
        </Select>
      </FormControl>
        </Grid>
         <Grid item xs={6}>
         <FormControlLabel
        control={
          <Checkbox
          
            name="checkedF"
          
          />
        }
        label="Online Payment"
      />
        </Grid>
        <Grid item xs={6}>
        <FormControlLabel
        control={
          <Checkbox
        
            name="checkedB"
            
          />
        }
        label="Contactless payment"
      />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
