import React from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const Todos = ({ filter, setFilter }) => {
  const todos = useSelector(state => state.todos.items);

  const filterTodos = () => {
    if (filter === 'All') return todos;
    return todos.filter(todo => todo.status === filter.toLowerCase());
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        {['All', 'Active', 'Done'].map(status => (
          <Button
            key={status}
            title={status}
            onPress={() => setFilter(status)}
            color={filter === status ? 'blue' : 'gray'}
          />
        ))}
      </View>
      <FlatList
        data={filterTodos()}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TodoItem todo={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default Todos;
