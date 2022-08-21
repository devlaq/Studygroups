import React from "react";
import CSSType from 'csstype';
import { HierarchyElement } from "./HierarchyElement";
import { ChildrenType, ComponentUtility } from "../../utils/ComponentUtility";
import { HierarchyFolder } from "./HierarchyFolder";

interface Props {

    width?: CSSType.Property.Width | number | undefined;
    height?: CSSType.Property.Height | number | undefined;
    style?: React.CSSProperties | undefined;
    children?: React.ReactElement<ChildrenType<HierarchyElement | HierarchyFolder>>

}

class Hierarchy extends React.Component<Props> {

    children = () => ComponentUtility.getChildren(this.props.children);

    render(): React.ReactNode {
        return(
            <div style={{
                width: this.props.width ?? "20%",
                height: this.props.height ?? "calc(100% - 5px)",
                overflow: "hidden",
                position: "absolute",
                border: "2px solid gray",
                textAlign: "left",
                ...this.props.style
            }}>
                {this.children()}
            </div>
        )
    }

}

export {
    Hierarchy
};