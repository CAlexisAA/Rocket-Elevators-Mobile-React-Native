import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

function Status()


export default () => {
    return (
        <NativeBaseProvider>
            <Status/>
        </NativeBaseProvider>
    )
}
