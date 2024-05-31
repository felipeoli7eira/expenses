import React from 'react'

import DefaultTemplateProps from '../../interfaces/DefaultTemplateProps'
import { DefaultLayout } from './design'

import Navigation from './components/Navigation'

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <DefaultLayout className='default-template flex'>
      <Navigation />
      <main className='default-template-content w-full p-3'>{children}</main>
    </DefaultLayout>
  )
}
