const Navbar = () => {
    return ( 
        <div className="hidden lg:block">
            <div className="space-y-5">
                <div className="texto rotate-180 group ">
                <a href="#Header" className="">Home <div className="border-l-2 border-black h-full group-hover:h-[40%] transition-all duration-200"/></a>
                </div>
                
                <div className="texto rotate-180 group ">
                <a href="#About">About <div className="border-l-2 border-black h-[40%] group-hover:h-full transition-all duration-200"/></a>
                
                </div>
                <div className="texto rotate-180 group  ">
                <a href="#Projects">Projects <div className="border-l-2 border-black h-[40%] group-hover:h-full transition-all duration-200"/></a>
                
                </div>
                <div className="texto rotate-180 group ">
                <a href="#Contact">Contact <div className="border-l-2 border-black h-[40%] group-hover:h-full transition-all duration-200"/></a>
                
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;