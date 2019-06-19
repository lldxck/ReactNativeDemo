import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


class ProductDetailScreen extends React.Component{
    //在标题中使用参数
    //返回的是包含各种配置选项的对象函数
    //navigationOptions函数的参数有：
    //navigation--页面的导航属性，在页面中的路由为navigation.state
    //screenProps--从导航器组件上层传递的props
    //navigationOptions--如果未提供新值，将使用的默认或者上一个选项
    static navigationOptions = ({navigation}) =>{
        return {
            title:navigation.getParam('title'),
            headerTitleStyle:{
                marginLeft: -12,
            },
        };
    };
    render(){
        //接收传递的参数
        const productId = this.props.navigation.getParam('productId');
        const productDescribe = this.props.navigation.getParam('productDescribe');

        return(
            <View style={styles.container}>
                <Text>产品详情页面！</Text>
                <Text>productId:{JSON.stringify(productId)}</Text>
                <Text>productDescribe:{JSON.stringify(productDescribe)}</Text>
                <Button
                    title="Go ProductDetails"
                    onPress={()=>this.props.navigation.navigate('ProductDetails')}
                />
                <Button
                    title="Go to ProductDetails again"
                    onPress={()=>this.props.navigation.push('ProductDetails',{productId:Math.floor(Math.random()*100)})}
                />
                <Button
                    title="Go Back"
                    onPress={()=>this.props.navigation.goBack()}
                />
                {/* 使用setParams更新navigationOptions */}
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({title:'Updated'})}
                />
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
export default ProductDetailScreen;