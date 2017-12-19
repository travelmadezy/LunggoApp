'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput,
  TouchableOpacity, Keyboard, TouchableWithoutFeedback,
} from 'react-native';
import { fetchTravoramaLoginApi } from '../api/Common';
import { validateEmail, validatePassword } from './FormValidation';
import { Icon } from 'react-native-elements';
import Button from 'react-native-button';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {error:[]};
  }

  _onLoginPressed = () => {
    let {userName, password} = this.state;
    let errorUserName = validateEmail(userName);
    let errorPassword = validatePassword(password);
    this.setState({errorUserName, errorPassword});
    if (!errorUserName && !errorPassword) this._login();
  }

  _login = () => {
    this.setState({isLoading:true})
    let {navigate} = this.props.navigation;
    let {params} = this.props.navigation.state;
    // //// validation
    //TODO

    //// if validation passed, POST to API
    fetchTravoramaLoginApi(this.state.userName, this.state.password)
    .then(response => {
      this.setState({isLoading:false});
      if (response.status == 200) {
        if (params) {
          if (params.appType == 'OPERATOR'){
            navigate('Dashboard');
          } else {
            navigate('BookingDetail',params);
          }
        } else navigate('MainTabNavigator');
      } else {
        console.log(response);
        let error;
        switch (response.error) {
          case 'ERR_NOT_REGISTERED':
            error = 'Akun ' + this.state.userName + ' tidak ditemukan'
            break;
          case 'ERR_INVALID_PASSWORD':
            error = 'Password salah';
            break;
          default:
            error = 'Terjadi kesalahan pada server';
        }
        this.setState({error});
      }
    }).catch(error => {
      this.setState({isLoading:false});
      console.log("Login error!!");
      console.log(error);
    })
  }
  
  render() {
    let {userName, password, showPassword, isLoading,
        errorUserName, errorPassword, error} = this.state;
    let {params} = this.props.navigation.state;

    let errorMessageUserName = errorUserName ?
      <View style={{alignItems:'center', marginBottom:10}}>
        <Text style={{color:'#fc2b4e'}}>{errorUserName}</Text>
      </View> : null;

    let errorMessagePassword = errorPassword ?
      <View style={{alignItems:'center', marginBottom:10}}>
        <Text style={{color:'#fc2b4e'}}>{errorPassword}</Text>
      </View> : null;

    let errorMessage = error ?
      <View style={{alignItems:'center', marginTop:10}}>
        <Text style={{color:'#fc2b4e'}}>{error}</Text>
      </View> : null;

    let registerHereButton =
      (params && params.appType == 'OPERATOR') ? null :
      <TouchableOpacity
        style={{ position:'absolute', bottom:20,
          alignItems:'center', width:'111%'
        }}
        onPress={() => this.props.navigation.navigate('Registration')}
      >
        <Text style={{fontSize:12, color:'#000'}}>
          Belum punya akun? Daftar di sini
        </Text>
      </TouchableOpacity>

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <View style={{marginBottom:40}}>
              <Text style={styles.categoryTitle}>Login</Text>
            </View>
            <View style={{marginBottom:10}}>
              <TextInput
                style={ this.state.errorUserName ?
                  styles.searchInputFalse : styles.searchInput
                }
                placeholder='Email / No. Handphone'
                keyboardType='email-address'
                underlineColorAndroid='transparent'
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                onSubmitEditing={(event) => {
                  this.refs.passwordInput.focus();
                }}
                blurOnSubmit={false}
                onChangeText={ userName => this.setState({
                  userName, errorUserName:null, error:null
                })}
              />
            </View>

            {errorMessageUserName}
            <View>
              <TextInput
                ref='passwordInput'
                style={ this.state.errorPassword ?
                  styles.searchInputFalse : styles.searchInput
                }
                underlineColorAndroid='transparent' 
                placeholder='Password'
                secureTextEntry={!showPassword}
                autoCapitalize='none'
                autoCorrect={false}
                blurOnSubmit={true}
                onChangeText={ password => this.setState({
                  password, errorPassword:null, error:null
                })}
                onSubmitEditing={this._onLoginPressed}
                returnKeyType='done'
              />
              <View style={{position:'absolute', right:20, top:11,}}>
                <TouchableOpacity
                  onPress={() =>this.setState({
                    showPassword:!showPassword
                  })}
                >
                  <View>
                    <Icon
                      name={showPassword ? 'eye' : 'eye-with-line'}
                      type='entypo' size={22} color='#acacac'
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {errorMessagePassword}
            {errorMessage}
            <Button
              containerStyle={{
                marginTop:30,
                height:45,
                paddingTop:13,
                paddingBottom:10,
                overflow:'hidden',
                borderRadius:25,
                backgroundColor: '#01d4cb',
              }}
              style={{fontSize: 16, color: '#ffffff'}}
              onPress={this._onLoginPressed}
              disabled={isLoading}
              styleDisabled={{opacity:.7}}
            >
              Login
            </Button>
            <TouchableOpacity style={{marginTop:15, alignItems:'flex-end'}}
            onPress={()=>this.props.navigation.navigate('ForgotPassword')}>
              <Text style={{fontSize:12, color:'#464646'}}>
                Lupa Password ?
              </Text>
            </TouchableOpacity>
            {registerHereButton}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
    paddingTop:90,
    backgroundColor: '#fff',
  },
  categoryTitle :{
    fontWeight:'bold',
    fontSize:26,
    color:'#454545'
  },
  normaltext: {
    backgroundColor: 'transparent',
    color: '#ffffff',
  },
  loginemail: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    marginTop: 50,
  },
  description: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 30,
    padding: 40,
    color: '#ffffff'
  },
  searchInput: {
    height: 45,
    paddingLeft:15,
    paddingTop:10,
    paddingBottom:10,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 25,
    color: '#acacac',
    backgroundColor:'#f5f5f5',
  },
  searchInputFalse: {
    height: 45,
    paddingLeft:15,
    paddingTop:10,
    paddingBottom:10,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#fc2b4e',
    borderRadius: 25,
    color: '#acacac',
    backgroundColor:'#f5f5f5',
  },
});
