import axios, { AxiosResponse } from 'axios'

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface DataApiResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IDataGetFilm {
  title: string,
  overview: string,
  image_path: string,
}

class FilmClienteAPI {
  private baseURL: string = 'https://api.themoviedb.org/3/movie'
  private apiKey: string = '70cebc8679df5701963b64897abcf730'
  private imageUrl: string = 'https://image.tmdb.org/t/p/w500'
  private language: string = 'pt-BR'
  
  async getRandomFilm(): Promise<IDataGetFilm> {
    let result: AxiosResponse< DataApiResponse >

    // Número de 2 até 950
    const randomNumber: number = Math.floor(Math.random() * (950 - 2 + 1)) + 2
    
    result = await axios.get(`${this.baseURL}/${randomNumber}`, {
      params: {
        api_key: this.apiKey,
        language: this.language,
      }
    })

    return {
      title: result.data.original_title,
      overview: result.data.overview,
      image_path: `${this.imageUrl}/${result.data.poster_path}`,
    }
  }
}

export { FilmClienteAPI }
export default FilmClienteAPI
