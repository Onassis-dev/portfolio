import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";

const Title = () => {
    const [open, setOpen] = useState(false);

    return (
        <h1 className="text-2xl font-semibold group" onClick={() => setOpen(!open)}>
            Hola, Soy{" "}
            <TooltipProvider delayDuration={0}>
                <Tooltip open={open} onOpenChange={setOpen}>
                    <TooltipTrigger> Onassis </TooltipTrigger>
                    <TooltipContent>
                        <p>(es un nombre griego)
                            <br />
                            (me gustan las bicis 🚴‍♂️)
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>{" "}
            <span className="greet">👋</span>
        </h1>
    );
};

export default Title;
