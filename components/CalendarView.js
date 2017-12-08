import React, { Component } from 'react';
import { CalendarList } from 'react-native-calendars';
import { StyleSheet, Platform, View, Text,
          TouchableHighlight } from 'react-native';
import Modal from 'react-native-modal'
import Button from 'react-native-button';
import Moment from 'moment';
import { CheckBox } from 'react-native-elements'
import 'moment/locale/id';

export default class CalendarView extends Component {

  constructor (props) {
    super(props)
    let {selectedDate} = this.props.navigation.state.params;
    this.state = {
      selectedDate,
      markedDates : {
        // '2017-11-20': {marked: true},
        '2017-11-21': {disabled: true},
        '2017-10-24': {disabled: true},
        
        //// for markingType = interactive
        // '2017-10-23': [{textColor: '#d9e1e8'}],
        // '2017-10-24': [{textColor: '#d9e1e8'}],
        // '2017-11-20': [{textColor: 'green'}],
        // '2017-11-22': [{startingDay: true, color: 'green'}],
        // '2017-11-23': [{color: 'green', textColor: 'gray'}],
        // '2017-11-24': [{endingDay: true, color: 'green', textColor: 'gray'}],
        // '2017-11-04': [{startingDay: true, color: 'green'}, {endingDay: true, color: 'green'}]
      },
      isModalVisible: false,
    };
    if (selectedDate) this.state.markedDates[selectedDate] = {selected: true};
  }

  static navigationOptions = {
    title: 'Pilih Tanggal',
  };

  _selectDate = dateString => {
    let {markedDates, selectedDate} = this.state;

    //// if clicked date is disabled, do nothing
    if (markedDates[dateString] && markedDates[dateString].disabled)
      return;

    //// set remove prev selectedDate from markedDates
    if (selectedDate) markedDates[selectedDate] = {selected: false};
    // if (selectedDate) delete markedDates[selectedDate].selected;
    // markedDates[selectedDate] = [{startingDay: true, color: 'blue'}]
    
    //// set selectedDate
    selectedDate = dateString;
    markedDates[dateString] = {selected: true};
    // markedDates[dateString] = [{startingDay: true, color: 'blue'}]

    this.setState({ markedDates, selectedDate });
    //// TODO: sometimes all state has already changed but the ui only partly updated
    //// (only text is updated, CalendarList's marked date isn't)
  };

  _return = () => {
    this.props.navigation.state.params.setSchedule({
      date:this.state.selectedDate,
      shift:'1'
    })
    this.props.navigation.goBack()
  }

  _setModalVisible(visible) {
    this.setState({isModalVisible: visible});
  }

  _onDatePressed = dateString => {
    //// choose session, if any
    this._setModalVisible(true);

    //// continue set date
    this._selectDate(dateString);
  }

  render() {
    let {selectedDate} = this.state;
    let date = (selectedDate)
      ? Moment(selectedDate).format('ddd, D MMM YYYY')
      : "Pilih Tanggal";
    return(
      <View>
        <CalendarList
          minDate={Date()}
          markedDates={this.state.markedDates}
          onDayPress={ day => this._onDatePressed(day.dateString)}
          pastScrollRange={0}
          futureScrollRange={12}
          // markingType={'interactive'}
        />
        <Modal
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}
          animationType="fade"
          transparent={true}
          isVisible={this.state.isModalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={{flex:1}}/>
          <View style={{flex:1, backgroundColor:'white', padding:20,}}>
            <View style={{}}/>
              <TouchableHighlight
                style={{alignItems: 'flex-end',}}
                onPress={() => this._setModalVisible(false)}>
                <Text>X</Text>
              </TouchableHighlight>
              <View>
                <Text style={styles.activityTitle}>
                  Choose activity time
                </Text>
              </View>
              <View>
                <Text style={styles.activityDesc}>
                  1 November 2017
                </Text>
              </View>

              <View style={{justifyContent: 'space-between', flexDirection:'row', borderBottomColor: '#efefef', borderBottomWidth:1, paddingTop:15, paddingBottom:15, }}>
                <View style={{marginTop:5}}>
                  <Text>
                    10.00 am
                  </Text>
                </View>
                <View>
                  <CheckBox
                    style={{backgroundColor: '#fff'}}
                    checked={this.state.checked}
                  />
                </View>
              </View>
              <View style={{justifyContent: 'space-between', flexDirection:'row', borderBottomColor: '#efefef', borderBottomWidth:1, paddingTop:15, paddingBottom:15, }}>
                <View style={{marginTop:5}}>
                  <Text>
                    12.00 am
                  </Text>
                </View>
                <View>
                  <CheckBox
                    style={{backgroundColor: '#fff'}}
                    checked={this.state.checked}
                  />
                </View>
              </View>

              <View style={{marginTop:20}}>
                <Button
                  containerStyle={{
                    height: 40,
                    width: '100%',
                    paddingTop: 11,
                    paddingBottom: 11,
                    overflow: 'hidden',
                    borderRadius:25,
                    backgroundColor: '#01d4cb',
                  }}
                  style={{fontSize: 16, color: '#fff', fontWeight:'bold'}}
                  onPress={() => {
                    this.setState({isLoading: true})
                    this.props.navigation.navigate('BookingDetail', {
                      activityId: id,
                      price, requiredPaxData,
                    });
                  }}
                  styleDisabled={{color:'#aaa'}}
                >
                  Pilih
                </Button>
              </View>

            </View>
        </Modal>
        <View style={styles.bottomBarContainer}>
          <View style={{alignItems: 'flex-start', flex:1}}>
            <Text>{date}</Text>
            <Text>12.00 - 15.00</Text>
          </View>
          <Button
            containerStyle={{
              height: 35,
              width: 100,
              paddingTop: 10,
              paddingBottom: 10,
              overflow: 'hidden',
              borderRadius: 4,
              backgroundColor: '#437ef7',
            }}
            style={{fontSize: 12, color: '#ffffff'}}
            onPress={this._return}
          >
            Pilih Tanggal
          </Button>
        </View>
      </View>
    );
  }
}

/* For calendar styling and themes, check out
   https://github.com/wix/react-native-calendars#customizing-look--feel
*/
var styles = StyleSheet.create({
  container: {
    padding:20,
    backgroundColor: '#fff',
    flex:1
  },
  activityTitle: {
    fontWeight:'bold',
    fontSize:15,
    color:'#454545',
    marginBottom:5
  },
  activityDesc: {
    fontSize:14,
    color:'#454545',
    lineHeight: 20,
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
});