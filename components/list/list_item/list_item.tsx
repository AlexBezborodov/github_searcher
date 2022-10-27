import React, { FC } from 'react';
import { View } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { useNavigate } from 'react-router-native';

export const UserListItem: FC<any> = (data) => { 
  const navigate = useNavigate();
    return (
    <View style={{ padding: 1}}>
      <Card style={{marginVertical: 4}} onPress={() => navigate(`/org/${data.login}/${data.id}`)}>
        <Card.Content>
          <Title>
            {data.login}
          </Title>
        </Card.Content>  
      </Card>  
    </View>
          
  )
}
