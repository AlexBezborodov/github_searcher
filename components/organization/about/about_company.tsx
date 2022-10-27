import React, { FC } from 'react';
import { View } from 'react-native';
import { Card, Subheading, Title } from 'react-native-paper';

export const AboutCompany: FC<any> = (data) => { 
    return (
    <View style={{ padding: 1, marginVertical: 16}}>
        <Card style={{ marginVertical: 4 }} >
        <Card.Cover source={{ uri: data.avatar_url }} />
        <Card.Content>
          <Title>
              Name: {data.name || "no info"}
          </Title>
          <Subheading>Location:{ data.location || "not filled"}</Subheading>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <Subheading>Followers: {data?.followers || 0}</Subheading>
            <Subheading>Repos: {data?.public_repos || 0}</Subheading>
          </View>
        </Card.Content>  
      </Card>  
    </View>
          
  )
}
