//@ts-nocheck

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import GoogleButton from "../../assets/GoogleButton.png";
import Popup from "../../components/Popup";
import Button from "../../components/Button";

function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailConfirmed, setEmailConfirmed] = useState(true);
  const [credentialsIncorrect, setCredentialsIncorrect] = useState(false);

  function handleChange(event) {
    var eventName = event.target.name;

    if (eventName === "email") {
      setEmail(event.target.value);
    } else if (eventName === "password") {
      setPassword(event.target.value);
    }
  }

  async function handleSubmit(e, standardEmail, standardPW) {
    e.preventDefault();
   
    await fetch("/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: standardEmail ? standardEmail : email,
        password: standardEmail ? standardPW : password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status == 401) {
          setEmailConfirmed((prev) => !prev);
        }
        if (res.status == 200) {
          router.push("/weights");
        }
        if (res.status == 400) {
          setCredentialsIncorrect((prev) => !prev);
          setEmail("");
          setPassword("");
        }
        console.log(res.status)
      });
  }
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
    <div className="flex justify-center h-screen items-center">
      <Head>
        <title>Home</title>
      </Head>
      {emailConfirmed === false ? (
        <Popup
          cbFunction={() => {
            setEmailConfirmed((prev) => !prev);
          }}
          data="Die Email ist noch nicht aktiviert."
        />
      ) : (
        ""
      )}
      {credentialsIncorrect === true ? (
        <Popup
          cbFunction={() => {
            setCredentialsIncorrect((prev) => !prev);
          }}
          data="Die Daten stimmen leider nicht."
        />
      ) : (
        ""
      )}

      {/* <Image className="cursor-pointer w-[240px]"src={GoogleButton} onClick={() => router.push("/auth/google")}></Image> */}

      {/* <div className='flex w-60 md:w-80 items-center'>
            <hr className='h-[2px] basis-0 grow'/>
            <p className='p-2'>or</p>
            <hr className='h-[2px] basis-0 grow'/>
    </div> */}

      <div className="bg-white w-[80%] h-[60%] md:w-[60%] rounded-xl shadow-xl flex flex-col justify-around items-center">
        <h1 className="font-medium text-shadow-xl text-2xl">Login</h1>

        <form
          onSubmit={handleSubmit}
          className="form flex flex-col"
          action="/register"
          method="POST"
        >
          <input
            onChange={handleChange}
            placeholder="Deine Email"
            name="email"
            value={email}
            className=" rounded w-60 shadow-lg p-2 border-[1px] border-stone-200"
          ></input>
          <input
            type="password"
            onChange={handleChange}
            placeholder="Dein Passwort"
            name="password"
            value={password}
            className=" rounded w-60 shadow-lg p-2 mb-4 border-[1px] border-stone-200 mt-2"
          ></input>
          <Button text={"Login"} buttonAction={handleSubmit}/>
          <div className="mt-8"/>
          <Button 
            text={"Skip Login"} 
            buttonAction={(e) => {
              handleSubmit(e, "test@test.com", "123456");
            }}
          />
          {/* <div onClick={handleSubmit} className="bg-slate-800 mt-4 border-[1px] rounded hover:cursor-pointer"><p className='text-white p-2'>Login</p></div> */}
        </form>
        <div>
          <p className="mt-4">Du hast noch keinen Account?</p>
          <Link
            href="/auth/register"
            className="mt-4"
          >
            <p className="p-2">Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;

Index.getLayout = function PageLayout(page) {
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
            <Link href="/login">Login</Link>
          </ul> */}
        </nav>
      </div>
      {page}
    </>
  );
};
