import React from "react";
import Link from "next/link";
import Check from "../components/pricing/Check";
import ListItem from "../components/pricing/ListItem";

function Pricing() {
  return (
    <div className="bg-[#ECFEFF] min-h-screen text-black text-left">
      <div className="flex flex-col md:flex-row px-8 md:px-36 justify-between md:space-x-24 pt-16">
        <div className="border-2 border-black grow rounded bg-white p-4">
          <h1 className="text-left bold text-4xl">Basic (kostenlos)</h1>

          <ul>
            <ListItem Wert="Wert 10€" Text="Workout tracker"/>
            <ListItem Wert="Wert 10€" Text="Gewicht tracker"/>
            
          </ul>


          <div className="flex flex-col items-center justify-center">
            {/* <p>Wert 20€</p> */}
            <span className="flex items-end my-4">
              <p className="text-4xl">0€</p><p>im Monat</p>
            </span>
            
            <hr />
            <div className="rounded p-2 bg-slate-800 text-white w-[240px] flex justify-center hover:cursor-pointer">
              <p>Jetzt starten</p>
            </div>

          </div>
          
        </div>




        <div className="grow border-black border-2 rounded text-left p-4 mt-8 md:mt-0 bg-white">
          <h1 className="text-left bold text-4xl">Komplettes Paket</h1>

          <ul>
            <ListItem Wert="Wert 10 €" Text="Workout tracker"/>
            <ListItem Wert="Wert 10 €" Text="Gewicht tracker"/>
            <ListItem Wert="Wert 19 €" Text="Tägliche Updates"/>
            <ListItem Wert="Wert 29 €" Text="Individuelle Essenspläne"/>
            <ListItem Wert="Wert 29 €" Text="Dashboard"/>
            <ListItem Wert="" Text="4 kg in den ersten 4 Wochen oder Geld zurück"/>
          </ul>

          

          <div className="flex flex-col items-center justify-center">

            <span className="flex items-end my-4">
              <p>14 Tage testen danach</p><p className="text-4xl">10€</p><p>im Monat</p>
            </span>
            <hr />

            <div className="rounded p-2 bg-slate-800 text-white w-[240px] hover:cursor-pointer flex justify-center">
              <p>Jetzt starten</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

Pricing.getLayout = function PageLayout(page) {
  return (
    <>
      <div className="h-16 flex flex-row justify-between md:px-16 px-4 items-center text-black ">
        <div className="">
          <p className="text-black font-bold text-xl">
            <Link href="/">BleibFitKonstant</Link>
          </p>
        </div>

        <nav className="flex space-x-6">
          {/* <ul><Link href="/pricing">Konstenlos testen</Link></ul> */}
          {/* <ul><Link href="/pricing">Preise</Link></ul> */}
          <ul>
            <Link href="/login">Login</Link>
          </ul>
        </nav>
      </div>
      {page}
    </>
  );
};

