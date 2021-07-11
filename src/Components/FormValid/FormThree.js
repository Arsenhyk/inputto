import React, { useState } from "react";
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { FormikTextField } from 'formik-material-fields';
import {formStyle as styles} from '../../Styles';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

import errorIcon from '../../image/error.svg';
import icoDown from '../../image/icoDown.svg';

const SignupSchema = Yup.object().shape({
  file: Yup.string("Enter a name")
    .min(2, ' Enter a valid name ')
    .max(50, ' Enter a valid name ')
    .required(' Required '),
  }); 

 const FormThree = (styles) => {
  const { classes } = styles;
  const [drag, setDrag] = useState(false)


  function dragStartHandler(e) {
    e.preventDefault()
    setDrag(true)
  }
  function dragLeaveHandler(e) {
    e.preventDefault()
    setDrag(false)
  }
  function onDropHandler(e) {
    e.preventDefault()
    let files = [...e.dataTransfer.files]
    console.log(files)

    const formData = new FormData()
    formData.append('file', files[0])
    

    setDrag(false)
  }

  return (
    
    <Formik
            initialValues={{
              
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

              
    <div className={classes.fileStyle}>
        <img className={classes.icoDown}  src = { icoDown }  alt = "icoDown" />
        {drag
        
        ? <div
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
            onDrop={e => onDropHandler(e)}
          >Отпустите фото сюда или</div>    
        : <div
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
          >Перетащите фото сюда или </div>
        }
        
        
        <FormikTextField
          name="file" 
          type="file" 
          
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
      
    </div>
    </Form>
    )}
    </Formik>
  );
 };
 export default withStyles(styles) (FormThree); 