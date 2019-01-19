import * as React from 'react';

import { backgroundComponent } from "../data/theme";
import { Box } from 'grommet/components/Box';
import { Heading } from 'grommet';

export interface DraggeableProps {
  title: string,
  children: React.ReactNode
}

export const Draggable: React.SFC<DraggeableProps> = ({ title, children }) => (
  <Box background={backgroundComponent} pad="5" border="all" elevation="xlarge">
    <Heading level="3" textAlign="center">{title}</Heading>
    {children}
  </Box>
)