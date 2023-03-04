/* eslint-disable max-len */
import React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import FormComponent from '../components/LoginAndRegistrationComponents/FormComponent/FormComponent';
import RegisterInputs from '../components/LoginAndRegistrationComponents/RegisterInputs/RegisterInputs';
import { post } from '../Plugins/helpers';

type RegisterFormInputValues = {
  email?: string,
  username?: string,
  passwordOne?: string,
  repeatPassword?: string,
};
const validationSchema = yup.object({
  email: yup.string()
    .required('Requiered'),
    username: yup.string()
    .required('Requiered'),
    passwordOne: yup.string()
    .required('Requiered'),
    repeatPassword: yup.string()
    .required('Requiered'),
});

const RegisterPage = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMsg, setErrorMsg] = React.useState(true);
  const [errorText, setErrorText] = React.useState('');
  const {
    values, touched, errors, isValid, dirty,
    handleChange, handleBlur, handleSubmit, resetForm,

        } = useFormik<RegisterFormInputValues>({
              initialValues: {
                    email: '',
                    passwordOne: '',
                    repeatPassword: '',
                    username: '',
                  },
                  onSubmit(formData) {
                    const sendRegisterData = async () => {
                       try {
                         const res = await post('registerUser', formData);
                         setErrorText(res.message);
                         resetForm();
                       if (!res.error) {
                         setErrorMsg(!errorMsg);
                         setTimeout(() => {
                           navigate('/LoginPage');
                         }, 1000);
                       }
                       } catch (err) {
                         console.log(err);
                       }
                     };
                     sendRegisterData();
                 },
                  validationSchema,
                  });

                  const getToLoginPage = () => {
                    navigate('/LoginPage');
                  };
  return (

    <FormComponent
      formName="Register"
      onRegistration="Registration successful!"
      buttonText="Register"
      className="RegisterPageBG"
      handleSubmit={handleSubmit}
      isValid={dirty && isValid}
      successMsg={errorMsg}
    >
      <HowToRegIcon sx={{ fontSize: 50, alignSelf: 'center' }} color="primary" />
      <RegisterInputs
        email={values.email}
        onEmailChange={handleChange}
        onEmailError={touched.email && (Boolean(errors.email))}
        username={values.username}
        emailHelperText={touched.email && errors.email}
        onUserNameChange={handleChange}
        onUserNameError={touched.username && Boolean(errors.username)}
        userNameHelperText={touched.username && errors.username}
        passwordOne={values.passwordOne}
        onPasswordError={touched.passwordOne && Boolean(errors.passwordOne)}
        onPasswordChange={handleChange}
        passwordHelperText={touched.passwordOne && errors.passwordOne}
        repeatPassword={values.repeatPassword}
        onRepeatPasswordChange={handleChange}
        onRepeatPasswordError={touched.repeatPassword && Boolean(errors.repeatPassword)}
        repeatPasswordHelperText={touched.repeatPassword && errors.repeatPassword}
        onBlur={handleBlur}
      />
      {dirty ? '' : <Typography sx={{ color: 'red' }} variant="h6">{errorText}</Typography>}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography>Already have an account?</Typography>
        <Button onClick={getToLoginPage}>Log In</Button>
      </Box>
    </FormComponent>
    );
};
export default RegisterPage;
