// import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
// import { loginRequest } from "../utils/authConfig";

export default function Login(): React.JSX.Element {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setRestponse] = useState();

  return (
    <View style={styles.container}>
      {/* <Button title="Login you thot" onPress={handleLogin} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });