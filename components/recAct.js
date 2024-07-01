import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet} from "react-native";
 
function RecAct({icoSrc, comName, transType, amnt, specSty, botmSty}){
 return (
    <TouchableOpacity>
    <View style={[styles.container, specSty, botmSty ]} >
        <Image source={icoSrc} style={styles.image}/>
        <View>
            <Text style={styles.text1}>{comName}</Text>
            <Text style={styles.text2}>{transType}</Text>
        </View>
        <Text style={styles.text3} >{amnt}</Text>

    </View>
    </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
    specialStyle:{
        borderTopLeftRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'black',
        marginTop: 15,
        
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 350,
        height: 70,
        backgroundColor: 'white',
        marginLeft:17,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2
    
        
    },
 image:{
    width:40,
        height: 40,
        borderWidth:0.1,
        borderRadius:"51%",
        borderColor: 'grey',
        borderWidth: 0.5,
        marginLeft: 10,
        marginBottom: 12,
        backgroundColor: 'black',
        marginTop: 15

 }, 
 text1:{
    marginBottom: 5,
    marginTop: 5,
    paddingTop: 12,
    fontSize: 18,
    fontWeight: '700'

 },
 text2:{
    fontWeight: '500',
    color: 'grey'
   

 },
 text3:{
    paddingTop: 12,
    fontSize: '16',
    marginTop: 5,
    fontWeight: '700'

 }
})

export default RecAct;