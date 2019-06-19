import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

//实现标题栏与其所属页面之间的交互
//实现一个计时器

class SearchScreen extends React.Component{
    static navigationOptions = ({navigation}) =>{
        return {
            title:'Search',
            //向标题栏中添加一个按钮
            headerRight:(
                <Button
                    title="+1"
                    onPress={navigation.getParam('increaseCount')}
                    color='#f4511e'
                />
            ),
            headerRightContainerStyle:{
                marginRight:25
            },
        };

    };

    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }

    //在componentDidMount中将数量存在navigation中
    //组件渲染只调用一次(当每次进入该页面的时候只调用一次，往后不调用)
    componentDidMount(){
        this.props.navigation.setParams({increaseCount:this._increaseCount});//==>只有点击getParam的时候才调用
        //console.log('componentDidMount');
    }

    //修改state的数量
    _increaseCount= () =>{
        //console.log('count+1');
        this.setState({count:this.state.count+1});//执行setState之后数据发生改变之后会再次渲染render()因此视图数据发生变化
    };


    render(){
        return(
            <View style={styles.container}>
                <Text>搜索页面！</Text>
                <Text>count:{this.state.count}</Text>
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
export default SearchScreen;