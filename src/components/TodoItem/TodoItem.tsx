import type { TodoItemProps } from './types';
import styled from '@emotion/styled';

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <ListItem className={todo.isCompleted ? 'completed' : ''}>
      <TodoText
        isCompleted={todo.isCompleted}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </TodoText>
      <DeleteButton onClick={() => onDelete(todo.id)}>삭제</DeleteButton>
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

interface TodoTextProps {
  isCompleted: boolean;
}
const TodoText = styled.span<TodoTextProps>`
  flex-grow: 1;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => (props.isCompleted ? '#9e9e9e' : '#333333')};
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
  transition: color 0.2s;
`;

const DeleteButton = styled.button`
  margin-left: 15px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #7dffc2;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #00ff88;
  }
`;
