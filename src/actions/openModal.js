export default (open, content) => {
    return {
        type: "OPEN_MODAL",
        payload: {
            open,
            content,
        }
    }
}