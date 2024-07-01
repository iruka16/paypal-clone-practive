import React from "react";

import { View, TouchableOpacity, Text, ImageBackground, Image} from "react-native";
import { StyleSheet } from "react-native";


function SavedDeals({imgSRC, compName, perc, color, data, back}){
    return(
        <View style= {styles.container}>
            <ImageBackground style={styles.background} source={back}>
            <Image source={imgSRC} style={styles.Image}/>
            </ImageBackground>
          
                <Text>{perc} cash back</Text>
                <Text>{compName}</Text>
                <TouchableOpacity>
                    <Text>Shop</Text>
                    </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({

 container: {
    width: 140,
    height: 180,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10

 },
 background:{
   height: "50%"
 }, 
 Image:{
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
 }
}
)
export default SavedDeals;

