import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import useStyle from './style';

interface Props {
  text: string;
  image?: string;
  error?: boolean;
}

const InfoCard = ({ error, text, image }: Props) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Paper className={`${classes.content} ${error && classes.contentError}`}>
        <Box>
          {image && <img src={image} alt="complex" />}
          <Typography component="h4" variant="h4" className={classes.text}>
            {text}
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default InfoCard;
