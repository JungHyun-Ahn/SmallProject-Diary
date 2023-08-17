import React, { useRef } from 'react'

// hook
import { useState } from 'react'

// components
import EmotionBtn from './EmotionBtn';

// commonData
import { emotionList } from './commonData';

// --------------------------------------

const DiaryEditor = ({ onCreate }) => {
  // handle mood
  const [selectedMood, setSelectedMood] = useState({
    mood: "perfect"
  });
  const handleChangeMood = (e) => {
    const {name, value} = e.target;
    setSelectedMood({
      [name]: value
    });
  }

  // handle state
  const [state, setState] = useState({
    writer:'',
    content: ''
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    });
  }

  // handle save
  const inputRef = useRef();
  const textareaRef = useRef();

  const handleSave = (e) => {
    e.preventDefault();
    if(state.writer.length < 1) {
      inputRef.current.focus();
      return;
    }
    if(state.content.length < 3) {
      textareaRef.current.focus();
      return;
    }

    onCreate(state, selectedMood);
    setSelectedMood({
      mood: 'perfect'
    });
    setState({
      writer:'',
      content: ''
    });
  }

  return (
    <div className='DiaryEditor'>
      <div className='header'>
        <h1>Hi there,</h1>
        <p>How was your day today?</p>
      </div>
      <div className="editor_wrap">
        <div className='writerBox'>
          <h4>Name</h4>
          <input ref={inputRef} name='writer' value={state.writer} onChange={handleChangeState} type="text" placeholder='Write your name' />
        </div>
        <div className='diaryBox'>
          <h4>Today was ...</h4>
          <textarea ref={textareaRef} name='content' value={state.content} onChange={handleChangeState} type="text" placeholder='Today was ...' />
        </div>
        <div className="moodBox">
          <h4>Today's Mood</h4>
          <div className='moodBtns'>
            {
              emotionList.map((item) => (
                <EmotionBtn key={item.id} {...item} handleChangeMood={handleChangeMood} selectedMood={selectedMood} />
              ))
            }
          </div>
        </div>
        <button onClick={handleSave} className='saveBtn'>SAVE</button>
      </div>
    </div>
  )
}

export default DiaryEditor
