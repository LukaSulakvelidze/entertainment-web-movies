export interface Main_props {
  searchIcon: () => void;
  value: string;
  input_onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  slider_cont: JSX.Element;
  movies: never[];
  inputValue: string;
}

export interface Slider_props {
  movies: never[];
}

export interface Movies_fullCont_props {
  slider_cont: JSX.Element;
  category_title: string;
  movies: never[];
  inputValue: string;
}

export interface Movie_wrapper_props {
  category_title: string;
  inputValue: string;
  movies: never[];
}

export interface Input_props {
  inputOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  className: string;
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export interface Movie_cont_porps {
  main_cont_className: string;
  image_className: string;
  poster: string;
  movie_detail_cont_className: string;
  details_text: string;
  movie_release_date: string;
  type: string;
  restrict: string;
  movie_name: string;
}

export interface Button_props {
  onClick?: () => void;
  className: string;
  children: string | React.ReactNode;
}

export interface Form_props {
  text: string;
  setEmail?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email?: string;
  setPassword?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password?: string;
  button_text: string;
  children?: JSX.Element;
  href: string;
  suggest_text: string;
  linkable: string;
  via_social?: JSX.Element;
}

export interface Movie_data {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
