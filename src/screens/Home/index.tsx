import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {

  const participants = ['Santoro', 'Vini', 'Lucas', 'Diego', 'Biro', 'Ana', 'Lisa', 'João', 'Caio', 'Fernando'];

  function handleParticipantAdd(){
    console.log("Você clicou no btn");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você removeu o participante ${name}`)
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
      <FlatList
        data={[]}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({ item }) => (
            <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove("Rodrigo")}/>
          )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes aqui!
          </Text>
        )}
      />
    </View>
  )
}
