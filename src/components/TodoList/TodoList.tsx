import { useState } from 'react';
import type { Todo } from './types';
import styled from '@emotion/styled';
import { TodoItem } from '../TodoItem';

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: newTodoText,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Title>TypeScript Todo List</Title>
      <InputForm onSubmit={handleAddTodo}>
        <InputField
          type="text"
          value={newTodoText}
          onChange={handleInputChange}
          placeholder="새로운 할 일을 입력하세요"
        />{' '}
        <AddButton type="submit">추가</AddButton>
      </InputForm>
      <TodoListContainer>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        ))}
      </TodoListContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background-color: #fff5f7;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 25px;
  font-size: 28px;
`;

const InputForm = styled.form`
  display: flex;
  margin-bottom: 30px;
  gap: 10px;
`;

const InputField = styled.input`
  flex-grow: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #ff6788;
    outline: none;
  }
`;

const AddButton = styled.button`
  padding: 12px 20px;
  background-color: #ff6788;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff466b;
  }
`;

const TodoListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
