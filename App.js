import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Layer from './Components/Login/Layer/code';
import { TextInput } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#dfe4ea"}}>
        <Layer />

        <View style={{justifyContent: 'center', alignItems:'center'}}>
            <View style={styles.area}>
                <Text style={{fontSize: windowHeight / 20, fontWeight: 'bold'}}>Vamos lá!</Text>  

                <View style={styles.inputArea}>
                    <Icon name="user" color='black' size={30} />
                    <TextInput style={styles.input} placeholder="Digite seu nome :)" />
                </View>

                <View style={styles.inputArea}>
                    <Icon name="lock" color='black' size={30}/>
                    <TextInput style={styles.input} placeholder="Você lembra sua senha?"/>
                </View>

                <View style={styles.areabtn}>
                  <TouchableOpacity style={styles.btn}>
                      <Text style={styles.btntxt} >Entrar</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.creditsArea}>
                  <Text style={{marginRight: 5}} >Isso deu trabalho</Text>
                  <Icon name="heart" color="red" size={15}/>
                </View>
            </View>  
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  area: {
    backgroundColor: 'white',
    position: 'absolute',
    width: windowWidth - 20,
    height: (windowHeight / 1.7),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,

    padding: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
    
  },
  inputArea: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  input: {
    padding: 5,
    paddingBottom: 0,
    marginLeft: 10,
    width: windowWidth - 100,
    height: windowHeight / 12,
    fontSize: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#a4b0be'
  },
  areabtn: {
    width: windowWidth - 100,
    height: windowHeight / 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    width: windowWidth - 150,
    height: windowHeight / 12,
    backgroundColor: '#5352ed',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,

    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  btntxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  creditsArea: {
    marginTop: windowHeight / 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);