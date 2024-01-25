import mongoose,{ Document } from "mongoose";

export interface IStaff extends Document{
    _id:string;
    clerkId:string;
    fullName:string;
    email:string;
    gender:string;
    rank:string;
    staffId:string;
    ward:string;
    dob:string;
    firstAppt:string;
    presentAppt:string;
    pin:string;
    startDate:string;
    expiryDate:string;
    phone:string;
    role:string;
    createAt:string;
    updatedAt:string;
}
const StaffSchema = new mongoose.Schema({
    clerkId: {
        type: String
    },
   fullName: {
        type: String
    },
    rank: {
        type: String
    },
    staffId: {
        type: String
    },
    dob: {
        type:String
    },
    gender: {
        type:String
    },
    email: {
        type:String
    },
    ward: {
        type:String
    },
    firstAppt: {
        type: String
    },
    presentAppt: {
        type: String
    },
    pin: {
        type: String
    },
    startDate: {
        type: String
    },
    expiryDate: {
        type: String
    },
    phone: {
        type: String
    },
    role: {
        type: String,
        default:"user"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
});

const Staff = mongoose.models.Staff || mongoose.model("Staff", StaffSchema);

export default Staff;
