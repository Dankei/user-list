import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';
import { Home } from './src/home';
import { initializeDb } from './src/services/db';

export default function App() {
  const [db, setDbInit] = useState(false);

  useEffect(() => {
    const setup = async () => {
      await initializeDb();
      setDbInit(true);
    };

    setup();
  }, []);

  if (!db) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Carregando banco de dados...</Text>
      </SafeAreaView>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#0f172a" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
