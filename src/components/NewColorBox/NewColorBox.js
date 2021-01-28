import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import styles from "../../styles/NewColorBoxStyles";
import getTextColor from "../../helpers/getTextColor";
import { SortableElement } from "react-sortable-hoc";

const NewColorBox = SortableElement(props =>{
    let{classes, backgroundColor, name, handleClick} = props
    return (
        <div
            className={classes.root}
            style={{ backgroundColor: backgroundColor }}
        >
            <div
                style={{ color: getTextColor(backgroundColor) }}
                className={classes.content}
            >
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
            </div>
        </div>
    );
})

export default withStyles(styles)(NewColorBox);
