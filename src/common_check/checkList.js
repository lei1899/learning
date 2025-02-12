import getNestedObjectValue from "./getValue";

function validate(data, maxNumber) {
    const list = getNestedObjectValue(data, 'list')
    
    if (!data || !list ) {
        return false;
    }

    let listLength = list.length;
    if (listLength <= 0 || listLength > maxNumber) {
        return false;
    }
    return true;
}
export default validate;
