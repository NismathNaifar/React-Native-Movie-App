import { Box, Button, Heading, Image, Text, Flex } from 'native-base'

const MovieCard = (props) => {
    const { id, type, original_title, original_name, media_type, popularity, release_date, poster_path, showMovie } = props;

    let title = media_type === "movie" ? original_title : original_name;
    
    return(
        <Box mb={2} paddingX={4}>
            <Flex direction="row" alignItems='center'>
                <Box mr={2}>
                    <Image alt='poster image' source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}  width={100} height={120} />
                </Box>

                <Box>
                    <Heading size='xs' mb={1}>{title}</Heading>
                    
                    <Text>
                        <Text>Popularity: </Text>
                        <Text>{popularity}</Text>
                    </Text>

                    <Text>
                        <Text>Release Date: </Text>
                        <Text>{release_date}</Text>
                    </Text>

                    <Button onPress={() => showMovie(id, media_type)} width={200}>More Details</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default MovieCard;