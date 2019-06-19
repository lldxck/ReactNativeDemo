import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


class ProductScreen extends React.Component{
    static navigationOptions = {
        title:'Product',
    };
    render(){
        return(
            <View style={styles.container}>
                <Text>产品页面！</Text>
                <Button
                    title="产品详情"
                    //传递参数给路由
                    onPress={
                        ()=>this.props.navigation.navigate('ProductDetails',
                        {
                            productId:1,
                            productDescribe:'具体详情请参阅文章！',
                            title:'ProductDetails'
                    })
                    }
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
export default ProductScreen;