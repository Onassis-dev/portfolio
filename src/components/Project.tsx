import { t } from "@/i18n/helper";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "./ui/card";

const Project = ({ title, href, img, value, text, locale, techs }) => {
  return (
    <Card>
      <img
        src={img}
        className="w-full aspect-video rounded-t-xl object-cover"
        alt={"Vista previa de " + title}
      />
      <CardContent className="p-2">
        <h3 className="font-semibold tracking-tight mt-1 text-base">{title}</h3>
        <div className="flex flex-col gap-2">
          <span className="text-xs text-muted-foreground">{text}</span>
          <div className="flex flex-wrap gap-1">
            {techs.map((tech) => (
              <span className="bg-muted px-1.5 py-0.5 rounded-md text-xs font-semibold">
                {tech}
              </span>
            ))}
          </div>
          <div className="col-span-2 mt-auto">
            {href && (
              <a
                href={href}
                className="w-max border rounded-md py-1 px-2 font-semibold relative flex gap-1 items-center text-xs"
                target="_blank"
              >
                {t(locale, "visit")}
                <ChevronRightIcon />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
