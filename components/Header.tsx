const Header = () => {
    return ( 
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-[36px] font-[700]">arpit.</h1>
            </div>
            <div className="group">
                <a href="/Resume.pdf"
                download="Arpit_Sarkar_Resume.pdf" className="font-[500]">hire me.</a>
                <div className="w-[20px] h-[2px] border border-black group-hover:w-full transition-all duration-200" />
            </div>
        </div>
     );
}
 
export default Header;