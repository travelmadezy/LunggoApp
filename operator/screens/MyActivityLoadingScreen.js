'use strict';

import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import {fetchTravoramaApi,AUTH_LEVEL} from '../../api/Common';
import ListScreen from './ActivityList';
import LoadingAnimation from '../../customer/components/LoadingAnimation'

async function getActivityList () {
  const version = 'v1';
  const path = `/${version}/operator/myactivity`;
  let request = {path, requiredAuthLevel: AUTH_LEVEL.User}
  return await fetchTravoramaApi(request);
}

export default class ActivityListLoadingScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      list: [],
      isLoading: true,
    };
  }

  static navigationOptions = {
    title: 'My Activity',
  };

  componentDidMount() {
    getActivityList().then( res => {
      this.setState({list:res.activityList, isLoading:false})
    });
  }

  render() {
    let { isLoading, list } = this.state;
    let { props } = this;
    if (isLoading) { return <LoadingAnimation /> }
    else if (!list) { return <Text>ERROR: Internal Error (in Booking List)</Text> }
    else if (list.length > 0) { return <ListScreen list={list} {...props}/> }
    else { return <Text>You don't have any activity product!</Text> }
  }

}
