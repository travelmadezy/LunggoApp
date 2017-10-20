import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image,
  TouchableHighlight, Animated
} from 'react-native';

export default class Panel extends Component {
  constructor(props) {
    super(props);

    this.icons = {   
      'up'   : require('../assets/icons/right-arrow.png'),
      'down' : require('../assets/icons/down-arrow.png')
    };

    this.state = {       
      title: props.title,
      expanded: true
    };
  }

  toggle() {
  }

  render() {
    let icon = this.icons['down'];

    if(this.state.expanded) {
      icon = this.icons['up'];   //Step 4
    }

    //Step 5
    return ( 
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {this.state.title}
          </Text>
          <TouchableHighlight 
            style={styles.button} 
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1">
            <Image
              style={styles.buttonImage}
              source={icon}
            ></Image>
          </TouchableHighlight>
        </View>

        <View style={styles.body}>
          {this.props.children}
        </View>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop:20,
    overflow:'hidden'
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    flex    : 1,
    color   :'#2a2f43',
    fontSize: 14,
  },
  button: {
  },
  buttonImage: {
    width : 20,
    height: 20
  },
  body: {
    padding   : 10,
    paddingTop: 0,
    borderBottomColor: "#cdcdcd",
    borderBottomWidth: 1,
  }
});