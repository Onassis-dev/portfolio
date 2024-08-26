import { cn } from "@/lib/utils";

export default ({ text, icon }) => {
    return (
        <div className="border gap-2 flex-1 rounded-md px-2 py-1 flex items-center hover:bg-neutral-800">
            <i className={cn(icon, "text-2xl")}></i>
            <span className="font-semibold">{text}</span>
        </div>
    );
};
