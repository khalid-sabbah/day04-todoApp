import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { addTodo } from '../slices/todoSlice';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title && description) {
      const newTodo = {
        id: Date.now().toString(),
        title,
        description,
        status: 'active',
      };
      dispatch(addTodo(newTodo));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Add Todo" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});

export default TodoForm;
