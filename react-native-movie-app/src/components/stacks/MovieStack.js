import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MoviesScreen from '../screens/MoviesScreen';
import ShowMovieScreen from '../screens/ShowMovieScreen';
import ShowAllScreen from '../screens/ShowAllScreen';

const MovieStack = () => {

    const stack = createNativeStackNavigator();

    return (
            <stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <stack.Screen name="MoviesList" component={MoviesScreen} />
                <stack.Screen name="ShowMovie" component={ShowMovieScreen} />
                <stack.Screen name="ShowAll" component={ShowAllScreen} />
            </stack.Navigator>

    )
}

export default MovieStack;