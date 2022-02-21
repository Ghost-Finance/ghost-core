import React from 'react';
import arrowIconError from '../assets/arrow-icon-red.png';
import InfoCard from './InfoCard';
import { NetworkNames } from '../config/enums';
interface InvalidNetworkProps {
  targetNetwork?: NetworkNames;
  isOpen: boolean;
}

const InvalidNetwork = ({ targetNetwork, isOpen }: InvalidNetworkProps) => {
  return (
    <>
      {isOpen && (
        <InfoCard
          error={true}
          image={arrowIconError}
          text={`Don’t forget, we are on ${targetNetwork} network`}
        />
      )}
    </>
  );
};

export default InvalidNetwork;
