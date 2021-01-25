import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';

import ExpensesScreen from './src/screens/ExpensesScreen';
import HomeScreen from './src/screens/HomeScreen';
import IncomeScreen from './src/screens/IncomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomTab = createBottomTabNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <BottomTab.Navigator initialRouteName={'home'}>
                    <BottomTab.Screen
                        name={'home'}
                        component={HomeScreen}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: () => <Icon name={'home'} color={'#333'} size={24} />,
                        }}
                    />
                    <BottomTab.Screen
                        name={'shopping_cart'}
                        component={ExpensesScreen}
                        options={{
                            tabBarLabel: 'Расходы',
                            tabBarIcon: () => <Icon name={'add-shopping-cart'} color={'#333'} size={24} />,
                        }}
                    />
                    <BottomTab.Screen
                        name={'IncomeScreen'}
                        component={IncomeScreen}
                        options={{
                            tabBarLabel: 'Доходы',
                            tabBarIcon: () => <Icon name={'business-center'} color={'#333'} size={24} />,
                        }}
                    />
                </BottomTab.Navigator>
            </NavigationContainer>
        </Provider>
    );
};
export default App;
