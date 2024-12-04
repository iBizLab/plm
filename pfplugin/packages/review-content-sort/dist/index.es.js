import { FetchMethod as c, registerDEMethodProvider as d } from "@ibiz-template/runtime";
class l extends c {
  async exec(e, t, r, s) {
    const n = await super.exec(e, t, r, s);
    return n.data.sort((o, i) => o.test_case && i.test_case ? o.test_case.identifier.localeCompare(i.test_case.identifier) : -1), n;
  }
}
class u {
  create(e, t, r, s) {
    return new l(e, t, r, s.localMode);
  }
}
function _() {
  d(
    "DEMETHOD_REVIEW_CONTENT_SORT",
    () => new u()
  );
}
const E = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    _();
  }
};
export {
  E as default,
  _ as registerReviewContentSortProvider
};
