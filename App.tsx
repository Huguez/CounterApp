/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloScreen } from './src/presentation/screens/HelloScreen';


function App(): React.JSX.Element {
  
  return <SafeAreaView style={ styles.safeArea }> 
    <HelloScreen name='Huguez'/>   
  </SafeAreaView>
}


const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    paddingTop:    55, 
    paddingLeft:   15, 
    paddingRight:  15, 
    paddingBottom: 40,
  }
})

export default App;
