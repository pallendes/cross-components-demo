import styled from 'styled-components';
import { fontSize, textAlign } from 'styled-system';

const Text = styled.div`
  ${fontSize}
  ${textAlign}
`;

Text.propTypes = {
  ...fontSize.propTypes,
  ...textAlign.propTypes
};

export default Text;
