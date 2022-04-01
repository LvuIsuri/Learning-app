import React from "react-native";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Shadow } from "react-native-shadow-2";
import {
    MainLayout
} from "./screens/index";


const Stack = createNativeStackNavigator();

const App = () => {
    
    let   [fontsLoaded, error ] = useFonts({
        'Roboto-Black' : require('./assets/fonts/Roboto-Black.ttf'),
        'Roboto-Bold'  : require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular'  : require('./assets/fonts/Roboto-Regular.ttf'),
    })
    if (!fontsLoaded){
        return <AppLoading/>
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Dashboard'}
            >
                <Stack.Screen
                    name="Dashboard"
                    component={MainLayout}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App