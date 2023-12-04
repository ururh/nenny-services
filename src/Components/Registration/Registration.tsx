import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ContainerInput, EyeOff, InputEye, Paragraph, Title } from './RegistrationStyled';
import TextInput from '../../shared/TextInput';
import ButtonAuth from '../../shared/ButtonAuth';

// Визначте тип для значень форми
interface FormValues {
  name: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
    // Створіть схему валідації Yup
    const validationSchema = yup.object().shape({
        name: yup.string()
            .min(3, 'Name must be at least 3 characters')
            .required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
            .matches(/\d/, 'Password must contain at least one digit')
            .required('Password is required'),
    });

    // Використовуйте Formik для керування станом форми та валідації
    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
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
            <Title>Registration</Title>
            <Paragraph>
                Thank you for your interest in our platform! In order to register, we need some information. Please provide us
                with the following information.
            </Paragraph>
            <form onSubmit={formik.handleSubmit}>
                <ContainerInput>
                    {formik.touched.name && formik.errors.name && (
                        <p style={{ color: 'red' }}>{formik.errors.name}</p>
                    )}
                    <TextInput
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
          
                    {formik.touched.email && formik.errors.email && (
                        <p style={{ color: 'red' }}>{formik.errors.email}</p>
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
                        <p style={{ color: 'red' }}>{formik.errors.password}</p>
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
                <ButtonAuth buttonText="Sign Up" />
            </form>
        </div>
    );
};

export default RegistrationForm;
