/* eslint-disable */
import { useEffect, useState } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';

interface UsersModel {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

export const Hero = () => {
    const [header, setHeader] = useState<number>(1)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [listUsers, setUsers] = useState<UsersModel[]>([])

    const getAllUsers = async () => {
        try {
            const res = await axios.get('https://reqres.in/api/users')
            setUsers(res.data.data)
            setTimeout(() => setLoading(false), 2000)

        } catch (err) {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (isLoading === true) {
            getAllUsers()
        }
    }, [isLoading])

    return (
        <View className='pt-4'>
            <Header title={String("Data Pegawai")} />
            <Button onPress={() => setLoading(true)} title='Request Data' />
            <View>
                {isLoading ?
                    <ActivityIndicator />
                    :
                    <FlatList data={listUsers} renderItem={({ item }) => (
                        <View className='text-center'>
                            <Text className='text-center'>{item.email}</Text>
                        </View>
                    )} />
                }
            </View>
        </View>
    )
}




