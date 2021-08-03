import React, { useState } from 'react'
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from './InputOptions';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ImageIcon from "@material-ui/icons/Image"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from './Post';


function Feed() {
    const [input , setInput] = useState("")
    const [post, setPost] = useState([])
    const sendPost = (e) => {
        e.preventDefault();
        setPost([...post])
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form  action="">
                        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photos" color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            {/* Post */}
            {
                post.map(({ id , data:{name, discription, message}}) => (
                    <Post
                        id={id}
                        name={name}
                        discription={discription}
                        message={message}/>
                ))
            }
            
        </div>
    )
}

export default Feed;
