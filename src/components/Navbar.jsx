import logo from "../logo/protfolio.png";

 const Navbar = ()=>{


    return(
        <>
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.7)] backdrop-blur-lg border-b border-white/10 shadow-lg">
           <div className="max-w-5xl mx-auto px-4">
              <div className="flex justify-between items-center h-17">
                <a href="#home" className="h-15 w-15">
                    <img src={logo} alt={"bulunamadi"} />
                </a>

               <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                    &#9776;
               </div>

               <div>
                <a href="#home" className="tex-gray-300 hove:text-white transition-color mx-5 px-3">
                    Home
                </a>

                <a href="#about" className="tex-gray-300 hove:text-white transition-color mx-5 px-3">
                    About
                </a>

                <a href="#projects" className="tex-gray-300 hove:text-white transition-color mx-5 px-3">
                    Projects
                </a>

                <a href="#contact" className="tex-gray-300 hove:text-white transition-color mx-5 px-3">
                    Contact
                </a>
               </div>
              </div>
           </div>
        </nav>
        </>
    )
}

export default Navbar