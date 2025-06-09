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
         
         <View style={ styles.wrapFlex }>

            <View  style={ styles.caja1 } />
            <View  style={ styles.caja2 } />
            <View  style={ styles.caja3 } />

         </View>
         
         <View style={ styles.wrapFlex2 }>

            <View  style={ [ styles.caja, styles.caja1 ] } />
            <View  style={ [ styles.caja, styles.caja2 ] } />
            <View  style={ [ styles.caja, styles.caja3 ] } />
            <View  style={ [ styles.caja, styles.caja1 ] } />
            <View  style={ [ styles.caja, styles.caja2 ] } />
            <View  style={ [ styles.caja, styles.caja3 ] } />
            <View  style={ [ styles.caja, styles.caja1 ] } />
            <View  style={ [ styles.caja, styles.caja2 ] } />
            <View  style={ [ styles.caja, styles.caja3 ] } />
            <View  style={ [ styles.caja, styles.caja1 ] } />
            <View  style={ [ styles.caja, styles.caja2 ] } />
            <View  style={ [ styles.caja, styles.caja3 ] } />

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
      display: 'none',
      backgroundColor: 'purple'
   },
   text: {
      color: 'white',
      fontSize: 30,
      fontWeight: '700',
   },
   wrap: {
      flex: 1,
      display: 'none',
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
   },
   wrapFlex: {
      flex: 1,
      display: 'none',
      flexDirection: 'column',
   },
   wrapFlex2: {
      flex: 1,
      flexWrap: 'wrap',
      columnGap: 15,
      // gap: 5,
      justifyContent: 'space-between',
      alignItems: 'stretch',
      flexDirection: 'row',
   },
   caja: {
      width: 100,
      height: 100,
   },
   caja1: {
      backgroundColor: 'lightblue',
   },
   caja2: {
      backgroundColor: '#5856D6',
      // bottom: 0,
      // position: 'absolute',
      // alignSelf: 'flex-end'
   },
   caja3: {
      backgroundColor: '#2e2d71',
      // alignSelf: 'center',
   }
   
})

export default DesignScreen