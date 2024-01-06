import React,{useState} from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import { MdMonitorWeight, MdRestaurant, MdFitnessCenter } from "react-icons/md";
  
const Layout = ({ children }) => {
  return (
    <>
      <Footer />
      {children}
    </>
  );
};
  
export default Layout;



function Footer() {
  const router = useRouter()
  const [toggle, setToggle] = useState(false)

    const handleLogout = () => {
        router.push("/auth/logout")
    }
  return (
    <>
    <div className='absolute bottom-0 w-[100%]'>
      <div className='absolute bottom-0 flex justify-around items-center w-full bg-white h-16'>
        <div onClick={() => {router.push("/weights")}} className="basis-0 grow flex flex-col  items-center justify-center hover:cursor-pointer">
          <MdMonitorWeight />
          <p className='font-bold'>Weights</p>
        </div>
        <div onClick={() => {router.push("/kalorien")}} className="basis-0 grow flex flex-col  items-center justify-center hover:cursor-pointer">
          <MdRestaurant />
          <p className='font-bold'>Meals</p>
        </div>
        <div onClick={() => {router.push("/exercises")}} className="basis-0 grow flex flex-col  items-center justify-center hover:cursor-pointer">
          <MdFitnessCenter />
          <p className='font-bold'>Exercises</p>
        </div>
        
        <div className="basis-0 grow flex justify-center z-50" onClick={() => setToggle((prev) => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
    </div>
    </div>

    { toggle ? <>
      <div className={toggle ? ` absolute bottom-0 h-screen w-[100%] transition-all` : `absolute translate-x-[100%] h-screen w-[100%] transition-all`}>
        <div className="absolute w-[100%] h-screen bg-white">
            <ul className='flex flex-col items-center justify-around h-[25%]'>
              <li><Link href="/settings" onClick={() => setToggle((prev) => !prev)}>Einstellungen</Link></li>
              <li className="hover:cursor-pointer">
                <div onClick={handleLogout}>
                  <p>Logout</p>
                </div>
              </li>
            </ul>
        </div>
        </div>
        </> : <></>}
    </>    
  )
}