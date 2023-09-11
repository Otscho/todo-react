import React from 'react';
import {Field, FieldProps, Form, Formik} from "formik"
import {Button, Grid, TextField, TextFieldProps, Typography} from "@mui/material";
import Todo from "../../model/Todo";
import * as Yup from 'yup'


interface TodoFormProps {
    todo: Todo
    submitText: String
    submitFunction(todo: Todo): void
    resetFormAfterSubmit: boolean
}

const TodoForm: React.FC<TodoFormProps> = (probs) => {
    return (
        <Formik
            enableReinitialize={true}
            initialValues={
            {title: probs.todo.title}
            }
            validationSchema={validationSchema}
        onSubmit={(values, {resetForm})=>{
            console.log(JSON.stringify(values, null, 2))
            probs.todo.title = values.title
            probs.submitFunction(probs.todo)
            if(probs.resetFormAfterSubmit) {
                resetForm()
        }
        }}
        >
            {({errors, touched}) => {
                return <Form>
                    <Grid container direction='column' spacing={2}>
                        <Grid item>
                            <Field
                                name='title'
                                component={MuiField}
                                fullWidth
                            />
                            {
                                errors.title && touched.title
                                ? <Typography color={'secondary'}>
                                        {errors.title }
                                  </Typography>
                                : null
                            }
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                fullWidth
                                variant={"contained"}
                            >

                                Submit Text</Button>
                        </Grid>
                    </Grid>
                </Form>
            }}
        </Formik>
    );
};

const MuiField: React.FC<FieldProps & TextFieldProps> =
    ({field, form, ...textProps}) => {
        return (
            <TextField {...field} {...textProps}></TextField>
        )
    }

const validationSchema = Yup.object().shape({
    title: Yup.string().required('a todo is required')
})


export default TodoForm;