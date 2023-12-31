import logo from '/public/brand_logo.png';
export default function Navigation(){
    return(
        <nav className='flex justify-around gap-16 lg:justify-between px-[79px] py-[14px] overflow-hidden'>
                <img src={logo} alt="Brand Logo" />
                <div className='hidden lg:flex gap-[24px] '>
                    <a href="">MENU</a>
                    <a href="">LOCATION</a>
                    <a href="">ABOUT</a>
                    <a href="">CONTACT</a>
                </div>
                <button className='bg-[#D01C28] py-[6px] px-[16px] text-white'>Login</button>
            </nav>
    )
}