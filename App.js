import React from "react";
import { StatusBar } from "react-native";
import {SignProvider} from "./src/Providers/SignProvider";
import Route from "./src/Routes/stack";
export default function App() {
  return (
      <SignProvider>
        <StatusBar />
        <Route />
      </SignProvider>
  );
}