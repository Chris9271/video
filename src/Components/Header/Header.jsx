import React, {useState} from 'react';
import Logo from '../../image/logo.png';
import './header.scss';

const Header = (props) => {
    const {updateVideo} = props;
    const [prevValue, setPrevValue] = useState("");
    const [prevVal, setPrevVal] = useState();

    const handleClick = (e) => {
        const val = e.target;
        const valueText = e.target.dataset.value;
        const innerText = e.target.innerText;
        
        if(!prevValue){
            val.classList.add('changeColor')
            setPrevValue(valueText)
            setPrevVal(val)
        }else if(prevValue !== valueText){
            prevVal.classList.remove('changeColor')
            val.classList.add('changeColor')
            setPrevVal(val)
            setPrevValue(valueText)
        }

        const clicked = document.querySelector('.nav-underline');
        switch(innerText){
            case "HTML":
                clicked.classList.add('underline1');
                clicked.classList.remove('underline2');
                clicked.classList.remove('underline3');
                clicked.classList.remove('underline4');
                clicked.classList.remove('underline5');
                break;
            case "CSS":
                clicked.classList.remove('underline1');
                clicked.classList.add('underline2');
                clicked.classList.remove('underline3');
                clicked.classList.remove('underline4');
                clicked.classList.remove('underline5');
                break;
            case "JavaScript":
                clicked.classList.remove('underline1');
                clicked.classList.remove('underline2');
                clicked.classList.add('underline3');
                clicked.classList.remove('underline4');
                clicked.classList.remove('underline5');
                break;
            case "React":
                clicked.classList.remove('underline1');
                clicked.classList.remove('underline2');
                clicked.classList.remove('underline3');
                clicked.classList.add('underline4');
                clicked.classList.remove('underline5');
                break;
            case "How To Learn":
                clicked.classList.remove('underline1');
                clicked.classList.remove('underline2');
                clicked.classList.remove('underline3');
                clicked.classList.remove('underline4');
                clicked.classList.add('underline5');
                break;
            default:
                break;
        }

        updateVideo(valueText)
    }

    return (
        <div className="header">
            <img src={Logo} alt="logo" className="header-image"/>
            <div className="nav-option">
                <ul className="nav-ul">
                    <li className="nav-li-one" data-value="html5" onClick={(e) => handleClick(e)} defaultValue>HTML</li>
                    <li className="nav-li-two" data-value="css3" onClick={(e) => handleClick(e)}>CSS</li>
                    <li className="nav-li-three" data-value="javascript" onClick={(e) =>handleClick(e)}>JavaScript</li>
                    <li className="nav-li-four" data-value="react js" onClick={(e) =>handleClick(e)}>React</li>
                    <li className="nav-li-five" data-value="how to learn programming" onClick={(e) =>handleClick(e)}>How To Learn</li>
                    <li className="nav-underline"></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
