import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export const CustomHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  const mediaUrl =
    media &&
    typeof media !== 'string' &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`

  return (
    <Gutter className={classes.hero}>
      Custom Hero Here
    </Gutter>
  )
}