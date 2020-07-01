import React, { useState } from 'react';
import { Elevation } from '@rmwc/elevation';
import { SimpleTopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';
import { Drawer, DrawerContent, DrawerAppContent } from '@rmwc/drawer';
import { List, ListItem } from '@rmwc/list';

import '@rmwc/top-app-bar/styles';
import '@rmwc/list/styles';
import '@rmwc/drawer/styles';
import '@rmwc/elevation/styles';

import styles from './Layout.module.css';

const TOPBAR_ACTIONS = [
  {
    icon: 'person',
    onClick: () => console.log('Do Something')
  }
];

export default function Layout({ children }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  return (
    <>
      <Elevation z={4}>
        <SimpleTopAppBar
          title="Ecommerce Header"
          fixed
          navigationIcon
          onNav={toggleDrawer}
          actionItems={TOPBAR_ACTIONS}
        />
        <TopAppBarFixedAdjust />
      </Elevation>
      <Drawer className={styles.fixedDrawer} dismissible open={showDrawer}>
        <DrawerContent>
          <List>
            <ListItem>Cookies</ListItem>
            <ListItem>Pizza</ListItem>
            <ListItem>Icecream</ListItem>
          </List>
        </DrawerContent>
      </Drawer>
      <DrawerAppContent>{children}</DrawerAppContent>
    </>
  );
}
