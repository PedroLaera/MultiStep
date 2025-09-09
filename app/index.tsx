import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textHeader}>Valide as etapas</Text>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d2d2ff',
    alignItems: 'center',
    paddingTop: 100,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',

  },
});