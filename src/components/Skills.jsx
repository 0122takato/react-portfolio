import { useEffect } from "react";

export const Skills = () => {
    const outputTest = () => {console.log('test')};

    useEffect(outputTest);
    
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
