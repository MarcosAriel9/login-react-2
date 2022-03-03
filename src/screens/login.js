import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import {useNavigation} from "@react-navigation/native"

export default function login() {
  return (
    <ScrollView>
        <Image style={styles.logo} resizeMode="contain" 
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALSZ-Xq8fj-8UjVqqMUkJQyLE8_Hen6nQMA&usqp=CAU'}}
        />
        <View style={styles.viewContainer}>
            <Text>Formulario login</Text>
            <CrearCuenta/>
        </View>
        <Divider style={styles.divider}></Divider>
        <Text>Redes Sociales</Text>
        {/* <Image style={styles.logo} resizeMode="contain" 
        source={require('../../assets/imagen.png')}
        /> */}
    </ScrollView>
  )
}

function CrearCuenta(){
    const navigation = useNavigation();
    return(
        <Text style={styles.textRegister}>¿Aun no tienes cuenta?{" "}
            <Text style={styles.btnRegister} onPress={() => navigation.navigate('Register')}>Registrate Aqui</Text>
        </Text>

    )
}

const styles = StyleSheet.create({
    logo:{
        height:100,
        width:200,
        alignSelf:"center"
    },
    viewContainer:{
        marginRight:40,
        marginLeft:40,
    },
    textRegister:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        marginRight:10
    },
    btnRegister:{
        color:"#fcb823",
        fontWeight:"bold"
    },
    divider:{
        backgroundColor:"#fcb832",
        margin: 40    
    }
})