import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from './Box';
import Flex from './Flex';
import Text from './Text';

storiesOf('Styled System', module)
  .add('Box', () => (
    <Box
      color={['blue', 'black', 'green']}
      width={[1, 1 / 2, 1 / 3]}
      border="1px solid black"
      mt={10}
      mr={10}
      ml={15}
      pt={[30, 15, 0]}
    >
      <Text fontSize={[16, 20, 24]} textAlign="center">
        Box
      </Text>
    </Box>
  ))
  .add('Width', () => (
    <Flex flexDirection="row" alignContent="center">
      <Box
        color={['blue', 'black', 'green']}
        width={[1, 1 / 2, 1 / 3]}
        border="1px solid black"
      >
        <Text fontSize={[16, 20, 24]} textAlign="center">
          Box
        </Text>
      </Box>
      <Box
        color={['green', 'blue', 'black']}
        width={[1, 1 / 2, 1 / 3]}
        border="1px solid green"
      >
        <Text fontSize={[16, 20, 24]} textAlign="center">
          Box
        </Text>
      </Box>
      <Box color="purple" width={[1, 1 / 2, 1 / 3]} border="1px solid blue">
        <Text fontSize={[16, 20, 24]} textAlign="center">
          Box
        </Text>
      </Box>
    </Flex>
  ));
