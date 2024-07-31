const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
<div className="w-10 rounded-full">
    <img src="https://i.pravatar.cc/100" alt="avatar" />
</div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500`}>Hi! What iss up?</div>
      <div className="chat-footer text-xs opacity-50 flex gap-1 items-center">12:00</div>
    </div>
  )
}

export default Message


// START CODE
// const Message = () => {
//     return (
//       <div className="chat chat-end">
//         <div className="chat-image avatar">
//   <div className="w-10 rounded-full">
//       <img src="https://i.pravatar.cc/100" alt="avatar" />
//   </div>
//         </div>
  
//         <div className={`chat-bubble text-white bg-blue-500`}>Hi! What iss up?</div>
//         <div className="chat-footer text-xs opacity-50 flex gap-1 items-center">12:00</div>
//       </div>
//     )
//   }
  
//   export default Message
  