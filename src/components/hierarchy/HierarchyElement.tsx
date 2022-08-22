import React, { createRef } from "react";
import CSSType from 'csstype';
import { Container } from "@mui/system";
import { Button, SvgIconTypeMap } from "@mui/material";
import { ChildrenType, ComponentUtility } from "../../utils/ComponentUtility";
import { HierarchyFolder } from "./HierarchyFolder";
import { Expansion } from "../Expansion";
import { Expand, ExpandMore } from "@mui/icons-material";
import { motion } from "framer-motion";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
    icon: React.ReactElement
}

interface State {
    
}

class HierarchyElement extends React.Component<Props, State> {

    ref = {
        root: createRef<HTMLDivElement>()
    }

    render(): React.ReactNode {
        return(
            <div ref={this.ref.root} style={{
                display: "inline",
                position: "relative",
            }}>
                <div style={{
                    display: "flex",
                }}>
                    <Button sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start"
                    }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                {this.props.icon}
                            </div>
                            Hierarchy Element
                    </Button>
                </div>
            </div>
        )
    }

}

export {
    HierarchyElement
};