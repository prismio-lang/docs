import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import {useTheme} from "@/app/providers/ThemeProvider";

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div
            onClick={toggleTheme}
            className={`relative flex items-center w-14 h-7 cursor-pointer rounded-full ${isDark ? "bg-white/20" : "bg-blue-500"} p-1 transition-colors duration-500`}>
            {/* Sun Icon (left side, visible in dark mode) */}
            <motion.div
                className="absolute left-2"
                initial={false}
                animate={{
                    x: isDark ? 0 : -10,
                    opacity: isDark ? 1 : 0,
                    rotate: isDark ? 360 : 0,
                    scale: isDark ? 1 : 0.7,
                }}
                transition={{
                    x: { type: "spring", stiffness: 200, damping: 15 },
                    opacity: { duration: 0.4, ease: "easeInOut" },
                    rotate: { duration: 0.6, ease: "backOut" },
                    scale: { duration: 0.4, ease: "easeOut" },
                }}
            >
                <Moon className="w-4 h-4 text-white" />

            </motion.div>

            {/* Moon Icon (right side, visible in light mode) */}
            <motion.div
                className="absolute right-2"
                initial={false}
                animate={{
                    x: isDark ? 10 : 0,
                    opacity: isDark ? 0 : 1,
                    rotate: isDark ? -360 : 0,
                    scale: isDark ? 0.7 : 1,
                }}
                transition={{
                    x: { type: "spring", stiffness: 200, damping: 15 },
                    opacity: { duration: 0.4, ease: "easeInOut" },
                    rotate: { duration: 0.6, ease: "backOut" },
                    scale: { duration: 0.4, ease: "easeOut" },
                }}
            >
                <Sun className="w-4 h-4 text-white" />
            </motion.div>

            {/* Toggle Knob */}
            <motion.div
                className="w-5 h-5 bg-white rounded-full shadow-lg z-10"
                animate={{ x: isDark ? 28 : 0 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.5,
                }}
            />
        </div>
    );
};

export default ThemeToggle;