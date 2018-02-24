'use strict';

import React from 'react';
import Colors from '../../../constants/Colors';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import globalStyles from '../../../commons/globalStyles';
import { Icon } from 'react-native-elements';

export default class BeforeLoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.params = props.onIntro ? { resetAfter: true } : { thruBeforeLogin: true };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    let { navigate, goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        {!!this.props.onIntro || (
          <TouchableOpacity style={{ alignItems: 'flex-start', marginTop: -40 }}
            onPress={() => goBack()}>
            <Icon name='close' type='evilicons' size={24} />
          </TouchableOpacity>
        )}
        <View style={{ marginVertical: 20, }}>
          <Text style={globalStyles.openingText}>
            Mulai liburanmu sekarang
          </Text>
        </View>

        <Button
          containerStyle={{ marginTop: 30, height: 45, paddingTop: 9, overflow: 'hidden', borderRadius: 25, backgroundColor: '#fff', }}
          style={{ fontSize: 20, color: Colors.primary2, fontFamily: 'Hind-Bold', }}
          onPress={() => navigate('Registration', this.params)}
        >
          Daftar
        </Button>
        <TouchableOpacity style={{ marginTop: 24, alignItems: 'center' }}
          onPress={() => navigate('LoginScreen', this.params)}
          activeOpacity={0.7}
        >
          <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'Hind-SemiBold' }}>
            Sudah punya akun? Tap di sini
          </Text>
        </TouchableOpacity>
        {!!this.props.onIntro && (
          <TouchableOpacity style={{ position: 'absolute', bottom: 20, alignItems: 'center', width: '111%', }}
            onPress={() => navigate('MainTabNavigator', { loggedIn: false })}
          >
            <Text style={{ fontSize: 14, color: '#fff', fontFamily: 'Hind' }}>
              Lewati
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 60,
    backgroundColor: Colors.primary2,
  },
});
