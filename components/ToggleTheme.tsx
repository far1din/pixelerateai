import { MoonIcon, SunIcon } from "lucide-react";
import { useMainContext } from "@/components/MainContext";

function ToggleTheme() {
    const { theme, handleThemeChange } = useMainContext();

    return (
        <div className="cursor-pointer" onClick={() => handleThemeChange()}>
            {theme === "light" ? <MoonIcon width={29} height={29} /> : <SunIcon width={29} height={29} />}
        </div>
    );
}

export default ToggleTheme;
