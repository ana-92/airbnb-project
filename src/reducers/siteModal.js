const initState = { open: false, content: "" };

export const siteModal = (state = initState, action) => {
    if (action.type === "OPEN_MODAL") {
        return action.payload
    }
    return state;
};