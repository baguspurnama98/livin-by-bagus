import { IconMenu } from '@src/components/IconMenu'
import React from 'react'
import { View, Text } from 'react-native'

const HomeScreen = () => {
    return (
        <View className='bg-white'>
            <View className='py-10'>
                <View className='py-3'>
                    <Text className='text-base text-blue-600 text-center'>
                        Selamat siang, <Text className='font-bold'>Bagus Purnama!</Text>
                    </Text>
                </View>
                <View className='w-full p-5'>

                    <View className='mx-auto  flex flex-row space-x-3 flex-wrap items-center'>
                        <View>
                            <IconMenu iconName='receipt-outline' title='Setor Tarik' color='bg-purple-500' />
                        </View>
                        <View>
                            <IconMenu iconName='receipt-outline' title='Setor Tarik' color='bg-purple-500' />
                        </View>
                        <View>
                            <IconMenu iconName='receipt-outline' title='Setor Tarik' color='bg-purple-500' />
                        </View>
                        <View>
                            <IconMenu iconName='receipt-outline' title='Setor Tarik' color='bg-purple-500' />
                        </View>
                        <View>
                            <IconMenu iconName='receipt-outline' title='Setor Tarik' color='bg-purple-500' />
                        </View>
                        <View>
                            <IconMenu iconName='receipt-outline' title='Setor Tarik' color='bg-purple-500' />
                        </View>
                        <View>
                            <IconMenu iconName='receipt-outline' title='Setor Tarik' color='bg-purple-500' />
                        </View>
                    </View>
                </View>

            </View>


        </View>
    )
}

export default HomeScreen