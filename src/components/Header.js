import React from 'react'
import { useSelector } from 'react-redux'
import { Theme } from '.'
import { Logo, LogoDark } from '../assets'
import { HeaderStyle } from '../styles'

export default function Header() {
  const mode = useSelector((state) => state.mode)

  return <HeaderStyle>
    {mode === 'light' ? 
      <Logo alt= ''/> : 
      <LogoDark alt='' /> 
    }
  </HeaderStyle>
}