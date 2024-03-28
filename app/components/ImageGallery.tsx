"use client"; 

import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface iAppProps{
    images: any
}

export default function ImageGallery({images}: iAppProps) {
    const [bigImage, setImage] = useState(images[0]);
    return(
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image 
                    src={urlFor(bigImage).url()} 
                    alt="photo" 
                    width={500} 
                    height={500} 
                    className="h-full w-full object-cover object-center"
                />
                <span className="absolute left-0 top-0 rounded-br-md bg-red-500 px-5 py-2 text-md uppercase tracking-wider text-white">SALE</span>
            </div>
        </div>
    )
}