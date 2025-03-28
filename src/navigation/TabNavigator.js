import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/tabs/HomeScreen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from "../../theme";
import OrdersScreen from "../screens/tabs/OrdersScreen";
import MyProducts from "../screens/tabs/MyProducts";
import NotificationsScreen from "../screens/tabs/NotificationsScreen";
import SettingScreen from "../screens/tabs/SettingScreen";
import ShopScreen from "../screens/tabs/ShopScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

   return (

      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
               let iconName;
               if (route.name === "Home") {
                  iconName = "home-outline";
               } else if (route.name === "Orders") {
                  iconName = "cart-arrow-down";
               } else if (route.name === "My Products") {
                  iconName = "archive-plus";
               } else if (route.name === "Notifications") {
                  iconName = "bell-outline";
               } else if (route.name === "Settings") {
                  iconName = "cog-outline";
               }
               return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
               backgroundColor: "#f8f9fa",
               borderTopWidth: 2,
               elevation: 5,
               fontFamily: "MaterialCommunityIcons"
            },
            tabBarActiveTintColor: COLORS.primaryColor,
            tabBarInactiveTintColor: "gray",
            headerShown: false, // ✅ **This will hide the header in all tab screens**
         })}
      >
         <Tab.Screen name="Home" component={HomeScreen}/>
         <Tab.Screen name="Orders" component={OrdersScreen} />
         <Tab.Screen name="My Products" component={MyProducts} />
         <Tab.Screen name="Notifications" component={NotificationsScreen} />
         <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>


   );
};



export default TabNavigator;
