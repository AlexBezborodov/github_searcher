import React, { FC } from 'react';
import { View } from 'react-native';
import { Card, Subheading } from 'react-native-paper';

export const SearchHistory: FC<any> = () => {
  return (
      <View style={{ position: 'absolute', top: 52, width: "100%"}}>
      <Card style={{ padding: 4}}>
        <Subheading >History list</Subheading>
      </Card> 
      </View>
              
  )
}
