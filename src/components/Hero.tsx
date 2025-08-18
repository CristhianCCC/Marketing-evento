import heroImg from "../img/hero.png"


export default function Hero () {
    return (
        <>
            <div id="hero" className="relative flex justify-center py-10 overflow-hidden">
                    <img src={heroImg} alt="Hero img" className="lg:h-200 rounded-2xl hero shadow-2xl"/>
                <h2 className="text-center absolute top-15 md:top-20 max-w-[90%] lg:max-w-[40%]  text-white text-3xl md:text-6xl lg:text-8xl font-bold transform lg:-translate-y-1 md:translate-x-5 md:text-center lg:text-left lg:-translate-x-50">Hackea tu mente , potencia tus ventas</h2>
                <h2 className="absolute text-center top-35 md:top-60 lg:top-[30rem] max-w-[90%] lg:max-w-[40%]  text-white text-2xl md:text-4xl lg:text-6xl font-bold transform lg:-translate-y-1 md:translate-x-5 md:text-center lg:text-left lg:-translate-x-50">Con la trilogía del éxito</h2>
                <h2 className="absolute text-center top-50 md:top-80 lg:top-[40rem] max-w-[90%] lg:max-w-[40%] gradient-gold text-2xl md:text-4xl lg:text-6xl font-bold transform lg:-translate-y-1 md:translate-x-5 md:text-center lg:text-left lg:-translate-x-50">| Venta | Marketing | Mentalidad |</h2>

            </div>
        </>
    )
}