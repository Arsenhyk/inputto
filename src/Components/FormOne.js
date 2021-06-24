import React, {useState} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import{ Grid }from '@material-ui/core';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';

import imgOne from '../image/imgOne.png'

import {formStyle as styles} from '../Styles';


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    login: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    email: Yup.string()
    .email('Invalid email')
    .required('Required'),

    password: Yup
    .string()
    .min(8)
    .max(16)
    .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
    .required(),

    rPassword: Yup
    .string()
    .min(8)
    .max(16)
    .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
    .required(),
  });

  
  function FormOne(styles) {
    
      const { classes } = styles;

      const [values, setValues] = useState({
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

    <div className={classes.rootForm}>

      

        <Grid item md={2}>

          <div>

            <img src = { imgOne }  alt = "imgOne"/>,
          
          </div>

        </Grid>

        <Grid item md={6}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              login: '',
              email: '',
              password: '',
              rPassword: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className= {classes.forms}>
                <TextField className={clsx( classes.textForm )} type="text" name="firstName" label="Имя" variant="filled"/>
                
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}

                <TextField className={classes.textForm} type="text" name="lastName" label="Фамилия"  variant="filled"/>
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}

                <TextField className={classes.textForm} name="login" type="text" label="Логин" variant="filled"/>
                {errors.login && touched.login ? <div>{errors.login}</div> : null}

                <TextField className={classes.textForm} 
                name="email" 
                type="email" 
                label="Email" 
                variant="filled"
                InputProps={{
                endAdornment:(<InputAdornment position="end">@gmail.com</InputAdornment>)
                }}
                />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                <TextField className={classes.textForm}  
                name="password" 
                label="Пароль"
                id="txtPassword" 
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

                <TextField className={classes.textForm}  
                name="rPassword" 
                label="Повторите пароль"
                id="txtConfirmPassword"  
                variant="filled"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('isPasswordMatch()')} 
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
                {errors.rPassword && touched.rPassword ? <div>{errors.rPassword}</div> : null}

              </Form>
            )}
          </Formik>
        </Grid>
      
    </div>
    )}

    export default withStyles (styles) (FormOne);