
import "./StudentCard.css"

import MicOn from "./png/mic-on.png"
import MicOff from "./png/mic-off.png"

function StudentCard({studentName , studentImage , micState}) {
  return (
    <div className="student-card-container">

        <img src = {micState ?  MicOn : MicOff} className="mic-image"/>

        <img src = {studentImage} className="student-image"/>

        <span className="student-name-text">{studentName}</span>
        
    </div>
  )
}

export default StudentCard