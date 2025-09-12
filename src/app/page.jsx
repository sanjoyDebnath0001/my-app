import Brands from "@/home_component/brands";
import Feature from "@/home_component/feature";
import Hotels from "@/home_component/hotels";
import Destinations from "@/home_component/PopularDestinations";
import DealSection from "@/home_component/deal";
import Testimonials from "@/home_component/testimonials";
import Image from "next/image";
import AboutUs from "@/home_component/about_us";
import Frist from "@/home_component/frist";
import Download from "@/home_component/download";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="">
        <Frist />
        <Hotels />
        <Feature />
        <Destinations /><AboutUs/>
        <DealSection/>
        <Brands /><Download/>
        <Testimonials />
        </div>
      </main>
    </div>
  );
}
