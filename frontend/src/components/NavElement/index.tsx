import React, { ReactElement } from 'react';
import useStyles from './style';
import { Drawer, Hidden } from '@material-ui/core';

interface Props {
  children?: JSX.Element[] | JSX.Element;
  styleWithBackgound?: boolean;
}

const NavElement = ({ children, styleWithBackgound }: Props): ReactElement => {
  const classes = useStyles();

  return (
    <>
      <nav className={classes.root} aria-label="C-Ratio">
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: styleWithBackgound
                ? classes.drawerPaper
                : classes.drawerPaperWithoutBackground,
            }}
            variant="permanent"
            open
          >
            <div className={classes.content}>{children}</div>
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
};

export default NavElement;
