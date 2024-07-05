import React from 'react'
import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode,
  headerColor: string | undefined
}

export const Layout = ({ children, headerColor }: LayoutProps) => {
  return (
    <>
      <Header bgColor={headerColor} />
      {children}
    </>
  )
}
