import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TvSeriesScreen from '../screens/TvSeriesScreen';
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
                <stack.Screen name="TvSeriesS" component={TvSeriesScreen} />
                <stack.Screen name="ShowMovie" component={ShowMovieScreen} />
                <stack.Screen name="ShowAll" component={ShowAllScreen} />
            </stack.Navigator>

    )
}

export default MovieStack;