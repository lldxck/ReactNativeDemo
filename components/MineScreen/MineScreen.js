import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MineScreen extends React.Component{
    static navigationOptions = {
        title:'Mine',
    };
    render() {
        return(
            <View style={styles.container}>
                <Text>我的页面！</Text>
            </View>
        );


    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
});
export default MineScreen;