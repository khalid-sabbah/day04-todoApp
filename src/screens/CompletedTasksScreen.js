import React from 'react';
import { View, StyleSheet } from 'react-native';
import Todos from '../components/Todos';

const CompletedTasksScreen = () => {
  return (
    <View style={styles.container}>
      <Todos filter="Done" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default CompletedTasksScreen;
