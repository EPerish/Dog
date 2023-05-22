import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { AUTH_DOG_TOKEN } from '../../components/utils/constants';
import { useNavigate } from 'react-router-dom';
import { fetchAuth, fetchReg } from '../../api/user';
import { toast } from 'react-toastify';

export const signUp = ()=> {
    const navigate =  useNavigate()

    useEffect( () => {
      const token = localStorage.getItem(AUTH_DOG_TOKEN)
      if(token) return navigate('/products')
    }, [navigate])


    const signUpSchema = Yup.object().shape({
          password: Yup.string()
          .min(4, 'min 4')
          .max(10, 'max 8')
          .required('Обязательное поле!'),
        email: Yup.string().email('Неверный адрес электронной почты!').required('Обязательное поле!'),
        group: Yup.string()
        .min(4, 'Слишком короткий пароль!')
          .max(8, 'Слишком длинный пароль!')
          .required('Обязательное поле!'),
      });

    const initialValues ={
        email: '',
        password: '',
        group:'group-11'
      }
        
      const onSubmit = async (values) => {
        const resReg = await fetchReg(values)
        const responseReg = await resReg.json()

        if (resReg.ok) {
            const resAuth = await fetchAuth( {email: values.email, password: values.password} )
            const responseAuth = await resAuth.json()

            if( resAuth.ok) {
            localStorage.setItem(AUTH_DOG_TOKEN, responseAuth.token) 
            toast.success('Вы успешно зарегистрировались!')
            return navigate('/products') 
            }

        }
        return toast.error(responceReg.message)
    }

    return (
        <>
           <h1>Регистрация</h1>
        <Formik
      initialValues={initialValues}
      onSubmit= {onSubmit}
      validationSchema={signUpSchema}
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

      <div>
        <Field name="group" placeholder="Группа" type= "text" />
        <ErrorMessage name = 'group'  component= "p" className = "warning"/>
      </div>
        <button type="submit">Зарегистрироваться</button>
        <p>Есть аккаунт?
          <button onclick={()=>navigate('/signin')} type="button">Войти</button>
        </p>
      </Form>
    </Formik>
  </>   
 )
}
