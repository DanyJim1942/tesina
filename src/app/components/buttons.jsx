'use client'

import { useState } from "react";

export function Button ( {id} ){
    const [liked, setLiked] = useState(false)

    return(
        <button onClick={() => setLiked(!liked)}>
            {liked ? '0' : 'o'}
        </button>
    )
}