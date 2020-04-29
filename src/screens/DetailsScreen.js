import React, { useState, useLayoutEffect, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '#/components/Label';
import SubmitButton from '#/components/SubmitButton';

import { API, appid } from '#/config/api';

import COLORS from '#/utils/colors';
import SPACING from '#/utils/spacing';
import TYPOGRAPHY from '#/utils/typography';

import { onAddFavorite, onRemoveFavorite } from '#/store/actions/citiesActions';

const DetailsScreen = ({ route, navigation }) => {
  const { city } = route.params;

  const { favoriteList } = useSelector(({ cities }) => cities);

  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({ main: {}, weather: [{}] });
  const [isFavorite, setIsFavorite] = useState(
    favoriteList.find(storeCity => storeCity.id === city.id)
  );

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    console.log(city);
    axios({
      method: 'get',
      url: API.weather,
      params: { id: city.id, appid, lang: 'pt', units: 'metric' }
    })
      .then(res => {
        console.log(res.data);
        setInfo(res.data);
        setIsLoading(false);
      })
      .catch(e => {
        console.log('erro ao tentar recuperar clima: ', e);
      });
  }, [city]);

  useEffect(() => {
    setIsFavorite(favoriteList.find(storeCity => storeCity.id === city.id));
  }, [favoriteList, city]);

  const {
    main: { temp, temp_max, temp_min },
    name,
    weather
  } = info;

  const renderRowIcon = (iconName, iconColor, temp, desc) => {
    return (
      <StyledRow>
        <Icon name={iconName} size={30} color={iconColor} />
        <Label
          content={`${temp} °C`}
          marginLeft={SPACING.smallPlus}
          typography={TYPOGRAPHY.bigLabelBold}
        />
        <Label
          content={desc}
          marginLeft={SPACING.smallPlus}
          typography={TYPOGRAPHY.bigLabelBold}
        />
      </StyledRow>
    );
  };

  return (
    <StyledContainer activeOpacity={1} onPress={() => navigation.pop()}>
      <StyledContentView>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : (
          <>
            <StyledRow>
              {isFavorite && <Icon name='star' size={45} color={COLORS.star} />}
              <Label
                content={name}
                typography={TYPOGRAPHY.hugeLabelBold}
                marginLeft={SPACING.smallPlus}
              />
            </StyledRow>
            <StyledWeatherImage
              source={{
                uri: `http://openweathermap.org/img/wn/${
                  weather[0].icon
                }@2x.png`
              }}
            />
            <Label
              textAlign='center'
              content={weather[0].description}
              typography={TYPOGRAPHY.hugeLabelBold}
              marginBottom={SPACING.regular}
            />
            {renderRowIcon('thermometer', COLORS.successButton, temp, 'Agora')}
            {renderRowIcon(
              'thermometer-plus',
              COLORS.darkBlue,
              temp_max,
              'Máxima'
            )}
            {renderRowIcon('thermometer-minus', COLORS.red, temp_min, 'Mínima')}
            <SubmitButton
              submit={
                isFavorite
                  ? () =>
                      dispatch(
                        onRemoveFavorite({
                          ...city,
                          icon: weather[0].icon,
                          temp
                        })
                      )
                  : () =>
                      dispatch(
                        onAddFavorite({
                          ...city,
                          icon: weather[0].icon,
                          temp
                        })
                      )
              }
              backgroundColor={
                isFavorite ? COLORS.orange : COLORS.successButton
              }
              title={
                isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
              }
              marginVertical={SPACING.small}
            />
          </>
        )}
      </StyledContentView>
    </StyledContainer>
  );
};

const StyledContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.backgroundModal};
`;

const StyledContentView = styled.View`
  width: ${Dimensions.get('window').width * 0.9}px;
  justify-content: space-between;
  background-color: ${COLORS.secondary};
  border-radius: 5px;
  padding: ${SPACING.regularPlus}px;
`;

const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: ${SPACING.small}px;
`;

const StyledWeatherImage = styled.Image`
  align-self: center;
  resize-mode: contain;
  height: 100px;
  width: 100px;
`;

export default DetailsScreen;
