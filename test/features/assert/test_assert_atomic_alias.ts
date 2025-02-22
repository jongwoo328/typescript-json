import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assert } from "./_test_assert";

export const test_assert_atomic_alias = _test_assert(
    "generic alias",
    AtomicAlias.generate,
    (input) => TSON.assertType(input),
    AtomicAlias.SPOILERS,
);
