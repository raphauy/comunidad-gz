"use client";

import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import Image from "next/image";
import Link from "next/link";


export default function Logo() {

  return (
    <Link href="/">
        <div className="flex items-center">
          <Image src="/gz_para_logo.png" width={50} height={50} alt="Gabi Z logo"/>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold tracking-wider text-gz-azul">Gabi Z</p>
            <p className="-mt-2 text-xl font-medium tracking-tighter text-gz-naranja">Comunidad</p>
          </div>
        </div>
    </Link>
  )
}
