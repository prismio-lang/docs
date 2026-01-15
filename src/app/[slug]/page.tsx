import React from "react";
import EditPage from "@/components/EditPageBar";
import {MDXContent} from "@/components/mdx-content";
import {DocsToc} from "@/components/toc";
import {docs} from "../../../.velite";
import NotFound from "next/dist/client/components/builtin/not-found";
import {getHeadings} from "@/libs/docs/utils";

interface Params {
    params: {
        slug: string;
    };
}

export default async function DocsPage({params}: Params) {
    const {slug} = await params;
    const doc = docs.find(i => i.slug === slug)


    if (!doc) {
        return NotFound;
    }

    const headings = getHeadings(doc.raw);

    return (
        <div className={'flex flex-row gap-12 py-7'}>
            <div className={'flex flex-col'}>
                <EditPage docName={slug}/>
                <div className={'my-4 w-full prose prose-neutral'}>
                    <MDXContent code={doc.code}/>
                </div>
            </div>

            {headings && headings.length > 0 && (
                <div className="z-10 xl:w-1/2 mt-8 pl-4">
                    <DocsToc headings={headings} />
                </div>
            )}
        </div>
    );
}
