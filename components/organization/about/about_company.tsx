import React, { FC } from 'react';
import { View } from 'react-native';
import { Card, Subheading, Title } from 'react-native-paper';
import { OrgDetailsProps } from '../../../interfaces';

export const AboutCompany: FC<OrgDetailsProps> = ({avatar_url, name, location, followers, public_repos }) => { 
    return (
    <View style={{ padding: 1, marginVertical: 16}}>
        <Card style={{ marginVertical: 4 }} >
        <Card.Cover source={{ uri: avatar_url }} />
        <Card.Content>
          <Title>
              Name: {name || "no info"}
          </Title>
          <Subheading>Location:{ location || "not filled"}</Subheading>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <Subheading>Followers: {followers || 0}</Subheading>
            <Subheading>Repos: {public_repos || 0}</Subheading>
          </View>
        </Card.Content>  
      </Card>  
    </View>
          
  )
}
