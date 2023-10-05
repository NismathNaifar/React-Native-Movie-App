import React, { useState, useEffect } from 'react';
import MovieContainer from '../containers/MovieContainer';


const MoviesScreen = props => {

    const filters = ['now_playing', 'popular', 'top_rated', 'upcoming'];

    return (
        <MovieContainer 
            filters={filters}
            type="movie"
            isMovie={true}
            navigation={props.navigation}
        />
    )

}

export default MoviesScreen;