import { width } from "@mui/system";
import React, { createRef } from "react";
import { ChildrenType, ComponentUtility } from "../utils/ComponentUtility";

interface State {
    initialPosition: [number, number],
    initialSize: [number, number],
    width: number,
    height: number
}

interface Props {
    children?: ChildrenType<React.ReactElement>
}

class Resizable extends React.Component<Props, State> {

    state: State = {
        initialPosition: [0, 0],
        initialSize: [0, 0],
        width: 0,
        height: 0
    }

    ref = {
        div: createRef<HTMLDivElement>()
    }

    dragStart = (e: React.DragEvent) => {
        this.setState({
            initialPosition: [e.clientX, e.clientY],
            initialSize: [this.ref.div.current?.offsetWidth ?? 0, this.ref.div.current?.offsetHeight ?? 0]
        })
    }

    drag = (e: React.DragEvent) => {
        this.setState({
            width: this.state.initialSize[0] + e.clientX - this.state.initialPosition[0],
            height: this.state.initialSize[1] + e.clientY - this.state.initialPosition[1]
        })
        console.log("DRAG")
    }

    children = () => ComponentUtility.getChildren(this.props.children);

    render(): React.ReactNode {
        console.log(this.children().length)
        return(
            <div draggable style={{
                width: this.state.width ?? "auto",
                height: this.state.height ?? "auto"
            }} ref={this.ref.div} onDragStart={this.dragStart} onDrag={this.drag}>
                {this.children()}
            </div>
        )
    }

}

export {
    Resizable
}