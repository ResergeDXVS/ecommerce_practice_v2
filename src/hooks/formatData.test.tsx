import { formatDateTime, translateValue } from "./formatData";

describe('Format Functions', () => {
    it("should return a valid date format",()=>{
        const date = formatDateTime("2026-12-25T09:00:00");
        expect(date).toBe("25/12/2026 09:00");
    });
    it("shoud return a transated state value",()=>{
        const state = translateValue("intransit");
        expect(state).toBe("EN TRANSITO");
    });
});