 import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage';


   export function ChatMessage({message, sender}){
             //const message = props.message;
             //const {message, sender} = props
             //const sender = props.sender;

           /*  if(sender === "robot"){
              return(
                 <div>
                    <img src = "user.png" width = "50"/>
                    {message}
                </div>
              )
             }*/
            return( 
                <div className = {
                  sender === 'user' 
                  ? 'chat-message-user' 
                  : 'chat-message-robot'
                }>
                    {sender === 'robot' && <img src = {RobotProfileImage} className = "chat-message-profile"/>}
                    <div  className = 'chat-message-text'>
                    {message}
                    </div>
                    {sender === 'user' && <img src = {UserProfileImage} className = 'chat-message-profile'/>}
                </div>
            );

          }

