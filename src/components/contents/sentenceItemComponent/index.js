import { renderBoldText } from "../comparisonComponent";
import getNestedObjectValue from "../../../common_check/getValue";

const SentenceItem = ({ item, onPlay }) => {
    const audioUrl = getNestedObjectValue(item, 'fields.audio.fields.file.url');
    const sentence = getNestedObjectValue(item, 'fields.sentence');
    return (
        <div onClick={() => onPlay(audioUrl)} style={{ cursor: 'pointer' }}>
            <p>{ renderBoldText({ blankString:sentence }) }</p>
        </div>
    );
};


export default SentenceItem;