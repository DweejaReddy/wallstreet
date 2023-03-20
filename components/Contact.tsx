"use client";
import React from "react";
import Link from "next/link";

const Contact = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                break;
        }
    }


    const handleSubmit = () => {
        const body = {
            name,
            email,
            phone,
            message
        }
        window.location.href = `mailto:corporateaffairs@ecellvnit.co.in?subject=Contact%20Us&body=${JSON.stringify(body)}`;
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    }


    return (
        <div id="contact" className="h-full my-10 bg-[url('./assets/back4.png')] bg-blend-luminosity bg-no-repeat bg-left bg-cover">
            <div className="pb-10 bg-gradient-to-b from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] flex flex-col">
                <div className="flex flex-col gap-3 items-center justify-center text-4xl lg:text-5xl py-10 font-semibold">
                <div className='flex flex-col justify-center items-center py-[3rem]'>
                <div className='w-[300px] h-[0.1rem] bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]'></div>
                <div className='text-6xl text-center text-[#FF2D34] font-bold py-1'>CONNECT WITH US</div>
                <div className='w-[300px] h-[0.1rem] bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]'></div>
                    <svg width="450" height="1" viewBox="0 0 580 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="580" y2="0.5" stroke="url(#paint0_linear_11_3)" />
                        <defs>
                            <linearGradient id="paint0_linear_11_3" x1="622.006" y1="1" x2="-40.7939" y2="0.999999" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0" />
                                <stop offset="0.501042" stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-7 pt-10">
                    <div className="flex flex-col items-center lg:items-end justify-start gap-7">
                        <div className="bg-gradient-to-b from-[#FF2B34] to-[#D5242A] p-[1px] w-1/2">
                            <input className="bg-black text-white w-full py-6 px-5" placeholder="Name" name="name" value={name} onChange={handleChange} />
                        </div>
                        <div className="bg-gradient-to-b from-[#FF2B34] to-[#D5242A] p-[1px] w-1/2">
                            <input className=" bg-black text-white w-full py-6 px-5" placeholder="Email" name="email" value={email} onChange={handleChange} />
                        </div>
                        <div className="bg-gradient-to-b from-[#FF2B34] to-[#D5242A] p-[1px] w-1/2">
                            <input className="bg-black text-white w-full py-6 px-5" placeholder="Phone" name="phone" value={phone} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="mt-0 h-full flex flex-col items-center lg:items-start">
                        <div className="bg-gradient-to-b from-[#FF2B34] to-[#D5242A] p-[1px] w-3/4 h-full">
                            <textarea rows={10} className="bg-black h-full text-white pt-2 px-5 resize-none w-full" value={message} placeholder="Message" name="message" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <button onClick={handleSubmit} className="bg-gradient-to-b from-[#FF2B34] to-[#D5242A] uppercase w-1/4 self-center py-3 mt-10 text-white">Submit</button>
            </div>
        </div>
    )
}

export default Contact;