import { store } from "./store";
import { addGuide } from "./guidesSlice";

describe("Redux store", () => {

    beforeEach(() => {
        localStorage.clear();
    });

    it("should initialize with empty state", () => {
        const state = store.getState();
        expect(state.guides.guides).toEqual([]);
        expect(state.guides.historical).toEqual([]);
    });

    it("should update state and save to localStorage on dispatch", () => {
        const newGuide = {
            id: "101",
            origin: "CDMX",
            destiny: "TORREON",
            recipient: "ALAN",
            dateCreate: "2026-12-25T09:00:00",
            state: "pending"
        };

        store.dispatch(addGuide(newGuide));

        const state = store.getState();
        expect(state.guides.guides).toHaveLength(1);
        expect(state.guides.guides[0].id).toBe("101");

        const savedGuides = JSON.parse(localStorage.getItem("guideRecord") || "[]");
        expect(savedGuides).toHaveLength(1);
        expect(savedGuides[0].id).toBe("101");

        const savedHistorical = JSON.parse(localStorage.getItem("guideHistorical") || "[]");
        expect(savedHistorical).toHaveLength(1);
        expect(savedHistorical[0].guide_id).toBe("101");
    });

});
