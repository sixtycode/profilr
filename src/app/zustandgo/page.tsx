"use client";

import useStore from "@/stores/counter-store";

export default function ZustandGo() {
  const { count, increment, decrement } = useStore();

  return (
    <>
      <div className="grid place-items-center px-6 py-6 md:px-20">
        Hello Zustand
        <button
          onClick={decrement}
          className="font-extrabold text-5xl mt-8 mb-8 border w-full py-4"
        >
          -
        </button>
        <span className="text-center font-extrabold text-5xl mt-8 mb-8 border w-full py-4">
          {count}
        </span>
        <button
          onClick={increment}
          className="font-extrabold text-5xl mt-8 mb-8 border w-full py-4"
        >
          +
        </button>
      </div>
    </>
  );
}
