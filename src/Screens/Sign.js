import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SignContext from "../Providers/SignProvider";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Sign = () => {
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };
  const sign = useContext(SignContext);
  return (
    <View style={styles.container}>
      <View style={styles.closeArea}>
        <TouchableOpacity onPress={() => back()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.centeredInfo}>
          <Text style={styles.sign}>{sign.sign.sign}</Text>
          <Text style={styles.title}>{sign.sign.title}</Text>
          <Text style={styles.description}>{sign.sign.description}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.bottom} onPress={() => back()}>
        <Text style={styles.textBottom}>
          Veja o horóscopo de outros signos!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#fff",
  },
  closeArea: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom:30,
  },
  centeredInfo: {
    justifyContent: "center",
    alignItems: "center",
  },
  sign: {
    fontSize: 26,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  description: {
    textAlign: "center",
  },
  bottom: {
    height: 30,
    width: "100%",
    backgroundColor: "#3a383a",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textBottom: {
    color: "#fff",
  },
});

export default Sign;
