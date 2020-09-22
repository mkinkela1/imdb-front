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
  Response: string,
  Error?: string,
  DateRequested?: number
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
  useEffect(() => {
    fetch(`${config.myBackendApi}/api/movie`).then(r => r.json()).then(r => setPastSearches(r));
  }, [])

  useEffect(() => {

    if(movie && movie.Title) {

      setPastSearches((pastSearches: ImdbResponse[]) => [{...movie, DateRequested: Date.now()}, ...pastSearches])
      postMovie(movie.Title);
    }

  }, [movie, setMovie])

  // Get movie from IMDB database
  const getMovie = async (title: string) => {

    try {

      const data = await fetch( `${config.apiUrl}/?apikey=${config.apiKey}&t=${title}` ).then(r => r.json());
      if(data.Response === 'True')
        setMovie(data);

    } catch (error) {
      setMovie({
        Response: "False",
        Error: 'Error getting movie.'
      })
    }
  }

  // Create movie in our MongoDB
  const postMovie = async (title: string) => {

    try {

      const data = {
        Title: title,
        DateRequested: Date.now()
      }

      await fetch(`${config.myBackendApi}/api/movie`, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(r => r.json())

    } catch(error) {
      console.log('Error posting movie');
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