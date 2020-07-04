import React from 'react';
import { Elevation } from '@rmwc/elevation';
import { TextField } from '@rmwc/textfield';
import { Typography } from '@rmwc/typography';
import { Button } from '@rmwc/button';
import { useForm } from 'react-hook-form';

import '@rmwc/textfield/styles';

import styles from './CreateProductPage.module.css';

export default function CreateProductPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.container}>
      <Elevation z={3} className={styles.formContainer}>
        <Typography use="headline5">Create Product</Typography>
        <TextField
          inputRef={register}
          name="name"
          className={styles.formControl}
          fullwidth
          placeholder="Product Name"
        />
        <TextField
          inputRef={register}
          name="price"
          className={styles.formControl}
          fullwidth
          type="number"
          placeholder="Product Price"
        />
        <TextField
          inputRef={register}
          name="description"
          className={styles.formControl}
          fullwidth
          textarea
          placeholder="Description"
          rows={2}
        />
        <TextField
          inputRef={register}
          name="image"
          className={styles.formControl}
          fullwidth
          placeholder="Image"
          type="file"
        />
        <div className={styles.row}>
          <Button style={{ marginRight: 10 }} raised label="Cancel" />
          <Button raised onClick={handleSubmit(onSubmit)} label="Create" />
        </div>
      </Elevation>
    </div>
  );
}
