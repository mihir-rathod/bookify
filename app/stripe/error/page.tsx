import { Button } from "@/components/ui/button";
import Error from "next/error";
import Link from "next/link";

export default function ErrorStripe(){
    return(
        <div className="h-screen">
            <div className="mt-32 mb-32 md:max-w-[50vw] mx-auto">
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Uh uh... Something went Wrong</h3>
                    <p className="text-gray-600 my-2">Please try again</p>
                    <Button asChild className="mt-5">
                        <Link href="/">
                            Go Back
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}