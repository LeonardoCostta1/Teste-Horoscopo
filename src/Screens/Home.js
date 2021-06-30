import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import SignContext from "../Providers/SignProvider";
const Home = () => {
  const [signos, setSignos] = useState([]);
  const navigation = useNavigation();

  const { sing, setSign } = useContext(SignContext);

  const SeeSign = (title, description, sign) => {
    setSign({
      title,
      description,
      sign,
    });
    navigation.navigate("Sign");
  };

  useEffect(() => {
    axios
      .get("https://apiv2.resolvaclub.com/api/horoscope/test")
      .then((resp) => {
        setSignos(resp.data.result[0].horoscopes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha um signo e descubra o horóscopo do dia!
      </Text>

      <SafeAreaView>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={signos}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
          horizontal={false}
          numColumns={3}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={styles.button}
                onPress={() => SeeSign(item.title, item.description, item.sign)}
              >
                <View style={styles.circle_sign}></View>
                <Text style={styles.text}>{item.sign}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexBasis: 0,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    marginBottom: 30,
  },
  flatList: {
    width: "100%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "33.3%",
  },
  circle_sign: {
    height: 85,
    width: 85,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebebeb",
    flexGrow: 1,
    // margin: 8,
    // marginBottom: 3,
    flexBasis: 0,
    borderRadius: 100,
  },
  text: {
    marginBottom: 20,
  },
});

export default Home;
