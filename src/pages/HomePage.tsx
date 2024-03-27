import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

export default function Home(): React.JSX.Element {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setRestponse] = useState();

  const callApie = async () => {
    try {
      const response = await fetch("http://192.168.178.206:5241/api/TodoItems");
      const result = await response.json();
      setIsLoading(false);
      setRestponse(result);
    } catch (e) {
      await setIsLoading(false);
      await setError(error);
    }
  };

  const getContent = () => {
    return <Text>API Called with {typeof response}</Text>;
  };

  return (
    <View style={styles.container}>
      {getContent()}
      <Button title="PRESS ME FOR API!!!" onPress={callApie} />
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
