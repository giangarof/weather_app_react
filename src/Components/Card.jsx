import { useEffect, useState } from "react";
import Details from "./Details";
import Upper from "./Upper";
export default function Card({
    name, country, icon,
    condition, tempC, tempF, tempLikeC, tempLikeF,
    time
}) {
    
    const style = {
        outer:{
            gap:'10px',
            padding:'10px',
            background: 'rgba(0,0,0,.05)',
            borderRadius:'7px',

        },
        innerLeft:{
            display:'flex', gap:'3px'
        },
        innerRigth:{
            textAlign:'right'
        }
    }
    return (
        <>
            <div style={style.outer}>
                <Upper 
                    name={name} 
                    country={country}
                    icon={icon}
                    condition={condition}
                    time={time}
                />
                <Details
                    tempC={tempC}
                    tempF={tempF}
                    tempLikeC={tempLikeC}
                    tempLikeF={tempLikeF}
                />
            </div>
        </>
    )
}