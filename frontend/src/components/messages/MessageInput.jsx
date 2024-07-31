import {BsSend} from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="my-3 px-4">
        <div className="w-full relative">

            <input type="text"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
            placeholder="Send a message"
            />

            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3"></button>

            <BsSend />

        </div>
      
    </form>
  )
}

export default MessageInput;


// START CODE 
// import {BsSend} from "react-icons/bs";

// const MessageInput = () => {
//   return (
//     <form className="my-3 px-4">
//         <div className="w-full">

//             <input type="text"
//             className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
//             placeholder="Send a message"
//             />

//             <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3"></button>

//             <BsSend />

//         </div>
      
//     </form>
//   )
// }

// export default MessageInput;