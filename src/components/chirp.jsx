import React from "react"
import moment from 'moment'
const {v4 : uuidv4} = require('uuid')



const Chirp = props => {
  const newId = uuidv4()
    return (
        <div className="bg-light p-3 chirpBox mb-3" id={newId} >
        <div className="d-flex w-100">
          <h5 className="mb-1"> @{props.newUsername}</h5>
        </div>
        <p className="mb-1">{props.newChirp}</p>
        <small className="text-muted">{moment().format('LT')}</small>
      </div>
    );

}

export default Chirp