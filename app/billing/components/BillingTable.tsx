import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CoinSVG } from "@/lib/svg";
import { headers } from "@/lib/utils";
import axios from "axios";
import { useEffect, useState } from "react";

const TESTDATA = [
    {
        status: "PAID",
        planName: "Pixelerate basic",
        creditReceived: 251,
        amount: 7,
        paidAt: "2023-10-01T10:42:53.510Z",
    },
];

type InvoiceProps = {
    status: string;
    planName: string;
    creditReceived: number;
    amount: number;
    paidAt: string;
}[];

function BillingTable() {
    const [invoices, setInvoices] = useState<InvoiceProps | null>(null);

    useEffect(() => {
        axios
            .get("/api/user/billing-history", headers)
            .then(({ data }) => {
                setInvoices(data.invoices);
            })
            .catch((err) => console.log(err));
        //
    }, []);

    return (
        <>
            {invoices === null ? (
                <div className="space-y-1">
                    <Skeleton className="w-full h-[50px]" />
                    <Skeleton className="w-full h-[50px]" />
                    <Skeleton className="w-full h-[50px]" />
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Status</TableHead>
                            <TableHead>Plan name</TableHead>
                            <TableHead className="text-right">Credit received</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-right">Paid at</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                            <TableRow key={index} className="duration-75">
                                <TableCell className="font-medium">{invoice.status}</TableCell>
                                <TableCell>{invoice.planName}</TableCell>
                                <TableCell className="flex items-center justify-end gap-2">
                                    {invoice.creditReceived} <CoinSVG width={17} height={17} />{" "}
                                </TableCell>
                                <TableCell className="text-right">${invoice.amount}.00</TableCell>
                                <TableCell className="text-right">
                                    {new Date(invoice.paidAt).toLocaleString()}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    {invoices.length === 0 ? (
                        <TableCaption>No payments has been made...</TableCaption>
                    ) : (
                        <TableCaption>Recent payments.</TableCaption>
                    )}
                </Table>
            )}
        </>
    );
}

export default BillingTable;
