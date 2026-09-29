import { shuffleSongs } from "@/app/utils/shuffleSongs";
import{ songList } from "@/app/data/songlist";

describe("shuffleSongs",() => {
    test("returns a list with the same songs", () => {
        const shuffled = shuffleSongs(songList);

        expect(shuffled).toHaveLength(songList.length)
        expect(shuffled).toEqual(expect.arrayContaining(songList))
    });

    test("does not change the original list", () => {
        const originalOrder = songList.map((song) => song.id);

        shuffleSongs(songList);

        expect(songList.map((song) => song.id)).toEqual(originalOrder);
        
    })
})