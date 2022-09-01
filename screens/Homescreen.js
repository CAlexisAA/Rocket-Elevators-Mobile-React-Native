import React, { useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

function Homescreen () {
    const navigation = useNavigation();

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const inactElevatorsURL = "https://rocketelevators-api.azurewebsites.net/api/Elevator";

    useEffect(() => {
        fetch(inactElevatorsURL)
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false))

    },[])
    
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
            <Text style={styles.welcomeText}>Elevator actual status</Text>
            </View>
            {
                loading ?( <Text>Loading...</Text>) : (
                    data.map((get)=> (
                        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                          <Text style={{fontSize:25, fontWeight:"bold"}}>{get.model}</Text> 
                          <Text style={{fontSize:25, fontWeight:"bold"}}>{get.serialNumber}</Text>
                          <Text style={{fontSize:20, color:"red"}}>is {get.status}</Text>  
                        </View>
                    ))
                )
            }
            <View style={styles.Middle}>
                {/* <Text style={styles.welcomeText}>Welcome</Text> */}
                <View style={styles.statusButton}>
                <Button onPress={() => navigation.navigate("Status")} title="Change status" />
                </View>

                <View style={styles.logoutButton}>
                <Button onPress={() => navigation.navigate("Login")} title="Logout" />
                </View>
                            
            </View>
        </View>
        
    );
};

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
        fontWeight:'bold'
    },
    Middle:{
        alignItems:'center',
        justifyContent:'center',
    },
    logoutButton:{
        marginTop:30,
        marginLeft:15,
        marginRight:15,
    }

})