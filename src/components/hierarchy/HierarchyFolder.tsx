import React, { createRef } from "react";
import CSSType from 'csstype';
import { ChildrenType, ComponentUtility } from "../../utils/ComponentUtility";
import { HierarchyElement } from "./HierarchyElement";
import { motion } from "framer-motion";
import { ExpandMore } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Expansion } from "../Expansion";

interface Props {
    children?: ChildrenType<React.ReactElement<HierarchyElement | HierarchyFolder>>
}

class HierarchyFolder extends React.Component<Props> {

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
                display: "inline",
            }}>
                <div style={{
                    display: "flex",
                }}>
                    <Button sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start"
                    }} onClick={this.toggleExpanded}>
                        <motion.div animate={{
                            rotate: this.state.expanded ? 0 : -90
                        }} style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <ExpandMore/>
                        </motion.div>
                        Hierarchy Folder
                    </Button>
                </div>
                
                <motion.div animate={{
                    borderColor: this.state.expanded ? "rgba(128, 128, 128, 255)" : "rgba(128, 128, 128, 0)",//똑같음
                }}
                 style={{
                    position: "relative",
                    border: "2px solid",
                    
                    borderRadius: "5px"
                }}>
                    <Expansion expanded={this.state.expanded}>
                        {this.children()}
                    </Expansion>
                </motion.div>
            </div>
        )
    }

}

export {
    HierarchyFolder
};