import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {

  const [participants, setParticipants] = useState(['João'])
  
  function handleParticipantAdd(){
    if(participants.includes("Rodrigo")){
      return Alert.alert("Participante Existe", "Participante já cadastrado na sua lista!")
    }

    setParticipants(prevState => [...prevState, 'Ana']);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o partipante ${name}?` , [
      {
        text: 'sim',
        onPress: () => Alert.alert("Deletado com sucesso!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    console.log(`Você removeu o participante ${name}`);
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
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({ item }) => (
            <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove(item)}/>
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
