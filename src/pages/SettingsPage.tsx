import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";

export default function Settings(): React.JSX.Element {
  let [isLoading, setIsLoading] = useState(true);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }
  };

  return (
    <View style={styles.container}>
      {getContent()}
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
