import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from '../screens/SearchScreen';
import ShowMovieScreen from '../screens/ShowMovieScreen';

const SearchStack = () => {

    const stack = createNativeStackNavigator();

    return (
            <stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <stack.Screen name="Search" component={SearchScreen} />
                <stack.Screen name="ShowMovie" component={ShowMovieScreen} />
            </stack.Navigator>

    )
}

export default SearchStack;