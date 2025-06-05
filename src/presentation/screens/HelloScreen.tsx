
import { StyleSheet, Text, View } from 'react-native'
import CounterScreen from './CounterScreen';

interface props {
   name?: string;
} 

export const HelloScreen = ( { name = "Negro" }: props) => {
   return (
      <View style={ styles.container } >
         <Text 
            ellipsizeMode={'tail'} 
            numberOfLines={1} 
            style={ styles.title }
         >
            Hello { name } !!!
         </Text>

         <CounterScreen />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
   },
   title: {
      fontSize: 45,
      textAlign: 'center',
      color: 'black'
   },
})