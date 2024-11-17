import React from "react";
import MainLayout from "../layouts/MainLayout";
import {StyleSheet, Text,} from 'react-native';
function AboutScreen() {
    const appName = "My Simple App";
    const developerName = "Gagandeep Singh";
    const currentDate = new Date().toLocaleDateString();
  
    return (
      <MainLayout>
        <Text style={styles.title}>{appName}</Text>
        <Text style={styles.text}>Developed by: {developerName}</Text>
        <Text style={styles.text}>Date: {currentDate}</Text>
      </MainLayout>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'white',
    },
    text: {
      fontSize: 20,
      marginBottom: 10,
      color: 'white',
    },
  });
  

export default AboutScreen