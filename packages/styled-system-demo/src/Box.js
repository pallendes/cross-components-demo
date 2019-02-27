import styled from 'styled-components';
import {
  color,
  space,
  width,
  alignItems,
  alignContent,
  border
} from 'styled-system';

const Box = styled.div`
  ${color}
  ${space}
  ${width}
  ${border}
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...border.propTypes
};

export default Box;
