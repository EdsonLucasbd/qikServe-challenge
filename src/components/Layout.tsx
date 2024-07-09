import React from 'react'
import { Header } from './Header'
import { cn } from '../lib/utils'

interface LayoutProps {
  children: React.ReactNode,
  headerColor: string | undefined,
  className: string
}

export const Layout = ({ children, headerColor, className }: LayoutProps) => {
  return (
    <div className={cn('bg-white', className)}>
      <Header bgColor={headerColor} />
      {children}
    </div>
  )
}
