import React, { createRef, ReactElement, useRef } from "react";
import { ChildrenType, ComponentUtility } from "../utils/ComponentUtility";
import { motion } from "framer-motion";
import { renderToStaticMarkup } from 'react-dom/server'
import { useEffect } from "react";

interface Props {
    children?: ChildrenType<ReactElement>
    expanded: boolean
}

interface State {

}

class Expansion extends React.Component<Props, State> {

    children = () => ComponentUtility.getChildren(this.props.children);

    render(): React.ReactNode {
        return(
            <motion.div animate={{
                height: this.props.expanded ? "auto" : 0
            }} style={{
                overflow: "hidden"
            }}>
                {this.children()}
            </motion.div>
        )
    }


}

export {
    Expansion
}