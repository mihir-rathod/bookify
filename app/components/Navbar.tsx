"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
    {name: 'Home', href: '/'},
    {name: 'New Arrivals', href: '/Newest'},
    {name: 'Best Seller', href: '/Best'},
    {name: 'Featured', href: '/Featured'}
];

export default function Navbar(){
    const pathname = usePathname();
    const {handleCartClick} = useShoppingCart();
    return(
        <header className="mb-8 border-b bg-violet-100">
            <div className="flex items-center justify-between mx-auto max-w-2xl px3 sm:px-6 lg:max-w-7xl">
            <Link href="/">
                <h1 className="md: text-4xl text-6xl font-bold font-mono tracking-tight"><span className="text-primary">BOOK</span><span className="text-gray-800">IFY</span></h1>
            </Link>

            <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                {links.map((link, idx)=>(
                    <div key={idx}>
                        {pathname === link.href ?(
                            <Link className="text-lg font-semibold text-primary" href={link.href}>
                                {link.name}
                            </Link>
                        ):(
                            <Link className="text-lg font-semibold text-gray-700 transition duration-100 hover:text-primary" href={link.href}>
                                {link.name}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
            <div className="flex divide-x border-r sm:border-l font-bold">
                <Button 
                    variant={"outline"}
                    onClick={handleCartClick}
                    className="bg-violet-100 flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none transition duration-100 hover:text-primary"
                >
                    <ShoppingBag />
                    <span className="hidden text-s font-bold text-grey-500 sm:block ">
                        Cart
                    </span>
                </Button>
            </div>
            </div>
        </header>
    );
}