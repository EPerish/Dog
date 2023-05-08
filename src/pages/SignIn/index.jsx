import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { AUTH_DOG_TOKEN } from '../../components/utils/constants';
import { useNavigate } from 'react-router-dom';
import { fetchAuth } from '../../api/user';

export const SignIn = ()=> {
    const [error, setError] = useState(false)
    const navigate =  useNavigate()

    useEffect(() => {
      const token = localStorage.getItem(AUTH_DOG_TOKEN)
      if(token) return navigate('/products')
    }, [navigate])


    const signInSchema = Yup.object().shape({
          password: Yup.string()
          .min(4, 'Слишком короткий пароль!')
          .max(10, 'Слишком длинный пароль!')
          .required('Обязательное поле!'),
        email: Yup.string().email('Неверный адрес электронной почты!').required('Обязательное поле!'),
      });

    const initialValues ={
        email: '',
        password: '',
      }
    
    
      const onSubmit = async (values) => {
        setError(false);

        const res = await fetchAuth(values)
        const response = await res.json()

        if (res.ok) {
            localStorage.setItem(AUTH_DOG_TOKEN, response.token) 

            return navigate('/products')
        }

        return setError(response.message)
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
      <div>
        <Field
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
         <ErrorMessage name='email' component= "p" className = "warning"/>
      </div>  

      <div>
        <Field name="password" placeholder="Пароль" type= "password" />
        <ErrorMessage name = 'password'  component= "p" className = "warning"/>
      </div>

        {error && <p className = 'warning'>{error}</p>}

        <button type="submit">Войти</button>
        <p>Еще не зарегистрированы? 
          <button onclick={()=>navigate('/signup')}
        type="submit">Регистрация</button>
        </p>
      </Form>
    </Formik>
  </>
       
    )
}
