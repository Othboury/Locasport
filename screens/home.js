import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
  Ionicons,
  TouchableOpacity
 } from 'react-native';
import bgImage from './images/ski.jpg';
import logo from './images/logo.png';
import usser from './images/username.png';
import { render } from 'react-dom';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const {width:WIDTH}= Dimensions.get('window')
export default class LoginPage extends Component {
  render(){
    return (
      <ImageBackground source={bgImage} style={styles.backgroundCountainer}>
          <View style={styles.logoCountainer}>
             <Image source={logo} style={styles.logo}></Image>
          </View>
          
          <View>
            <Icon 
              style={styles.inputIcon}
              name={'ios-person-outline'} 
              size={28} 
              color={'rgba(255,255,255,0.7)'}
            />
            <TextInput 
              style={styles.input} 
              placeholder={'Nom utilisateur'}
              placeholderTextColor={'rgba(255,255,255,0.7)'} 
              underlineColorAndroid='transparent'> 
            </TextInput>

            <Icon 
              style={styles.inputIconLock}
              name={'ios-lock-outline'} 
              size={28} 
              color={'rgba(255,255,255,0.7)'}
            />
            <TextInput 
              style={styles.input} 
              placeholder={'Mot de passe '}
              secureTextEntry={true}
              placeholderTextColor={'rgba(255,255,255,0.7)'} 
              underlineColorAndroid='transparent'> 
              
            </TextInput>
            <TouchableOpacity style={styles.botton}>
              <Text style={styles.text}> 
              LOGIN
              </Text>

            </TouchableOpacity>

          </View>
      </ImageBackground>
    );
  }
}










const styles = StyleSheet.create({
  backgroundCountainer: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCountainer: {
    alignItems: 'flex-start'
  },
  logo: {
    alignItems: 'flex-start',
    width: 120,
    height: 120,
  },
  input:{
    paddingLeft:45,
    margin:10,
    width:200,
    height:45,
    borderRadius:45,
    fontSize:16,
    backgroundColor:'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal:25 
  },
  inputIcon:{
    position:'absolute',
    top: 16,
    left: 37
  },
  inputIconLock:{
    position:'absolute',
    top: 80,
    left: 37
  },
  botton:{
    paddingLeft:45,
    margin:10,
    width:200,
    height:45,
    borderRadius:25,
    fontSize:16,
    backgroundColor:'#CB9CF2',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal:25    
  },
  text:{
    color:'rgba(255,255,255,0.7)',
    textAlign: 'center',
    fontSize:16,
    width:100,
    height:45,
    margin: 10
  }


});
