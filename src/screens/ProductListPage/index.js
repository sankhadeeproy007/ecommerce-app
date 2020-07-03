import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardPrimaryAction, CardMedia } from '@rmwc/card';
import { Typography } from '@rmwc/typography';

import '@rmwc/card/styles';
import '@rmwc/typography/styles';

import styles from './ProductListPage.module.css';

export default function ProductListPage() {
  const history = useHistory();

  const goToProductPage = () => {
    history.push('/product');
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {Array(8)
          .fill(undefined)
          .map((val, i) => (
            <Card onClick={goToProductPage} key={i} className={styles.card}>
              <CardPrimaryAction>
                <CardMedia
                  square
                  style={{
                    backgroundImage: 'url(images/backgrounds/mb-bg-fb-06.png)'
                  }}
                />
                <div style={{ padding: '0 1rem' }}>
                  <Typography use="headline6" tag="h2">
                    Our Changing Planet
                  </Typography>
                </div>
              </CardPrimaryAction>
            </Card>
          ))}
      </div>
    </div>
  );
}
