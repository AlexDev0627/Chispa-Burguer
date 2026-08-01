export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur-md bg-white/60 shadow-sm w-full mx-auto border-orange-100/50">
      <div className="px-6 sm:px-8">
        <div className="flex items-center justify-between py-3">
          
          <span className="text-3xl text-orange-600 font-bold tracking-tight">
            chispa<span className="text-orange-400">.</span>
          </span>
          
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className="text-stone-600 font-medium hover:text-orange-500 transition-colors duration-200"
            >
              Menú
            </a>
            <a 
              href="#" 
              className="text-stone-600 font-medium hover:text-orange-500 transition-colors duration-200"
            >
              Nosotros
            </a>
            <a 
              href="#" 
              className="text-stone-600 font-medium hover:text-orange-500 transition-colors duration-200"
            >
              Contacto
            </a>
          </div>


          {/* <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition-colors duration-200 shadow-md shadow-orange-200 cursor-pointer">
              Reservar
            </button>
          </div> */}

        </div>
      </div>
    </nav>
  );
}