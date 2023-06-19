import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Lucas Dias</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.bntText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}