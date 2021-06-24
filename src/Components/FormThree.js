import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Formik, Form } from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>

      <div>
        
        
         
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">

          <InputLabel /* htmlFor="filled-adornment-password" */>Password</InputLabel>

          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('Enter your password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

       <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
          <Input
            id="standard-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
        </FormControl>


        <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              login: '',
              email: '',
              password: '',
              rPassword: ''
            }}
            
          >
        {({ errors, touched }) => (
              <Form className={classes.forms} >
                

                <TextField className={classes.textForm} 

                label="Пароль"
               /*  multiline */
                

                name="password" 
                placeholder="Пароль" 
                id="txtNewPassword" 
                variant="filled"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')} 
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    )}} 
                    />

                {errors.password && touched.password ? <div>{errors.password}</div> : null}



              </Form>
            )}
        </Formik>
       
      </div>
    
    </div>
  );
}