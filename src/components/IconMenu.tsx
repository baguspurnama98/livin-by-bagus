import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"

interface Props {
    iconName: string
    title: string
    color: string
    onPress?: any
}

export const IconMenu = ({ iconName, title, color, onPress }: Props) => {
    return (
        <View className='flex flex-col'>
            <View>
                <TouchableOpacity onPress={onPress} className={"mx-auto p-4 rounded-full " + color}>
                    <Icon name={iconName} size={25} color={"white"} />
                </TouchableOpacity>
            </View>
            <Text className='mt-1'>{title}</Text>
        </View>
    )
}
