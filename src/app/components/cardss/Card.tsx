
'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

export default function Card(Props: { image: string | StaticImport; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) {
  return (
    <div className="overflow-x-hidden flex flex-col w-[300px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <Image
        src={Props.image}
        alt="hii"
        width={300}
        height={200}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h1 className="font-bold text-lg mb-2">{Props.description}</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio reiciendis earum rerum quidem
          exercitationem enim dolor et tenetur totam expedita error voluptatem veniam fugiat sed assumenda,
          reprehenderit voluptatibus nisi.
        </p>
      </div>
    </div>
  );
}
