import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Finances from "./screens/Finances";
import HomeScreen from "./screens/HomeScreen";
import Payments from "./screens/Payments";
import Reward from "./screens/Rewards";
import Wallet from "./screens/Wallet";
import MenuScreen from "./screens/MenuScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";



const Tab = createBottomTabNavigator();
const iconStyles = {
  alignItems: "center",
  justifyContent: "center",
};

const Stack = createStackNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 0,
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    paddingTop: 5,
    
  },
};

function MainTab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={iconStyles}>
                <Ionicons
                  name="home"
                  size={22}
                  color={focused ? "#000033" : "grey"}
                />
                <Text
                  style={{ fontSize: 12, color: focused ? "#000033" : "grey" }}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Finances"
        component={Finances}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={iconStyles}>
                <MaterialCommunityIcons
                  name="finance"
                  size={24}
                  color={focused ? "#000033" : "grey"}
                />
                <Text
                  style={{ fontSize: 12, color: focused ? "#000033" : "grey" }}
                >
                  Finance
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={iconStyles}>
                <Fontisto
                  name="dollar"
                  size={22}
                  color={focused ? "#000033" : "grey"}
                />
                <Text
                  style={{ fontSize: 12, color: focused ? "#000033" : "grey" }}
                >
                  Payment
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Reward}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={iconStyles}>
                <FontAwesome
                  name="trophy"
                  size={24}
                  color={focused ? "#000033" : "grey"}
                />
                <Text
                  style={{ fontSize: 12, color: focused ? "#000033" : "grey" }}
                >
                  Rewards
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={iconStyles}>
                <AntDesign
                  name="wallet"
                  size={24}
                  color={focused ? "#000033" : "grey"}
                />
                <Text
                  style={{ fontSize: 12, color: focused ? "#000033" : "grey" }}
                >
                  Wallet
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={MainTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="menu" component={MenuScreen} />
        <Stack.Screen name="homer" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
