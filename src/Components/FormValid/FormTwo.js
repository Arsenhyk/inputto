

import React, {useState} from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';

import InputAdornment from '@material-ui/core/InputAdornment';

import { withStyles } from '@material-ui/core/styles';
import{ Grid }from '@material-ui/core';

import {formStyle as styles} from '../../Styles';

import { FormikTextField } from 'formik-material-fields';

import errorIcon from '../../image/error.svg';

import imgTwo from '../../image/imgTwo.png'

 const SignupSchema = Yup.object().shape({
      date: Yup.string("Enter a name")
      .min(2, ' Enter a valid name ')
      .max(50, ' Enter a valid name ')
      .required(' Required '),

      sex: Yup.string()
      .min(2, ' Enter a valid last name ')
      .max(50, ' Enter a valid last name! ')
      .required(' Required '),

  }); 

  
  function FormTwo(styles) {
    
      const { classes } = styles;

      const currencies = [
        {
          value: 'Муж',
          label: 'Мужской',
        },
        {
          value: 'Жен',
          label: 'Женский',
        },
      ];

      const [currency, setCurrency] = useState('Пол');

      const handleChange = (event) => {
        setCurrency(event.target.value);
      };

      
      return (

    

      <div className= {classes.root}>

        <Grid item md={8}>

          <div>

            <img className= {classes.imges} src = { imgTwo }  alt = "imgTwo"/>
          
          </div>

        </Grid>

        

        {/* <Grid item md={6} height={100}> */}
        <div className= {classes.container}>
          <h3>Познакомимся поближе!</h3>
          <Formik
            initialValues={{
              date: '',
              sex: '',
              text: '',
              file: '',
              
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className= {classes.forms}>
                <FormikTextField
                  className={classes.textForm} 
                  id="date"
                  label="Birthday"
                  name="date" 
                  type="date"
                  variant="filled"
                  InputProps={{
                    
                    /* endAdornment:(<InputAdornment position="end"><img className={classes.errorIcons}  src = { icoDate }  alt = "icoDate" /></InputAdornment>) */

                  }}
                />
                {errors.date &&  touched.date ? (
                     <div>
                        <InputAdornment 
                          position="end">
                          <img className={classes.errorIcons}  src = { errorIcon }  alt = "errorIcon" />
                        </InputAdornment>
                      </div> 
                ) : null}

                <FormikTextField
                  name="sex"
                  className={classes.textForm} 
                  id="filled-select-currency-native"
                  select
                  label="Пол"
                  value={currency}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  variant="filled"
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </FormikTextField>
                {errors.sex &&  touched.sex ? (
                     <div>
                        <InputAdornment 
                          position="end">
                          <img className={classes.errorIcons}  src = { errorIcon }  alt = "errorIcon" />
                        </InputAdornment>
                      </div> 
                ) : null}

                <FormikTextField
                    name="text"
                    className={classes.textForm} 
                    id="filled-multiline-static"
                    label="Расскажите немного о себе"
                    multiline
                    rows={3}
                    /* defaultValue="Default Value" */
                    variant="filled"
                />
                 {errors.sex &&  touched.sex ? (
                     <div>
                        <InputAdornment 
                          position="end">
                          <img className={classes.errorIcons}  src = { errorIcon }  alt = "errorIcon" />
                        </InputAdornment>
                      </div> 
                ) : null}

                <FormikTextField

                  className={classes.fileForm}
                  name="file" 
                  type="file" 
                  label="Добавьте фото" 
                  color="secondary"
                  
                />
                 {errors.file &&  touched.file ? (
                     <div>
                        <InputAdornment 
                          position="end">
                          <img className={classes.errorIcons}  src = { errorIcon }  alt = "errorIcon" />
                        </InputAdornment>
                      </div> 
                ) : null}

              </Form>
            )}
          </Formik>
        {/* </Grid> */}
        </div>
      </div>
    )} 

    export default withStyles(styles) (FormTwo); 