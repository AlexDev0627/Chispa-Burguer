import miVideo from '../videos/Seamless_cinematic_D_explosi.mp4';

export default function Hero() {
    return(
        <section id="hero" className="bg-gray-100 p-8 text-center">
            <video className="w-full h-auto" controls>
                <source src={miVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
}