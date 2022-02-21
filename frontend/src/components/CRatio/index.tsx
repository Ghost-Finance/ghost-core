import { useState, useRef, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './styles';

type Props = {
  size: number;
  progress: number;
  strokeWidth: number;
  circleOneStroke?: string;
  circleTwoStroke?: string;
  errorColorStroke?: string;
};

const CircularProgressBar = (props: Props) => {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
    errorColorStroke,
  } = props;
  const [colorStroke, setColorStroke] = useState(circleTwoStroke);

  const center = size / 2;
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((900 - progress) / 900) * circumference;
    const color = progress < 300 ? errorColorStroke : circleTwoStroke;

    setOffset(progressOffset);
    setColorStroke(color);
  }, [
    setOffset,
    setColorStroke,
    progress,
    colorStroke,
    circumference,
    circleTwoStroke,
    errorColorStroke,
    offset,
  ]);

  const SVGCircleProgress = () => (
    <svg className={classes.svg} width={size} height={size}>
      <circle
        className={classes.svgCircle}
        stroke={circleOneStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth * 2}
      />
      <circle
        className={classes.svgCircle}
        ref={circleRef}
        stroke={colorStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );

  return (
    <Box
      position="relative"
      display="flex"
      alignSelf="center"
      className={classes.root}
    >
      <SVGCircleProgress />
      <div className={classes.infos} style={{ width: size, height: size }}>
        <div className={classes.svgCircleText}>
          {`${isNaN(progress) || progress <= 0 ? '-' : Math.round(progress)}%`}
        </div>
        <div className={classes.text}>C-RATIO</div>
      </div>
    </Box>
  );
};

export default CircularProgressBar;
