export const sortArrayAsc = array => {
    return array.sort((a,b) => (a-b));
}

export const sortArrayofObjectsAsc = (array, key) => {
    return array.sort((a, b) => (a[key]-b[key]))
}
