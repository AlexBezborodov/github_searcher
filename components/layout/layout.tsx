import React, { FC, } from 'react';
import { View } from 'react-native';

export const Layout: FC<any> = ({children}) => {
  return (
      <View style={{ padding: 12, flex: 1 }}>
          {children}
    </View>
  )
}
