import React, {useState} from 'react'
import Popup from '../../components/Popup';
import { useRouter } from "next/router";
import Link from 'next/link'





function Registrieren() {
  const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailSend, setEmailSend] = useState(false)
    const [userExists, setUserExists] = useState(false)
    const [eingabeNull, setEingabeNull] = useState(false)
    const [notCreatable, setNotCreatable] = useState(false)

    function handleChange ( event ) {
        var eventName = event.target.name

        if( eventName === "email") {
        setEmail(event.target.value)
        } else if ( eventName === "password") {
        setPassword(event.target.value)
        }
    }
    async function handleSubmit(e) {
        e.preventDefault()
    
        if(email.length === 0 | password.length === 0){
          setEingabeNull((prev)=>!prev)
          setEmail("");
          setPassword("");
          return
        }
    
        const res = await fetch(`/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
    
        const data = await res.json()
        console.log(data)
        if(data.status == 200){
          setEmailSend((prev) => !prev)
        } else if(1<0){
          setUserExists((prev) => !prev)
        }else{
          setEmail("");
          setPassword("");
          setNotCreatable((prev) => !prev)
          //alert("Something went wrong")
        }
        setEmail("");
        setPassword("");
      }

  return (
    <div className='flex justify-center h-screen items-center'>
        {emailSend === true ? <Popup setEmailSend={setEmailSend} cbFunction={() => {setEmailSend((prev) => !prev); router.push("/")}} data="Wir haben dir eine Email mit einem Aktivierungslink geschickt." /> : ""}
        {userExists === true ? <Popup setEmailSend={setUserExists} cbFunction={() => {setUserExists((prev) => !prev);}} data="Diese Email ist schon vergeben." /> : ""}
        {eingabeNull === true ? <Popup setEmailSend={setEingabeNull} cbFunction={() => {setEingabeNull((prev) => !prev);}} data="Die Eingabefelder dürfen nicht leer bleiben." /> : ""}
        {notCreatable === true ? <Popup setEmailSend={setNotCreatable} cbFunction={() => {setNotCreatable((prev) => !prev);}} data="Dieser Nutzer lässt sich nicht erstellen." /> : ""}

        
        <div className='bg-white w-[80%] h-[60%] md:w-[60%] rounded-xl shadow-xl flex flex-col justify-around items-center'>
          <h1 className='font-medium text-shadow-xl text-2xl'>Account erstellen</h1> 
          
          <form className="form flex flex-col" action="/register" method="POST">
            <input onChange={handleChange} name="email" placeholder='Deine Email' value={email} className=" rounded w-60 shadow-lg p-2 border-[1px] border-stone-200"></input>
            <input onChange={handleChange} type="password" name="password" placeholder='Dein Password' value={password} className="rounded mt-2 w-60 shadow-xl border-[1px] border-stone-200 p-2"></input>
            <div onClick={handleSubmit} className="bg-slate-800 mt-4 border-[1px] rounded hover:cursor-pointer"><p className='text-white p-2'>Erstellen</p></div>
                    
          </form>

          <div>
          <p className="mt-4">Du hast schon einen Account?</p>
          <Link
            href="/auth/login"
            className="mt-4"
          >
            <p className="p-2">Login</p>
          </Link>
        </div>
        </div>
        
   

    
    </div>
  )
}

export default Registrieren

Registrieren.getLayout = function PageLayout(page) {
  return (
    <>
      <div className="h-16 flex flex-row justify-between md:px-16 px-4 items-center text-black bg-white">
        <div className="">
          <p className="text-black font-bold text-xl">
            <Link href="/">BleibFitKonstant</Link>
          </p>
        </div>

        <nav className="flex space-x-6">
          {/* <ul><Link href="/pricing">Konstenlos testen</Link></ul> */}
          {/* <ul><Link href="/pricing">Preise</Link></ul> */}
          {/* <ul>
            <Link href="/login" className=''>Login</Link>
          </ul> */}
        </nav>
        
      </div>
      {page}
    </>
  );
};