import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "../FormValid/FormThree";
import Paper from "@material-ui/core/Paper";
import * as Yup from 'yup';

/* valid */
const validationSchema = Yup.object().shape({
    name: Yup.string("Enter a name")
    .required("Name is required"),

    email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

    password: Yup.string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),

    confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf
    ([Yup.ref("password")],"Password does not match"),
  }); 
/* style */
const styles = theme => ({
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
});

/* FormThree */
class InputForm extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }



 render() {
   /* props style */
    const classes = this.props;
  /* props values */
  const values = { name: "", email: "", confirmPassword: "", password: "" };

  return (
     <React.Fragment>
       {/* conteiner */}
          <div className={classes.container}>
          {/* conteiner */}
        <Paper elevation={1} className={classes.paper}>
        <h1>Form</h1>
        
        <Formik
            render={props => <Form {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
        />
         </Paper>
       </div>
     </React.Fragment>
   );
 }
}

export default withStyles(styles)(InputForm);

