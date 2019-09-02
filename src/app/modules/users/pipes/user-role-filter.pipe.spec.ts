import { FilterPipe } from "./user-role-filter.pipe";

describe("FilterPipe", () => {
  it("create an instance", () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
