import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import{ Grid }from '@material-ui/core';

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
  
  class FormOne extends Component{
    render(){
      const { classes } = this.props;

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
              <Form className={classes.forms} >
                <TextField className={classes.textForm} type="text" name="firstName" placeholder="Имя" variant="filled"/>
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}

                <TextField className={classes.textForm} type="text" name="lastName" placeholder="Фамилия"  variant="filled"/>
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}

                <TextField className={classes.textForm} name="login" type="text" placeholder="Логин" variant="filled"/>
                {errors.login && touched.login ? <div>{errors.login}</div> : null}

                <TextField className={classes.textForm} name="email" type="email" placeholder="Email" variant="filled"/>
                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                <TextField className={classes.textForm} type="password" name="password" placeholder="Пароль" id="txtNewPassword" variant="filled"/>
                {errors.password && touched.password ? <div>{errors.password}</div> : null}

                <TextField className={classes.textForm} type="password" name="rPassword" placeholder="Повторный пароль" id="txtConfirmPassword" onChange="isPasswordMatch();" variant="filled" />
                {errors.rPassword && touched.rPassword ? <div>{errors.rPassword}</div> : null}

              </Form>
            )}
          </Formik>
        </Grid>
      
    </div>
    )}}

    export default withStyles (styles) (FormOne);