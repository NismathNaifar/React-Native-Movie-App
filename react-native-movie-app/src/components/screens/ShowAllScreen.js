import React, { useState, useEffect } from 'react';
import { VStack,  } from 'native-base';

import Loading from '../layout/Loading';
import ShowDetails from '../layout/ShowDetails';
import MovieList from '../lists/MovieList';

const ShowAllScreen = props => {
    const { route  } = props;
    const { movies, showMovie  } = route.params;

    console.log(movies)

    const displayMovies = () => {
        if(movies) {
            return (
                <MovieList data={movies} showMovie={showMovie} />
            )
        }
    
        return(<Loading />)
    }

    return (
        <VStack alignItems="center" paddingY={10} space={10}>

            {displayMovies()}
        </VStack>
    )

}

export default ShowAllScreen;