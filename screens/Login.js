import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Login () {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Rocket Elevators</Text>
            </View>
            <View style={styles.text2}>
                <Text>Login</Text>
            </View>

            {/*Username or Email*/}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="user-secret" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color:'black',
                                }}
                                _dark={{
                                    color:'gray.300',
                                }}
                            />
                        }
                        variant = "outline"
                        placeholder="Email"
                        _light={{
                            placeholderTextColor: "blueGray.50"
                        }}
                    />
                </View>
            </View>
            
            {/*Password*/}
            <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="key"/>}
                                size="sm"
                                m={2}
                                _light={{
                                    color: "black",
                                }}
                                _dark={{
                                    color:"gray.300"
                                }}
                            />
                        }
                        variant = "outline"
                        secureTextEntry={true}
                        placeholder="Password"
                        _light={{
                            placeholderTextColor:"blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50"
                        }}

                    />    
                </View>
            </View>

             {/*Button*/}
             <View style={styles.buttonStyle}>
                <Button onPress={() => navigation.navigate("Homescreen")}>
                    <Text style={styles.loginText}>Login</Text>    
                </Button>
            </View>  
            </View>      
    )
}

export default () => {
    return (
        <NativeBaseProvider>
            <Login/>
        </NativeBaseProvider>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    LoginText:{
        marginTop:100,
        fontSize:30,
        fontWeight:'bold',
    },
    Middle:{
        alignItems:'center',
        justifyContent:'center',
    },
    text2:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:5
    },
    loginText:{
        fontWeight:'bold',
        color: 'white'
    },
    emailInput:{
        marginTop:10,
        marginRight:5
    },
    buttonStyle:{
        marginTop:30,
        marginLeft:15,
        marginRight:15
    },
    buttonStyleX:{
        marginTop:12,
        marginLeft:15,
        marginRight:15
    },
    buttonDesign:{
        backgroundColor:'#026efd'
    },
    lineStyle:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        alignItems:'center'
    },
    boxStyle:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        justifyContent:'space-around'
    },
})

