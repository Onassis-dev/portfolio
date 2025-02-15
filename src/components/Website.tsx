import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { t } from "@/i18n/helper";
import { ChevronRightIcon, HeartFilledIcon } from "@radix-ui/react-icons";

const Website = ({ title, href, img, value, children, liked, locale }) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-md bg- rounded-md px-3">
        <span className="flex items-center gap-2">
          {title} {liked && <HeartFilledIcon className="size-3 text-red-400" />}
        </span>
      </AccordionTrigger>
      <AccordionContent className="grid sm:grid-cols-2 gap-3 mt-2 px-3">
        <img
          src={img}
          className="w-full aspect-video rounded-sm object-cover"
          alt={"Vista previa de " + title}
        />
        <div className="flex flex-col gap-5">
          {children}

          <div className="w-full flex justify-end col-span-2 mt-auto">
            {href && (
              <a
                href={href}
                className="w-max border rounded-md py-1 px-2 font-semibold relative flex gap-1 items-center"
                target="_blank"
              >
                {t(locale, "visit")}
                <ChevronRightIcon />
              </a>
            )}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Website;
