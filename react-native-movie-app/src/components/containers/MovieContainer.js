import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Select, VStack, Text } from 'native-base';

import { API_KEY, BASE_URL } from '../../config/apiConfig';
import MovieList from '../lists/MovieList';
import Loading from '../layout/Loading';

const MovieContainer = props => {

    const { filters, type, navigation } = props;
    const [allMovies, setAllMovies] = useState(null);
    const [movies, setMovies] = useState(null);
    const [activeFilter, setActiveFilter] = useState(filters[0]);

    const titleCase = (s) => s.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase())

    const getMovies = async () => {
        const url = `${BASE_URL}/${type}/${activeFilter}?api_key=${API_KEY}`;
        const response = await axios.get(url);
        const { results } = response.data;
        const limitedMovies = [];
        for(let i = 0; i < 10; i++) {
            limitedMovies.push(results[i])
        }
        setAllMovies(results);
        setMovies(limitedMovies)
    }

    const showMovie = (id, media_type) => {
        navigation.navigate("ShowMovie", { id, media_type})
    }

    useEffect(() => {
        setMovies(null);
        getMovies()
    }, [activeFilter])

    const displayOptions = () => {
        return filters.map((filter, index) => {
            return (
                <Select.Item key={index} label={titleCase(filter)} value={filter} />
            )
        })
    }

    const displayMovies = () => {
        if(movies) {
            return (
                <MovieList data={movies} showMovie={showMovie} />
            )
        }
    
        return(<Loading />)
    }

    return (
        <>
            <VStack alignItems="center" paddingY={10} mb={100} space={10}>
                <Box width={150}>
                    <Select 
                        selectedValue={activeFilter} 
                        minWidth="200" 
                        accessibilityLabel="Choose Service" 
                        placeholder="Choose Service" 
                        mt={1}
                        onValueChange={itemValue => setActiveFilter(itemValue)}
                    >
                        {displayOptions()}
                    </Select>
                </Box>

                {displayMovies()}

            </VStack>
        </>
    )

}

export default MovieContainer;

