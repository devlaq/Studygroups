import { Add, CreateNewFolder, PostAdd } from "@mui/icons-material";
import { Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";

interface State {
    menuAnchorEl: HTMLElement | undefined
}

class HierarchyAdd extends React.Component<any, State> {

    state: State = {
        menuAnchorEl: undefined
    }

    render(): React.ReactNode {
        return(
            <div>
                <Button onClick={(e) => this.setState({ menuAnchorEl: e.currentTarget })} sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Add/>
                    </div>
                    Add
                </Button>
                <Menu
                    PaperProps={{ style: {
                        width: "200px"
                    } }}
                    anchorEl={this.state.menuAnchorEl}
                    open={!!this.state.menuAnchorEl}
                    onClose={() => this.setState({ menuAnchorEl: undefined })}
                >
                    <MenuItem>
                        <ListItemIcon>
                            <PostAdd/>
                        </ListItemIcon>
                        Element
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <CreateNewFolder/>
                        </ListItemIcon>
                        Folder
                    </MenuItem>
                </Menu>
            </div>
        )
    }

}

export { HierarchyAdd }