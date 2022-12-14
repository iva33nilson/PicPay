import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/Home';
import { NewUsers } from './src/screens/NewUser';
import { Login } from './src/screens/Login';
import { Dashboard } from './src/screens/Dashbord';
import { Contact } from './src/screens/Contact';
import { Sobre } from './src/screens/Sobre';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewsUsers" component={NewUsers} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
