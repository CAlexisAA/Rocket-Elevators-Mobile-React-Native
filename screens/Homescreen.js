import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';


function Homescreen () {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.welcomeText}>Welcome User</Text>
                <Button onPress={() => navigation.navigate("Login")} title="Logout" />
            </View>
        </View>
        
    )
}

export default () => {
    return (
        <NativeBaseProvider>
            <Homescreen/>
        </NativeBaseProvider>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    welcomeText:{
        marginTop:100,
        fontSize:30,
        fontWeight:'bold',
    },
    Middle:{
        alignItems:'center',
        justifyContent:'center',
    },
    logoutButton:{
        marginTop:30,
        marginLeft:15,
        marginRight:15,
    },
    logoutText:{
        marginTop:100,
        fontSize:30,
        fontWeight:'bold',
    },
    statusButton:{
        marginTop:50,
        marginLeft:25,
        marginRight:25,
    },
    statusText:{
        marginTop:100,
        fontSize:30,
        fontWeight:'bold',
    },

})