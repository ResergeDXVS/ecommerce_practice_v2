import reducer, { addGuide, GuideState, updateGuide } from "./guidesSlice";

describe('Guide Slice', () => {
    const initialState = {
        guides:[],
        historical:[],
        guides_total:0,
        guides__transit:0,
        guides__delivered:0,
    }
    const information:GuideState = {
        guides:[{
            id:"121",
            origin:"CDMX",
            destiny:"TORREON",
            recipient:"ALAN JUAREZ",
            dateCreate:"2026-12-25T09:00:00",
            state:"pending",
        }],
        historical:[{
            guide_id: "121",
            new_status: "pending",
            datetime: "2026-12-25T09:00:00",
        }],
        guides_total:12,
        guides__transit:16,
        guides__delivered:25,
    }
    it("should send initial state",()=>{
        const reduce = reducer(undefined,{type:""})
        expect(reduce).toEqual(initialState);
        expect(reduce.guides).toHaveLength(0);
        expect(reduce.historical).toHaveLength(0);
        expect(reduce.guides_total).toBe(0);
        expect(reduce.guides__transit).toBe(0);
        expect(reduce.guides__delivered).toBe(0);
    });
    it("should add a guide",()=>{
        const addInformation = reducer(initialState,addGuide(information.guides[0]));
        expect(addInformation.guides).toHaveLength(1);
        expect(addInformation.historical).toHaveLength(1);
        expect(addInformation.guides_total).toBe(1);
        expect(addInformation.guides__transit).toBe(0);
        expect(addInformation.guides__delivered).toBe(0);
    });

    it("should update a pending guide",()=>{
        const updated = reducer(information,updateGuide("121"));
        expect(updated.guides[0].state).toBe("intransit");
        expect(updated.historical).toHaveLength(2);
        expect(updated.guides_total).toBe(1);
        expect(updated.guides__transit).toBe(1)
        expect(updated.guides__delivered).toBe(0);
    });

    it("should update a in transit guide",()=>{
        const updated = reducer(information,updateGuide("121"));
        const updated02 = reducer(updated,updateGuide("121"));
        expect(updated02.guides[0].state).toBe("delivered");
        expect(updated02.historical).toHaveLength(3);
        expect(updated02.guides_total).toBe(1);
        expect(updated02.guides__transit).toBe(0)
        expect(updated02.guides__delivered).toBe(1);
    });

    it("should update a guide that doesnt exist",()=>{
        const updated = reducer(information,updateGuide("122"));
        expect(updated.guides[0].state).toBe("pending");
        expect(updated.historical).toHaveLength(1);
        expect(updated.guides_total).toBe(12);
        expect(updated.guides__transit).toBe(16)
        expect(updated.guides__delivered).toBe(25);
    });
});