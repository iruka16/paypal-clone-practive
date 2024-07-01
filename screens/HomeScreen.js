import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, FlatList, } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import CashBack from "../components/CashBack";
import RecAct from "../components/recAct";
import SavedDeals from "../components/SavedDeals";







function HomeScreen() {
  const[heldDeals, setHeldDeals] = useState([])

    const imgData =[
        {
            id: '1',
            imgSRC: require("../assets/priceline.webp"),
            compName: "Priceline",
            perc: "5%",
            color: '#1e7b1e',
            back: require("../assets/priceback.jpeg")
            
        },
        {
            id: '2',
            imgSRC: require("../assets/walmart.jpeg"),
            compName: "Walmart",
            perc: "4%",
            color: '#0073e6'
        },
        {
            id: '3',
            imgSRC:require("../assets/bestbuy.jpg"),
            compName: "Best Buy",
            perc: "3%",
            color: '#0000cc'
        },
        {
            id: '4',
            imgSRC: require("../assets/ticketmaster.png"),
            compName:"TicketMaster",
            perc: "3%",
            color:'#3333ff'
        }
    ]
   const recentAct =[
    {
      id: 1,
      icoSrc: require('../assets/lyft.jpeg'),
      comName: 'Lyft',
      transType: 'Automatic payment', 
      amnt: '-$15.96',
      special: true,
      bottom: false 

    },
    {
      id: 2,
      icoSrc: require('../assets/spotify .jpeg'),
      comName: 'spotify',
      transType: 'Automatic payment', 
      amnt: '-$7.96',
      special: false,
      bottom: false 

    },
    {
      id: 3,
      icoSrc: require('../assets/discord.jpg'),
      comName: 'Discord',
      transType: 'Nefarious theft', 
      amnt: '-$100.4',
      special: false,
      bottom: true 

    },
    

   ]

   const handleSave = (data) => {
    setHeldDeals((prevComp) => 
      [...prevComp, {...data, id: heldDeals.length + 1}]) 
   }
  return (
    <SafeAreaView>
      <Header></Header>
      <ScrollView contentContainerStyle={styles.scroll} >
     <View style={styles.body}>
        <Text style={styles.text1}>PayPal Rewards</Text>
        <View style={styles.points}>
          <Text style={styles.text2}>0 pts</Text>
          <Text style={styles.text3}>Ways...</Text>
        </View>
        <Text style={styles.text4}>$0.00 cash back value</Text>
      </View>
      <View style={styles.box2}>
        <AntDesign name="piechart" size={34} color="darkblue" style = {styles.iconBox2}/>
        <View style = {styles.inBox2}>
            <Text style = {styles.Text5}>Pay in 4 prequalified amount</Text>
            <Text style = {styles.Text6}>$1,500</Text>
        </View>
      </View>
      <Text style = {styles.Text7}>Cash back on Top brands</Text>
      <FlatList 
       horizontal={true}
       keyExtractor={(item) => item.id}
      data={imgData}  
      renderItem={({item})=> (
      <CashBack  
         imgSRC={item.imgSRC} 
         compName={item.compName} 
         perc={item.perc} 
         color={item.color}
         onSave={handleSave}
         />
         
            )}/>
    <Text style={styles.text8}> Terms & exclusions apply. Check offers for details </Text>
          <FlatList
          
          scrollEnabled={false}
          data = {recentAct}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            
            <RecAct
            icoSrc={item.icoSrc}
            transType= {item.transType}
            amnt={item.amnt}
            comName={item.comName}
            specSty={item.special && styles.specialStyle}
            botmSty={item.bottom && styles.botmStyle}
            />
          
          )}
          />
          <FlatList
          horizontal={true}
          data ={heldDeals}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <SavedDeals
            imgSRC = {item.imgSRC}
            compName = {item.compName}
              perc= {item.perc}
              color = {item.color} 
               back ={item.back}
               
               />
          )}
          
          />

     </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scroll:{
    paddingBottom: 50
  },
  body: {
    margin: 18,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
  points: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  text2: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 2,
  },
  text3: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 6,
    color: "blue",
  },
  text4: {
    color: "grey",
    fontWeight: "600",
  },
  box2: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 18,
    backgroundColor:'white',
    marginHorizontal: 18,
    borderRadius:10,
    marginVertical:11,
  },
  inBox2:{
    marginLeft:15,
    marginRight: 20
  },
  iconBox2:{
    marginRight:10,
    marginTop: 5
    
  },
  Text5:{
    fontSize: 16,
    fontWeight: '600',
    color: 'grey'
  },
  Text6: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: '600'
  },
  Text7:{
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 18,
    marginBottom: 5

  },
  text8:{
    fontWeight: '500',
    color: 'grey',
    marginLeft: 5
  },
  specialStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 15,
    
  },
  botmStyle:{
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 0
  }

});

export default HomeScreen;
