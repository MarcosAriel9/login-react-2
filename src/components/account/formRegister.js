import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Input, Icon, Button } from 'react-native-elements'

export default function formRegister() {

    const [showPass, setShowPass] = useState(false)
    const [showPassRepeat, setShowPassRepeat] = useState(false)

    const [formData, setFormDta] = useState(defaultFormValues())

    const onSubmit = ()=>{console.log("OnSubmit")}

    const capturarDatos = (e, type)=>{
        // console.log(type)
        console.log(e.nativeEvent.text)
    }

  return (
    <View style={styles.formContainer}>
      <Input
      onChange={(e)=>capturarDatos(e, "email")}
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
      placeholder="Contraseña"
      containerStyle={styles.formInput}
      password={true}
      secureTextEntry={showPass ? false : true}
      rightIcon={
        <Icon
        type='material-community'
        name={showPass ? "eye-off-outline" : "eye-outline"}
        iconStyle={styles.icon}
        onPress={()=>setShowPass(!showPass)}
        />
        }
      />
      <Input
      placeholder="Repetir Contraseña"
      containerStyle={styles.formInput}
      password={true}
      secureTextEntry={showPassRepeat ? false : true}
      rightIcon={
        <Icon
        type='material-community'
        name={showPassRepeat ? "eye-off-outline" : "eye-outline"}
        iconStyle={styles.icon}
        onPress={()=>setShowPassRepeat(!showPassRepeat)}
        />
        }
      />
      <Button
      title="Registrar"
      containerStyle={styles.containerBtnRegister}
      buttonStyle={styles.btnRegister}
      onPress={()=>onSubmit()}
      />
    </View>
  )
}

function defaultFormValues(){
    return{
        email:"",
        password:"",
        passwordR:""
    }
}

const styles = StyleSheet.create({
    formContainer:{
        marginTop: 30
    },
    formInput:{
        width:"100%",
        marginTop: 20
    },
    containerBtnRegister:{
        marginTop: 20,
        width: "95%"
    },
    btnRegister:{
        backgroundColor:"#fcb823"
    },
    icon:{
        color:"#c1c1c1"
    }
})