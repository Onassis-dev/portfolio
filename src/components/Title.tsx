import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { t } from "@/i18n/helper";

const Title = ({ locale }) => {
  const [open, setOpen] = useState(false);

  return (
    <h1 className="text-2xl font-semibold group" onClick={() => setOpen(!open)}>
      {t(locale, "title")}{" "}
      <TooltipProvider delayDuration={0}>
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger> Onassis </TooltipTrigger>
          <TooltipContent>
            <p>
              ({t(locale, "titlePopup")})
              <br />({t(locale, "titlePopup2")})
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>{" "}
      <span className="greet">👋</span>
    </h1>
  );
};

export default Title;
