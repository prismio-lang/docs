"use client";

import {useRouter} from "next/navigation";
import {useState} from "react";
import {ChevronDown, ChevronRight} from "lucide-react";
import {DocsNavList} from "@/app/[...not_found]/nav-list";

export interface DocItem {
    href?: string;
    label: string;
    lastModified?: string;
    items?: DocItem[];
}

export interface DocsSection {
    label: string;
    href?: string;
    lastModified?: string;
    items?: DocItem[];
}

export interface DocsHistory {
    id: string;
    lastModified: string;
}

export const DocsHistory: DocsHistory[] = [
    {
        id: "home",
        lastModified: "20th November 2024"
    },
    {
        id: "getting_started",
        lastModified: "20th November 2024"
    },
    {
        id: "strings",
        lastModified: "20th November 2024"
    },
]

export const getLastModifiedByHref = (href: string): string | undefined | null => {
    const section = DocsHistory.find(doc => doc.id === href);
    return section ? section.lastModified : null;
};

export default function DocsNav() {
    const router = useRouter();

    const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

    const chevronSize = 16;

    const toggleDropdown = (label: string) => {
        if (openDropdowns.includes(label)) {
            setOpenDropdowns(openDropdowns.filter((item) => item !== label));
        } else {
            setOpenDropdowns([...openDropdowns, label]);
        }
    };

    const renderNavItems = (items: DocsSection[] | undefined, level = 0) => {
        if (!items) return null;

        return items.map((section) => {
            const hasChildren = section.items && section.items.length > 0;
            const isOpen = openDropdowns.includes(section.label);

            const indent = level * 14; // visual depth

            return (
                <div key={section.label} className="select-none">
                    {/* Row */}
                    <div
                        style={{ paddingLeft: indent }}
                        className={`
            flex items-center justify-between
            h-9 px-3 cursor-pointer rounded-md
            transition-colors duration-150
            text-sm font-medium
            text-gray-700 dark:text-gray-300
            hover:bg-gray-100 dark:hover:bg-white/10
          `}
                        onClick={() => {
                            if (section.href) {
                                router.push(section.href);
                            } else {
                                toggleDropdown(section.label);
                            }
                        }}
                    >
                        {/* Label + Chevron */}
                        <div className="flex items-center gap-2">
                            {hasChildren && (
                                <div
                                    className={`
                  transition-transform duration-200
                  ${isOpen ? "rotate-90" : "rotate-0"}
                `}
                                >
                                    <ChevronRight size={16} />
                                </div>
                            )}
                            <span>{section.label}</span>
                        </div>
                    </div>

                    {/* Children (collapsible) */}
                    {hasChildren && isOpen && (
                        <div
                            className="overflow-hidden transition-all"
                            style={{ paddingLeft: indent + 12 }}
                        >
                            <div className="ml-2 border-l border-gray-200 dark:border-white/10 pl-3 space-y-1 py-2">
                                {renderNavItems(section.items, level + 1)}
                            </div>
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <nav className="rounded-md h-screen w-[240px]">
            {renderNavItems(DocsNavList)}
        </nav>
    );
}