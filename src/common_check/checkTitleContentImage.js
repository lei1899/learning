import getNestedObjectValue from "./getValue";

function validate(data, imageUrl = '') {
    const title = getNestedObjectValue(data, 'title')
    const content = getNestedObjectValue(data, 'content')
    const url = getNestedObjectValue(data, imageUrl)

    if (!data || !title) {
        return false;
    }
    return true;
}

export default validate;