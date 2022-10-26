import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { Title, List } from 'react-native-paper';
interface DataProps {
    data: Array<Object> | [];
}

export const UserList: FC<DataProps> = ({ data }) => {
    return (
        <View style={{ paddingVertical: 8, flex: 1 }}>
            {!data.length && <Title>Empty</Title>}
            <FlatList
            data={data}
            keyExtractor={(user: any) => user.id}
            renderItem={({ item }: any) => (<List.Item title={item.login} />)}
            />
        </View>        
  )
}
