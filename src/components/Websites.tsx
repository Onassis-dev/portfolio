import { t } from "../i18n/helper";
import Project from "./Project";

const Websites = ({ locale }: { locale: string }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-2">
        <Project
          title={t(locale, "title_iglesiasBC")}
          href="https://iglesiasbc.com"
          img="/1.jpeg"
          value="11"
          locale={locale}
          text={t(locale, "description_iglesiasBC")}
          techs={["React", "Tailwind", "Nestjs", "Postgres", "Astro"]}
        />
        <Project
          title={t(locale, "title_internal_system")}
          href=""
          img="/2.jpeg"
          value="14"
          locale={locale}
          text={t(locale, "description_internal_system")}
          techs={["Svelte", "Tailwind", "Nestjs", "Postgres"]}
        />
      </div>
      {/* 
      <Accordion className="gap-3 grid" type="single" collapsible>
        <Website
          title={t(locale, "title_photo_elegant")}
          href="https://photographer1.onassis.dev/"
          img="/3.png"
          value="3"
          liked={false}
          locale={locale}
        >
          {t(locale, "description_photo_elegant")}
        </Website>
        <Website
          title={t(locale, "title_photo_striking")}
          href="https://photographer2.onassis.dev/"
          img="/4.png"
          value="4"
          liked={false}
          locale={locale}
        >
          {t(locale, "description_photo_striking")}
        </Website>
        <Website
          title={t(locale, "title_photo_animated")}
          href="https://photographer3.onassis.dev/"
          img="/5.png"
          value="5"
          liked={false}
          locale={locale}
        >
          {t(locale, "description_photo_animated")}
        </Website>
        <Website
          title={t(locale, "title_coffee")}
          href="https://coffe2.onassis.dev/"
          img="/6.png"
          value="2"
          liked={false}
          locale={locale}
        >
          {t(locale, "description_coffee")}
        </Website>
      </Accordion> */}
    </>
  );
};

export default Websites;
