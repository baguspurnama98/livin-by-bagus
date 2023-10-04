import React, { useMemo, useRef, useState } from 'react'

import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

function FormRegister() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['10%', '80%'], []);
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            index={1}
            style={{ elevation: 20, shadowOffset: { width: 0, height: -3 }, shadowRadius: 3, shadowColor: '#000000', shadowOpacity: 1 }}
        >
            <BottomSheetView>
                <View>
                    <View className='mb-10'>
                        <Text className='font-bold text-center text-blue-700 text-lg '>Spesial untuk Anda yang Spesial!</Text>
                        <Text className='text-sm text-center leading-tight'>Langsung swipe untuk daftar!</Text>
                    </View>
                    <View className='px-10 space-y-3'>
                        <View>
                            <Text className='text-sm font-semibold'>*Nama Anda</Text>
                            <TextInput
                                // onChange={(props: string) => setUsername(props)}
                                placeholder='Tulis nama anda' className='p-2 border border-gray-500 rounded-md border-solid' />
                        </View>
                        <View>
                            <Text className='text-sm font-semibold'>*Password Anda</Text>
                            <TextInput placeholder='Tulis password' secureTextEntry className='p-2 border border-gray-500 rounded-md border-solid' />
                        </View>
                    </View>

                    <View className='mt-4'>
                        <TouchableHighlight
                            onPress={() => { }}
                            className='mt-4 bg-blue-800 py-2 px-16 rounded-full mx-auto'
                            style={{ elevation: 10, borderColor: "black" }}
                        >
                            <View className='flex flex-row space-x-2 items-center justify-center'>
                                <Text className='text-white font-bold text-lg' >Daftar</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </BottomSheetView>
        </BottomSheet>

    )
}

export default FormRegister