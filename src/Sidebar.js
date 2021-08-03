import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"


function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="Sidebar">
            <div className="sidebar__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKAg76zv_Al3M9IxzgG0bloaYqZ0z17p0uN3Wm0y_dNkOktKoL7K7WKTGXW9AnIbLpP3U&usqp=CAU" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Ranjana Yadav</h2>
                <h4>yranjana757@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed you</p>
                    <p className="sidebar__statNumber">2.342</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views On Post</p>
                    <p className="sidebar__statNumber">2.354</p>
                </div>
            </div>
            <div className="sidebar__button">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('Programing')}
                {recentItem('Python')}
                {recentItem('Web_development')}
                {recentItem('Web_development')}
            </div>
        </div>
    )
}

export default Sidebar;
