import React from 'react'

function FeedbackCard({feedback}) {
    var time = feedback.createdAt;
    time = time?.substring(0, 10);
    let arr = time?.split("-");
    time = arr?.reverse()?.join("-");    
  return (
    <div className="p-4 bg-gray-50 rounded-md shadow-sm">
    <h1 className="font-semibold text-lg text-gray-800">{feedback.Username}</h1>
    <p className="text-gray-600 mt-1">
        {feedback.FeedbackText}
      </p>
      <span>Time : <i>{time}</i></span>
  </div>
  )
}

export default FeedbackCard