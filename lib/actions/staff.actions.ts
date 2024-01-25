"use server"

import { currentUser } from "@clerk/nextjs";
import { connectToDB } from "../mongoose"
import Staff from "../models/staff.models";

interface CreateStaffProps{
    fullName:string;
    staffId:string;
    gender:string;
    rank:string;
    dob:string;
    ward:string;
    firstAppt:string;
    presentAppt:string;
    pin:string;
    phone:string;
    startDate:string;
    expiryDate:string;
}
export async function createStaff(values:CreateStaffProps){
    await connectToDB();
    const user = await currentUser();
    try {
        const {
            fullName,
            staffId,
            gender,
            rank,
            dob,
            ward,
            firstAppt,
            presentAppt,
            pin,
            phone,
            startDate,
            expiryDate
        } = values

        const staff = new Staff({
            fullName,
            staffId,
            gender,
            rank,
            dob,
            ward,
            firstAppt,
            presentAppt,
            pin,
            phone,
            startDate,
            expiryDate,
            clerkId:user?.id,
            email:user?.emailAddresses[0].emailAddress
        })

        await staff.save()
        
    } catch (error:any) {
        console.log("unable to create staff");
        throw error;
    }
}