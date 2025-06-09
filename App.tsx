import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {  PaperProvider } from 'react-native-paper';
// import { DesignScreen } from './src/presentation/screens';
import Icon from 'react-native-vector-icons/Ionicons'
import { HomeworkScreen } from './src/presentation/screens/HomeworkScreen';
import { DesignScreen } from './src/presentation/screens';

function App(): React.JSX.Element {

  const settings = {
    icon: (props: any) => <Icon { ...props } />
  }

  return <PaperProvider settings={ settings }>
    <SafeAreaView style={ styles.safeArea }> 
      <DesignScreen />
      {/* <HomeworkScreen /> */}
    </SafeAreaView>
  </PaperProvider>
}


const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    paddingTop:    50,
    paddingHorizontal: 10, 
    paddingBottom: 20,
  }
})

export default App;
