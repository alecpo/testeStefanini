import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import Label from '#/components/Label';

import COLORS from '#/utils/colors';
import SPACING from '#/utils/spacing';
import TYPOGRAPHY from '#/utils/typography';

const FavoriteCitiesScreen = ({ navigation }) => {
  const { favoriteList } = useSelector(({ cities }) => cities);

  return (
    <StyledContainer>
      {favoriteList.length > 0 ? (
        favoriteList.map(city => {
          const { name, id, icon, temp } = city;
          return (
            <StyledCardView
              key={id}
              onPress={() => navigation.navigate('Details', { city })}
            >
              <Label content={name} typography={TYPOGRAPHY.mediumLabelBold} />
              <StyledWeatherSection>
                <Label
                  content={`${temp} °C`}
                  marginRight={SPACING.regularPlus}
                  typography={TYPOGRAPHY.mediumLabelBold}
                />
                <StyledWeatherImage
                  source={{
                    uri: `http://openweathermap.org/img/wn/${icon}@2x.png`
                  }}
                />
              </StyledWeatherSection>
            </StyledCardView>
          );
        })
      ) : (
        <StyledEmptyListView>
          <Label
            textAlign='center'
            content='Você ainda não possui dados aqui!'
            typography={TYPOGRAPHY.bigLabelBold}
          />
        </StyledEmptyListView>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  padding: ${SPACING.small}px;
  background-color: ${COLORS.backgroundColor};
`;

const StyledCardView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-vertical: ${SPACING.verySmall}px;
  padding-horizontal: ${SPACING.regularPlus}px;
  padding-vertical: ${SPACING.regular}px;
  border-radius: 7px;
  background-color: ${COLORS.secondary};
  elevation: 5;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
`;

const StyledEmptyListView = styled.View`
  padding-vertical: ${SPACING.big}px;
  padding-horizontal: ${SPACING.big}px;
  margin: ${SPACING.regular}px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: ${COLORS.emptyListBackgroundColorCard};
`;

const StyledWeatherImage = styled.Image`
  align-self: center;
  resize-mode: contain;
  height: 50px;
  width: 50px;
`;

const StyledWeatherSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default FavoriteCitiesScreen;
