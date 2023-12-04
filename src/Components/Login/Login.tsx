import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ContainerInput, EyeOff, InputEye, Paragraph, Title } from './LoginStyled';
import TextInput from '../../shared/TextInput';
import ButtonAuth from '../../shared/ButtonAuth';

// Визначте тип для значень форми
interface FormValues {
  email: string;
  password: string;
};

const Login: React.FC = () => {
    // Створіть схему валідації Yup
    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
    });

    // Використовуйте Formik для керування станом форми та валідації
    const formik = useFormik<FormValues>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                // Дії, які виконуються при поданні форми
                console.log('Registration successful!', values);
            } catch (error: any) {
                // Змінено тип error на тип Error
                if (error instanceof Error) {
                    console.error('Error during registration:', error.message);
                } else {
                    console.error('Unknown error during registration:', error);
                }
            }
        },
    });

    return (
        <div>
            <Title>Log In</Title>
            <Paragraph>
                Welcome back! Please enter your credentials to access your account and continue your babysitter search.
            </Paragraph>
            <form onSubmit={formik.handleSubmit}>
                <ContainerInput>
                    {formik.touched.email && formik.errors.email && (
                        <div style={{ color: 'red' }}>{formik.errors.email}</div>
                    )}
                    <TextInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div style={{ color: 'red' }}>{formik.errors.password}</div>
                    )}
                    <InputEye>
                        <TextInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <EyeOff />
                    </InputEye>
                </ContainerInput>
    
                <ButtonAuth buttonText="Log In" />
            </form>
        </div>
    );
};

export default Login;
