import { renderBoldText } from "../comparisonComponent";
import getNestedObjectValue from "../../../common_check/getValue";
import { SentenceStyle } from "./style";

const SentenceItem = ({ item, onPlay }) => {
    const audioUrl = getNestedObjectValue(item, 'fields.audio.fields.file.url');
    const sentence = getNestedObjectValue(item, 'fields.sentence');
    return (
        <SentenceStyle onClick={() => onPlay(audioUrl)}>
            { renderBoldText({ blankString:sentence }) }
        </SentenceStyle>
    );
};


export default SentenceItem;