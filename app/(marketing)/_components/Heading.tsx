"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {

    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Your Ideas, Documents & Plans. Unified. Welcome to &nbsp;
                <span className="underline">NoteCraft</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                NoteCraft is the connected workplace where <br />
                better, faster work happens.
            </h3>

            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}

            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents">
                        Enter NoteCraft
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
            )}

            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get Notecraft Free
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    );
};

export default Heading;