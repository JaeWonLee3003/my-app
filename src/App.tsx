import { useEffect, useState } from 'react';
import type { ChangeEvent , KeyboardEvent } from 'react'
import './App.css';
import { Container ,Button, RowBox, Input, List, Todo} from './App.styled';

interface Todo{
  id: number,
  name: string
}

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [TodoName, setTodoName] = useState<string>('');

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setTodoName(value)
  }

  const handlePressEnter = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if ( key === 'Enter') addTodo();

  }

  // page 내의  state가 변경 되었을 때
  // props가 변경 되었을 때

  const addTodo = () => {
    if(!TodoName.trim()) return;
    setTodos(prevState => [...prevState, {id: prevState.length , name: TodoName}]);
    setTodoName('');
  }


  useEffect(() => {
    try {
      const parseData = JSON.parse(localStorage.getItem('todos') || '')
      setTodos(parseData)
    }catch(error){
      console.log(error);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  
  return (
<Container>
  <RowBox>
    <Input placeholder='Todo를 입력해주세요.' value={TodoName} onChange={handleInputChange} onKeyUp={handlePressEnter}/>
    <Button onClick={addTodo}>추가</Button>
  </RowBox>
  <List>
    {todos.map(({id,name}) => {
      return <Todo key={id}>{name}</Todo>
    })}
  </List>
</Container>

    );
}

export default App;
