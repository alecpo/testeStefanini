import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';
import AllCitiesScreen from '#/screens/AllCitiesScreen';
import FavoriteCitiesScreen from '#/screens/FavoriteCitiesScreen';

import COLORS from '#/utils/colors';

const MainTopTabNavigator = () => {
  const { Navigator, Screen } = createMaterialTopTabNavigator();

  return (
    <>
      <StyledSafeAreaView>
        <Navigator
          tabBarOptions={{
            activeTintColor: COLORS.primary,
            inactiveTintColor: COLORS.defaultGray,
            labelStyle: { fontWeight: 'bold' },
            indicatorStyle: { backgroundColor: COLORS.primary }
          }}
          initialRouteName='Reservations'
          lazy
        >
          <Screen
            name='FavoriteCities'
            component={FavoriteCitiesScreen}
            options={{ tabBarLabel: 'FAVORITOS' }}
          />
          <Screen
            name='AllCities'
            component={AllCitiesScreen}
            options={{ tabBarLabel: 'CIDADES' }}
          />
        </Navigator>
      </StyledSafeAreaView>
    </>
  );
};

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.primary};
`;

export default MainTopTabNavigator;
