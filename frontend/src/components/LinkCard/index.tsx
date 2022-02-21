import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import useStyle from './style';
import arrowIcon from '../../assets/arrow-icon-yellow.png';
import infoImage from '../../assets/info.png';

interface Props {
  title: string;
  text: string;
  link: string | null;
}

const LinkCard = ({ title, text, link }: Props) => {
  const classes = useStyle();
  const imageProps = { src: arrowIcon };

  return (
    <div className={classes.root}>
      <a
        href={link || ''}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <Paper className={classes.content}>
          <Grid className={classes.contentInternalLeft}>
            <img className={classes.imgInfo} alt="complex" src={infoImage} />
          </Grid>

          <Grid className={classes.contentInternalRight}>
            <div>
              <div className={classes.image}>
                <img className={classes.img} alt="complex" {...imageProps} />
              </div>
              <Grid item xs>
                <Typography
                  component="h4"
                  variant="h4"
                  className={classes.title}
                >
                  {title}
                </Typography>
                <Typography
                  component="h4"
                  variant="h4"
                  className={classes.subTitle}
                >
                  {text}
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Paper>
      </a>
    </div>
  );
};

export default LinkCard;
