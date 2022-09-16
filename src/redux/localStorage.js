/* eslint-disable */
export const loadState = () => {
    try {
        const serialized = localStorage.getItem('state');
        if (serialized === null) {
            return undefined;
        }
        return JSON.parse(serialized);
    } catch (error) {
        return undefined;
    }
}

export const saveState = (state,name) => {
    try {
        const serializeState = JSON.stringify(state);
        localStorage.setItem('state',serializeState)
    }catch {
        // ignore
    }
}