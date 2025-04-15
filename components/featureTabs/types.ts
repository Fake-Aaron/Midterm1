export interface TabItemData {
    id: number;
    title: string;
    description: string;
    icon: string;
    content: string;
  }
  
  export interface TabItemProps extends TabItemData {
    isActive: boolean;
    onClick: () => void;
  }
  
  export interface TabHeaderProps {
    title: string;
    description: string;
  }
  