import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_object_alias = _test_assert_stringify(
    "aliased object",
    ObjectAlias.generate,
    TSON.createAssertStringify<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
