import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Pages from "../pages";
import { pageNames } from "../../constants";

const Drawer = createDrawerNavigator();

function AppDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {Object.keys(pageNames).map((key, index) => {
          const pageName = pageNames[key];
          return (
            <Drawer.Screen
              key={index}
              name={pageName}
              component={Pages[key]}
              options={{
                title: pageName,
              }}
            />
          );
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppDrawerNavigator;
