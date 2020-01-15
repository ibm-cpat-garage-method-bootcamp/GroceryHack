export const sortArrayAsc = array => {
    return array.sort((a,b) => (a-b));
}

export const sortArrayofObjectsAsc = (array, key) => {
    return array.sort((a, b) => {
        if (typeof a[key] === "string" && typeof b[key] === "string") {
            const alpha = a[key].toLowerCase();
            const beta = b[key].toLowerCase();
            if (alpha < beta) {
                return -1;
              }
              if (alpha > beta) {
                return 1;
              }
            return (alpha-beta)
        } 
        return (a[key]-b[key])
    })
}
