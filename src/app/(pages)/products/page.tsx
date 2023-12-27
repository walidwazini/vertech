import React from 'react'
import { draftMode } from 'next/headers'

import { Gutter } from '../../_components/Gutter'
import Filters from '../../_components/Filters'
import { Blocks } from '../../_components/Blocks'
import { Category, Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'

import classes from './index.module.scss'
import { fetchDocs } from '../../_api/fetchDocs'
import { HR } from '../../_components/HR'

const ProductsPage = async () => {
  const {isEnabled: isDraftMode} = draftMode()
  let page : Page | null = null 
  let categories: Category[] | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages', slug: "products", draft: isDraftMode
    })

    categories = await fetchDocs<Category>('categories')
  } catch (error) {
    console.log(error)
  }

  return (
    <div>
      <Gutter className={classes.products} >
        <Filters />
        <Blocks blocks={page.layout} disableTopPadding={true} />
      </Gutter>
      <HR />
    </div>
  )
}

export default ProductsPage