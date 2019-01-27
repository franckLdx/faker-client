import * as React from 'react';
import { SmallScreenHome as SmallScreen } from './smallScreen';
import { BigSreen } from './bigScreen';
import Responsive from 'react-responsive';

const breakpoint = 576;

interface Props {
  children: React.ReactNode;
}

const Mobile = (props: Props) => <Responsive {...props} maxWidth={breakpoint} />;
const Default = (props: Props) => <Responsive {...props} minWidth={breakpoint + 1} />;

export const Home: React.SFC<{}> = () => (
  <>
    <Mobile><SmallScreen /></Mobile>
    <Default><BigSreen /></Default>
  </>
);
