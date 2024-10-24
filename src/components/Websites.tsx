import { Accordion } from "@/components/ui/accordion";
import Website from "./Website";

const Websites = () => {
    return (
        <Accordion className="gap-3 grid" type="single" collapsible>
            <Website title="IglesiasBC" href="https://iglesiasbc.com" img="/1.png" value="11" liked={true}>
                Un SaaS que desarrollé completamente por mi cuenta. Este busca ser una solución todo en uno para las iglesias, permitiendo administrar miembros, finanzas, clases, inventario y crear certificados, página web y blog. <br /> También permite colaborar con otros usuarios para llevar la administración entre varias personas, así logrando unificarlo todo en una plataforma.
            </Website>
            <Website title="Sistema Interno" href="" img="/2.png" value="14" liked={true}>
                Un software ERP personalizado. Este cuenta con módulo de inventario, recursos humanos y archivos, y tiene varias funciones personalizadas para la empresa que permiten ahorrar mucho trabajo al momento de registrar o leer información, tales como diversos gráficos, intérpretes de archivos PDF personalizados, importación y exportación de datos, validación de campos, entre otros.
            </Website>
            <Website title="CSX" href="https://csx.one" img="/7.png" value="12" liked={true}>
                Un ecommerce completo de ropa deportiva con un constructor para personalizar las prendas a tu medida, que te permite crear tus propias prendas a tu estilo fácilmente.
            </Website>
            <Website title="Portafolio fotográfico elegante" href="https://photographer1.onassis.dev/" img="/3.png" value="3" liked={false}>
                Una galería de fotos moderna y elegante.
            </Website>
            <Website title="Portafolio fotográfico impactante" href="https://photographer2.onassis.dev/" img="/4.png" value="4" liked={false}>
                Una galería con un diseño impactante pero minimalista al mismo tiempo.
            </Website>
            <Website title="Portafolio fotográfico animado" href="https://photographer3.onassis.dev/" img="/5.png" value="5" liked={false}>
                Una galería de fotos dinámica, con diversas animaciones y transiciones que le dan un toque único.
            </Website>
            <Website title="Página de cafetería" href="https://coffe2.onassis.dev/" img="/6.png" value="2" liked={false}>
                Una página de cafetería moderna, con un diseño cálido y elegante, así como un menú.
            </Website>
        </Accordion>
    );
};

export default Websites;
