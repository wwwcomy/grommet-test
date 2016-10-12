import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

const NotFound = () => {
  return (
    <Box pad='medium'>
      <Heading>Oops...</Heading>
      <Paragraph>Page Not Found</Paragraph>
    </Box>
  );
};

export default  NotFound;
