import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import estilo from './src/estilo';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


export default function App() {
  return (
    <View style = {estilo.container}>
      <LinearGradient
        colors = {['#00BFFF', '#4169E1']}
        style = {estilo.gradienteBackground}      
      >
      <Image
        source = {{ uri : 'https://logospng.org/download/puma/logo-puma-icon-1024.png'}}
        style = {estilo.image}
      />
      </LinearGradient>
      <View  style = {estilo.box}>
        
        <View style = {estilo.viewIcons}>
          <Feather name="user" size={24} color="black" />
          <TextInput style = {estilo.input} placeholder='e-mail'/>
        </View>

        <View style = {estilo.viewIcons}>
          <Ionicons name="key" size={24} color="black" />
          <TextInput style = {estilo.input} placeholder='senha'/>
        </View>

        <TouchableOpacity style = {{width:'70%'}}>
          <LinearGradient
          colors ={['#00BFFF', '#4169E1']}
          style ={estilo.button}
          >
            <Text style = {estilo.text}>LOGAR</Text>
            

          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}


