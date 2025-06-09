import { StyleSheet, View } from "react-native"

export const HomeworkScreen = () => {
   return (
      <View style={ styles.container }> 
         <View style={ [ styles.box, styles.purpleBox ] } />

         <View style={ [ styles.box, styles.orageBox ] } />

         <View style={ [ styles.box, styles.blueBox ] } />
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#aaa',
      // justifyContent: 'center' tarea 2
      // justifyContent: 'center', tarea 3
      // justifyContent: 'space-between' tarea 4
      // flexDirection: 'row', tarea 5
      // justifyContent: 'space-between',tarea 5
      // alignItems: 'center', tarea 5
      // justifyContent: 'center', tarea 5

   },
   box: {
      width: 100, //tarea 6
      height: 100, // tarea 5
      borderWidth: 10,
      borderColor: 'white',
      
   },
   purpleBox: {
      backgroundColor: '#5856d6',
      // alignSelf: 'flex-end', tarea 3
      // alignSelf: 'flex-end'  tarea 4
      // flex: 1,tarea 6 
   },
   orageBox: {
      backgroundColor: '#F0A23B',
      // flex: 1, primera tarea
      // alignSelf: 'center' tarea 4 
      // flex: 1, tarea 6
   },
   blueBox: {
      backgroundColor: 'lightblue',
      // width: '100%' tarea 2
      // alignSelf: 'center', tarea 3
      // flex: 3 tarea 6
   }
})