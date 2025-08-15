import heroImg from "../img/hero.jpg"


export default function Hero () {
    return (
        <>
            <div id="hero" className="relative flex justify-center py-10">
                    <img src={heroImg} alt="Hero img" className="lg:h-200 rounded-2xl hero shadow-2xl"/>
                <h2 className="text-center absolute top-20 max-w-[90%] lg:max-w-[40%] px-8 text-white text-3xl md:text-6xl lg:text-8xl font-bold transform lg:-translate-y-1 md:translate-x-5 md:text-center lg:text-left lg:-translate-x-50">El Poder de Ser Tú.</h2>
                <h2 className="absolute text-center top-40 lg:top-[30rem] max-w-[90%] lg:max-w-[40%] px-8 text-white text-3xl lg:text-6xl font-bold transform lg:-translate-y-1 md:translate-x-5 md:text-center lg:text-left lg:-translate-x-50">Emprende sin perder tu esencia.</h2>
            </div>
        </>
    )
}