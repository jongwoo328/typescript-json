import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_object_union = _test_assert(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.assertType(input),
    TagObjectUnion.SPOILERS,
);
