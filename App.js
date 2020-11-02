import { StatusBar } from 'expo-status-bar';
import {Alert} from 'react-native'
import React from 'react';
import Loading from './Loading'
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = 'e3c7140afb35ca2390363ccb0a04672f'

export default class extends React.Component{
  state = {
    isLoading:true
  }

  getWeather = async(latitude, longitude) =>{
    const {data:{main:{temp}, weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    this.setState({isLoading:false, temp: temp, condition: weather[0].main})
    console.log(temp, weather[0].main);
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
    const { isLoading, temp, condition} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>
  }
}

