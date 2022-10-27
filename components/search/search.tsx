import React, { FC } from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchProps } from '../../interfaces';

export const Search: FC<SearchProps> = ({ searchQuery, setSearchQuery, placeholder = "Search" }) => {
  

  const onChange = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChange}
          value={searchQuery}
    />
  );
};
