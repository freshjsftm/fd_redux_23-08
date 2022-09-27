import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import * as ActionsUser from '../../actions/actionsUser'

const UserForm = props => {
  const {createUserRequestDispatch} = props;
  const onSubmit = (values, formikBag) => {
    //post values -> dispatch action
    createUserRequestDispatch(values)
    formikBag.resetForm()
  }
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: '',
        isMale: true
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='firstName' placeholder='firstName' />
        <Field name='lastName' placeholder='lastName' />
        <Field name='email' placeholder='email' />
        <Field name='password' placeholder='password' />
        <Field name='birthday' placeholder='birthday' />
        <Field name='isMale' type='checkbox' /> Male
        <input type='submit' value='Send' />
      </Form>
    </Formik>
  )
}

const mapDispatchToProps = dispatch => ({
  createUserRequestDispatch: values =>
    dispatch(ActionsUser.createUserRequest(values))
})

export default connect(null, mapDispatchToProps)(UserForm);
