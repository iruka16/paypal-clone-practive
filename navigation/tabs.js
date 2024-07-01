import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Finances from "../screens/Finances";
import Payments from "../screens/Payments";
import Reward from "../screens/Rewards";
import Wallet from "../screens/Wallet";
import React from "react";


const Tab = createBottomTabNavigator();
const screenOptions = {
   tabBarShowLabel:false, 
   

}

function Tabs() {
    return(
        <Tab.Navigator screenOptions={{screenOptions}}>

            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Finances" component={Finances}/>
            <Tab.Screen name="Payments" component={Payments}/>
            <Tab.Screen name="Rewards"  component={Reward}/>
            <Tab.Screen name="Wallet"  component={Wallet}/>
        </Tab.Navigator>
       
    )


}

export default Tabs;