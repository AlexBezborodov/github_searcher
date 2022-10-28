import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SearchProps } from '../../interfaces';
import { SearchHistory } from './search_history';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Search: FC<SearchProps> = ({ searchQuery, setSearchQuery, placeholder = "Search", keyHistory }) => {
  const [isShowHistory, setIsShowHistory] = useState(false);
  const [history, setHistory] = useState([]);

  const onChange = query => setSearchQuery(query);

  const updateHistory = async (item) => {
    AsyncStorage.getItem(`${keyHistory}`).then(history => {
      let result = [];
      if (history) {
        if (history.length > 4) {
          result = [ item, ...JSON.parse(history).splice(1, 4)];
        } else {
          result = [...JSON.parse(history), item];
        }
        AsyncStorage.setItem(`${keyHistory}`, JSON.stringify(result));
        setHistory(result);
      }
      else {
        setHistory([item]);
       AsyncStorage.setItem(`${keyHistory}`, JSON.stringify([item]));
      }
    });
  }

  useEffect(() => {
    if (searchQuery) {
      setIsShowHistory(true);
      setTimeout(() => {
        setIsShowHistory(false);
        updateHistory(searchQuery);
      }, 3000)
    }
  }, [searchQuery]);
  return (
    <View style={{ position: "relative", zIndex: 2}}>
      <Searchbar
        placeholder={placeholder}
        onChangeText={onChange}
        value={searchQuery}
      />
      {isShowHistory && <SearchHistory history={history} setSearchQuery={setSearchQuery} />}
    </View>
    
  );
};
