import { useEffect, useState } from "react";

export default function Upper({name, country, icon, condition, time}){
    const dateBuilder = () => {
        let d = new Date();
        let days = ["Sund", "Mon", "Tuesd", "Wends", "Thurs", "Frid", "Sat"]
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agst", "Sept", "Oct", "Nov", "Dec"]
        
        let date = d.getDate();
        let month = months[d.getMonth()];

        let day = days[d.getDay()];
        let year = d.getFullYear();

        return `${day}, ${date} - ${month} - ${year}`;
    }
    const style = {
        outer:{
            display:'flex',
            alignItems:'center',
            
            gap:'40px',
            padding:'10px',
            borderRadius:'7px',

        },
        innerLeft:{
            display:'flex', 
        },
        innerRigth:{
            textAlign:'right'
        }
    }
    return (
        <>
            <div style={style.outer}>
                <div style={style.inner}>
                    <div style={style.innerLeft}>
                        <p>{name},</p>
                        <p>{country}</p>
                    </div>
                    <div style={style.innerLeft}>
                        <p>{time.slice(-6)}</p>
                    </div>
                </div>
                <div style={style.innerRigth}>
                    <img src={icon} alt="" />
                    <p>{condition}</p>
                    <p>{dateBuilder()}</p>
                </div>

            </div>
            
        </>
    )
}