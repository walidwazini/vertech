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
  const navItems = footer?.navItems || []

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
      <div className={classes.footer} >
        <Gutter>
          <div className={classes.wrap} >
            <Link href={'/'} >
              <img src='/logo-white.svg' alt='logo' width={170} height={170} />
            </Link>
            <p>{footer?.copyright}</p>

            <div className={classes.socialLinks}>
              {navItems.map(item => {
                const icon = item?.link?.icon as Media

                return (
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinkItem}
                  >
                    <img
                      src={icon?.url}
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className={classes.socialIcon}
                    />
                  </Button>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent