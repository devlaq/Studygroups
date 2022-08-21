import React from "react"

class ComponentUtility {
    static getChildren<T>(children: ChildrenType<T>): T[] {
        if(children === undefined) {
            return new Array<T>();
        } else if(children instanceof Array) {
            return children;
        } else {
            return [children];
        }
    }
}

type ChildrenType<T> = T[] | T | undefined

export {
    ComponentUtility
}

export type {
    ChildrenType
}