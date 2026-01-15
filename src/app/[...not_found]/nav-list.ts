import { DocsSection } from "@/app/Nav";

export const DocsNavList: DocsSection[] = [
    {
        label: "Home",
        href: "/content/overview",
    },
    {
        label: "Get Started",
        items: [
            { label: "Installation", href: "/content/getting_started/install" },
            { label: "Hello World", href: "/content/getting_started/hello_world" },
            { label: "Project Layout", href: "/content/getting_started/project_layout" },
            { label: "Build & Run", href: "/content/getting_started/build_run" },
            { label: "Editor Setup", href: "/content/getting_started/editor_setup" },
            { label: "Migration Guide", href: "/content/getting_started/migration" },
        ],
    },
    {
        label: "Language",
        items: [
            { label: "Syntax", href: "/content/language/syntax" },
            { label: "Types", href: "/content/language/types" },
            {
                label: "Expressions",
                items: [
                    { label: "Operators", href: "/content/language/expressions/operators" },
                    { label: "Literals", href: "/content/language/expressions/literals" },
                    { label: "Evaluation", href: "/content/language/expressions/evaluation" },
                ],
            },
            {
                label: "Statements",
                items: [
                    { label: "Bindings", href: "/content/language/statements/bindings" },
                    { label: "Control Flow", href: "/content/language/statements/control_flow" },
                    { label: "Pattern Matching", href: "/content/language/statements/matching" },
                    { label: "Loops", href: "/content/language/statements/loops" },
                ],
            },
            {
                label: "Functions",
                items: [
                    { label: "Signatures", href: "/content/language/functions/signatures" },
                    { label: "Parameters", href: "/content/language/functions/parameters" },
                    { label: "Returns", href: "/content/language/functions/returns" },
                    { label: "Closures", href: "/content/language/functions/closures" },
                ],
            },
            {
                label: "Modules",
                items: [
                    { label: "Imports", href: "/content/language/modules/imports" },
                    { label: "Visibility", href: "/content/language/modules/visibility" },
                    { label: "Namespacing", href: "/content/language/modules/namespaces" },
                ],
            },
            {
                label: "Memory",
                items: [
                    { label: "Ownership", href: "/content/language/memory/ownership" },
                    { label: "Borrowing", href: "/content/language/memory/borrowing" },
                    { label: "Lifetimes", href: "/content/language/memory/lifetimes" },
                    { label: "References", href: "/content/language/memory/references" },
                ],
            },
            {
                label: "Error Handling",
                items: [
                    { label: "Panics", href: "/content/language/errors/panics" },
                    { label: "Result Types", href: "/content/language/errors/results" },
                    { label: "Exception Model", href: "/content/language/errors/exceptions" },
                ],
            },
        ],
    },
    {
        label: "Standard Library",
        items: [
            { label: "Overview", href: "/content/stdlib/overview" },
            { label: "Core Types", href: "/content/stdlib/core_types" },
            { label: "Collections", href: "/content/stdlib/collections" },
            { label: "I/O", href: "/content/stdlib/io" },
            { label: "Concurrency", href: "/content/stdlib/concurrency" },
            { label: "Networking", href: "/content/stdlib/networking" },
            { label: "Time & Dates", href: "/content/stdlib/time" },
            { label: "FS & Paths", href: "/content/stdlib/fs" },
        ],
    },
    {
        label: "Toolchain",
        items: [
            { label: "Compiler", href: "/content/toolchain/compiler" },
            { label: "Build System", href: "/content/toolchain/build" },
            { label: "Formatter", href: "/content/toolchain/formatter" },
            { label: "Linter", href: "/content/toolchain/linter" },
            { label: "Package Manager", href: "/content/toolchain/package_manager" },
            { label: "Testing", href: "/content/toolchain/testing" },
            { label: "Benchmarking", href: "/content/toolchain/benchmarking" },
        ],
    },
    {
        label: "Interoperability",
        items: [
            { label: "C / C++", href: "/content/interop/c_cpp" },
            { label: "Rust", href: "/content/interop/rust" },
            { label: "Python", href: "/content/interop/python" },
            { label: "WASM", href: "/content/interop/wasm" },
            { label: "FFI Basics", href: "/content/interop/ffi" },
        ],
    },
    {
        label: "Platform Targets",
        items: [
            { label: "Linux", href: "/content/platform/linux" },
            { label: "macOS", href: "/content/platform/macos" },
            { label: "Windows", href: "/content/platform/windows" },
            { label: "iOS", href: "/content/platform/ios" },
            { label: "Android", href: "/content/platform/android" },
            { label: "WebAssembly", href: "/content/platform/wasm" },
        ],
    },
    {
        label: "AI & Tooling",
        items: [
            { label: "Grammar", href: "/content/ai/grammar" },
            { label: "AST Spec", href: "/content/ai/ast" },
            { label: "Semantic Model", href: "/content/ai/semantic_model" },
            { label: "Code Generation", href: "/content/ai/code_generation" },
            { label: "Refactoring APIs", href: "/content/ai/refactoring_apis" },
            { label: "Language Server Protocol", href: "/content/ai/lsp" },
        ],
    },
    {
        label: "Specification",
        items: [
            { label: "Lexical Structure", href: "/content/spec/lexical" },
            { label: "Grammar", href: "/content/spec/grammar" },
            { label: "Typing Rules", href: "/content/spec/types" },
            { label: "Memory Model", href: "/content/spec/memory" },
            { label: "Concurrency Model", href: "/content/spec/concurrency" },
        ],
    },
    {
        label: "Contribute",
        items: [
            { label: "Source Repositories", href: "/content/contribute/source" },
            { label: "Style Guides", href: "/content/contribute/style" },
            { label: "RFC Process", href: "/content/contribute/rfc" },
            { label: "Issue Labels", href: "/content/contribute/issues" },
            { label: "Security Policy", href: "/content/contribute/security" },
        ],
    },
];