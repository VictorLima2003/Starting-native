import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Layer extends React.Component {
  render() {
    return (
      <View style={styles.area}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    area: {
        width: windowWidth,
        height: (windowHeight / 2),
        backgroundColor: '#2ed573',
    }
})

export default Layer