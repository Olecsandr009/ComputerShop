import { useContext } from 'react'

import { CatalogContext } from '../../pages/home'

export const useCatalog = () => useContext(CatalogContext)
