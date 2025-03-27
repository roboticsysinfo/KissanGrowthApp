import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/tabs/HomeScreen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from "../screens/ProfileScreen";
import { COLORS } from "../../theme";
import OrderScreen from "../screens/OrderScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

   return (

      <Tab.Navigator
         screenOptions={({ route }) => ({

            tabBarIcon: ({ focused, color, size }) => {

               let iconName;

               // Assign different icons based on the route name
               if (route.name === "Home") {
                  iconName = "home";
               } else if (route.name === "Orders") {
                  iconName = "file-document";
               } else if (route.name === "Profile") {
                  iconName = "account";
               }

               // Return the icon component
               return <Icon name={iconName} size={size} color={color} />;

            },
            tabBarStyle: {
              backgroundColor: "#f8f9fa", // Tab bar background color
              borderTopWidth: 2, // Remove border
              elevation: 5, // Add shadow (for Android)
           },
            tabBarActiveTintColor: COLORS.primaryColor, // Active tab color
            tabBarInactiveTintColor: "gray", // Inactive tab color
         })}
      >
         <Tab.Screen name="Home" component={HomeScreen} />
         <Tab.Screen name="Orders" component={OrderScreen} />
         <Tab.Screen name="Profile" component={ProfileScreen} />

      </Tab.Navigator>

   );
};

export default TabNavigator;
