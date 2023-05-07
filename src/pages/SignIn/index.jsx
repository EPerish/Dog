import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export const SignIn = ()=> {

    const signInSchema = Yup.object().shape({
          password: Yup.string()
          .min(4, 'Слишком коротко!')
          .max(10, 'Слишком длинный!')
          .required('Обязательно'),
        email: Yup.string().email('Неверный адрес электронной почты').required('Обязательно'),
      });

    const initialValues ={
        email: '',
        password: '',
      }
    
    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <>
        <h1>Авторизация</h1>
        <Formik
      initialValues={initialValues}
      onSubmit= {onSubmit}
      validationSchema={signInSchema}
    >
      
      <Form>
      
        <Field
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
         
        <Field name="password" placeholder="Пароль" type= "password" />


        <button type="submit">Submit</button>
      </Form>
    </Formik>
  
        </>
    )
}
