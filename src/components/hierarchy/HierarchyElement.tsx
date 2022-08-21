import React, { createRef } from "react";
import CSSType from 'csstype';
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { ChildrenType, ComponentUtility } from "../../utils/ComponentUtility";
import { HierarchyFolder } from "./HierarchyFolder";
import { Expansion } from "../Expansion";
import { Expand, ExpandMore } from "@mui/icons-material";
import { motion } from "framer-motion";

interface Props {
    children?: React.ReactElement<ChildrenType<HierarchyElement | HierarchyFolder>>
}

interface State {
    expanded: boolean
}

class HierarchyElement extends React.Component<Props, State> {

    state = {
        expanded: false
    }

    ref = {
        root: createRef<HTMLDivElement>()
    }

    children = () => ComponentUtility.getChildren(this.props.children);

    toggleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render(): React.ReactNode {
        return(
            <div ref={this.ref.root} style={{
                display: "inline"
            }}>
                <div style={{
                    display: "flex",
                }}>
                    <motion.div animate={{
                        rotate: this.state.expanded ? -90 : -90
                    }} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <ExpandMore/>
                    </motion.div>
                    <Button onClick={this.toggleExpanded}>
                        HierarchyElement
                    </Button>
                </div>
                
                <div style={{
                    position: "relative",
                    left: "20px"
                }}>
                    <Expansion expanded={this.state.expanded}>
                        {this.children()}
                    </Expansion>
                </div>
            </div>
        )
    }

}

export {
    HierarchyElement
};