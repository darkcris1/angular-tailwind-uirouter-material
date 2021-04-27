export interface Post {
  id?: number;
  caption?: string;
  user?: number;
  media?: { id?: number; image?: string }[];
  date_created?: Date;
}

export interface POST_RESULT_MODEL {
  count?: number;
  previous?: number;
  next?: number;
  results?: Post[];
}
