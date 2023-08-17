import React from 'react'

const EmotionBtn = ({ id, value, emoji, handleChangeMood, selectedMood }) => {
  return (
    <div className='moodBtn'>
      <input 
        type="radio" 
        name='mood'
        value={value}
        id={`mood${id}`}
        checked={selectedMood.mood === value}
        onClick={handleChangeMood}
      />
      <label htmlFor={`mood${id}`}>
        <div className='moodBtn_inner'>
          <span>{emoji}</span>
          <p>{value}</p>
        </div>
      </label>
    </div>
  )
}

export default EmotionBtn
