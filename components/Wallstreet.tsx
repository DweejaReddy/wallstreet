import React from 'react'
import Image from 'next/image'
import Red from '../app/assets/ceo.png'
import Triangle from '../app/assets/redtri.png'
import Link from 'next/link'
import tanmay from '../app/assets/team/tanmay.jpg'
import tanishqa from "../app/assets/team/tanishqa.jpg";
const Wallstreet=()=>{
  return (
        <div className="flex flex-col items-center justify-center custom-img7 bg-cover ">
            <div className='bg-black bg-opacity-[0.7] m-8'>
                    <div className='mx-auto grid md:grid-cols-2 gap-8'>
                        <Image className='inline-flex justify-center m-4 ml-8' src={Red} height={500} width={500} alt="red"/>
                    <div className="flex flex-col justify-center">
                        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D34] to-[#D5242A] md:text-8xl text-4xl font-bold mt-5 mb-5'>WALLSTREET</h1>
                        <p className='text-white pr-[6rem] mt-5 mb-5 text-[1.5rem]'>Passion…Patience…Persistence…Profit <br/>
Implement your best strategies and win the best profits.</p>
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D34] to-[#D5242A] md:text-4xl text-2xl mt-5 mb-5'>REGISTER NOW FOR FREE</p>
                        <div className='flex flex-row'>
                        <button className='bg-gradient-to-r from-[#FF2D34] to-[#D5242A] mr-5 text-white px-4 py-2 mt-5 mb-5 text-2xl'>REGISTER</button>
                        <button className='bg-gradient-to-r from-[#FF2D34] to-[#D5242A] ml-5 text-white px-4 py-2 mt-5 mb-5 text-2xl'>BROCHURE</button>
                        </div>
                        <p className='text-[#818181] md:text-2xl mt-5 mb-5'>LAST DATE: 26th MARCH</p>
                    </div>
                </div>
            </div>
 
        <div className='bg-black bg-opacity-[0.7] my-8 mx-[10rem] border-2 border-[#FF2D34]'>
                <div className='flex flex-col justify-center items-center py-[3rem]'>
                <div className='w-[300px] h-[0.1rem] bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]'></div>
                <div className='text-6xl text-center text-[#FF2D34] font-bold py-1'>EVENT STRUCTURE</div>
                <div className='w-[300px] h-[0.1rem] bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]'></div>
            </div>

           

                <div>
                    <p className='text-white text-base md:text-xl'><Image className='inline-flex justify-center m-4 ml-[8rem] py-2' src={Triangle} height={30} width={30} alt="triangle"/>Students may work together in groups or individual.</p>
                    <p className='text-white text-base md:text-xl'><Image className='inline-flex justify-center m-4 ml-[8rem] py-2' src={Triangle} height={30} width={30} alt="triangle"/>Participants will have to create 40 sec to 1 min advertisement video.</p>
                    <p className='text-white text-base md:text-xl'><Image className='inline-flex justify-center m-4 ml-[8rem] py-2' src={Triangle} height={30} width={30} alt="triangle"/>You can choose topic of advertisement by your own.</p>
                    <p className='text-white text-base md:text-xl'><Image className='inline-flex justify-center m-4 ml-[8rem] py-2' src={Triangle} height={30} width={30} alt="triangle"/> Entries will be judged on practicality of ideas presented , level of marketing used and details , feasibility of concept executed and overall impression.</p>
                    
                </div>
            </div>


        <div className='my-[6rem]'>
            <div className='flex flex-col justify-center items-center py-[3rem]'>
                <div className='w-[300px] h-[0.1rem] bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]'></div>
                <div className='text-6xl text-center text-[#FF2D34] font-bold py-1'>TIMELINE</div>
                <div className='w-[300px] h-[0.1rem] bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]'></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-9 px-4 py-10">
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4 custom-img8 bg-no-repeat bg-cover">
                <h1 className="text-white text-2xl font-bold py-2 mr-9">REGISTRATION STARTS &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</h1>
                <p className="text-[#FF2D34] font-normal pt-2 sm:text-2xl text-xs">
                15TH MARCH 2023</p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 border-r-[3px] border-[#818181] border-dashed"></div>
              <div className="absolute w-10 h-10 rounded-full bg-[#FF2D34] text-black text-3xl text-center font-bold">
                1
              </div>
            </div>
            <div className="col-span-4 w-full h-full"></div>

            
            <div className="col-span-4 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 border-r-[3px] border-[#818181] border-dashed"></div>
              <div className="absolute w-10 h-10 rounded-full bg-[#FF2D34] text-black text-3xl text-center font-bold">
                2
              </div>
            </div>
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4 custom-img9 bg-no-repeat">
                <h1 className="text-white text-2xl font-bold py-2 ml-9">REGISTRATION ENDS</h1>
                <p className="text-[#FF2D34] pt-2 sm:text-2xl text-xs ml-9">
                  26TH MARCH 2023
                </p>
              </div>
            </div>
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4 custom-img8 bg-no-repeat">
                <h1 className="text-white text-2xl font-bold py-2">EVENT DATES</h1>
                <p className="text-[#FF2D34] pt-2 sm:text-2xl text-xs">
                  1ST-2ND APRIL 2023
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 border-r-[3px] border-[#818181] border-dashed"></div>
              <div className="absolute w-10 h-10 rounded-full bg-[#FF2D34] text-black text-3xl text-center font-bold">
                3
              </div>
            </div>
            <div className="col-span-4 w-full h-full"></div>


            <div className="col-span-4 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 border-r-[3px] border-[#818181] border-dashed"></div>
              <div className="absolute w-10 h-10 rounded-full bg-[#FF2D34] text-black text-3xl text-center font-bold">
                4
              </div>
            </div>
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4 custom-img9 bg-no-repeat">
                <h1 className="text-white text-2xl font-bold py-2 ml-9">RESULT DECLARATION</h1>
                <p className="text-[#FF2D34] pt-2 sm:text-2xl text-xs ml-9">
                  2ND APRIL 2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cover bg-[url('./assets/red.png')] bg-top">
          <div className="w-full h-full flex justify-center overflow-hidden">
            <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
            <div className='flex flex-col justify-center items-center py-[3rem]'>
                <div className='w-[300px] h-[0.1rem] bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]'></div>
                <div className='text-6xl text-center text-[#FF2D34] font-bold py-1'>CONTACT US</div>
                <div className='w-[300px] h-[0.1rem] bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]'></div>
                <h2 className="text-white mt-6 text-center text-xs sm:text-base">
                  For any queries relating to speaker sessions, do reach out to us
                  at{" "}
                  <Link
                    href="mailto:consortium@ecellvnit.co.in"
                    className="text-[#FF2D34]"
                  >
                    consortium@ecellvnit.co.in
                  </Link>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center gap-10 px-2">
                <div />
                <div className="md:col-span-2 lg:col-span-3 justify-center items-center flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-xs md:max-w-2xl">
                    <div className="border-2 border-gradient-t-primary lg:scale-90">
                      <div className="bg-gradient-to-b from-[#D5242A] to-[#FF2D34]">
                        <div className="flex flex-col justify-center gap-6 h-[320px] overflow-clip">
                          <Image
                            src={tanmay}
                            alt="Tanmay"
                            className="scale-[1.4] md:scale-[1.5] lg:scale-[1.2] w-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-2 p-4 bg-black">
                        <span className="font-bold uppercase text-base md:text-lg lg:text-xl xl:text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#D5242A] to-[#FF2D34]">
                          Tanmay Nagrale
                        </span>
                        <div className="w-2/3 h-[0.02rem] bg-[#ffff] my-1" />
                        <span className="font-medium text-xs xl:text-sm text-center text-[#949494]">Head Of Events and Planning</span>
                        <div className="flex justify-center gap-2">
                          <Link href="https://www.linkedin.com/in/tanmay-nagrale-6b38b7205/?originalSubdomain=in" target='_blank'>
                            <svg className="h-6 w-6 lg:h-7 lg:w-7 ml-4 sm:ml-0" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21.5 0C9.62573 0 0 9.62573 0 21.5C0 33.3743 9.62573 43 21.5 43C33.3743 43 43 33.3743 43 21.5C43 9.62573 33.3743 0 21.5 0ZM16.237 30.4113H11.8832V16.4005H16.237V30.4113ZM14.0332 14.6805C12.6581 14.6805 11.769 13.7062 11.769 12.5014C11.769 11.2718 12.685 10.3267 14.0892 10.3267C15.4934 10.3267 16.3534 11.2718 16.3803 12.5014C16.3803 13.7062 15.4934 14.6805 14.0332 14.6805ZM32.138 30.4113H27.7843V22.6467C27.7843 20.8393 27.1527 19.612 25.5783 19.612C24.3756 19.612 23.6612 20.4429 23.3454 21.2424C23.229 21.5269 23.1998 21.93 23.1998 22.3309V30.4091H18.8439V20.8684C18.8439 19.1193 18.7879 17.6569 18.7296 16.3982H22.5123L22.7116 18.3444H22.799C23.3723 17.4307 24.7765 16.0824 27.1258 16.0824C29.9903 16.0824 32.138 18.0018 32.138 22.1271V30.4113Z" fill="#FF2D34" />
                            </svg>
                          </Link>
                          <div className="text-white text-[10px] lg:text-[14px] w-3/4 lg:w-full">
                            <div className="grid grid-rows-2 gap-0 justify-items-start">
                              <Link href="mailto:nagraletanmay123@gmail.com" target="_blank">nagraletanmay123@gmail.com</Link>
                              <Link href="tel:914188972" target="_blank">+91 9146188972</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-2 border-gradient-t-primary scale-90">
                      <div className="bg-gradient-to-b from-[#D5242A] to-[#FF2D34]">
                        <div className="flex flex-col justify-center gap-6 h-[320px] overflow-clip">
                          <Image
                            src={tanishqa}
                            alt="Tanishqa"
                            className="scale-[1.4] md:scale-[1.5] lg:scale-[1.2] w-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-2 p-4 bg-black">
                        <span className="font-bold uppercase text-base md:text-lg lg:text-xl xl:text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#D5242A] to-[#FF2D34]">
                          Tanishqa Mishra
                        </span>
                        <div className="w-2/3 h-[0.02rem] bg-[#ffff] my-1" />
                        <span className="font-medium text-xs xl:text-sm text-center text-[#949494]">Head Of Events and Planning</span>
                        <div className="flex justify-center gap-2">
                          <Link href="https://www.linkedin.com/in/tanishqa-mishra-406ab5209/?originalSubdomain=in" target='_blank'>
                            <svg className="h-6 w-6 lg:h-7 lg:w-7 ml-4 sm:ml-0" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21.5 0C9.62573 0 0 9.62573 0 21.5C0 33.3743 9.62573 43 21.5 43C33.3743 43 43 33.3743 43 21.5C43 9.62573 33.3743 0 21.5 0ZM16.237 30.4113H11.8832V16.4005H16.237V30.4113ZM14.0332 14.6805C12.6581 14.6805 11.769 13.7062 11.769 12.5014C11.769 11.2718 12.685 10.3267 14.0892 10.3267C15.4934 10.3267 16.3534 11.2718 16.3803 12.5014C16.3803 13.7062 15.4934 14.6805 14.0332 14.6805ZM32.138 30.4113H27.7843V22.6467C27.7843 20.8393 27.1527 19.612 25.5783 19.612C24.3756 19.612 23.6612 20.4429 23.3454 21.2424C23.229 21.5269 23.1998 21.93 23.1998 22.3309V30.4091H18.8439V20.8684C18.8439 19.1193 18.7879 17.6569 18.7296 16.3982H22.5123L22.7116 18.3444H22.799C23.3723 17.4307 24.7765 16.0824 27.1258 16.0824C29.9903 16.0824 32.138 18.0018 32.138 22.1271V30.4113Z" fill="#FF2D34" />
                            </svg>
                          </Link>
                          <div className="text-white text-[10px] lg:text-[14px] w-3/4">
                            <div className="grid grid-rows-2 gap-0 justify-items-start">
                              <Link href="mailto:nagraletanmay123@gmail.com" target="_blank">tanishqam30@gmail.com</Link>
                              <Link href="tel:914188972" target="_blank">+91 9179713005</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        
  )
}

export default Wallstreet
