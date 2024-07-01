import { View, Text,ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

function Header ({}) {
    const navigation = useNavigation()
    return(
    <View style = {styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("menu")} style={styles.burger}>
         <Entypo name="menu" size={20} color="midnightblue"  />
        </TouchableOpacity>
        <View style = {styles.toLeft}>
            <TouchableOpacity style ={styles.qrcode}>
                <MaterialIcons name="qr-code-scanner" size={20} color="midnightblue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.person}>
                <Ionicons name="person-circle-outline" size={20} color="midnightblue" />
            </TouchableOpacity>
        </View>

    </View>
    )

}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 60,
        paddingHorizontal: 15,
       alignContent: 'center',
       borderRadius: 8
      
},
    burger:{
        borderColor: 'grey',
        padding:5,
        backgroundColor: 'white',
        borderRadius: '50%',

    },
    qrcode:{
        marginRight:11,
        padding:5,
        backgroundColor: 'white',
        borderRadius: '50%',


    },
    person:{
   
        padding:5,
        backgroundColor: 'white',
        borderRadius:90,

    },
    toLeft:{
        flexDirection: 'row',

    }

    
})
export default Header;