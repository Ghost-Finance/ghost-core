import {
  MintCardIcon,
  BurnCardIcon,
  RewardCardIcon,
  SynthCardIcon,
} from '../../components/Icons';

const cardsData = [
  {
    to: '/mint',
    title: 'Mint gDAI',
    image: <MintCardIcon />,
  },
  {
    to: '/mint-burn',
    title: 'Mint and Burn',
    image: <BurnCardIcon />,
  },
  {
    to: '/rewards',
    title: 'Claim Rewards',
    image: <RewardCardIcon />,
  },
  {
    to: '/stake',
    title: 'Stake Synths',
    image: <SynthCardIcon />,
  },
];

export default cardsData;
