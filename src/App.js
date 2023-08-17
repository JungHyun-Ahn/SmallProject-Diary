// css
import './App.css';

// components
import DiaryEditor from './Components/DiaryEditor';
import DiaryList from './Components/DiaryList';

// hook
import { useState, useRef } from 'react';

// --------------------------------------

function App() {

  const mockData = [
    {
      id: 2,
      writer: "Ahn",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem minima dolores libero inventore",
      mood: "perfect",
      created_Date : new Date().toLocaleString()
    },
    {
      id: 1,
      writer: "Lee",
      content: "Aut impedit neque cum provident quam sequi voluptatem explicabo labore a?",
      mood: "bad",
      created_Date : new Date().toLocaleString()
    },
  ]

  const [data, setData] = useState([...mockData]);
  const idRef = useRef(3);

  // create
  const onCreate = (newData, newSelectedMood) => {
    const {writer, content} = newData;
    const {mood} = newSelectedMood;

    setData([
      {
        id: idRef.current,
        writer,
        content,
        mood,
        created_Date : new Date().toLocaleString()
      }, 
      ...data
    ]);
    idRef.current += 1;
  }

  // delete
  const onDelete = (targetId) => {
    setData(
      data.filter((item) => (item.id !== targetId))
    );
  }

  // edit
  const onEdit = (editedContent, targetId) => {
    setData(
      data.map((item) => (
        item.id === targetId ? {...item, content: editedContent} : item
      ))
    );
  }

  return (
    <div className='Background'>
      <div className="Container">
        <DiaryEditor onCreate={onCreate} />
        <DiaryList newDiary={data} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
}

export default App;
