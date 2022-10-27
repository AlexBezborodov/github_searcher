import React, { FC } from 'react';
import { Appbar } from 'react-native-paper';
import { HeaderProps } from '../../interfaces';

export const Header: FC<HeaderProps> = ({ title, bgc = "gray", onPress }) => {
  return (
    <Appbar.Header style={{ backgroundColor: bgc }}>
      { onPress && <Appbar.BackAction onPress={onPress} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

