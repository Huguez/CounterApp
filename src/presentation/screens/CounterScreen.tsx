import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface props {

}

const CounterScreen = ( {}: props ) => {
   const [ counter, setCounter ] = useState<number>( 0 );

   return (
      <View style={ styles.container }>
         <Text style={ styles.title } > Counter: { counter } </Text>

         <View style={ styles.wrapBtns }>

            <TouchableOpacity  onPress={()=> setCounter( prev => prev-1 )} >
               <Text style={ styles.btn }> -1 </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> setCounter( 0 )} >
               <Text style={ styles.btn }> reset </Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=> setCounter( prev => prev+1 )} >
               <Text style={ styles.btn }> +1 </Text>
            </TouchableOpacity>
         </View>
      </View>
   )
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