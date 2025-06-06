/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {  PaperProvider } from 'react-native-paper';
import { HelloScreen } from './src/presentation/screens/HelloScreen';

import Icon from 'react-native-vector-icons/Ionicons'

function App(): React.JSX.Element {

  const settings = {
    icon: (props: any) => <Icon { ...props } />
  }

  return <PaperProvider settings={ settings }>
    <SafeAreaView style={ styles.safeArea }> 
      {/* <HelloScreen name='Huguez'/> */}
    </SafeAreaView>
  </PaperProvider>
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
