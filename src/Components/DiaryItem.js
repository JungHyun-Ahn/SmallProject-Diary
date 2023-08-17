import React, { useState, useRef } from 'react'

const DiaryItem = ({ data, onDelete, onEdit }) => {

  const {id, writer, content, mood, created_Date} = data;

  // get mood icon
  const getMoodIcon = (mood) => {
    switch(mood) {
      case "perfect" :
        return <span>😊</span>;
      case "good" :
        return <span>🙂</span>;
      case "ok" :
        return <span>😗</span>;
      case "bad" :
        return <span>😒</span>;
      case "angry" :
        return <span>😠</span>;
      default :
        return <span>?</span>;
    }
  };

  // handle edit btn
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  }

  // handle cancel edit btn
  const handleCancelEdit = () => {
    setLocalContent(content);
    setIsEdit(!isEdit);
  }

  // handle compleme edit btn
  const textareaRef = useRef();
  const handleCompleteEdit = () => {
    if(localContent.length < 1) {
      textareaRef.current.focus();
      return;
    }
    onEdit(localContent, id);
    setIsEdit(!isEdit);
  }

  // handle delete btn
  const handleDelete = () => {
    if(window.confirm("Are you sure you want to delete your diary?")) {
      onDelete(id);
    }
  }

  return (
    <div className='DiaryItem'>
      <div className="item_inner">
        <div className="diary_mood">
          {getMoodIcon(mood)}
          <p>{mood}</p>
        </div>
        <div className="diary_detail">
          <h4 className='writer'>{writer}</h4>
          <p className='date'>{created_Date}</p>
          {
            isEdit ?
            <textarea 
              ref={textareaRef}
              value={localContent} 
              onChange={(e) => {setLocalContent(e.target.value)}} 
            /> :
            <p className='content'>{content}</p>
          }
          {
            isEdit ?
            <div className='btns'>
              <button onClick={handleCancelEdit}>Cancel</button>
              <button onClick={handleCompleteEdit}>Complete</button>
            </div> :
            <div className='btns'>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default DiaryItem
