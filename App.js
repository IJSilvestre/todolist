// In App.js in a new project

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PeaplePage from "./src/pages/PeaplePage";
import PeapleDetail from "./src/pages/PeapleDetails";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={PeaplePage}
          options={({ navigation }) => {
      
            console.log(navigation.getState());
            return {
              title: "Detalhe Pessoa",
              headerStyle: {
                backgroundColor: "#8bd2e0",
                alignItems: "centno seu er",
                justifyContent: "center",
                borderRadius: 10,
              },
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "#f2f2f2",
              },
            };
          }}
        />
        <Stack.Screen
          name="PeapleDetails"
          component={PeapleDetail}
          options={{
            title: "Dados Pessoais",
            headerTintColor: "#f2f2f2",
            headerBackButtonMenuEnabled: true,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#8bd2e0",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
              color: "#f2f2f2",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
