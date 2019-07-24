
let state = {
    isShowFooterbar: true
};

function isShowFooterbar(previous=state, action) {
    let {type, payload} = action;
    switch (type) {
        case 'hideFooterbar':
            return payload;
        case 'showFooterbar':
            return payload;
        default:

    }

    return previous;
}

export default isShowFooterbar
