import React, { useState } from 'react'
import { Header } from '../header';
import { Provider as PaperProvider } from 'react-native-paper';
import { Layout } from '../layout';
import { Search } from '../search';
import { useGetData } from '../../hooks/use_fetch_data';
import { useDebounce } from '../../hooks/use_debounce';
import { UserList } from '../list';
import { useFilteredSearch } from '../../hooks/use_filter_search/use_filter_search';

export const Application = () => {
  
  const { data } = useGetData();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchValue = useDebounce(searchQuery, 500);
  const { filteredData } = useFilteredSearch(data, debouncedSearchValue);
  return (
      <PaperProvider>
      <Header />
      <Layout>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <UserList data={filteredData} />
      </Layout>
      </PaperProvider>
  )
}
