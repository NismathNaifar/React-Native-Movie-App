import React, { useState, useEffect } from 'react';
import MovieContainer from '../containers/MovieContainer';


const TvSeriesScreen = props => {

    const filters = ['airing_today', 'on_the_air', 'popular', 'top_rated'];

    return (
        <MovieContainer 
            filters={filters}
            type="tv"
            isMovie={false}
            navigation={props.navigation}
        />
    )

}

export default TvSeriesScreen;