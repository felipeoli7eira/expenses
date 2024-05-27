import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import { NavLink, Navigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'
import { FloatLabel } from 'primereact/floatlabel'
import { Button } from 'primereact/button'

import ImageSrcLogin from '../../../../images/svg/login-illustration.svg'

import { Container, Image, GridLogin, Left, Right } from './../design'

function LoginPage(): JSX.Element {
  const { isSignedIn } = useContext(AuthContext)

  if (isSignedIn) {
    return <Navigate to={'/app'} />
  }

  return (
    <Container className='flex justify-content-center align-items-center h-screen'>
      <GridLogin className='grid grid-nogutter'>
        <Left className='col col-6 border-round-left-lg p-6 flex justify-content-center align-items-center'>
          <Image
            src={ImageSrcLogin}
            alt='Uma mulher segudando um cartaz redondo com um desenho de digital'
          />
        </Left>

        <Right className='col col-6 border-round-right-lg p-6 flex align-items-center justify-content-center'>
          <form className='w-full'>
            <header className='mb-4'>
              <p className='m-0'>Bem-vindo de volta</p>
              <h1 className='m-0 font-normal text-xl my-3'>Faça login na sua conta</h1>
            </header>

            <FloatLabel>
              <InputText
                className='w-full'
                id='email'
                value=''
                onChange={() => {
                  console.log('...')
                }}
              />
              <label htmlFor='email' className='font-light'>
                E-mail
              </label>
            </FloatLabel>

            <div className='my-4'></div>

            <FloatLabel>
              <InputText
                className='w-full'
                id='password'
                value=''
                onChange={() => {
                  console.log('...')
                }}
              />
              <label htmlFor='password' className='font-light'>
                Senha
              </label>
            </FloatLabel>

            <div className='my-5 flex justify-content-end align-items-center'>
              {/* <div className='font-light'>
                <Checkbox onChange={(e) => console.log(e.checked)} checked={false}></Checkbox>{' '}
                Lembrar credenciais
              </div> */}
              <NavLink to='/esqueceu-senha' className='m-0 text-green-500 no-underline'>
                Esqueci minha senha
              </NavLink>
            </div>

            <Button label='Acessar' severity='success' className='w-full mb-2' />

            <Button label='Faça login com o Google' className='w-full' />

            <p className='m-0 mt-5 text-center'>
              Não tem uma conta?{' '}
              <NavLink className='text-green-500 no-underline' to={'register'}>
                Cadastre-se
              </NavLink>
            </p>
          </form>
        </Right>
      </GridLogin>
    </Container>
  )
}

export default LoginPage
