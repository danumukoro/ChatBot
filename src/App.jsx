import { useState } from 'react'
import { ChatInput } from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessage.jsx';


import './App.css'

     

function App(){

        const[chatMessages,setChatMessages] = useState([
            {
              message : "hello!",
              sender : "user",
              id: 'id1'
            },
            {
              message : "Can you tell me what date it is?", 
              sender : "robot",
              id: 'id2' 
            },
            {
              message : "hello! how can ihelp you today",
              sender : "user",
              id: 'id3'
            },
            {
              message : "Today is september 27th",
              sender : "robot",
              id: 'id4'
            }
          ]);
          //const[chatMessages,setChatMessages]=array
          //const chatMessages = array[0];
          //const setChatMessages = array[1]

                return (
              <div className = "app-container">
                
               
               <ChatMessages
                  chatMessages = {chatMessages}
                />
             <ChatInput
                  chatMessages = {chatMessages}
                  setChatMessages = {setChatMessages}
                />
                               

                </div>

        );
        }

export default App
