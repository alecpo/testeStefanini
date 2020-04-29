import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTopTabNavigator from '#/navigation/MainTopTabNavigator';
import DetailsScreen from '#/screens/DetailsScreen';

import logo from '#/assets/img/logo.png';

import COLORS from '#/utils/colors';
import SPACING from '#/utils/spacing';

const RootStackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  const config = {
    animation: 'spring',
    config: {
      stiffness: 800,
      damping: 90,
      mass: 4,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.06
    }
  };

  const modalAnimationConfig = {
    transitionSpec: {
      open: config,
      close: config
    },
    headerShown: false,
    cardStyle: { backgroundColor: 'transparent' },
    cardOverlayEnabled: true,
    cardStyleInterpolator: ({ current, layouts }) => {
      const { progress } = current;
      const { screen } = layouts;
      return {
        cardStyle: {
          transform: [
            {
              translateY: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [screen.height, 0]
              })
            }
          ]
        },
        overlayStyle: {
          opacity: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.4],
            extrapolate: 'clamp'
          })
        }
      };
    }
  };

  return (
    <Navigator
      screenOptions={{
        headerTitle: () => (
          <StyledLogo source={logo} style={{ tintColor: COLORS.secondary }} />
        ),
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTintColor: COLORS.secondary,
        headerTitleAlign: 'center'
      }}
      headerMode='screen'
      mode='modal'
    >
      <>
        <Screen name='Main' component={MainTopTabNavigator} />
        <Screen
          options={modalAnimationConfig}
          name='Details'
          component={DetailsScreen}
        />
      </>
    </Navigator>
  );
};

const StyledLogo = styled.Image`
  width: 140px;
  height: 40px;
  resize-mode: contain;
  margin-bottom: ${SPACING.smallPlus}px;
`;

export default RootStackNavigator;
