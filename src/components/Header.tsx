/* eslint-disable */
import { View, Text } from 'react-native';

interface Props {
    title: string
}

const Header = (props: Props) => {
    return (
        <View className='flex items-center p-5'>
            <Text className='text-5xl font-bold'>{props.title}</Text>
        </View>
    )
}

export default Header