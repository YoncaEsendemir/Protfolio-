
 const MobileMenu = ({menuOpen, setMenuOpen})=>{
    return(
        <>
        <div className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10, 10, 10, 0.7)] flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        
        ${
            menuOpen
            ?"h-screen opacity-100 pointer-events-auto"
            :"h-0 opacity-0 pointer-events-none"
        }
        `}>

        <button onClick={()=>setMenuOpen(false)} className=" absolute top-6 right-6 text-white text-4xl  focus:outline-none cursor-pointer
        " aria-label="Close Menu">

            X
        </button>

        <a href="#home" onClick={()=>setMenuOpen(false)} className={`text-2xl font-smibold text-white my-4 transform 
        transition-transform duration-300 ${ 
            menuOpen ? "opacity-100 translate-y-8"
            : "opacity-100 translate-y-8"
        } `}>
                    Home
                </a>

                <a href="#about" onClick={()=>setMenuOpen(false)} className={`text-2xl font-smibold text-white my-4 transform 
        transition-transform duration-300 ${ 
            menuOpen ? "opacity-100 translate-y-8"
            : "opacity-100 translate-y-8"
        } `}>
                    About
                </a>

                <a href="#projects" onClick={()=>setMenuOpen(false)} className={`text-2xl font-smibold text-white my-4 transform 
        transition-transform duration-300 ${ 
            menuOpen ? "opacity-100 translate-y-8"
            : "opacity-100 translate-y-8"
        } `}>
                    Projects
                </a>

                <a href="#contact" onClick={()=>setMenuOpen(false)} className={`text-2xl font-smibold text-white my-4 transform 
        transition-transform duration-300 ${ 
            menuOpen ? "opacity-100 translate-y-8"
            : "opacity-100 translate-y-8"
        } `}>
                    Contact
                </a>

        </div>
        </>
    )
}

export default MobileMenu