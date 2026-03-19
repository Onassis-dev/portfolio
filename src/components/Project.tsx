import { t } from "@/i18n/helper";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface Props {
  title: string;
  href?: string;
  img: string;
  text: string;
  locale: string;
  github?: string;
}

const Project = ({ title, href, img, text, locale, github }: Props) => {
  return (
    <div className="grid gap-4 md:grid-cols-[6fr_4fr]">
      <img
        src={img}
        className="w-full aspect-[16/9] rounded-lg object-cover"
        alt={"Vista previa de " + title}
      />
      <div className="flex flex-col h-full">
        <h3 className="font-semibold tracking-tight text-lg text-title">
          {title}
        </h3>
        <div className="flex flex-col gap-2">
          <span className="text-sm">{text}</span>
        </div>
        <div className="flex gap-2 md:mt-auto pt-2">
          {href && (
            <a
              href={href}
              className="w-max border rounded-lg font-semibold h-8 px-2.5 flex gap-1.5 items-center text-sm text-title"
              target="_blank"
            >
              <ExternalLinkIcon className="size-4" />
              {t(locale, "visit")}
            </a>
          )}
          {github && (
            <a
              href={github}
              className="w-max border rounded-lg font-semibold h-8 px-2.5 flex gap-1.5 items-center text-sm text-title"
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
