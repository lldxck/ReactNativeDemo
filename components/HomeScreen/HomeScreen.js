import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons'


class HomeScreen extends React.Component{
    //配置标题栏
    //每个页面组件可以有一个名为navigationOptions的静态属性，它是一个对象或返回包含各种配置的对象函数。
    static navigationOptions = {
        //隐藏标题栏
        // header:null,
        title:'Home',
        //调整标题的样式  只是该页面上独有的样式
        // headerStyle:{
        //     backgroundColor:'#f4511e',
        // },
        // headerTintColor:'#fff',
        // headerTitleStyle:{
        //     fontWeight:'bold',
        // },
        headerRight:(
            // <Image
            //     source={require('../../img/ic_home_search.png')}
            //     style={{width:25,height:25,marginRight:25}}

            // />
            <Ionicons name={'ios-people'} size={25} style={{marginRight:25}} onPress={()=>alert('people')}/>
        ),
    };
    render(){
        return(
            <View style={styles.container}>
                <Text>首页！</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },

});

export default HomeScreen;