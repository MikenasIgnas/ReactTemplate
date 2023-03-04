/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React from 'react';

import LoginIcon from '@mui/icons-material/Login';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormComponent from '../components/LoginAndRegistrationComponents/FormComponent/FormComponent';
import LoginInputs from '../components/LoginAndRegistrationComponents/LoginInputs/LoginInputs';
import { useAppDispatch } from '../store/hooks';
import { setUserData } from '../auth/AuthReducer/reducer';
import { post } from '../Plugins/helpers';

type LoginInputValues = {
  email?: string,
  password?: string,
};
const validationSchema = yup.object({
  email: yup.string()
  .required('Requiered'),
  password: yup.string()
  .required('Requiered'),

});
const LoginPage = () => {
  const [logIn, setLogIn] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    values, touched, errors, isValid, dirty,
    handleChange, handleBlur, handleSubmit, resetForm,

        } = useFormik<LoginInputValues>({
              initialValues: {
                  email: '',
                    password: '',
                  },
                  onSubmit(formikValues) {
                    const postData = async () => {
                        const res = await post('logInUser', formikValues);
                        if (!res.error) {
                          if (formikValues.email) {
                            localStorage.setItem('username', res.data.username);
                            localStorage.setItem('id', res.data._id);
                            localStorage.setItem('secret', res.data.secret);
                            dispatch(setUserData({ username: res.data.username, id: res.data._id, secret: res.data.secret }));
                          }

                          navigate('/ChecklistPage');
                        } else {
                          setErrorMsg(res.message);
                        }
                      };
                      postData();
                      resetForm();
                      setLogIn(!logIn);
                    },
      validationSchema,
    });
    const goToRegisterPage = () => {
      navigate('/RegisterPage');
    };
    return (

      <FormComponent
        formName="Log In"
        buttonText="Log In"
        className="LoginPageBG"
        handleSubmit={handleSubmit}
        isValid={dirty && isValid}
      >
        <LoginIcon sx={{ fontSize: 50, alignSelf: 'center' }} color="primary" />
        <LoginInputs
          email={values.email}
          password={values.password}
          onEmailChange={handleChange}
          onPasswordChange={handleChange}
          onEmailError={touched.email && (Boolean(errors.email))}
          emailHelperText={touched.email && errors.email}
          onPasswordError={touched.password && (Boolean(errors.password))}
          passwordHelperText={touched.password && errors.password}
          onBlur={handleBlur}
        />
        <Typography sx={{ color: 'red' }}>{errorMsg}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>Dont have an account?</Typography>
          <Button onClick={goToRegisterPage}>LOG IN</Button>
        </Box>
      </FormComponent>
      );
};

export default LoginPage;
