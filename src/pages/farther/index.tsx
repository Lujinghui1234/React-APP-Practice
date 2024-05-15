import {ReactElement, useState} from "react";
import Son from '../son';
import './index.css';

const Farther = (): ReactElement => {
    const [isPlay, setIsPlay] = useState(false);
    const handelIsplay = () => {
        setIsPlay(!isPlay);
    }
    return (
        <>
            <button onClick={handelIsplay}>{isPlay ? 'pause' : 'play'}</button>
            <Son
                isPlay={isPlay}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"/>
        </>
    )
};

export default Farther;