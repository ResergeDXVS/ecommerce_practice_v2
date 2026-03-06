
import { HistoricalInfo } from "../store/status";
import generateHistoricalList from "./generateHistoricalGuide";

describe("generateGuides utility", () => {

    const mockData: HistoricalInfo[] = [
        {
            guide_id: "121",
            new_status: "pending",
            datetime: "2026-12-25T09:00:00",
        },
    ];

    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    it("should return empty array if localStorage is empty", () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);

        const result = generateHistoricalList();
        expect(result).toEqual([]);
    });

    it("should return parsed guides from localStorage", () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockData));

        const result = generateHistoricalList();
        expect(result[0].guide_id).toBe("121");
        expect(result[0].new_status).toBe("pending");
    });
});