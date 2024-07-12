const Navbar = () => {
    return ( 
        <div className="">
            <div className="space-y-5">
                <div className="texto rotate-180 group underline">
                <a href="#Header">Home</a>
                    {/* <div className="w-[20px] h-[2px] border border-black group-hover:w-full transition-all duration-200" /> */}
                </div>
                
                <div className="texto rotate-180 group underline">
                <a href="#About">About</a>
                {/* <div className="w-[20px] h-[2px] border border-black group-hover:w-full transition-all duration-200" /> */}
                </div>
                <div className="texto rotate-180 group underline">
                <a href="#Projects">Projects</a>
                {/* <div className="w-[20px] h-[2px] border border-black group-hover:w-full transition-all duration-200" /> */}
                </div>
                <div className="texto rotate-180 group underline">
                <a href="#Contact">Contact</a>
                {/* <div className="w-[20px] h-[2px] border border-black group-hover:w-full transition-all duration-200" /> */}
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;