import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'

import classes from './index.module.scss'

const Categories = ({ categories }: { categories: Category[] }) => {
  
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop by Categories</h3>
        <Link href="/products">Show All</Link>
      </div>

      <div className={classes.list}>
        {categories.map(category => {
          return <p key={category.id} >{category.title}</p>
        })}
      </div>
    </section>
  )
}

export default Categories