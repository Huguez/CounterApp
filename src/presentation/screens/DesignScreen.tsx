import { StyleSheet, Text, View, useWindowDimensions } from "react-native"
// import { Dimensions } from "react-native"
// const { width, height } = Dimensions.get("window");

interface props {}

const DesignScreen = ( {}: props ) => {
   const { width, height } = useWindowDimensions()

   return (
      <View style={ styles.container }>
         {/* <Text style={ styles.title }>DesignScreen</Text> */}
         <View style={ styles.box }>
            <Text numberOfLines={1} style={ styles.text } > width:{ width } </Text>
            <Text numberOfLines={1} style={ styles.text }> heigth: { height } </Text>
         </View>
         <View  style={ styles.wrap }>

            <View style={ styles.absoluta }>
               <Text style={ {margin: 'auto'} }> absoluta </Text>
            </View>
            <View style={ styles.relativa }>
               <Text style={ {margin: 'auto'} }> relativa </Text>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
     flex: 1, 
   },
   title: {
      margin: 'auto',
      textAlign: 'center',
      backgroundColor: 'lightblue',
      fontSize: 50
   },
   box: {
      height: '30%',
      width: 'auto',      
      margin: 20,
      backgroundColor: 'purple'
   },
   text: {
      color: 'white',
      fontSize: 30,
      fontWeight: '700',
   },
   wrap: {
      flex: 1,
      backgroundColor: 'orange'
   },
   absoluta: { //esta es la buena
      borderColor: 'white',
      borderWidth: 5,
      width: 100,
      height: 100,
      backgroundColor: '#28c4d9',
      position: 'absolute',
      right: 0,
      bottom: 0,
   },
   relativa: {
      borderColor: 'white',
      borderWidth: 5,
      width: 100,
      height: 100,
      backgroundColor: '#28c4d9',
      position: 'relative',
      top: 0,
      right: 0,
   }

})

export default DesignScreen