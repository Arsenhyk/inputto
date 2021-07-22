import React, { useState } from "react";
import { Formik, Form, FieldArray} from 'formik';
import * as Yup from 'yup';
import { FormikTextField } from 'formik-material-fields';
import {formStyle as styles} from '../../Styles';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Input, InputLabel } from "@material-ui/core";
import errorIcon from '../../image/error.svg';
import icoDown from '../../image/icoDown.svg';


 function FormThree(styles) {

  const { classes } = styles;

  const [drag, setDrag] = useState(false)

  const sty = {
    hidden: {
      display: "none",
    },
    importLabel: {
      color: "black",
    },
  };

  const SignupSchema = Yup.object().shape({

      file: Yup.array().of(Yup.object().shape({
        file: Yup.mixed().required(),
        type: Yup.string().oneOf(['image/png'], 'Добавьте файл с правильным форматов').required(),
        name: Yup.string().required()
      }).typeError('Добавьте файл')).required()

    }); 

  const getFileSchema = (file) => (file && {
    file: file,
    type: file.type,
    name: file.name
  })

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
    let filesD = [...e.dataTransfer.files]
    console.log( filesD ) 
    

    const formData = new FormData()
    formData.append('file', filesD[0])
    
    setDrag(false)
  }

  return (
    
    <Formik
            initialValues={{
              
              file: '',
              
            }}
            validateOnBlur
            validationSchema={SignupSchema}
            onSubmit={values => {
              console.log(values);
            }}
          >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
              <Form className= {classes.forms}>
                
                  {console.log('file', values.file)}
                  {console.log('fileErrors', errors.file)}
                  
                  <FieldArray name={'file'}>
                    {(arrayHelper) => (
                    
                    
                      <div className={classes.fileStyle}>
                          <img className={classes.icoDown}  src = { icoDown }  alt = "icoDown" />
                          {drag
                          
                           ?  <div htmlFor="import-button" style={sty.importLabel}>
                            <Input
                              type="file"
                              name="file" 
                              id="import-button"
                              onChange={(event) => {
                                const { files } = event.target
                                const file = getFileSchema(files.item(0))
                                if (!file) {
                                  arrayHelper.remove(0)
                                }
                                if (Array.isArray(values.file)) {
                                  arrayHelper.replace(0, file)
                                } else {
                                  arrayHelper.push(file)
                                }
                              }}
                              
                              style={sty.hidden} 

                                  onDragStart={e => dragStartHandler(e)}
                                  onDragLeave={e => dragLeaveHandler(e)}
                                  onDragOver={e => dragStartHandler(e)}
                                  onDrop={e => onDropHandler(e)}
                                  
                                />
                                
                              <p className={classes.textFile}>
                                Отпустите фото сюда 
                                <br />или
                              </p>
                             
                            </div>   
                          :<div htmlFor="import-button" style={sty.importLabel}> 
                              <Input

                                  type="file"
                                  name="file" 
                                  id="import-button"
                                  onChange={(event) => {
                                    const { files } = event.target
                                    const file = getFileSchema(files.item(0))
                                    if (!file) {
                                      arrayHelper.remove(0)
                                    }
                                    if (Array.isArray(values.file)) {
                                      arrayHelper.replace(0, file)
                                    } else {
                                      arrayHelper.push(file)
                                    }
                                  }}
                                  
                                  style={sty.hidden} 

                              onDragStart={e => dragStartHandler(e)}
                              onDragLeave={e => dragLeaveHandler(e)}
                              onDragOver={e => dragStartHandler(e)}
                              
                            />
                          <p className={classes.textFile}>
                            Перетащите фото сюда 
                            <br />или
                          </p>
       
                          </div> 
                          }         
                          
                          <InputLabel htmlFor="import-button" style={sty.importLabel}>
                            <Input
                                type="file"
                                name="file" 
                                id="import-button"
                                onChange={(event) => {
                                  const { files } = event.target
                                  const file = getFileSchema(files.item(0))
                                  if (!file) {
                                    arrayHelper.remove(0)
                                  }
                                  if (Array.isArray(values.file)) {
                                    arrayHelper.replace(0, file)
                                  } else {
                                    arrayHelper.push(file)
                                  }
                                }}
                                
                             style={sty.hidden}  
                            />
                            {errors.file &&  touched.file ? (
                                      <div>
                                          <InputAdornment 
                                            position="end">
                                            <img className={classes.errorIcons}  src = { errorIcon }  alt = "errorIcon" />
                                          </InputAdornment>
                                        </div> 
                            ) : null}

                             <p className={classes.textFileButton}> нажмите </p>

                          </InputLabel>
 
                      </div>
                     
                    )}
                  </FieldArray>

                  <button
                    disabled={!isValid || !dirty}
                    onClick={handleSubmit}
                    type='submit'
                  > 
                    Отправить
                  </button>
                
              </Form>
            )}
          </Formik>
  );
 };
 export default withStyles(styles) (FormThree); 