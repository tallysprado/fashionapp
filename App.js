import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import {AppLoading} from 'expo'

import * as Font from 'expo-font'

import Icon from 'react-native-vector-icons/Ionicons'

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'

import Category from './screens/Category'
import Settings from './screens/Settings'
import Lojas from './screens/Lojas'
import Services from './screens/Services'

import Products from './screens/Products'
import Product from './screens/Product'

import {colors} from './constants/themes'

import Header from './components/Header'

const SearchIcon = () => {
  return(
    <View style={{paddingRight: 10, position: 'absolute', hidden: 'overflow'}} >
      
      <Icon size={36} color={colors.category} name={Platform.OS ? 'ios-search': 'md-search'}/>

    </View>
  )
}

const CategoryStack = createStackNavigator(
  {
    Categorias: {
      screen: Category,
      
    },
    Itens: {  
      screen: Products,
      
    },
    Descrição: {
      screen: Product,
    },
    
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: '600'
      }, 
      headerTintColor: colors.category,
      
      headerShown: true,
      headerRight: <SearchIcon/>
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

const BottomTab = createBottomTabNavigator(
  {
    Categorias: {
      screen: CategoryStack,
      navigationOptions: {
        tabBarLabel: 'Categorias',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name={Platform.OS === 'ios' ? 'ios-shirt':'md-shirt'} size={25} color={tintColor} />
        ),
        tabBarOptions: {
          activeTintColor: colors.category,
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
          activeTintColor: colors.stores,
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
          activeTintColor: colors.services
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
          activeTintColor: colors.settings,
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

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'PlayfairDisplay-Regular': require('./assets/fonts/PlayfairDisplay-Regular.otf'),
      'SourceSansPro-': require('./assets/fonts/SourceSansPro-Regular.ttf'),
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'SourceSansPro-Light': require('./assets/fonts/SourceSansPro-Light.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const AppContainer = createAppContainer(BottomTab)


  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }else{
    return(
      <AppContainer/>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    right: 10,
  }
});
