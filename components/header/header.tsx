import * as React from 'react';
import { Appbar } from 'react-native-paper';


export const Header = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "gray"}}>
      <Appbar.Content title="GitHub searcher" />
    </Appbar.Header>
  );
};

