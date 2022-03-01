import { useEffect, useState } from "react";
import axios from 'axios';

export const Skills = () => {

    const [data, setData] = useState(null);
    
    useEffect(() => {axios.get('https://api.github.com/users/0122takato/repos').then((response) => console.log(response)) }, []);
    
    return (
        <div id="skills">
            <div className="container">
                <div className="heading">
                    <h2>Skills</h2>
                </div>
                <div className="skills-container">
                </div>
            </div>
        </div>
    );
};
