import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import COLORS from '#/utils/colors';
import TYPOGRAPHY from '#/utils/typography';
import typographyPropType from '#/utils/customPropTypes/typographyPropType';

const Label = props => {
  const {
    content,
    typography,
    textAlign,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    color
  } = props;

  return (
    <StyledText
      {...props}
      typography={typography}
      textAlign={textAlign}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      color={color}
    >
      {content}
    </StyledText>
  );
};

const StyledText = styled.Text`
  font-size: ${({ typography: { size } }) => size};
  font-weight: ${({ typography: { weight } }) => weight};
  text-align: ${({ textAlign }) => textAlign};
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  color: ${({ color }) => color};
`;

Label.defaultProps = {
  color: COLORS.defaultText,
  textAlign: 'left',
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  typography: TYPOGRAPHY.defaultLabelBold
};

Label.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  typography: typographyPropType
};

export default Label;
