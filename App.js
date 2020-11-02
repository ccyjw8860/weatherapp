import { StatusBar } from 'expo-status-bar';
import {Alert} from 'react-native'
import React from 'react';
import Loading from './Loading'
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = 'e3c7140afb35ca2390363ccb0a04672f'

export default class extends React.Component{
  state = {
    isLoading:true
  }

  getWeather = async(latitude, longitude) =>{
    const {data:{main:{temp_max}}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    console.log(temp_max)
  }

  getLocation = async() =>{
    try {
      await Location.requestPermissionsAsync();
      
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();  
      // Send to API and get weather
      this.getWeather(latitude, longitude)
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

