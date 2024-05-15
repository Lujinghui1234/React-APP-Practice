import {ReactElement, useEffect, useRef} from "react";

const Son = (({src, isPlay}: any): ReactElement => {
    const ref = useRef(null);

    useEffect(() => {
        isPlay ? (ref?.current as any)?.play() : (ref?.current as any)?.pause();
    }, [isPlay]);

    const obj = {
        a: 1,
        b: {
            c: 1
        }
    };
    console.log(obj?.b?.c);
    return (
        <>
            <video loop src={src} ref={ref}/>
        </>
    )
});

export default Son;