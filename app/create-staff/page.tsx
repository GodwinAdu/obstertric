import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Heading from '@/components/heading'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { ArrowLeftCircle, PlusCircle } from 'lucide-react'
import Link from 'next/link'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CreateStaffForm } from './_components/CreateStaffForm'


const page = () => {
    return (
        <MaxWidthWrapper>
            <div className="flex justify-between items-center">
                <Heading title="Particulars" description="Please complete this form asap.." />
                <Link href={`/`} className={cn(buttonVariants())} >
                    <ArrowLeftCircle className="w-4 h-4 mr-2" />
                    Home
                </Link>
            </div>
            <Separator />
            <Card className="sm:w-[96%] w-full my-4">
                <CardHeader>
                    <CardTitle>Very Urgent</CardTitle>
                    <CardDescription>Contact your Incharges for help.!!!</CardDescription>
                </CardHeader>
                <CardContent>
                    <CreateStaffForm />
                </CardContent>
            </Card>
        </MaxWidthWrapper>
    )
}

export default page
