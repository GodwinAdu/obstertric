import Image from "next/image";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { SignOutButton, SignedIn, UserButton, currentUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const randomImage = "https://source.unsplash.com/1600x900/?nature,photography,technology";

const page = async () => {
  const profile = await currentUser();
  return (
    <>
      <MaxWidthWrapper>
        <Breadcrumb pageName="Profile" />


        <div
          className="h-full flex flex-col bg-gray-100 dark:bg-gray-700 shadow-xl overflow-y-scroll">
          <div className=" p-4">
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="bg-green-300 shadow-lg pb-3 rounded-b-3xl">
            <div
              className="flex  rounded-b-3xl bg-gray-100 dark:bg-gray-700 space-y-5 flex-col items-center py-7">
              <Image className="h-28 w-28 rounded-full"
                src={profile?.imageUrl}
                width={100}
                height={100}
                alt="User" />
              <a href="#"> <span
                className="text-h1">{profile?.firstName}</span></a>
            </div>
            <div
              className="grid px-7 py-2  items-center justify-around grid-cols-1 md:grid-cols-3 gap-4 divide-x divide-solid ">
              <div className="col-span-1 flex flex-col items-center ">
                <span className="text-xl font-bold dark:text-gray-500">{profile?.emailAddresses[0].emailAddress}</span>
                <span className="text-lg font-medium 0">Email</span>
              </div>
              <div className="col-span-1 px-3 flex flex-col items-center ">
                <span className="text-2xl font-bold dark:text-gray-500">
                  Free</span>
                <span className="text-lg font-medium">Plan</span>
              </div>
              <div className="col-span-1 px-3 flex flex-col items-center ">
                <span className="text-2xl font-bold dark:text-gray-500">
                  546</span>
                <span className="text-lg font-medium">Puntos</span>
              </div>
            </div>

          </div>
        </div>


      </MaxWidthWrapper>
    </>
  );
};

export default page;
