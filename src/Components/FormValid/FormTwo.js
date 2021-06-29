import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from "yup";
 import TextField from '@material-ui/core/TextField';
 import InputAdornment from '@material-ui/core/InputAdornment';
 import { withStyles } from '@material-ui/core/styles';
 import {formStyle as styles} from '../../Styles';

 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(70, 'Too Long!')
     .required('Required'),
   email: Yup.string()
     .email('Invalid email')
     .required('Required'),
 });
 
 function FormTwo(styles) {
  
  const { classes } = styles;

  return(
   <div className={classes.rootForm}>

     <h1>Signup</h1>
     
     <Formik
        
        initialValues={{
          firstName: '',
          email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >

       {({ errors, touched }) => (
         <Form className= {classes.forms}>
           <Field className={classes.textForm} type="text" name="firstName" label="Имя" variant="filled"  />
            {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
            ) : null}
            <ErrorMessage name="firstName" />

            <TextField
                className={classes.textForm} 
                name="email" 
                type="email" 
                label="Email" 
                variant="filled"
                InputProps={{
                endAdornment:(<InputAdornment position="end">@gmail.com</InputAdornment>)
                }}
                />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <ErrorMessage name="email" />

            <Field name="name"  />
            {errors.name && touched.name ? (
            <div>{errors.name}</div>
            ) : null}
            <ErrorMessage name="name" />

            <Field name="email" type="email" />
            {errors.email && touched.email ? (
             <div>{errors.email}</div>
            ) : null}
            <ErrorMessage name="email" />
              
          </Form>
       )}

     </Formik>

   </div>
)
}
export default withStyles (styles) (FormTwo);