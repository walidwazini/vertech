"use client"

import React from 'react'

import classes from './index.module.scss'
import { useFilter } from '../../_providers/Filter'
import { HR } from '../HR'
import { Category } from '../../../payload/payload-types'
import { Checkbox } from 'payload/components/forms'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter()

  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}>
          {categories.map((cat: Category) => {
            const isSelected = false

            return (
              // TODO make custom checkbox
              <label>
                <input type='checkbox' key={cat.id} value={cat.id} aria-label={cat.id} />
                {cat.title}
              </label>
              // <Checkbox
              //   key={cat.id}
              //   label={cat.title}
              //   name={cat.title}
              // />
            )
          })}
        </div>
        <HR className={classes.hr} />
        <h6 className={classes.title}>Sort By</h6>
      </div>
    </div>
  )
}

export default Filters