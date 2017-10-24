'use strict';

import React, { Component } from 'react';
import ImageSlider from 'react-native-image-slider';
import MapView from 'react-native-maps';
import Panel from '../components/Panel';
import Button from 'react-native-button';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import LikeShareHeaderButton from '../components/LikeShareHeaderButton';

export default class DetailScreen extends Component<{}> {

  static navigationOptions = {
    title: 'Tour Title 12',
    // header: ({navigate}) => ({
    //     right: (
    //         <LikeShareHeaderButton navigate={navigate}/>
    //     ),
    // }),
    // headerTitleStyle: {color:'white'},
    headerRight: <LikeShareHeaderButton/>,
    headerStyle: {
      // backgroundColor: 'transparent',
      position: 'absolute',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0
    },
  };

  render() {
    return (
      //<Image style={styles.detailimg}source={require('../assets/images/detailimg.jpg')}/>
      <View>
        <ScrollView
          style={{marginBottom:60,marginTop:60}}
        >
          <ImageSlider height={350} images={[
            require('../assets/images/detailimg.jpg'),
            require('../assets/images/detailimg.jpg'),
            require('../assets/images/detailimg.jpg')
          ]}/>
          <View style={styles.container}>

            <Text style={styles.activityTitle}>
              Tour Title 03
            </Text>
            <Text style={styles.locationActivity}>
              Location | Activity small description 
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image style={styles.icon}source={require('../assets/icons/time.png')}/>
              <Text style={styles.timeActivity}>
                5 hari 
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image style={styles.icon}source={require('../assets/icons/person.png')}/>
              <Text style={styles.timeActivity}>
                20 orang 
              </Text>
            </View>

            <View style={styles.divider}/>

            <View style={styles.containerdescriptionActivity}>
              <Text style={styles.sectionTitle}>
                Tour Description 
              </Text>
              <Text style={styles.descriptionActivity}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>{/* end containerdescriptionActivity */}

            <View style={styles.containerdescriptionActivity}>
              <Text style={styles.sectionTitle}>
                Highlights
              </Text>
              <View style={styles.ul}>
                <Text style={styles.li}>
                  &#5867;
                </Text>
                <Text style={styles.lidescriptionActivity}>
                  Full-day quad biking and rafting adventure tour from Denpasar
                </Text>
              </View>
              <View style={styles.ul}>
                <Text style={styles.li}>
                  &#5867;
                </Text>
                <Text style={styles.lidescriptionActivity}>
                  Full-day quad biking and rafting adventure tour from Denpasar
                </Text>
              </View>
            </View>{/* end containerdescriptionActivity */}

            <View style={styles.containerdescriptionActivity}>
              <Text style={styles.sectionTitle}>
                Price Included
              </Text>
              <View style={styles.ul}>
                <Text style={styles.li}>
                  &#5867;
                </Text>
                <Text style={styles.lidescriptionActivity}>
                  Full-day quad biking and rafting adventure tour from Denpasar
                </Text>
              </View>
              <View style={styles.ul}>
                <Text style={styles.li}>
                  &#5867;
                </Text>
                <Text style={styles.lidescriptionActivity}>
                  Full-day quad biking and rafting adventure tour from Denpasar
                </Text>
              </View>
            </View>{/* end containerdescriptionActivity */}

            {/*<MapView
              style={{width:"100%", height:"10%"}}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />*/}
            <Text>
              Jl. Sisingamangaraja 22{"\n"}
              Selong
            </Text>

            <View style={styles.divider}/>

            <Text style={styles.sectionTitle}>
              Review
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image style={styles.thumbprofile} source={require('../assets/images/poto-profile.jpg')}/>
              <Text style={{fontWeight:'bold'}}>Jane Doe{"\n"}
                <Text style={{fontSize:10, fontWeight:'normal'}}>3 maret 2017</Text>
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image style={styles.reviewThumbImg} source={require('../assets/images/thumbimg1.jpg')}/>
              <Image style={styles.reviewThumbImg} source={require('../assets/images/thumbimg2.jpg')}/>
              <Image style={styles.reviewThumbImg} source={require('../assets/images/thumbimg1.jpg')}/>
            </View>
            <Text style={styles.isireview}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et
            </Text>
            <Text style={styles.hyperlink}>
              Baca 20 Review Lainnya
            </Text>

            <View style={styles.containerdescriptionActivity}>
              <Panel title="Agenda">
                <Text>..</Text>
              </Panel>
              <Panel title="Guest Requirement">
                <Text>..</Text>
              </Panel>
              <Panel title="Cancelation Policiy">
                <Text>..</Text>
              </Panel>{/* end panel */}
            </View>{/* end containerdescriptionActivity */}

            <Text style={styles.sectionTitle}>
              Similar Adventure
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.similarActivityContainer}>
                  <Image style={{resizeMode:'cover', width:150, height:170, marginBottom:7,}} source={require('../assets/images/other-img2.jpg')}/>
                  <Text>Tour Title 1</Text>
                  <Text style={{color:'green'}}>Rp. 3.000.000</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight:7}}>Bintang</Text>
                    <Text>20 Reviews</Text>
                  </View>
                </View>
                <View style={styles.similarActivityContainer}>
                  <Image style={{resizeMode:'cover', width:150, height:170, marginBottom:7,}} source={require('../assets/images/other-img1.jpg')}/>
                  <Text>Tour Title 1</Text>
                  <Text style={{color:'green'}}>Rp. 3.000.000</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight:7}}>Bintang</Text>
                    <Text>20 Reviews</Text>
                  </View>
                </View>
                <View style={styles.similarActivityContainer}>
                  <Image style={{resizeMode:'cover', width:150, height:170, marginBottom:7,}} source={require('../assets/images/other-img3.jpg')}/>
                  <Text>Tour Title 1</Text>
                  <Text style={{color:'green'}}>Rp. 3.000.000</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight:7}}>Bintang</Text>
                    <Text>20 Reviews</Text>
                  </View>
                </View>
                <View style={styles.similarActivityContainer}>
                  <Image style={{resizeMode:'cover', width:150, height:170, marginBottom:7,}} source={require('../assets/images/other-img4.jpg')}/>
                  <Text>Tour Title 1</Text>
                  <Text style={{color:'green'}}>Rp. 3.000.000</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight:7}}>Bintang</Text>
                    <Text>20 Reviews</Text>
                  </View>
                </View>
              </ScrollView>
            </View>

          </View>{/* end container */}
        </ScrollView>

        {/*bottom CTA button*/}
        <View style={styles.bottomBarContainer}>
          <View style={{alignItems: 'flex-start', flex:1}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color:'green', marginRight:3, fontWeight: 'bold', fontSize:15,}}>Rp. 3.000.000</Text> 
              <Text style={{fontSize:12,}}>/orang</Text>
            </View>
            <View style={{flexDirection: 'row',  }}>
              <Text style={{marginRight:5, fontSize:12,}}>Bintang</Text> 
              <Text style={{fontSize:12,}}>20 Review</Text> 
            </View>
          </View>
          <View style={{alignItems: 'flex-end', flex:1}}>
            <Button
              containerStyle={{height:35, width:100, paddingTop:10, paddingBottom:10, overflow:'hidden', borderRadius:4, backgroundColor: '#437ef7'}}
              style={{fontSize: 12, color: '#ffffff'}}
              // onPress={() => this._handlePress()}
              onPress={() => this.props.navigation.navigate(
                'CalendarView'//, { list: response.activityList}
              )}
            >
              Lihat Tanggal
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    paddingBottom:40,
    backgroundColor: '#fff',
  },
  similarActivityContainer: {
    marginRight:10,
    width:150,
    // flex:1,
  },
  bottomBarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fbfbfb',
    padding: 20,
    borderTopColor: "#efefef",
    borderTopWidth: 2,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  reviewThumbImg: {
    width:60,
    height:50,
    marginRight:5,
    marginTop:10,
  },
  hyperlink: {
    fontSize:11,
    marginTop:8,
    color:'#437ef7',
    textDecorationLine: 'underline'
  },
  isireview: {
    fontSize:11,
    marginTop:10,
  },
  thumbprofile: {
    height: 30,
    width:30,
    borderRadius: 15,
    marginRight: 10,
  },
  ul: {
    flex: 1, 
    flexDirection: 'row',
    marginLeft: 10,
  },
  li: {
    fontSize:11,
    marginRight:8
  },
  icon: {
    width:15,
    height:15,
    marginRight:5,
  },
  containerdescriptionActivity: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize:16,
    marginBottom: 7,
  },
  descriptionActivity: {
    fontSize:11,
    lineHeight: 15,
  },
  lidescriptionActivity: {
    fontSize:11,
    marginBottom: 2,
    lineHeight: 15,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#efefef',
    marginTop: 15,
    marginBottom: 15,
  },
  activityTitle: {
    fontWeight: 'bold',
    fontSize:20,
    marginBottom: 7,
  },
  locationActivity: {
    fontSize:12,
    marginBottom: 5,
  },
  timeActivity: {
    fontSize:12,
    marginBottom: 5,
  },
  detailimg: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
});