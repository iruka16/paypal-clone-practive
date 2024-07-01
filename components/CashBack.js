import React from "react";
import { View, Text, Image, TouchableOpacity,StyleSheet } from "react-native";
import { useState } from "react";
import Wallet from "../screens/Wallet";


function CashBack ({imgSRC, compName, perc, color, onSave, back}){
    const[click, setclicked] = useState('save')
    
    const handleSave = () =>{
        setclicked('shop')
        onSave({imgSRC, compName, perc, color, onSave, back})

    }
 return(
    
    <View style={[styles.body1, {backgroundColor:color }]} >
        <Image source={imgSRC} style={styles.image1}/>
        <Text style = {styles.text1} >{compName}</Text>
        <Text style = {styles.text1}>{perc} cash back</Text>
        <TouchableOpacity style={styles.button1}  onPress={handleSave}>
            <Text style={styles.text2}>{click}</Text>
        </TouchableOpacity>

    </View>
  
 )

}

const styles = StyleSheet.create({
    body1:{
       margin: 17,
       marginHorizontal: 6 ,
       width: 335,
       paddingVertical: 20,
        borderRadius: 10,
        
       

    },
    image1:{
        width:70,
        height: 70,
        borderWidth:1,
        borderRadius:"51%",
        borderColor: 'white',
        marginLeft: 10,
        marginBottom: 12,
        backgroundColor: 'black'
       
    }, 
    text1: {
        fontSize: 25,
        fontWeight: '700',
        color:'white',
        marginLeft: 10,
        marginTop: 10
    },
    button1:{
       alignItems: 'center',
       marginHorizontal:20,
       marginTop: 10,
       borderRadius: 20,
       borderColor: 'white',
       borderWidth: 0.5,
       paddingVertical: 5


    },
    text2:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    }

})




export default CashBack;