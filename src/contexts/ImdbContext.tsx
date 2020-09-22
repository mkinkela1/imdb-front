import React, {createContext, useEffect, useState} from "react";
import config from "../config";

export interface Rating {
  Source?: string,
  Value: string
}

export interface ImdbResponse {
  Title?: string,
  Year?: string,
  Rated?: string,
  Released?: Date,
  Runtime?: string,
  Genre?: string,
  Director?: string,
  Writer?: string,
  Actors?: string,
  Plot?: string,
  Language?: string,
  Country?: string,
  Awards?: string,
  Poster?: string,
  Ratings?: Rating[],
  Metascore?: string,
  imdbRating?: string,
  imdbVotes?: string,
  imdbID?: string,
  Type?: string,
  totalSeasons?: number,
  Response: boolean,
  Error?: string
}

interface ImdbContextProviderProps {
  movie?: ImdbResponse,
  pastSearches?: ImdbResponse[],
  getMovie?: (title: string) => void,
  children?: any
}

export const ImdbContext = createContext<ImdbContextProviderProps>({});

const ImdbContextProvider = (props: ImdbContextProviderProps) => {

  const [movie, setMovie] = useState<ImdbResponse | undefined> (undefined);
  const [pastSearches, setPastSearches] = useState<ImdbResponse[]> ([]);

  // Get from node api
  useEffect(() => {}, [])

  useEffect(() => {

    setPastSearches((pastSearches: ImdbResponse[]) => {
      if(movie !== undefined)
        return [...pastSearches, movie]
      return [];
    })

  }, [movie, setMovie])

  const getMovie = async (title: string) => {

    try {

      const { data } = await fetch( `${config.apiUrl}/?apikey=${config.apiKey}&t=${title}` ).then(r => r.json());
      setMovie(data);

    } catch (error) {
      setMovie({
        Response: false,
        Error: 'Error getting movie.'
      })
    }
  }

  return (
    <ImdbContext.Provider value={{
      movie,
      pastSearches,
      getMovie
    }}>
      {props.children}
    </ImdbContext.Provider>
  )
}

export default ImdbContextProvider;