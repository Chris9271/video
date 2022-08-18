import React, {useState} from 'react';

const Header = ({updateQuery}) => {
    const [targetValue, setTargetValue] = useState("html");

    const handleClick = (e) => {
        const targetMenu = e.target.id;
        setTargetValue(targetMenu)
        updateQuery(e.target.dataset.value)
    }

    return (
        <div className="c-header">
            <h1 className="e-header__title">CodeTube</h1>
            <div className="c-header__options">
                <ul className="c-options">
                    <li className={targetValue === "html" ? "c-options__link-one change-textcolor" : "c-options__link-one"} data-value="html" id="html" onClick={(e) => handleClick(e)} defaultValue>HTML</li>
                    <li className={targetValue === "css" ? "c-options__link-two change-textcolor" : "c-options__link-two"} data-value="css3" id="css" onClick={(e) => handleClick(e)}>CSS</li>
                    <li className={targetValue === "javascript" ? "c-options__link-three change-textcolor" : "c-options__link-three"} data-value="javascript" id="javascript" onClick={(e) =>handleClick(e)}>JavaScript</li>
                    <li className={targetValue === "react" ? "c-options__link-four change-textcolor" : "c-options__link-four"} data-value="reactjs" id="react" onClick={(e) =>handleClick(e)}>React</li>
                    <li className={targetValue === "node" ? "c-options__link-five change-textcolor" : "c-options__link-five"} data-value="nodejs" id="node" onClick={(e) =>handleClick(e)}>Node</li>
                    <li className={targetValue === "datastructure" ? "c-options__link-six change-textcolor" : "c-options__link-six"} data-value="datastructure" id="datastructure" onClick={(e) =>handleClick(e)}>Data Structure</li>
                    <li className={targetValue === "learn" ? "c-options__link-seven change-textcolor" : "c-options__link-seven"} data-value="how to learn programming" id="learn" onClick={(e) =>handleClick(e)}>How to learn</li>
                    <li className={targetValue === "music" ? "c-options__link-eight change-textcolor" : "c-options__link-eight"} data-value="study music" id="music" onClick={(e) =>handleClick(e)}>Study Music</li>
                    <li className={`c-options__underline ${targetValue}`}></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
