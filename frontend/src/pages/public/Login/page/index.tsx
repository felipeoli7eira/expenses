import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import { NavLink, Navigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'
import { FloatLabel } from 'primereact/floatlabel'
import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'

import ImageSrcLogin from '../../../../images/svg/login-illustration.svg'

import { Container, Image, GridLogin } from './../design'

function LoginPage(): JSX.Element {
  const { isSignedIn, signIn } = useContext(AuthContext)

  if (isSignedIn) {
    return <Navigate to={'/app'} />
  }

  return (
    <Container className='flex justify-content-center align-items-center h-screen'>
      <GridLogin className='grid grid-nogutter'>
        <div className='col border-round-left-lg bg-black-alpha-40 col-6 p-6 flex justify-content-center align-items-center'>
          <Image src={ImageSrcLogin} alt='Uma mulher segudando um cartaz redondo com um desenho de digital' />
        </div>

        <div className='col border-round-right-lg col-6 bg-black-alpha-50 p-6 flex align-items-center justify-content-center'>
          <form>
            <header className='mb-5'>
              <p className='m-0 text-sm mb-2'>Bem-vindo de volta</p>
              <h1 className='m-0 font-normal text-xl'>Faça login na sua conta</h1>
            </header>

            <FloatLabel>
              <InputText
                className='w-full w'
                id='email'
                value={''}
                onChange={() => {
                  console.log('...')
                }}
              />
              <label htmlFor='email'>E-mail</label>
            </FloatLabel>

            <div className='my-4'></div>

            <FloatLabel>
              <InputText
                className='w-full'
                id='password'
                value={''}
                onChange={() => {
                  console.log('...')
                }}
              />
              <label htmlFor='password'>Senha</label>
            </FloatLabel>

            <div className='my-5 flex justify-content-between align-items-center'>
              <p className='m-0'>
                <Checkbox onChange={(e) => console.log(e.checked)} checked={false}></Checkbox>{' '}
                Lembre de mim
              </p>
              <NavLink to='/esqueceu-senha' className='m-0 text-green-500 no-underline'>
                Esqueceu sua senha?
              </NavLink>
            </div>

            <Button label='Entrar na conta' severity='success' className='w-full mb-3' />
            <Button label='Faça login com o Google' className='w-full bg-black-alpha-40 text-white border-black-alpha-70' />

            <p className='m-0 mt-5 text-center'>
              Não tem uma conta? <NavLink className='text-green-500 no-underline font-light' to={'register'}>Cadastre-se</NavLink>
            </p>
          </form>
        </div>
      </GridLogin>
    </Container>
  )
}

export default LoginPage
