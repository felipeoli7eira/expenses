import styled from 'styled-components'

export const DefaultLayout = styled.main`
  height: 100dvh;
`

export const Aside = styled.aside<{ isopen: boolean }>`
  width: ${({ isopen }) => (isopen ? '80px' : '0px')};

  a,
  button {
    transition: all 0.2s;
    color: ${({ theme }) => theme.colors.purple};

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const LogOutButton = styled.button`
  background: none;
  outline: none;
  border: none;
`
