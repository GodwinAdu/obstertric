"use client";



import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast";
import { createStaff } from "@/lib/actions/staff.actions";

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "please name is required"
    }),
    staffId: z.string().min(2, {
        message: "please name is required"
    }),
    dob: z.string().min(2, {
        message: "please name is required"
    }),
    gender: z.string().min(2, {
        message: "please name is required"
    }),
    ward: z.string().min(2, {
        message: "please name is required"
    }),
    rank: z.string().min(2, {
        message: "please name is required"
    }),
    firstAppt: z.string().min(2, {
        message: "please name is required"
    }),
    presentAppt: z.string().min(2, {
        message: "please name is required"
    }),
    pin: z.string().min(2, {
        message: "please name is required"
    }),
    phone: z.string().min(2, {
        message: "please name is required"
    }),
    startDate: z.string().min(2, {
        message: "please name is required"
    }),
    expiryDate: z.string().min(2, {
        message: "please name is required"
    }),
})

export const CreateStaffForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            gender: "",
            rank: "",
            staffId: "",
            dob: "",
            ward: "",
            firstAppt: "",
            presentAppt: "",
            pin: "",
            phone: "",
            startDate: "",
            expiryDate: ""
        },
    })

    const { isSubmitting } = form.formState

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await createStaff(values)
            toast({
                title: "Submitted Successfully",
                description: "Thank you for your effort",
            })
        } catch (error: any) {
            toast({
                title: "Something went wrong",
                description: "Please try again later",
                variant: "destructive"
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Eg. John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="staffId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Staff ID</FormLabel>
                                <FormControl>
                                    <Input placeholder="Eg. 0967543" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date of Birth</FormLabel>
                                <FormControl>
                                    <Input placeholder="Eg. 04-05-1996" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select Gender</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your gender" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="not preffered">Not Preffered</SelectItem>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ward"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select Ward</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your ward" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="A1 HDU">A1 HDU</SelectItem>
                                        <SelectItem value="A2">A2 </SelectItem>
                                        <SelectItem value="A3">A3 </SelectItem>
                                        <SelectItem value="A4">A4 </SelectItem>
                                        <SelectItem value="A5">A5 </SelectItem>
                                        <SelectItem value="CTO">CTO </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="rank"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select Rank</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your Rank" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="CNO">CNO</SelectItem>
                                        <SelectItem value="PMO">PMO</SelectItem>
                                        <SelectItem value="PNO">PNO</SelectItem>
                                        <SelectItem value="SMO">SMO</SelectItem>
                                        <SelectItem value="MO">MO</SelectItem>
                                        <SelectItem value="SSM">SSM</SelectItem>
                                        <SelectItem value="SM">SM</SelectItem>
                                        <SelectItem value="HCA">HCA</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="firstAppt"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Appt</FormLabel>
                                <FormControl>
                                    <Input placeholder="Eg. 03-05-2005" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="presentAppt"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Present Appt</FormLabel>
                                <FormControl>
                                    <Input placeholder="Eg. 03-05-2005" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Eg. 0554*****" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="pin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pin</FormLabel>
                                <FormControl>
                                    <Input placeholder="Eg. 098GH*************" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pin Start Date</FormLabel>
                                <FormControl>
                                    <Input placeholder="Eg. 03-05-2005" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="expiryDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pin Expiry Date</FormLabel>
                                <FormControl>
                                    <Input placeholder="Eg. 03-05-2005" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
            </form>
        </Form>
    )
}

