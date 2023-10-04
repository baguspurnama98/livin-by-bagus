import React, { useCallback } from 'react';
import { Image, Text, TouchableHighlight, Linking, View, Alert } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FormRegister from '../components/FormRegister';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { IconMenu } from '@src/components/IconMenu';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const handlePress = useCallback(async () => {
        // const supported = await Linking.canOpenURL("geo:37.484847,-122.148386");
        // if (supported) {
        await Linking.openURL("geo:37.484847,-122.148386");
        // } else {
        //     Alert.alert(`Don't know how to open this URL: ${"geo:37.484847,-122.148386"}`);
        // }
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View className="flex-1 justify-center ">
                <Image
                    source={require("@images/logo.png")}
                    className="justify-end w-full h-96"
                />
                <View>
                    <TouchableHighlight
                        underlayColor={"blue"}
                        onPress={() => navigation.navigate("Home" as never)}
                        className='mt-4 bg-blue-800 py-3 px-28 rounded-full mx-auto'
                        style={{ elevation: 10, borderColor: "black" }}
                    >
                        <View className='flex flex-row space-x-2 items-center justify-center'>
                            <Icon name='finger-print' size={30} color={"white"} />
                            <Text className='text-white font-bold text-xl' >Login</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View className='mt-8 flex flex-row mx-auto space-x-5'>
                    <View>
                        <IconMenu iconName='receipt-outline' title='Setor Tarik' color='bg-purple-500' onPress={handlePress} />
                    </View>
                    <View>
                        <IconMenu iconName='wallet-sharp' title='e-money' color='bg-orange-500' />
                    </View>
                    <View>
                        <IconMenu iconName='flash-outline' title='Quick Pick' color='bg-yellow-400' />
                    </View>
                    <View>
                        <IconMenu iconName='qr-code' title='QR Bayar' color='bg-blue-500' />
                    </View>
                </View>
                <FormRegister />
            </View >
        </GestureHandlerRootView>
    )
}

export default WelcomeScreen