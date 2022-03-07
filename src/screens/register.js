import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React,{useRef} from 'react'
import {Icon, Input, Button} from 'react-native-elements'
import FormRegister from '../components/account/formRegister'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Toast from 'react-native-easy-toast'


export default function register() {
  const toastref = useRef();

  return (
    <KeyboardAwareScrollView>
      <Image style={styles.logo} resizeMode="contain" 
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALSZ-Xq8fj-8UjVqqMUkJQyLE8_Hen6nQMA&usqp=CAU'}}
        />
      <View style={styles.formView}>
        <FormRegister toastref = {toastref}></FormRegister>
      </View>
      <Toast ref={toastref} position="center" opacity={0.9}/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  formView:{
    marginHorizontal: 40
  },
  logo:{
    height:100,
    width:200,
    alignSelf:"center"
  }
})