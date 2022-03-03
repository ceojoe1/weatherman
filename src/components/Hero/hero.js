import React from 'react'
import styled from "styled-components"
import { useRecoilState} from 'recoil'
import { zipState } from '../../recoil/atoms/zipAtom'
function Hero() {
    const [zip, setZip] = useRecoilState(zipState)
    const onChange = (event) => {
        console.log({event})
        setZip(event.target.value)
    }
    return (
        <div className="card hero-card">
            <div className="card-controls">
                <label>Please Enter your Zip Code</label>
                <input className="card-input" type="tel" value={zip} onChange={onChange} pattern="\d*" maxLength={5}/>
            </div>
        </div>
    )
}


export default Hero