import React from 'react';

import ProductListPage from './screens/ProductListPage/index';
import CreateProductPage from './screens/CreateProductPage/index';
import ProductPage from './screens/ProductPage/index';

const routes = [
  {
    path: '/',
    text: 'Home',
    exact: true,
    content: () => <ProductListPage />
  },
  {
    path: '/create-product',
    text: 'Create Product',
    content: () => <CreateProductPage />
  },
  {
    path: '/product',
    text: 'Product',
    content: () => <ProductPage />
  }
];

export default routes;
