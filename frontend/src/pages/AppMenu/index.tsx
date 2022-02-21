import React, { useState } from 'react';
import clsx from 'clsx';
import theme from '../../theme.style';
import useStyles from './index.style';
import {
  CssBaseline,
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import iconGhost from '../../assets/ghost-menu.svg';
import iconBook from '../../assets/book.svg';
import iconDiscord from '../../assets/discord.svg';
import iconTwitter from '../../assets/twitter.svg';
import iconGithub from '../../assets/github.svg';
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';

const AppMenu = (): React.ReactElement => {
  const classes = useStyles(theme);
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
          [classes.hide]: open,
        })}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton className={classes.icon} onClick={handleDrawer}>
            <Close />
          </IconButton>
          <div className={classes.iconLogo}>
            <span>
              <img src={iconGhost} alt="Logo Ghost" />
            </span>
          </div>
        </div>
        <List className={classes.menu}>
          {[
            { title: 'About', link: 'https://ghost.finance/' },
            { title: 'Documentation', link: 'https://docs.ghost.finance/' },
            { title: 'Newletter', link: '#' },
          ].map((item, index) => (
            <ListItem button key={index}>
              <a
                href={item.link}
                className={classes.menuItem}
                target="_blank"
                rel="noreferrer"
              >
                <ListItemText primary={item.title} />
              </a>
            </ListItem>
          ))}
        </List>
        <List className={classes.menuMediaSocial}>
          {[
            { title: 'Litepaper', link: '#', icon: iconBook },
            { title: 'Discord', link: '#', icon: iconDiscord },
            { title: 'Twitter', link: '#', icon: iconTwitter },
            { title: 'Github', link: '#', icon: iconGithub },
          ].map((item, index) => (
            <ListItem
              className={classes.menuMediaSocialItem}
              button
              key={index}
            >
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.icon} alt={item.title} />
              </a>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default AppMenu;
