import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  function handleParticipantAdd(){
    console.log("Você clicou no btn");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>sexta, 4 de novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.btn} onPress={handleParticipantAdd}>
          <Text style={styles.bntText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
    </View>
  )
}
