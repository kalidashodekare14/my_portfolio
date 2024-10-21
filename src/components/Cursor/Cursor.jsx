'use client'
import React from 'react';
import { CursorTwo } from "cursor-style";

const Cursor = () => {
    return (
        <CursorTwo
            size={40}
            delay={10}
            sizeDot={10}
            sizeOutline={40}
            bgColorDot="#06ddda"
            bgColorOutline="#06ddda"
        />
    );
};

export default Cursor;