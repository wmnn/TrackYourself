import React, { useEffect } from "react";
import Link from "next/link";
import Check from "../components/pricing/Check";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Button from "../components/Button";

function Index() {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("x-auth-cookie");

    if (token) {
      fetch("/auth/access", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.status == 200) {
            router.push("/weights");
            console.log("200");
          } else {
            console.log(res);
          }
        });
    }
  }, []);
  return (
    <>
    <div className="h-screen" >
      {/*BG IMAGE*/}
      <div className="absolute inset-0 bg-[url('/images/KeyVisual.jpg')] bg-cover bg-center object-cover opacity-80" />
      {/*BG IMAGE CONTENT*/}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white backdrop-brightness-50 backdrop-blur-2xl z-10">
        <div className="min-h-full w-full flex flex-col">
          {/*HEADER*/}
          <div className="h-16 z-50 flex flex-row justify-between md:px-16 px-4 items-center text-black bg-white">
            <div className="">
              <p className="text-black font-bold text-xl">
                <Link href="/">BleibFitKonstant</Link>
              </p>
            </div>

            <nav className="flex space-x-6">
              <ul>
                <Link href="/auth/login">Login</Link>
              </ul>
            </nav>
          </div>
          {/* BG IMAGE CONTENT */}
          <div className="flex flex-col items-center justify-around grow">
          <h1 className="text-4xl">Verliere 2kg in 14Tagen ohne Jojo Effekt</h1>

          <ul className="flex flex-col justify-center items-center mt-4 space-y-2">
            <li className="flex justify-between">
              <div className="flex">
                <Check />
                <p>Du brauchst nicht zu trainieren</p>
              </div>
            </li>
            <li className="flex justify-between">
              <div className="flex">
                <Check />
                <p>Ohne Hunger</p>
              </div>
            </li>
          </ul>
        <div className="flex justify-center mt-8">
          <Button text={"Jetzt starten - Kostenlos"} buttonAction={() => router.push("/auth/register")}/>
        </div>
        </div>{/*CLOSE BG IMAGE CONTENT*/}
        
        </div> 

        </div>
    
    </div>{/*CLOSE KEYVISUAL CONTAINER*/}
  

    <div className="text-white mt-8">
      <h1 className="text-4xl">Hundred of brands love BleibFitKonstant:</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 my-16">
        {/* FIRST TESTIMONIAL */}
        <div className="flex justify-center items-center">
          <img className="p-8 shadow object-contain h-48" src={"/icons/Rolex_logo.svg"}/>
         </div>
        {/* SECOND TESTIMONIAL */}
        <div className="flex justify-center items-center">
          <img className="object-contain h-48 p-8" src={"/icons/mysql.png"} />
        </div>
        {/* THIRD TESTIMONIAL */}
        <div className="flex justify-center items-center">
          <img className="object-contain h-36 p-8" src={"/icons/Supreme_Logo.svg"} />
        </div>
        {/* FORTH TESTIMONIAL */}
        <div className="flex justify-center items-center">
          <img className="object-contain h-48 p-8" src={"/icons/Javascript.png"} />
        </div>
        

      </div>
      <h1 className="text-4xl">Here is how BleibFitKonstant works:</h1>
      <h2 className="text-2xl text-stone-400">(Hint: it’s unbelievably easy)</h2>
      {/* FIRST PICTURE */}
      <div className="flex justify-around flex-col md:flex-row my-16">
        <div className="flex justify-center items-center basis-0 grow">
          <img src={"weights.png"} className="max-h-[640px] object-contain shadow-white shadow-[0_0px_40px_-5px_rgba(0,0,0,0.1)] rounded-2xl" />
        </div>
        
        <div className="basis-0 grow px-16 flex flex-col justify-around md:pb-48 mt-8 ">
          <h1 className="text-4xl">1. Track yourself</h1>
          <span>
          Fitness tracking is easier than ever. You can now track your calories, weights and exercises.

          </span>

        </div>
      </div>
      {/* SECOND PICTURE */}
      <div className="flex justify-around flex-col md:flex-row my-16">
        <div className="flex justify-center items-center basis-0 grow">
          <img src={"settings.png"} className="max-h-[640px] object-contain shadow-white shadow-[0_0px_40px_-5px_rgba(0,0,0,0.1)] rounded-2xl" />
        </div>
        
        <div className="basis-0 grow px-16 flex flex-col justify-around md:pb-48 mt-8 ">
          <h1 className="text-4xl">2. Stay forever in the app</h1>
          <span>
          Stay forever in the app. We don't want you to leave us. If you have any complaints feel free to contact us: example@example.example.

          </span>

        </div>
      </div>
      {/* CLOSED */}


      <h1 className="text-4xl">Why GymLover love BleibFitKonstant:</h1>

      <div className="flex md:flex-row flex-col justify-around px-16 md:space-x-8 my-8 text-black">
        {/* FIRST TESTIMONIAL */}
        <div className="basis-0 grow rounded bg-stone-200 shadow-xl">
          <div className="pl-8 pt-8 flex items-center">
            <img className="rounded-full w-12 h-12 shadow border-[1px] border-stone-400 object-contain" src={"/icons/Rolex_logo.svg"}/>
            <p className="pl-8">Adam Schäfer</p>
          </div>
          <div className="p-8">
            <span>I stumbled upon this fitness website a few months ago and I have been blown away by the resources and tools available to help me achieve my fitness goals. The workouts are challenging, yet manageable, and the meal plans are easy to follow and delicious. The community support is also fantastic - I love the accountability and encouragement I receive from fellow members. Thanks to this website, I have never felt better about myself and my fitness journey!</span>
          </div>
        </div>
        {/* SECOND TESTIMONIAL */}
        <div className="basis-0 grow rounded bg-stone-200 shadow-xl my-8 md:my-0">
          <div className="pl-8 pt-8 flex items-center">
            <img className="rounded-full w-12 h-12 shadow border-[1px] border-stone-400 object-contain" src={"/icons/mysql.png"}/>
            <p className="pl-8">Nougat McDonald</p>
          </div>
          <div className="p-8">
            <span>I have tried so many fitness programs and diets over the years, but nothing has worked as well as this website. This website has truly transformed my life and I couldn't be happier with my progress!</span>
          </div>
        </div>
        {/* THIRD TESTIMONIAL */}
        <div className="basis-0 grow rounded bg-stone-200 shadow-xl">
          <div className="pl-8 pt-8 flex items-center">
            <img className="rounded-full w-12 h-12 shadow border-[1px] border-stone-400 object-contain" src={"/icons/Supreme_Logo.svg"}/>
            <p className="pl-8">Alfred Marinade</p>
          </div>
          <div className="p-8">
            <span>I highly recommend this fitness website to anyone looking to improve their health and fitness. The coaches are knowledgeable and supportive, and the resources provided are top-notch. I have seen incredible results since joining and I am so grateful to have found this community. If you're serious about your fitness goals, this website is a must-try!</span>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

Index.getLayout = function PageLayout(page) {
  return (
    <>
      <div className="h-16 z-50 flex flex-row justify-between md:px-16 px-4 items-center text-black bg-white">
        <div className="">
          <p className="text-black font-bold text-xl">
            <Link href="/">BleibFitKonstant</Link>
          </p>
        </div>

        <nav className="flex space-x-6">
          <ul>
            <Link href="/auth/login">Login</Link>
          </ul>
        </nav>
      </div>
      {page}
    </>
  );
};

export default Index;
