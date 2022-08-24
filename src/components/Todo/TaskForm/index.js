import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { createTask } from "../../../actions/actionsTodo";

const schemaTaskValidate = yup.object({
  body: yup.string().min(3).max(100).required(),
});

const TaskForm = (props) => {
  const {createTaskDispatch} = props;
  const onSubmit = (values, formikBag) => {
    createTaskDispatch(values);
    formikBag.resetForm();
  };
  return (
    <Formik onSubmit={onSubmit}
      initialValues={{ body: "", isDone: false }}
      validationSchema={schemaTaskValidate}
    >
      <Form>
        <Field name="body" placeholder="add your task" />
        <ErrorMessage name="body" component="div" />
        <input type="submit" value="Add task" />
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createTaskDispatch: (values)=>dispatch(createTask(values))
})

export default connect(null, mapDispatchToProps)(TaskForm);
