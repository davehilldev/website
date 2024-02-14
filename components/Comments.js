"use client"

import React, { useRef } from "react";

import useScript from "../lib/use-script";

export default function Comments({ comments }) {
    const comment = useRef(null);
    const status = useScript({
        url: "https://utteranc.es/client.js",
        theme: "preferred-color-scheme",
        crossorigin: "anonymous",
        issueTerm: "url",
        repo: "davehilldev/website-comments",
        ref: comment
    });
    return (
        <>
            <div className="comments__container">
            
                {
                    <div ref={comment}></div>
                }
            </div>
        </>
    )
}