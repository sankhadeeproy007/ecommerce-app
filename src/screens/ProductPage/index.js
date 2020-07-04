import React from 'react';
import { Elevation } from '@rmwc/elevation';
import { Typography } from '@rmwc/typography';

import styles from './ProductPage.module.css';

export default function ProductPage() {
  return (
    <div className={styles.container}>
      <Elevation className={styles.productCard} z={3}>
        <div className={styles.productImage}>Image here</div>
        <div className={styles.content}>
          <Typography use="headline5">Product name</Typography>
          <Typography use="headline6">$60</Typography>
          <Typography use="body2">
            Product descvription Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Officia ratione illo at corrupti aut. Expedita
            commodi voluptas obcaecati numquam, aut enim qui, nostrum impedit
            quo odit cum rerum tempora quisquam.
          </Typography>
        </div>
      </Elevation>
    </div>
  );
}
