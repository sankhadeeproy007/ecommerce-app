import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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

export default function Layout({ children, routes }) {
  const history = useHistory();
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  const goToRoute = (path) => () => {
    history.push(path);
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
            {routes
              .filter((route) => route.path !== '/product')
              .map((route) => (
                <ListItem onClick={goToRoute(route.path)}>
                  {route.text}
                </ListItem>
              ))}
          </List>
        </DrawerContent>
      </Drawer>
      <DrawerAppContent>{children}</DrawerAppContent>
    </>
  );
}
