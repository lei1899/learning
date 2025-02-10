function getNestedObjectValue(obj, path) {
    return path.split('.').reduce((acc, key) => {
        return acc && acc[key] !== undefined ? acc[key] : undefined
    }, obj);
}

export default getNestedObjectValue;