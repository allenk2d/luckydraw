const {localStorage, JSON} = window;

export const load = dataKey => (
    JSON.parse(
            localStorage.getItem(dataKey),
        )
);

export const save = (dataKey, data) => (
    localStorage.setItem(
        dataKey,
        JSON.stringify({
            ...load(dataKey),
            ...data
        })
    )
);

export const remove = dataKey => (
    localStorage.removeItem(dataKey)
);

export const exist = dataKey => (
    localStorage.hasOwnProperty(dataKey)
);
