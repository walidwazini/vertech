'use client'

import React from 'react'
import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'

import classes from './index.module.scss'

const CategoryCard = ({ category }: { category: Category }) => {
  const media = category.media as Media

  // TODO implement custom hook for specific products to navigate page

  return (
    <Link
      href="/products"
      className={classes.card}
      style={{ backgroundImage: `url(${media.url})` }}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard