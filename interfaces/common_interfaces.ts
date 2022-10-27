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
  }