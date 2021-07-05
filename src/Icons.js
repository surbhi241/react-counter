export const AddIcon = (props) => {
    const { color } = props;
 return(
    <svg width="17" height="17" viewBox="0 0 17 17">
        <g fill="none" fillRule="evenodd">
            <g>
                <g>
                    <g>
                        <g>
                            <g>
                                <path d="M0 0L16 0 16 16 0 16z" transform="translate(-1165.000000, -477.000000) translate(1152.000000, 466.000000) translate(5.000000, 5.000000) translate(8.666667, 6.666667)"/>
                            </g>
                            <g fillRule="nonzero">
                                <g fill={color}>
                                    <path d="M9.667 5.667L5.667 5.667 5.667 9.667 4.333 9.667 4.333 5.667 0.333 5.667 0.333 4.333 4.333 4.333 4.333 0.333 5.667 0.333 5.667 4.333 9.667 4.333z" transform="translate(-1165.000000, -477.000000) translate(1152.000000, 466.000000) translate(5.000000, 5.000000) translate(8.666667, 6.666667) translate(3.000000, 3.000000)"/>
                                </g>
                                <path d="M0 0H16V16H0z" transform="translate(-1165.000000, -477.000000) translate(1152.000000, 466.000000) translate(5.000000, 5.000000) translate(8.666667, 6.666667)"/>
                            </g>
                            <path d="M0 0H16V16H0z" transform="translate(-1165.000000, -477.000000) translate(1152.000000, 466.000000) translate(5.000000, 5.000000) translate(8.666667, 6.666667)"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
 );
}

export const DeleteIcon = (props) => {
    const { color } = props;
    console.log("color", color);
    return(
        <svg width="16" height="16" viewBox="0 0 16 16">
            <g fill="none" fillRule="evenodd">
                <g>
                    <g>
                        <g fill={color} fillRule="nonzero">
                            <path d="M.667 10.667C.667 11.4 1.267 12 2 12h5.333c.734 0 1.334-.6 1.334-1.333v-8h-8v8zM2 4h5.333v6.667H2V4zM7 .667L6.333 0H3l-.667.667H0V2h9.333V.667H7z" transform="translate(-977 -1772) translate(977 1772) translate(3.333 2)"/>
                        </g>
                        <path d="M0 0H16V16H0z" transform="translate(-977 -1772) translate(977 1772)"/>
                    </g>
                </g>
            </g>
        </svg>
    );
}

// export default {
//     addIcon,
//     deleteIcon
// }