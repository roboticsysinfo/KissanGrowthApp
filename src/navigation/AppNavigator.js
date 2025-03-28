import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/SplashScreen';
import OtpScreen from '../screens/OtpScreen';
import TabNavigator from './TabNavigator';
import PNLoginScreen from '../screens/PNLoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SelectLang from '../screens/SelectLang';
import { useDispatch } from 'react-redux';
import { loadLanguage } from '../redux/slices/languageSlice';
import OrdersScreen from '../screens/tabs/OrdersScreen';
import SettingScreen from '../screens/tabs/SettingScreen';
import NotificationsScreen from '../screens/tabs/NotificationsScreen';
import MyProducts from '../screens/tabs/MyProducts';

const Stack = createStackNavigator();

const AppNavigator = () => {

  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const fetchLanguage = async () => {
      const savedLang = await AsyncStorage.getItem('selectedLanguage');
      if (savedLang) {
        dispatch(loadLanguage(savedLang));
      }
    };
    fetchLanguage();
  }, [dispatch]);

  if (isLoggedIn === null) {
    return null; // Prevents flicker before determining login state
  }

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={PNLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTP Verify" component={OtpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Select Language" component={SelectLang} options={{ headerShown: false }} />

        <Stack.Screen name="Orders" component={OrdersScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Settings" component={SettingScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: true }} />
        <Stack.Screen name="My Products" component={MyProducts} options={{ headerShown: true }} />

      </Stack.Navigator>

    </NavigationContainer>
    
  );
};

export default AppNavigator;
