import React from 'react';
import styled from 'styled-components/native';

import Label from '#/components/Label';

import COLORS from '#/utils/colors';
import SPACING from '#/utils/spacing';

import citiesList from '#/city.list.json';

const AllCitiesScreen = ({ navigation }) => {
  return (
    <StyledContainer>
      {citiesList.data.map(city => (
        <StyledCardView
          key={city.id}
          onPress={() => navigation.navigate('Details', { city })}
        >
          <Label content={city.name} />
        </StyledCardView>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.ScrollView`
  flex: 1;
  padding: ${SPACING.smallPlus}px;
  background-color: ${COLORS.backgroundColor};
`;

const StyledCardView = styled.TouchableOpacity`
  margin-vertical: ${SPACING.small}px;
  padding-horizontal: ${SPACING.smallPlus}px;
  padding-vertical: ${SPACING.regular}px;
  border-radius: 7px;
  background-color: ${COLORS.secondary};
  elevation: 5;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
`;

export default AllCitiesScreen;
