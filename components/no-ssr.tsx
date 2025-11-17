'use client';

import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

interface NoSsrProps {
    children: ReactNode;
}

const NoSsr = (props: NoSsrProps) => <>{props.children}</>

export default dynamic(() => Promise.resolve(NoSsr), {
    ssr: false
})

