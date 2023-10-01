import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type DefaultAlertDialogProps = {
    children: React.ReactNode;
    title: string;
    description: string;
    cancelButtonName: string;
    continueButtonName: string;
    onContinue: () => void;
};

function DefaultAlertDialog(props: DefaultAlertDialogProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{props.children}</AlertDialogTrigger>
            <AlertDialogContent className="dark:bg-black">
                <AlertDialogHeader>
                    <AlertDialogTitle>{props.title}</AlertDialogTitle>
                    <AlertDialogDescription>{props.description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-violet-500 text-neutral-100">
                        {props.cancelButtonName}
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-slate-50 text-black dark:bg-slate-950 dark:text-neutral-100 border-2"
                        onClick={props.onContinue}
                    >
                        {props.continueButtonName}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default DefaultAlertDialog;
