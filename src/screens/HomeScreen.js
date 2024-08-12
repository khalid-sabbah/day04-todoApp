import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const HomeScreen = () => {
  const [filter, setFilter] = useState('All');

  return (
    <View style={styles.container}>
      <TodoForm />
      <Todos filter={filter} setFilter={setFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
