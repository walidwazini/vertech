'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''} >
      <Gutter>
        <ul className={classes.inclusions} >
          {inclusions.map((inlcusion, i) => (
            <li key={inlcusion.title} >
              <div className={classes.iconWrapper} >
                <img src={inlcusion.icon} alt={inlcusion.title} width={36} height={36} className={classes.icon} />
              </div>
              <h5>{inlcusion.title}</h5>
            </li>
          ))}
        </ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent