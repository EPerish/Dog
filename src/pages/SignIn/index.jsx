import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { AUTH_DOG_TOKEN } from '../../components/utils/constants';
import { useNavigate } from 'react-router-dom';
import { fetchAuth } from '../../api/user';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

export const signin = ()=> {
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
    
    const { mutate } = useMutation({
      mutateFn: async (values) =>{
        const res = await fetchAuth(values)
        const response = await res.json()

        if (res.ok) {
            localStorage.setItem(AUTH_DOG_TOKEN, response.token) 

            return navigate('/products')
        }

        return toast.error(responce.message)
      }
    })

      const onSubmit = async (values) => mutate(values)
        // const res = await fetchAuth(values)
        // const response = await res.json()

        // if (res.ok) {
        //     localStorage.setItem(AUTH_DOG_TOKEN, response.token) 

        //     return navigate('/products')
        // }

        // return toast.error(responce.message)
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
