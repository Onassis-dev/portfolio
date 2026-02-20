import { t } from "@/i18n/helper";
import { ChevronRightIcon } from "@radix-ui/react-icons";

interface Props {
  title: string;
  href?: string;
  img: string;
  text: string;
  locale: string;
  techs: string[];
}

const Project = ({ title, href, img, text, locale, techs }: Props) => {
  return (
    <div className="grid gap-4 md:grid-cols-[3fr_2fr]">
      <img
        src={img}
        className="w-full aspect-video rounded-xl object-cover "
        alt={"Vista previa de " + title}
      />
      <div className="flex flex-col h-full">
        <h3 className="font-semibold tracking-tight text-xl sm:text-2xl">
          {title}
        </h3>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">{text}</span>
          <div className="flex flex-wrap gap-1">
            {techs.map((tech) => (
              <span
                className="bg-muted px-1.5 py-0.5 rounded-md text-xs font-semibold"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {href && (
          <a
            href={href}
            className="w-max md:mt-auto mt-4 border bg-background rounded-lg font-semibold py-1 px-2 flex gap-1 items-center text-sm"
            target="_blank"
          >
            {t(locale, "visit")}
            <ChevronRightIcon className="size-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
