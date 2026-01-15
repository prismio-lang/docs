"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import {ArrowUpRight, Command, Search} from "lucide-react";
import {Button, Label} from "@heroui/react";
import {VDivider} from "@/components/Divider";
import {Cross as Hamburger} from "hamburger-react";
import ThemeToggle from "@/components/ThemeSwitch";
import {AnimatePresence, motion} from "framer-motion";

const HeaderMain: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* ================= HEADER ================= */}
            <header
                className={`
          sticky top-0 z-[80] transition-all duration-300
          ${
                    scrolled
                        ? "bg-white/60 dark:bg-[#0b0b0b]/65 backdrop-blur-xl border-b border-black/5 dark:border-white/10"
                        : "bg-transparent dark:bg-transparent border-b border-transparent"
                }
        `}
            >
                <div className="relative px-12 md:px-10 h-17 flex items-center">

                    <div className="flex items-center gap-3 shrink-0">
                        <Logo/>
                    </div>


                    <nav className="w-full hidden md:flex items-center justify-center gap-10">
                        <div className="w-100 group flex bg-muted gap-4 py-1.5 items-center px-3 rounded-2xl cursor-pointer [&_*]:cursor-pointer">
                            <Search
                                size={16}
                                className="text-muted-foreground group-hover:text-gray-800"
                            />

                            <Label className={'text-muted-foreground group-hover:text-gray-800'}>Search</Label>

                            <div className={'flex-1'}/>

                            <div className={'items-center flex justify-end gap-1'}>
                                <div className={'text-muted-foreground bg-gray-200 rounded-sm size-5 items-center justify-center flex'}>
                                    <Command size={14}/>
                                </div>
                                <Label className={'text-muted-foreground'}>+</Label>
                                <div className={'text-muted-foreground bg-gray-200 p-1 rounded-sm size-5 text-sm items-center flex justify-center'}>K</div>
                            </div>

                        </div>
                    </nav>

                    <div className="ml-auto hidden md:flex items-center gap-3">

                        <Link href="/install">
                            <Button
                                variant="tertiary"
                                className="
                      h-10 px-6 rounded-full
                      text-gray-700 dark:text-gray-800
                      hover:bg-black/5 dark:bg-white
                    "
                            >
                                Install
                            </Button>
                        </Link>

                        <VDivider length={'30px'}/>
                        <ThemeToggle/>
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <div className="ml-auto md:hidden z-[90]">
                        <Hamburger toggled={isOpen} toggle={setOpen} size={22}/>
                    </div>
                </div>
            </header>

            {/* ================= MOBILE MENU ================= */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -12}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -12}}
                        transition={{duration: 0.25, ease: "easeOut"}}
                        className="
              fixed inset-0 z-[70]
              bg-white/95 dark:bg-black/95
              backdrop-blur-xl
              px-6 pt-24
            "
                    >
                        <div className="flex flex-col gap-6">
                            <div className="pt-6 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
                                <Button
                                    variant="tertiary"
                                    className="h-10 rounded-full shadow-none text-black dark:text-white"
                                >

                                </Button>

                                <Link href="/register">
                                    <Button
                                        className="
                          h-10 rounded-full shadow-none
                          bg-blue-600 hover:bg-blue-700
                          text-white
                        "
                                    >
                                    </Button>
                                </Link>
                            </div>

                            <div className="pt-4">
                                <ThemeToggle/>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HeaderMain;
