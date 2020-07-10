import { fetchGetUsersPage } from "../../src/api";

describe("API", () => {
    it("Can fetch users pages", async (done) => {
        fetchGetUsersPage().then(done).catch(done);
    });
});