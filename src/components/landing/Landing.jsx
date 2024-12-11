import "./Landing.css"
import Bg from "../../assets/iot.png"
export function Landing() {
    return (
        <>
            <div className="text-white h-[100vh] px-10 md:px-24">
                <div className="flex justify-center mt-16 ">
                    <div className="border w-max rounded-3xl flex gap-3 px-3 py-2 justify-center">
                        <img src={Bg} width={20} height={1} alt="iot" />
                        <h3 className="text-lg font-medium" >New: Our IoT  Just landed</h3>
                    </div>
                </div>
                <div className="md:px-20  md:justify-center  ">
                    <h1 className="text-[70px] text-center font-semibold leading-[90px]">Ignite IoT innovation together with Innovators !</h1>
                </div>
            </div>
        </>


    )
}