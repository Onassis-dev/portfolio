import { t } from "@/i18n/helper";
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

interface Props {
  title: string;
  href?: string;
  img: string;
  text: string;
  locale: string;
  techs: string[];
  github?: string;
}

const Project = ({ title, href, img, text, locale, techs, github }: Props) => {
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
        <div className="flex gap-2 md:mt-auto mt-4">
          {href && (
            <a
              href={href}
              className="w-max border bg-background rounded-lg font-semibold py-1 px-2 flex gap-1.5 items-center text-sm"
              target="_blank"
            >
              <ExternalLinkIcon className="size-4" />
              {t(locale, "visit")}
            </a>
          )}
          {github && (
            <a
              href={github}
              className="w-max border bg-background rounded-lg font-semibold py-1 px-2 flex gap-1.5 items-center text-sm"
              target="_blank"
            >
              <img src="/github.svg" alt="GitHub" className="size-5" />
              {t(locale, "code")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
