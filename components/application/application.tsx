import React, { useState } from 'react';

import { Header } from '../header';
import { Provider as PaperProvider, Subheading } from 'react-native-paper';
import { Layout } from '../layout';
import { Search } from '../search';
import { useGetData, useFilteredSearch, useDebounce  } from '../../hooks';
import { UserList } from '../list';


export const Application = () => {
  
  const { data } = useGetData(`https://api.github.com/organizations`);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchValue = useDebounce(searchQuery, 500);
  const { filteredData } = useFilteredSearch(data, debouncedSearchValue);

  return (
      <PaperProvider>
      <Header title="Github searcher" />
      <Layout>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Subheading style={{ marginVertical: 8}}>Orgsnizations:</Subheading>
        <UserList data={filteredData} />
      </Layout>
      </PaperProvider>
  )
}
