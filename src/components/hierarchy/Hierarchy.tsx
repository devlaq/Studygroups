import React from "react";
import CSSType from 'csstype';
import { HierarchyElement } from "./HierarchyElement";
import { ChildrenType, ComponentUtility } from "../../utils/ComponentUtility";
import { HierarchyFolder } from "./HierarchyFolder";
import { Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { motion } from "framer-motion";
import { HierarchyAdd } from "./HierarchyAdd";

interface Props {

    width?: CSSType.Property.Width | number | undefined;
    height?: CSSType.Property.Height | number | undefined;
    style?: React.CSSProperties | undefined;
    children?: ChildrenType<React.ReactElement<HierarchyElement | HierarchyFolder>>

}

class Hierarchy extends React.Component<Props> {

    children = () => ComponentUtility.getChildren(this.props.children);

    render(): React.ReactNode {
        return(
            <motion.div animate={{
                width: this.props.width ?? "300px",
                height: this.props.height ?? "calc(100% - 5px)",
            }} style={{
                overflowY: "scroll",
                overflowX: "hidden",
                position: "absolute",
                border: "2px solid gray",
                textAlign: "left",
                ...this.props.style
            }}>
                <div style={{
                    backgroundColor: "lightgray",
                    paddingBottom: "2px"
                }}>
                    <Typography>
                        HIERARCHY
                    </Typography>
                </div>
                <HierarchyAdd/>
                {this.children()}
            </motion.div>
        )
    }

}

export {
    Hierarchy
};