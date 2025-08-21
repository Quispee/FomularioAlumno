import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

const FormularioAlumno = () => {
  const [nombreApellido, setNombreApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [dni, setDni] = useState('');
  const [telefono, setTelefono] = useState('');
  const [carrera, setCarrera] = useState('');
  const [datosGuardados, setDatosGuardados] = useState(null);

  const handleInputChange = (campo, valor) => {
    switch (campo) {
      case 'nombreApellido':
        setNombreApellido(valor);
        break;
      case 'correo':
        setCorreo(valor);
        break;
      case 'dni':
        setDni(valor);
        break;
      case 'telefono':
        setTelefono(valor);
        break;
      case 'carrera':
        setCarrera(valor);
        break;
      default:
        break;
    }
  };

  const guardarDatos = () => {
    const datos = {
      nombreApellido,
      correo,
      dni,
      telefono,
      carrera,
    };
    setDatosGuardados(datos);
    alert('Datos guardados correctamente');
  };

  const limpiarDatos = () => {
    setNombreApellido('');
    setCorreo('');
    setDni('');
    setTelefono('');
    setCarrera('');
    setDatosGuardados(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://docs.cientifica.edu.pe/marketing/sise/aula-virtual/sise-logo.png' }}
        style={styles.image}
      />

      <Text style={styles.titulo}>INSTITUTO SISE</Text>
      <Text style={styles.subTitulo}>Datos de alumnos</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre y Apellidos"
        value={nombreApellido}
        onChangeText={(text) => handleInputChange('nombreApellido', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={(text) => handleInputChange('correo', text)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Número de DNI"
        value={dni}
        onChangeText={(text) => handleInputChange('dni', text)}
        keyboardType="number-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Número de Teléfono"
        value={telefono}
        onChangeText={(text) => handleInputChange('telefono', text)}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera profesional"
        value={carrera}
        onChangeText={(text) => handleInputChange('carrera', text)}
      />

      <View style={styles.buttonrow}>
        <TouchableOpacity style={[styles.button, styles.buttonLimpiar]} onPress={limpiarDatos}>
          <Text style={styles.buttonText}>Limpiar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={guardarDatos}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>

      {datosGuardados && (
        <View style={styles.datosContainer}>
          <Text style={styles.datosTitulo}>Datos Guardados:</Text>
          <Text>Nombre y Apellidos: {datosGuardados.nombreApellido}</Text>
          <Text>Correo: {datosGuardados.correo}</Text>
          <Text>DNI: {datosGuardados.dni}</Text>
          <Text>Teléfono: {datosGuardados.telefono}</Text>
          <Text>Carrera: {datosGuardados.carrera}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default FormularioAlumno;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  subTitulo: {
    fontSize: 18,
    marginBottom: 20,
    color: '#34495e',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  buttonLimpiar: {
    backgroundColor: '#3498db',
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  datosContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    width: '100%',
  },
  datosTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
});