import styled, { css } from 'styled-components';

const setAppearanceColors = ({ theme, appearance, disabled }) => {
  if (disabled) {
    return css`
      background-color: ${theme.button.colorScheme.disabled.bgColor};
    `;
  }

  const colorScheme = appearance
    ? theme.button.colorScheme[appearance]
    : theme.button.colorScheme['primary'];

  return css`
    background-color: ${colorScheme.bgColor};
    color: ${colorScheme.color};
  `;
};

const setAppearanceHoverColors = ({ theme, appearance }) => {
  const colorScheme = appearance
    ? theme.button.colorScheme[appearance].hover
    : theme.button.colorScheme['primary'].hover;

  return css`
    background-color: ${colorScheme.bgColor};
    color: ${colorScheme.color};
  `;
};

const setBaseProps = ({ theme }) => {
  const { shape } = theme.button;

  return css`
    border: ${shape.border};
    border-radius: ${shape.borderRadius}px;
    padding: ${shape.padding};
  `;
};

const setSizeProps = ({ theme, size }) => {
  const fontSize = size ? theme.button.size[size] : theme.button.size['normal'];

  return css`
    font-size: ${fontSize}px;
  `;
};

const setHoverProps = ({ theme, disabled }) => {
  if (disabled) {
    return '';
  }

  return css`
    &:hover,
    &:focus,
    &:active {
      outline: none;

      transition: box-shadow 0.2s ease-in, background-color 0.2s ease-in,
        color 0.2s ease-in;
      box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.4);

      ${setAppearanceHoverColors}
    }
  `;
};

const ButtonStyled = styled.button`
  ${setAppearanceColors}
  ${setBaseProps}
  ${setSizeProps}

  line-height: 1;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  margin: 0;
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-decoration: none;

  ${setHoverProps}
`;

export default ButtonStyled;
