import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className="flex gap-3 ">
            <a href="https://www.facebook.com/iotinnovatorscommunity" target="_blank">
                <BsFacebook className="text-sr hover:text-[#0866FF] size-6" />
            </a>
            <a href="https://www.instagram.com/devcorps.iotinnovators" target="_blank">
                <BsInstagram className="text-sr hover:text-[#F503AA] size-6" />
            </a>
            <a href="https://www.linkedin.com/company/iotinnovators/" target="_blank">
                <BsLinkedin className=" text-sr  hover:bg-gray-500 hover:text-[#42b8f8] size-6" />
            </a>
        </div>
    )
}

export default SocialMedia