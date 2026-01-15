import Link from "next/link";

export default function DocsHomePage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-10">
            {/* Header */}
            <header className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight">
                    Prismio Documentation
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Prismio is a modern, LLVM-based programming language focused on
                    performance, clarity, and predictable behavior.
                </p>
            </header>

            {/* Quick start */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                <ul className="space-y-3">
                    <DocLink
                        href="/getting-started"
                        title="Hello World"
                        description="Write and run your first Prismio program."
                    />
                    <DocLink
                        href="/installation"
                        title="Installation"
                        description="Install the Prismio compiler on your system."
                    />
                    <DocLink
                        href="/compiler/cli"
                        title="CLI Reference"
                        description="Learn how to use the prismio command-line tool."
                    />
                </ul>
            </section>

            {/* Language */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Language Guide</h2>
                <ul className="space-y-3">
                    <DocLink
                        href="/language/syntax"
                        title="Syntax Overview"
                        description="Understand the core syntax and structure."
                    />
                    <DocLink
                        href="/types"
                        title="Type System"
                        description="Explore built-in types and type rules."
                    />
                    <DocLink
                        href="/language/functions"
                        title="Functions"
                        description="Define and use functions in Prismio."
                    />
                </ul>
            </section>

            {/* Ecosystem */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Ecosystem</h2>
                <ul className="space-y-3">
                    <DocLink
                        href="/packages"
                        title="Packages"
                        description="Discover and use Prismio packages."
                    />
                    <DocLink
                        href="/compiler"
                        title="Compiler"
                        description="Architecture, phases, and internals."
                    />
                </ul>
            </section>

            {/* Footer */}
            <footer className="border-t pt-6 text-sm text-muted-foreground">
                <p>
                    Prismio is open source. Contributions and feedback are welcome.
                </p>
            </footer>
        </main>
    );
}

/* ---------------------------------- */
/* Reusable link component             */
/* ---------------------------------- */

function DocLink({
                     href,
                     title,
                     description,
                 }: {
    href: string;
    title: string;
    description: string;
}) {
    return (
        <li>
            <Link
                href={href}
                className="block rounded-lg border p-4 transition hover:bg-muted"
            >
                <div className="font-medium">{title}</div>
                <div className="text-sm text-muted-foreground">
                    {description}
                </div>
            </Link>
        </li>
    );
}