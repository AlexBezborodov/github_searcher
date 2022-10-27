import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SearchProps } from '../../interfaces';
import { SearchHistory } from './search_history';

export const Search: FC<SearchProps> = ({ searchQuery, setSearchQuery, placeholder = "Search" }) => {
  const [isShowHistory, setIsShowHistory] = useState(false);
  const onChange = query => setSearchQuery(query);

  useEffect(() => {
    if (searchQuery) {
      setIsShowHistory(true);
      setTimeout(() => {
        setIsShowHistory(false);
      }, 2000)
    }
  }, [searchQuery]);
  return (
    <View style={{ position: "relative", zIndex: 2}}>
      <Searchbar
        placeholder={placeholder}
        onChangeText={onChange}
        value={searchQuery}
      />
      {isShowHistory && <SearchHistory />}
    </View>
    
  );
};
