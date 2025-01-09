import { useState } from "react";

const PersonProfile = (props) => {

    const {firstName, lastName, age, hairColor} = props;

    const [currentAge, setCurrentAge] = useState(age)

    const increaseAge = ()=> {
        setCurrentAge(currentAge + 1)
    };

    return(

        <>
            <div className="person">
                <h1>{firstName},{lastName}</h1>
                <h2>Age: {currentAge}</h2>
                <h2>Hair Color: {hairColor}</h2>
            </div>
            <div className="birthdayButtontab">
                <button className="birthdayButton" onClick={increaseAge}>Birthday Button</button>
            </div>
        </>

    )
};




export default PersonProfile;










