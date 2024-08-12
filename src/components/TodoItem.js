import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeTodo, markAsDone } from '../slices/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text>{todo.description}</Text>
      <Text>Status: {todo.status}</Text>
      <View style={styles.buttons}>
        <Button title="Done" onPress={() => dispatch(markAsDone(todo.id))} />
        <Button title="Delete" onPress={() => dispatch(removeTodo(todo.id))} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default TodoItem;
