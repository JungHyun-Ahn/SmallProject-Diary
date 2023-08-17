import React from 'react'

// components
import DiaryItem from './DiaryItem'

// --------------------------------------

const DiaryList = ({ newDiary, onDelete, onEdit }) => {
  return (
    <div className='DiaryList'>
      <div className="list_wrap">
        <h1>Diary List</h1>
        <p>Number of diaries : <em>{newDiary.length}</em></p>
        <div className='item_box'>
          {
            newDiary.map((item) => (
              <DiaryItem key={item.id} data={item} onDelete={onDelete} onEdit={onEdit} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DiaryList
