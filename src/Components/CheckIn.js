
import React, {Component} from 'react'

import { Card, CardContent, Grid, Box } from "@material-ui/core"
import { Field, Form, Formik } from "formik";
import { CheckboxWithLabel, TextField } from "formik-material-ui"

import {withStyles} from '@material-ui/core/styles'

import {checkIn as styles} from '../Styles';

class CheckIn extends Component{
    render(){

        const { classes } = this.props;

    
        return (

            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">

                <main className={classes.mains}>
                    
                    

                        <Grid container spacing={8} justify="center">

                            <Grid item md={9}>

                                <Card>
                                  
                                    <CardContent>

                                        <Formik
                                                    
                                            initialValue={{
                                            firstName: '',
                                            lastName: '',
                                            millionaire: false,
                                            money: 0,
                                            description: ''
                                            }} onSubmit={ () => {}}

                                        >

                                            <Form>

                                                <Field name="firstName" component={TextField} lable="First Name" />
                                                <Field name="lastName" component={TextField} lable="Last Name" />
                                                <Field name="millionaire" component={CheckboxWithLabel} Label={{ label: 'I am a millionaire' }} />
                                                <Field name="money" type="number" component={TextField} lable="All the money I have" />
                                                <Field name="description" component={TextField} lable="Descriptione" />

                                            </Form>

                                        </Formik>

                                    </CardContent>

                                </Card>


                            </Grid>

                        </Grid>      

                    

                </main>

            </Box>
            

        )

    }

}

        
   






export default withStyles(styles)(CheckIn);