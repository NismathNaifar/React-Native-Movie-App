import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Select, VStack,  } from 'native-base';
import { useIsFocused } from "@react-navigation/native";

import { API_KEY, BASE_URL } from '../../config/apiConfig';
import Loading from '../layout/Loading';
import ShowDetails from '../layout/ShowDetails';

const ShowMovieScreen = props => {
    const isFocused = useIsFocused();
    const { route, navigation  } = props;
    const { id, media_type } = route.params;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if(navigation) {
            navigation.setOptions({
                headerShown: true,
            });

            navigation.getParent()?.setOptions({
                tabBarStyle: {
                  display: "none",
                }
            });
              
            return () => navigation.getParent()?.setOptions({
                tabBarStyle: {
                    display: 'flex'
                }
            });
        }
    }, [isFocused]);

    useEffect(() => {

        if(movie) {

            let title =  "";
            if(movie.original_title && !movie.original_name) {
                title = movie.original_title
            }
            else if(movie.original_name && !movie.original_title) {
                title = movie.original_name
            }

            navigation.setOptions({
                title,
                headerBackTitle: "back to list",
                headerBackTitleVisible: false
            });

        }
    }, [movie]);

    const getMovie = async () => {
        const url = `${BASE_URL}/${media_type}/${id}?api_key=${API_KEY}`;
        console.log(url)
        const response = await axios.get(url);
        setMovie(response.data)
    }

    useEffect(() => {
        getMovie()
    }, [])


    const displayMovie = () => {
        if(movie) {
            return (
                <ShowDetails data={movie} />
            )
        }
    
        return(<Loading />)
    }

    return (
        <VStack alignItems="center" paddingY={10} space={10}>

            {displayMovie()}
        </VStack>
    )

}

export default ShowMovieScreen;