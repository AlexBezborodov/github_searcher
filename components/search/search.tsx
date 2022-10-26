import React, { FC } from 'react';
import { Searchbar } from 'react-native-paper';

interface SearchProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
  }

export const Search: FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  

  const onChange = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChange}
          value={searchQuery}
    />
  );
};
