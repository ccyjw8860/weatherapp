import { StatusBar } from 'expo-status-bar';
import {Alert} from 'react-native'
import React from 'react';
import Loading from './Loading'
import * as Location from 'expo-location';


export default class extends React.Component{
  state = {
    isLoading:true
  }

  getLocation = async() =>{
    try {
      await Location.requestPermissionsAsync();
      
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();  
      // Send to API and get weather
      this.setState({isLoading:false})
    } catch (error) {
      Alert.alert("Can'f find you.", 'So sad')
    }
    
  }

  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading} = this.state;
    return isLoading ? <Loading/> : null
  }
}

