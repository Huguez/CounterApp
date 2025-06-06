import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MyButton, MyFAB } from '../components';


interface props {}

const CounterScreen = ( {}: props ) => {
   const [ counter, setCounter ] = useState<number>( 0 );

   return (<>
      <View style={ styles.container }>
         <Text style={ styles.title } > Counter: { counter } </Text>

         <View style={ styles.wrapBtns }>
            <MyButton onClick={()=> setCounter( prev => prev-1 )} label={'-1'} />
            
            <MyButton onClick={()=> setCounter( 0 )} label={'reset'} />

            <MyButton onClick={()=> setCounter( prev => prev+1 )} label={'+1'} />

            
         </View>
      </View>
      <MyFAB onClick={()=> setCounter( prev => prev+2 ) } />
   </> )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   title: {
      fontSize: 60,
      color: 'black',
      fontWeight: 300,
   },
   btn: {
      fontSize: 55,
      backgroundColor: '#359148',
      color: 'white',
      borderRadius: 10,
      textAlignVertical: 'center'
   },
   wrapBtns: {
      display: 'flex',
      flexDirection: 'row',
      gap: 15,
   }
})

export default CounterScreen