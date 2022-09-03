import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

function Status() {
    const navigation = useNavigation();

    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true)
    // const actElevatorsURL = "https://rocketelevators-api.azurewebsites.net/api/Elevator/49/Active";

    // useEffect(() => {
    //     fetch(actElevatorsURL)
    //     .then((response)=>response.json())
    //     .then((json)=>setData(json))
    //     .catch((error)=>console.error(error))
    //     .finally(()=>setLoading(false))

    // },[])

        
    return (
        <View style={styles.container}>
            {/* <View style={styles.Middle}>
            <Text style={styles.statusText}>Status Changed</Text>
            </View>
            {
                loading ?( <Text>Loading...</Text>) : (
                    data.map((put)=> (
                        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                          <Text style={{fontSize:25, fontWeight:"bold"}}>{put.model}</Text> 
                          <Text style={{fontSize:25, fontWeight:"bold"}}>{put.serialNumber}</Text>
                          <Text style={{fontSize:20, color:"green"}}>{put.id}</Text>  
                          <Text style={{fontSize:20, color:"green"}}>is now {put.status}</Text>  
                        </View>
                    ))
                )
            } */}
            <View style={styles.Middle}>
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
            <Status/>
        </NativeBaseProvider>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    statusText:{
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
