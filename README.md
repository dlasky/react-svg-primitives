# react svg primitives

This library is a set of primitives designed to make drawing svg graphics programmatically via react components declarative. It also aims to smooth out some of the oddities of SVG syntax where possible.

## Example Usage

```typescript
import React, {FC} from "react"
import { SVG, Circle }

const Component = () => {
    <SVG>
        <Circle x={10} y={10} radius={5}>
    </SVG>
}

```
