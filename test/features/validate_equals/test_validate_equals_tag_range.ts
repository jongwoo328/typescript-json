import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_tag_range = _test_validate_equals(
    "range tag",
    TagRange.generate,
    (input) => TSON.validateEquals(input),
);
