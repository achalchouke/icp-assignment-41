import "./Home.css"

import PriyaImage from "./priya.jpg"
import ShivanshImage from "./shivansh.jpg"
import NikitaImage from "./nikita.jpg"

import StudentCard from "./../../componants/StudentCard/StudentCard"

const Home = () => {
    return (<>
   
    <h1 className="hedding">Student Cards</h1>

    <div className="Student-card-parent">

    <StudentCard studentName = "Priya" 
    studentImage ={PriyaImage}
    micState = {true}
    /> 

    <StudentCard studentName = "Shivansh" 
    studentImage = {ShivanshImage}
    micState = {false}
    />

    <StudentCard studentName = "Nikita" 
    studentImage = {NikitaImage}
    micState = {false}
    />

    </div>
    </>)
}

export default Home 