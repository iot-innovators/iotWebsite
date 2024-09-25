import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className="flex gap-3 ">
            <a href="https://www.facebook.com/iotinnovatorscommunity" target="_blank">
                <BsFacebook className="text-pr size-6" />
            </a>
            <a href="https://www.instagram.com/devcorps.iotinnovators" target="_blank">
                <BsInstagram className="text-pr size-6" />
            </a>
            <a href="https://www.linkedin.com/company/iotinnovators/" target="_blank">
                <BsLinkedin className="text-pr border border-b-gray-400 size-6" />
            </a>
        </div>
    )
}

export default SocialMedia