import React from 'react'
import "./Widget.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>)
    return (
        <div className="widget">
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Heyy This is Ranjana", "WelCome Back to this App...")}
            {newsArticle("Heyy This is Kumari Ranjana Yadav", "WelCome Back to this App...")}
            {newsArticle("Heyy This is Rakhii " , "WelCome Back to this App...")}
            {newsArticle("Heyy This is Puja Sharma", "WelCome Back to this App...")}
            {newsArticle("Heyy This is Ranjana", "WelCome Back to this App...")}
            {newsArticle("Heyy This is Ranjana", "WelCome Back to this App...")}
            {newsArticle("Heyy This is Ranjana", "WelCome Back to this App...")}
        </div>

    )
}

export default Widget
