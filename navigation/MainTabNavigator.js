import React from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../customer/screens/HomeScreen';
import Explore from '../customer/screens/ExploreScreen';
import MyBooking from '../customer/screens/MyBooking/MyBookingLoadingScreen';
// import LinksScreen from '../customer/screens/LinksScreen';
// import SettingsScreen from '../customer/screens/SettingsScreen';
import Wishlist from '../customer/screens/Wishlist/WishlistScreen';
import MessageBlank from '../customer/screens/MessageBlank';
import AccountPage from '../customer/screens/AccountPage';

export default TabNavigator(
  {
    Explore: { screen: Explore },
    MyBooking: { screen: MyBooking },
    Wishlist: { screen: Wishlist },
    // MessageBlank: { screen: MessageBlank },
    AccountPage: { screen: AccountPage },
  },
  {
    navigationOptions: ({ navigation }) => ({
      /*headerRight:
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={styles.containerCart}>
            <Entypo name='shopping-basket' size={26} color='#23d3c3' />
            <View style={styles.notification}>
              <Text style={styles.txtNotification}>5</Text>
            </View>
          </View>
        </TouchableOpacity>,*/
      headerStyle: {
        backgroundColor: '#fff',
        ...Platform.select({
          ios: {
            /* paddingHorizontal:15,
             paddingTop:30,
             paddingBottom:10,
             shadowColor: '#cdcdcd',
             shadowOffset: { height: 3 },
             shadowOpacity: 0.2,
             shadowRadius: 2,
             paddingVertical:15,*/
            borderBottomColor: "#ececec",
            borderBottomWidth: 1,
            height: 51
          },
          android: {
            //paddingHorizontal:12.6,
            //paddingVertical:12.6,
            //paddingRight:25,
            backgroundColor:'cyan',
            elevation: 0,
            borderBottomColor: "#ececec",
            borderBottomWidth: 1,
            backgroundColor: '#fbfbfb',
            borderBottomColor: '#ececec',
            height:20,
            marginTop:0
          },
        }),
      },
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Explore':
            iconName = Platform.OS === 'ios'
              ? `ios-search${focused ? '' : '-outline'}`
              : 'ios-search-outline';
            break;
          case 'MyBooking':
            iconName = Platform.OS === 'ios'
              ? `ios-paper${focused ? '' : '-outline'}`
              : 'ios-paper-outline';
            break;
          case 'Wishlist':
            iconName = Platform.OS === 'ios'
              ? `ios-heart${focused ? '' : '-outline'}`
              : 'ios-heart-outline';
            break;
          case 'MessageBlank':
            iconName = Platform.OS === 'ios'
              ? `ios-mail-open${focused ? '' : '-outline'}`
              : 'ios-mail-open-outline';
            break;
          case 'AccountPage':
            iconName = Platform.OS === 'ios'
              ? `ios-person${focused ? '' : '-outline'}`
              : 'ios-person-outline';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -4, }}
            color={focused ? Colors.bottomTabSelected : Colors.bottomTabBlurred}
          />
        );
      },
      tabBarOnPress: ({ scene }) => {
        let focused = scene.focused;
        let route = scene.route.routeName;
        if (!focused) {
          // if (route == 'Wishlist') {
          //   navigation.setParams({ shouldRefresh: true });
          // }
          navigation.navigate(route);
        }
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    //initialLayout: {width:100, height:300},
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: Colors.bottomTabSelected,
      style: { paddingBottom: 5, height: 60, backgroundColor: '#fbfbfb', borderTopColor: '#ececec' }
    },
  }
);

const styles = StyleSheet.create({

  containerCart: {
    ...Platform.select({
      ios: {
        paddingRight: 23,
      },
      android: {
        paddingRight: 23.5,
        zIndex: 100,
      },
    }),
  },
  notification: {
    backgroundColor: '#ffc943',
    height: 16,
    width: 16,
    position: 'absolute',
    right: 13,
    top: -4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    zIndex: 100,
    ...Platform.select({
      ios: {
        right: 15
      },
      android: {
        paddingRight: 23.5,
        zIndex: 100,
      },
    }),
  },
  txtNotification: {
    color: '#fff',
    fontFamily: 'Hind-Bold',
    fontSize: 11,
    ...Platform.select({
      ios: {
        //backgroundColor:'red',
        height: 12,
        lineHeight: 16,
      },
    })
  },
  header: {
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        paddingHorizontal: 15,
        paddingTop: 30,
        paddingBottom: 15,
        shadowColor: '#cdcdcd',
        shadowOffset: { height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // paddingVertical:15,
      },
      android: {
        paddingHorizontal: 15,
        elevation: 0,
        borderBottomColor: "#ececec",
        borderBottomWidth: 1,
      },
    }),
  },
});