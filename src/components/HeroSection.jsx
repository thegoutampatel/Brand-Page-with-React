import shoe from '/public/shoe_image.png';
import amazon from '/public/amazon.png';
import flipkart from '/public/flipkart.png';


export default function HeroSection(){
    return(
        <div className=" font-poppins flex flex-col items-center justify-center mt-[36px] lg:flex-row">
                <div>
                    <h2 className='text-[54px] leading-[51px] lg:text-[108px] font-bold lg:leading-[102px]'>YOUR FEET <br /> DESERVE <br />THE BEST</h2>
                    <h3 className=' text-[8px] lg:text-[16px] text-[#5A5959] leading-normal mt-[18px] lg:mt-[36px]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />SHOES.</h3>
                    <div className='mt-[18px] lg:mt-[36px]'>
                        <button className='bg-[#D01C28] py-[6px] px-[16px] text-white'>Shop Now</button>
                        <button className='py-[6px] px-[16px] text-[#D01C28] border gap-10 ml-10'>Category</button>
                    </div>
                    <p className='mt-[18px] lg:mt-[36px] text-[#5A5959] text-[8px] lg:text-[16px]'>Also Available On</p>
                    <div className='flex gap-4'>
                        <img src={flipkart} alt="flipkart img" />
                        <img src={amazon} alt="amazon img" />
                    </div>
                </div>

                <div className=': w-[265px] lg:w-[530px] h-[243px] mt-[39px] lg:mt-[0px] lg:h-[487px]'>
                    <img src={shoe} alt="shoe img" />
                </div>
            </div>
    )
}