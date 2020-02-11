import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons'

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'

import Category from './screens/Category'
import Settings from './screens/Settings'
import Lojas from './screens/Lojas'
import Services from './screens/Services'

const CategoryStack = createStackNavigator(
  {
    Home: {
      screen: Category,
    }
  },
  {
    defaultNavigationOptions: {
        headerShown: false,
      
    }
  }
)

const LojasStack = createStackNavigator(
  {
    Lojas: {
      screen: Lojas,
    }
  },
  {
    defaultNavigationOptions: {
    
      headerShown: false,
    }
  }
)


const ServicesStack = createStackNavigator(
  {
    Services: {
      screen: Services,
    }
  },
  {
    defaultNavigationOptions: {
    
      headerShown: false,
    }
  }
)

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: Settings,
    }
  },
  {
    defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: "#42f44b"
    //   },
    //   headerTintColor: '#ffffff',
    //  title: 'Configurações',
      headerShown: false,
      
    }
  }
)

const App = createBottomTabNavigator(
  {
    Home: {
      screen: CategoryStack,
      navigationOptions: {
        tabBarLabel: 'Categorias',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name={Platform.OS === 'ios' ? 'ios-shirt':'md-shirt'} size={25} color={tintColor} />
        ),
        tabBarOptions: {
          activeTintColor: '#FF3578',
        }

      }
    },

    Lojas: {
      screen: LojasStack,
      navigationOptions: {
        tabBarLabel: 'Lojas',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name={Platform.OS === 'ios' ? 'ios-business':'md-business'} size={25} color={tintColor} />
        ),
        tabBarOptions: {
          activeTintColor: '#0875C7',
        }
      }
    },

    Services: {
      screen: ServicesStack,
      navigationOptions: {
        tabBarLabel: 'Serviços',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name={Platform.OS === 'ios' ? 'ios-construct':'md-construct'} size={25} color={tintColor} />
        ),
        tabBarOptions: {
          activeTintColor: '#FF9E33'
        }
        
      }
    },

    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarLabel: 'Configurações',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name={Platform.OS === 'ios' ? 'ios-settings':'md-settings'} size={25} color={tintColor} />
        ),
        tabBarOptions: {
          activeTintColor: '#84B72A',
        }
      }
    },
  },
  {
    tabBarOptions:  {
      //activeTintColor: '',
      //inactiveTintColor: 'gray',
      showIcon: true,
    }
  }
)

export default createAppContainer(App)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
