// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
// import { addName, getAllNames } from '../services/db';

// export const Home = () => {
//   const [name, setName] = useState('');
//   const [names, setNames] = useState([]);

//   const fetchNames = async () => {
//     const allNames = await getAllNames();
//     setNames(allNames);
//   };

//   const handleAddName = async () => {
//     if (name) {
//       await addName(name);
//       setName('');
//       fetchNames();
//     }
//   };

//   useEffect(() => {
//     fetchNames();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Cadastro de Nomes</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite um nome"
//         value={name}
//         onChangeText={setName}
//       />
//       <Button title="Adicionar Nome" onPress={handleAddName} />
//       <FlatList
//         data={names}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f8f8',
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 20,
//   },
//   item: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
// });







import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { addName, getAllNames } from '../services/db';

export const Home = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const fetchNames = async () => {
    const allNames = await getAllNames();
    setNames(allNames);
  };

  const handleAddName = async () => {
    if (name) {
      await addName(name);
      setName('');
      fetchNames();
    }
  };

  useEffect(() => {
    fetchNames();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro de Nomes</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um nome"
        value={name}
        onChangeText={setName}
      />
      <Button title="Adicionar Nome" onPress={handleAddName} />
      <FlatList
        data={names}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
