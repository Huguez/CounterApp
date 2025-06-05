import React from 'react'
import { Pressable, PressableStateCallbackType, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';

interface Props {
   onClick: () => void;
   label: string;
}

type FcPressed = StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);

export const MyButton = ( props: Props) => {
   const { onClick, label } = props;

   const fcPressed: FcPressed = ({ pressed } : PressableStateCallbackType ) => [{ 
      backgroundColor:   pressed ? '#075e19' : '#359148', borderRadius: 10,  
   }]

   return <>
      <Pressable style={ fcPressed } onPress={ onClick } >
         <Text style={ styles.btn }> { label } </Text>
      </Pressable >
  </>
}

const styles = StyleSheet.create({
   btn: {
      fontSize: 45,
      color: 'white',
      textAlignVertical: 'center'
   },
})
