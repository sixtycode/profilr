import { Metadata } from "next";
import { YouTubeEmbed } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Vehicles Showcase",
};

export default function Gallery() {
const dataEmbed = [
    {
      id: "DNAcIPy4SdY",
      label: "CruiseXCars Audi Then and Now",
    },
    {
      id: "YGzQ7eyMOdI",
      label: "CruiseXCars Mazda Then and Now",
    },
    {
      id: "pjzpx_jUUA0",
      label: "Top Gear Jeremy 70s Car",
    },
    {
      id: "c2QM-pSakwA",
      label: "Ford Unitron futuristic",
    },
    {
      id: "Ek2A5w5eru8",
      label: "Corrola DX",
    },
    {
      id: "ggnAVvz2RTs",
      label: "Kawaii Fitment IDEMITSU EG6",
    },
    {
      id: "EnkKz8eF4w8",
      label: "Kawaii Fitment Yanagi EG6",
    },
    {
      id: "QOPgrINdJFU",
      label: "Kawaii Fitment Naoki WRX STI",
    },
    {
      id: "oGEzgLf61FQ",
      label: "Kawaii Fitment 003 EG6",
    },
  ];
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold">Gallery</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Vehicle For Today
          </h1>
          <p className="mt-6 mb-12 text-base leading-7">
            Explore Latest or even Vintage! because why not?
          </p>
        </div>
        <div className="grid md:flex-1 place-content-center">
          {dataEmbed.map((vid) => (
            <div key={vid.id}>
              <YouTubeEmbed
                videoid={vid.id}
                width={300}
                height={300}
                playlabel={vid.label}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
