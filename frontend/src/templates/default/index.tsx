import React from 'react'

interface Props {
  children: React.ReactElement
}

export default function DefaultTemplate({ children }: Props) {
  return (
    <div className='app-layout-main'>
      <header>header default</header>

      <main className='content'>{children}</main>
    </div>
  )
}
