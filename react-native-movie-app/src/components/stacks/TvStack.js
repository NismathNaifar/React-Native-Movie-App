import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TvSeriesScreen from '../screens/TvSeriesScreen';
import ShowMovieScreen from '../screens/ShowMovieScreen';

const MovieStack = () => {

    const stack = createNativeStackNavigator();

    return (
            <stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <stack.Screen name="TvSeriesS" component={TvSeriesScreen} />
                <stack.Screen name="ShowMovie" component={ShowMovieScreen} />
            </stack.Navigator>

    )
}

export default MovieStack;