export default function HeroSection(){
    return(
        <div className="flex items-center justify-center mt-[36px]">
                <div>
                    <h2 className='text-[108px] font-bold leading-[102px]'>YOUR FEET <br /> DESERVE <br />THE BEST</h2>
                    <h3 className='text-[16px] text-[#5A5959] leading-normal mt-[36px]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />SHOES.</h3>
                    <div className='mt-[36px]'>
                        <button className='bg-[#D01C28] py-[6px] px-[16px] text-white'>Shop Now</button>
                        <button className='py-[6px] px-[16px] text-[#D01C28] border gap-10 ml-10'>Category</button>
                    </div>
                    <p className='mt-[36px] text-[#5A5959] text-[16px]'>Also Available On</p>
                    <div className='flex gap-4'>
                        <img src="./public/flipkart.png" alt="flipkart img" />
                        <img src="./public/amazon.png" alt="amazon img" />
                    </div>
                </div>

                <div className='w-[530px] h-[487px]'>
                    <img src="./public/shoe_image.png" alt="shoe img" />
                </div>
            </div>
    )
}