import { StyleSheet } from "react-native"
import { FAB } from 'react-native-paper';

interface props {
   onClick: () => void;
   label?: string;
}

const MyFAB = ({ onClick, label = "" }: props) => {
   return <>
      <FAB 
         icon={ "add-outline" }
         style={ styles.fab }
         onPress={ onClick }
         label={ label }
      /> 
   </>
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 0,
    padding: 0,
    right: '3%',
    bottom: '1%',
  },
})

export default MyFAB