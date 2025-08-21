import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FormularioAlumno from './src/components/FormularioAlumno';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FormularioAlumno />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
