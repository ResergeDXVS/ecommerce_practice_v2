import generateGuides from "./generateGuides";
import { GuideInfo } from "../store/status";

describe("generateGuides utility", () => {

    const mockData: GuideInfo[] = [
        {
            id: "101",
            origin: "CDMX",
            destiny: "TORREON",
            recipient: "ALAN",
            dateCreate: "2026-12-25T09:00:00",
            state: "pending",
        },
        {
            id: "102",
            origin: "GDL",
            destiny: "MONTERREY",
            recipient: "JUAN",
            dateCreate: "2026-12-26T10:00:00",
            state: "intransit",
        },
    ];

    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    it("should return empty array if localStorage is empty", () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);

        const result = generateGuides();
        expect(result).toEqual([]);
    });

    it("should return parsed guides from localStorage", () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockData));

        const result = generateGuides();
        expect(result).toHaveLength(2);
        expect(result[0].id).toBe("101");
        expect(result[1].origin).toBe("GDL");
    });
});