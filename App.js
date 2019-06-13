/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      Dogs = [],
      url: 'https://dog.ceo/api/breeds/image/random'
    }
  
  }

  componentDidMount(){
    this.getDogs();

  }
  getDogs = () => {
      this.setState({loading:true})

      fetch(this.state.url)
      .then(res => res.json())
      .then(res=> {

        this.setState({
          Dogs = res.status,
          url: res.message,
          loading: false,
        })
        

      });
  };

  render() {

    if(this.state.loading){
      return (
      <View style={styles.container}>
        <Text>Carregando Imagem dos Cachorros aleatorimamente</Text>
      </View>
    );
  }

    return (
    <View style={{flex: 1, paddingTop:50, paddinLeft:5}}>
      <FlatList
        data = {this.state.Dogs}
        renderItem ={
           ({item}) => <text>{item.message}</text>
           ({item}) => <text>{item.status}</text>
        }
        render 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
