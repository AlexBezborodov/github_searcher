export interface HeaderProps {
    title: string;
    bgc?: string;
    onPress?: () => void;
}
  
export interface DataProps {
    data: Array<Object> | [];
}

export interface SearchProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    placeholder?: string;
    keyHistory: string;
}
  
export interface OrgDetailsProps {
    avatar_url?: string;
    name?: string;
    location?: string;
    followers?: number;
    public_repos?: number;
}