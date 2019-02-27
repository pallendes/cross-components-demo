import styled from 'styled-components';
import { alignItems, alignContent, flexDirection } from 'styled-system';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${alignItems}
  ${alignContent}
  ${flexDirection}
`;

Flex.propTypes = {
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...flexDirection.propTypes
};

export default Flex;
