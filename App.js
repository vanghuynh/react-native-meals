import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#351401',
        //   },
        //   headerTintColor: '#fff',
        //   contentStyle: {
        //     backgroundColor: '#3f2f25',
        //   },
        // }}
        >
          <Stack.Screen
            title='Categories'
            name='MealsCategories'
            component={CategoriesScreen}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
