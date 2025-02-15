import { Accordion } from "@/components/ui/accordion";
import Website from "./Website";
import { t } from "../i18n/helper";

const Websites = ({ locale }: { locale: string }) => {
  return (
    <Accordion className="gap-3 grid" type="single" collapsible>
      <Website
        title={t(locale, "title_iglesiasBC")}
        href="https://iglesiasbc.com"
        img="/1.png"
        value="11"
        liked={true}
      >
        {t(locale, "description_iglesiasBC")}
      </Website>
      <Website
        title={t(locale, "title_internal_system")}
        href=""
        img="/2.png"
        value="14"
        liked={true}
      >
        {t(locale, "description_internal_system")}
      </Website>
      <Website
        title={t(locale, "title_photo_elegant")}
        href="https://photographer1.onassis.dev/"
        img="/3.png"
        value="3"
        liked={false}
      >
        {t(locale, "description_photo_elegant")}
      </Website>
      <Website
        title={t(locale, "title_photo_striking")}
        href="https://photographer2.onassis.dev/"
        img="/4.png"
        value="4"
        liked={false}
      >
        {t(locale, "description_photo_striking")}
      </Website>
      <Website
        title={t(locale, "title_photo_animated")}
        href="https://photographer3.onassis.dev/"
        img="/5.png"
        value="5"
        liked={false}
      >
        {t(locale, "description_photo_animated")}
      </Website>
      <Website
        title={t(locale, "title_coffee")}
        href="https://coffe2.onassis.dev/"
        img="/6.png"
        value="2"
        liked={false}
      >
        {t(locale, "description_coffee")}
      </Website>
    </Accordion>
  );
};

export default Websites;
