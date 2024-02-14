export interface AskListType {
  id: number;
  name: string;
}

export interface AskElementsType {
  id: number;
  name: string;
  list: {
    id: number;
    title: string;
    description: string;
  }[];
}

export interface AskElementsPropsType {
  id: number;
  title: string;
  description: string;
}

export interface AskShowPropsType {
  show: boolean;
}
