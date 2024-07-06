import React from "react";

import { View, TouchableOpacity, Text, ImageBackground, Image} from "react-native";
import { StyleSheet } from "react-native";
import { Directions } from "react-native-gesture-handler";


function SavedDeals({imgSRC, compName, perc, color, data, back}){
    return(
        <View style= {styles.container}>
            <ImageBackground style={styles.background} source={back}>
            <Image source={imgSRC} style={styles.Image}/>
            </ImageBackground>
          <View style={styles.part2}>
            <View style={styles.textspace}>
                <Text style={styles.text1}>{perc} cash back</Text>
                <Text style={styles.text2}>{compName}</Text>
            </View>

            <TouchableOpacity style = {styles.button}>
                    <Text style ={styles.text3} >Shop</Text>
            </TouchableOpacity>

            </View>
           

        </View>
    )
}

const styles = StyleSheet.create({

 container: {
    width: 160,
    height: 250,
    backgroundColor: 'white',
    marginVertical: 15,
    borderRadius: 10,
     overflow: 'hidden',
     flexDirection: 'column',
    marginHorizontal: 9

 },
 background:{
   height: "70%",
   borderTopLeftRadius: 10,
   borderTopRightRadius:10,
  


 }, 
 Image:{
    width:50,
    height: 50,
    borderWidth:0.1,
    borderRadius:"51%",
    borderColor: 'white',
    borderWidth: 0.5,
    marginLeft: 10,
    marginBottom: 12,
    backgroundColor: 'black',
    marginTop: 15,
    
 },
 text1:{
    fontSize: 17,
    fontWeight:'700',

 
 },
 button:{
    
    alignItems: 'center',
    width: 140,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#3333ff',
    position: 'absolute',
    top: 30,
   left: 10
   

    
  

 },
 textspace:{
    marginLeft: 14,
   position: 'absolute',
  bottom: 10
 },
 text2:{
    color: 'grey',
    fontWeight: '500',
   
 },
 text3:{
    color: 'white',
    fontWeight: '700',
    fontSize: 17
 }
 
}
)
export default SavedDeals;

