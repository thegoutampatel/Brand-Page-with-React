export default function Navigation(){
    return(
        <nav className='flex justify-between px-[79px] py-[14px]'>
                <img src="./public/brand_logo.png" alt="Brand Logo" />
                <div className='flex gap-[24px]'>
                    <a href="">MENU</a>
                    <a href="">LOCATION</a>
                    <a href="">ABOUT</a>
                    <a href="">CONTACT</a>
                </div>
                <button className='bg-[#D01C28] py-[6px] px-[16px] text-white'>Login</button>
            </nav>
    )
}