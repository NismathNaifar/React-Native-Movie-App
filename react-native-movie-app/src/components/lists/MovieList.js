import { FlatList } from 'native-base';
import MovieCard from '../listItems/MovieCard';

const MovieList = (props) => {
    const { navigation, data, showMovie } = props
    
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <MovieCard
            showMovie={showMovie}
            id={item.id}
            media_type={item?.original_title ? "movie" : "tv"}
            original_title={item.original_title}
            original_name={item.original_name}
            popularity={item.popularity}
            release_date={item.release_date}
            poster_path={item.poster_path}
            navigation={navigation}
        />
      )}
    />
  )
}

export default MovieList;