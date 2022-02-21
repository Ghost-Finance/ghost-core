import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia } from '@material-ui/core';
import useStyles from './style';
interface Props {
  title: string;
  to: string;
  image: JSX.Element;
  callback?: React.MouseEventHandler<HTMLAnchorElement>;
}

const GcardLink = ({ title, to, image, callback }: Props) => {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.root} onClick={callback}>
      <Card title={title} className={classes.card}>
        <CardMedia className={classes.media} children={image} />
      </Card>
    </Link>
  );
};

export default GcardLink;
