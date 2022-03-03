import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import {Icon, Input, Button} from 'react-native-elements'
import FormRegister from '../components/account/formRegister'

export default function register() {
  return (
    <ScrollView>
      <Image style={styles.logo} resizeMode="contain" 
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALSZ-Xq8fj-8UjVqqMUkJQyLE8_Hen6nQMA&usqp=CAU'}}
        />
      <View style={styles.formView}>
        <FormRegister></FormRegister>
      </View>
    </ScrollView>
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