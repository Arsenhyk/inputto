import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import   { FormOne }   from "../FormValid/FormOne";
import * as Yup from 'yup';
import {formStyle as styles} from '../../Styles';

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

/* const styles = theme => ({
 paper: {
   marginTop: theme.spacing.unit * 8,
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
     .spacing.unit * 5}px`
 },
 container: {
   maxWidth: "200px"
 }
}); */

class FormOneValid extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }



 render() {
    /* const {classes} = styles; */
  const values = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    rPassword: ''
  };
  return (
     <React.Fragment>
          {/* <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
        <h1>Form</h1> */}
        <Formik
            render =  {props => <FormOne {...props} />} 
            initialValues={values}
            SignupSchema={SignupSchema}
        />
        {/*  </Paper>
       </div> */}
     </React.Fragment>
   );
 }
}

export default withStyles(styles)(FormOneValid);