import { useRef } from "react";


export default function BurgerScrollHero(){

    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    return(
        <>
        <div>
            <p>x</p>
        </div>
        <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
        </>
    );
}