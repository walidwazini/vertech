"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'
import { noHeaderFooterUrls } from '../../../constants'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    <nav className={[
      classes.header,
      noHeaderFooterUrls.includes(pathname) && classes.hide
    ].filter(Boolean).join(' ')} >
      <Gutter className={classes.wrap} >
        <Link href={'/'} >
          <img width={170} height={170} src='/logo-white.svg' alt='logo' />
        </Link>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent