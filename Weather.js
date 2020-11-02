import React from 'react'
import {StyleSheet, View, Text, StatusBar} from 'react-native'
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'

const weatherOptions = {
    Clouds:{
        iconName:'weather-cloudy',
        gradient:['#0f0c29', '#302b63','#24243e'],
        title:'CLOUDY',
        subtitle:'클라우드 먹고싶다'
    },
    Thunderstorm:{
        iconName:'weather-lightning',
        gradient:['#200122','#6f0000'],
        title:'THUNDER',
        subtitle:'피해!'
    },
    Drizzle:{
        iconName:'weather-rainy',
        gradient:['#0575E6','#021B79'],
        title:'RAINY',
        subtitle:'비....X'
    },
    Rain:{
        iconName:'weather-rainy',
        gradient:['#0575E6','#021B79'],
        title:'RAINY',
        subtitle:'비....X'
    },
    Snow:{
        iconName:'weather-snowy-heavy',
        gradient:['#E0EAFC','#CFDEF3'],
        title:"SNOWY",
        subtitle:'하늘에서 쓰레기가 내려요'
    },
    Atmosphere:{
        iconName:'weather-fog',
        gradient:['#5A3F37','#2C7744'],
        title:'FOGGY',
        subtitle:'안개 겁나낌'
    },
    Clear:{
        iconName:'white-balance-sunny',
        gradient:['#f7b733', '#fc4a1a'],
        title:'FUCKIN COOL!',
        subtitle:'놀자'
    },
    Haze:{
        iconName:'weather-fog',
        gradient:['#5A3F37','#2C7744'],
        title:'FOGGY',
        subtitle:'안개 겁나낌'
    },
    Mist:{
        iconName:'weather-fog',
        gradient:['#5A3F37','#2C7744'],
        title:'FOGGY',
        subtitle:'안개 겁나낌'
    },
    Dust:{
        iconName:'weather-fog',
        gradient:['#5A3F37','#2C7744'],
        title:'FOGGY',
        subtitle:'안개 겁나낌'
    }
}

export default function Weather({temp, condition}){
return <LinearGradient colors={weatherOptions[condition].gradient}
    style={styles.container}>
        <StatusBar barStyle='light-content' translucent={true} backgroundColor={'transparent'}/>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color='white'/>
            <Text style={styles.temp}>{temp}°</Text>
        </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([    
        "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    halfContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    temp:{
        fontSize:42,
        color:'white'
    },
    title:{
        color:'white',
        fontSize:44,
        fontWeight:'300',
        marginBottom:10,
        textAlign:'center',
        paddingHorizontal:20  
    },
    subtitle:{
        color:'white',
        fontWeight:'600',
        fontSize:24      
    },
    text_container:{
        // paddingHorizontal:20
    }
})