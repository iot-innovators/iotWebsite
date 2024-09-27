import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className="flex gap-3 ">
            <a href="https://www.facebook.com/iotinnovatorscommunity" target="_blank">
                <BsFacebook className="text-white hover:text-[#0866FF] size-9 border p-1.5 hover:bg-pr rounded-3xl" />
            </a>
            <a href="https://www.instagram.com/devcorps.iotinnovators" target="_blank" className='border  hover:bg-pr rounded-3xl '>
                <BsInstagram className="text-white size-9 p-2 hover:text-[#F503AA]  " />
            </a>
            <a href="https://www.linkedin.com/company/iotinnovators/" target="_blank" className=' '>
                <BsLinkedin className="text-white size-9 border p-1.5 hover:bg-pr hover:text-[#42b8f8] rounded-3xl" />
            </a>
        </div>
    )
}

export default SocialMedia