import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from "../../utils/validations"
import { isEmpty, size } from 'lodash'
import firebase from 'firebase'


export default function formRegister(props) {
  const navigation = props;
  console.log(props)
const { toastref }=props
  const [showPass, setShowPass] = useState(false)
  const [showPassRepeat, setShowPassRepeat] = useState(false)

  const [formData, setFormDta] = useState(defaultFormValues())


  const onSubmit = () => {
    if (isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.passwordR)) {
      toastref.current.show("todos los datos son obligatorios")
    } else if (!validateEmail(formData.email)) {
      toastref.current.show("email invalido,le falta una pata")
    }else if (size(formData.password)<6) {
      toastref.current.show("la contraseña debe tener al menos 6 caracteres")
    } else if(formData.password !== formData.passwordR){
      toastref.current.show("las contraseñas deben ser iguales")
    } else {
      firebase.auth().createUserWithEmailAndPassword(formData.email,formData.password).then(response=>{
        navigation.navigate("index")
        toastref.current.show("logrado")
      }).catch(err=>{
        console.log(err)
      })
      //console.log("simon")
    }


    const capturarDatos = (e, type) => {
      // console.log(type)
      setFormDta({...formData, [type]: e.nativeEvent.text })
    }

    return (
      <View style={styles.formContainer}>
        <Input

          onChange={(e) => capturarDatos(e, "email")}
          placeholder="Correo Electronico"
          containerStyle={styles.formInput}
          rightIcon={
            <Icon
              type='material-community'
              name='at'
              iconStyle={styles.icon}
            />
          }
        />
        <Input
          onChange={(e) => capturarDatos(e, "password")}
          placeholder="Contraseña"
          containerStyle={styles.formInput}
          password={true}
          secureTextEntry={showPass ? false : true}
          rightIcon={
            <Icon
              type='material-community'
              name={showPass ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icon}
              onPress={() => setShowPass(!showPass)}
            />
          }
        />
        <Input
          onChange={(e) => capturarDatos(e, "passwordR")}
          placeholder="Repetir Contraseña"
          containerStyle={styles.formInput}
          password={true}
          secureTextEntry={showPassRepeat ? false : true}
          rightIcon={
            <Icon
              type='material-community'
              name={showPassRepeat ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icon}
              onPress={() => setShowPassRepeat(!showPassRepeat)}
            />
          }
        />
        <Button
          title="Registrar"
          containerStyle={styles.containerBtnRegister}
          buttonStyle={styles.btnRegister}
          onPress={() => onSubmit()}
        />
      </View>
    )
  }

  function defaultFormValues() {
    return {
      email: "",
      password: "",
      passwordR: ""
    }
  }

  const styles = StyleSheet.create({
    formContainer: {
      marginTop: 30
    },
    formInput: {
      width: "100%",
      marginTop: 20
    },
    containerBtnRegister: {
      marginTop: 20,
      width: "95%"
    },
    btnRegister: {
      backgroundColor: "#fcb823"
    },
    icon: {
      color: "#c1c1c1"
    }
  })
}