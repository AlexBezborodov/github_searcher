import React, { FC } from 'react';
import { Alert, View } from 'react-native';
import { Card, Subheading } from 'react-native-paper';

export const SearchHistory: FC<any> = ({ history, setSearchQuery }) => {
  const onUpdate = (item) => {
    setSearchQuery(item);
  }
  return (
    <View style={{ position: 'absolute', top: 52, width: "100%" }}>
      <Card style={{ padding: 4 }} >
        {history.map((item, key) => ( 
          <Subheading onPress={() => onUpdate(item)} key={key}>
            {item}
          </Subheading>     
        ))}
      </Card> 
    </View>
              
  )
}
