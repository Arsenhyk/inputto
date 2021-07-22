import React from 'react';
import { Formik, FieldArray } from 'formik'
import * as yup from 'yup'

function Result() {
  const getError = (touched, error) => {
    return touched && error && <p key={error} className={'error'}>{error}</p>
  }
  
  const validationsSchema = yup.object().shape({
    
    file: yup.array().of(yup.object().shape({
      file: yup.mixed().required(),
      type: yup.string().oneOf(['image/png'], 'Добавьте файл с правильным форматов').required(),
      name: yup.string().required()
    }).typeError('Добавьте файл')).required()
  })
  const getFileSchema = (file) => (file && {
    file: file,
    type: file.type,
    name: file.name
  })
  const getArrErrorsMessages = (errors) => {

    const result = []
    errors && Array.isArray(errors) && errors.forEach((value) => {
      if (typeof value === 'string') {
        result.push(value)
      } else {
        Object.values(value).forEach((error) => { result.push(error) })
      }
    })
    return result
  }
  
  return (
    <div>
      <Formik
        initialValues={{
          file: undefined , 
        }}
        validateOnBlur
        onSubmit={(values) => { console.log(values) }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className={<code>from</code>}>
            
            {console.log('file', values.file)}
            {console.log('fileErrors', errors.file)}
            <FieldArray name={'file'}>
              {(arrayHelper) => (
                <>
                  <p>
                    <input
                      type={'file'}
                      name={'file'}
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
                    />
                  </p>
                  {getArrErrorsMessages(errors.file).map((error) => getError(true, error))}
                </>
              )}
            </FieldArray>
            <button
              disabled={!isValid || !dirty}
              onClick={handleSubmit}
              type='submit'
            >Отправить</button>
          </div>
        )}
      </Formik>
    </div>
  );
}
export default (Result);