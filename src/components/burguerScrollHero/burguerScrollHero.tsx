import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function BurgerScrollHero(){

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        
        //si el elemento no existe no hacemos nada
        if(!canvas)return;

        const context = canvas.getContext('2d');
        if(!context)return;

        //funcion para ajustar el tamaño del canvas al tamaño de la ventana
        const setCanvasSize = ()=>{
            const parent = canvas.parentElement; //acedemos al elemento padre del canvas
            if(!parent)return;

            const dpr = window.devicePixelRatio || 1; //obtenemos el ratio de pixeles del dispositivo
            canvas.width = parent.clientWidth * dpr;
            canvas.height = parent.clientHeight * dpr;

            if(!context)return;

        }
        setCanvasSize(); //llamamos a la funcion para ajustar el tamaño del canvas al cargar la pagina

        

        //declaramos las imegenes
        const frameCount = 120;
        const images:HTMLImageElement[] = [];
        //bucle para crear cada una de las imagenes y guardaralas en el arreglo images
        for(let i =0; i < frameCount; i++){
            const img = new Image();
            
            img.src = `/frames_sequence/frame_${i.toString().padStart(4, '0')}.webp`;
            images.push(img);
        }
console.log("Canvas dimensiones:", canvas.clientWidth, canvas.clientHeight);
        const burgerState = { frame: 0 };
    //funcion que limpia el canvas y dibuja el fotograma actual
        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[burgerState.frame], 0, 0, canvas.width, canvas.height);
        }
        //dibujamos el primer fotograma por defecto al cargar la pagina
        images[0].onload = render;
        

    const tween = gsap.to(burgerState, {
      frame: frameCount - 1, // Lleva la animación desde el fotograma 0 hasta el 119
      snap: 'frame',         
      ease: 'none',          
      scrollTrigger: {
        trigger: sectionRef.current, 
        start: 'top top',            
        end: 'bottom bottom',       
        scrub: true,                 // Sincronización directa con la rueda del ratón
      },
      onUpdate: render,            // Cada vez que GSAP cambia el fotograma, redibuja el canvas
    });
    },[]);

    return(
        <>
        <div ref={sectionRef} style={{height: '400vh', width: '100vw', position: 'relative'}}>
         <div style={{ position: 'sticky', top: 0, width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            <canvas ref={canvasRef} style={{ display: 'block',position:'absolute', width: '100%', height: '100%', objectFit: 'contain',zIndex: 1 }} />
         </div>
        </div>
        </>
    );
}