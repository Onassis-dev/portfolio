import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default ({ text, popup, id }) => {
    const [open, setOpen] = useState(false);

    return (
        <div id={id} className="w-full flex justify-center mb-6 relative scroll-m-20">
            <div className="absolute top-1/2 translate-y-1/2 left-0 right-0 border-t -z-10"></div>
            <div className="border-8 border-background">
                <TooltipProvider delayDuration={0}>
                    <Tooltip open={open} onOpenChange={setOpen}>
                        <TooltipTrigger asChild>
                            <h2 className="font-bold border px-3 py-0.5 bg-background rounded-lg cursor-pointer" onClick={() => setOpen(!open)}>
                                <span className="font-semibold">{text}</span>
                            </h2>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{popup}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    );
};
