/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation'
//引入图标
import Ionicons from 'react-native-vector-icons/Ionicons'
//引入页面
import HomeScreen from './components/HomeScreen/HomeScreen'
import MineScreen from './components/MineScreen/MineScreen'
import ProductScreen from './components/ProductScreen/ProductScreen'
import ProductDetailsScreen from './components/ProductScreen/ProductDetailScreen'
import SearchScreen from './components/SearchScreen/SearchScreen'



//每一个页面上stack navigator
const HomeStack = createStackNavigator({
  Home:{screen:HomeScreen}
});

const MineStack = createStackNavigator({
  Mine:{screen:MineScreen}
});



const ProductStack = createStackNavigator(
  {
    Product:{screen:ProductScreen},
    ProductDetails:{screen:ProductDetailsScreen}
  },
  {
    initialRouteName:'Product',
    //跨页面共享通用的navigationOptions
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:'#f4511e',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold',
      },
    },
  }
);

const SearchStack = createStackNavigator({
  Search:{screen:SearchScreen}
});


const Tabnavigator = createBottomTabNavigator({
  Home:HomeStack,
  Mine:MineStack,
  Product:ProductStack,
  Search:SearchStack,
},
//自定义外观并设置图标
{
  initialRouteName:'Home',
  defaultNavigationOptions:({navigation}) =>({
    tabBarIcon:({focused,horizontal,tintColor}) => {
      const {routeName} = navigation.state;
      let iconName;
      if(routeName === 'Home'){
        iconName ='ios-home';

      } else if(routeName === 'Mine'){
        iconName = 'ios-person';

      }else if(routeName === 'Product'){
        iconName = 'ios-book';

      }else if(routeName === 'Search'){
        iconName = 'ios-search';
      }

      return <Ionicons name={iconName} size={25} color={tintColor}/>;
    },
  }),
  tabBarOptions:{
    //当前选中tab bar的文本颜色和图标颜色
    activeTintColor:'tomato',
    //未选中的tab bar的本文颜色和图标颜色
    inactiveTintColor:'gray',
    showIcon:true,
  },

},

);

const AppContainer = createAppContainer(Tabnavigator);


export default AppContainer;




//不能写下面这种方式
// export default class App extends Component {
//   render() {
//     return (
//       <View >
//         <AppContainer />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({

// });
