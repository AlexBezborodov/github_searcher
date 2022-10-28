import React, { useState} from 'react';
import { Subheading } from 'react-native-paper';
import { useParams, useNavigate } from 'react-router-native';
import { Header } from '../header';
import { useGetData, useDebounce, useFilteredSearch } from '../../hooks';
import { Search } from '../search';
import { Layout } from '../layout';
import { UserList as ReposList } from '../list';
import { AboutCompany } from './about';
export const OrganizationDetails = () => {
    const { id, name } = useParams();
    const navigate = useNavigate();

    const { data: org } = useGetData(`https://api.github.com/orgs/${id}`);
    const {data: repos} = useGetData(`https://api.github.com/orgs/${name}/repos`);

    const [repoSearchQuery, setRepoSearchQuery] = useState('');
    const debouncedSearchValue = useDebounce(repoSearchQuery, 500);
    const { filteredData } = useFilteredSearch(repos, debouncedSearchValue, "name");
    
    
    return (
    <>
      <Header title="Org details" onPress={() => navigate("/")} />
      <Layout>
        <Search searchQuery={repoSearchQuery} setSearchQuery={setRepoSearchQuery} placeholder="Search repos" keyHistory="repo" />
        <AboutCompany {...org} /> 
        <Subheading>Repositories:</Subheading>
        <ReposList  data={filteredData.map(item => ({...item, login: item.name}))}/>
      </Layout>
    </>
    
  )
}
