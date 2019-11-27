/* @flow */

import React from 'react';
import { View } from 'react-native';
import { createNavigator, createNavigationContainer, TabRouter } from 'react-navigation';

const TabsWithChild = props => (
  <View>
    {props.children}
  </View>
);

export default NavigationView => (routeConfigs, navigationConfig = {}) => {
  console.log(':::NavigationView');
  const router = TabRouter(routeConfigs, navigationConfig);
  return (
    <TabsWithChild
      router={router}>
      {
        createNavigationContainer(
          createNavigator(NavigationView, router, navigationConfig)
        )
      }
    </TabsWithChild>
  )
  //return createNavigationContainer(createNavigator(NavigationView, router, navigationConfig));
};
