Feedback on Tests

The tests describe the user flow of the app clearly, and the Home integration tests were especially helpful because they cover the whole journey from the start screen to the end page, including the sidebar menu. Following them made it easy to understand how the components should work together.

While building the app, I found a few things that could make the tests more reliable:

The test "songs order will be rendered randomely" can never pass. shuffleSongs is mocked to return the list in its original order, but the test then expects the first song not to be the first song in the list.

The test "After the last song, end page will be rendered" always passes without checking the end page. The line if ((i = songList.length)) return; uses = instead of ===, so the loop returns on the first round.

Home.test.tsx could not run at first because jest.config.ts had no moduleNameMapper for the @/ path used in jest.mock. The .tsx extension in the import in DisplaySong.test.tsx also stopped next build from passing, so I had to adjust tsconfig.json before the site could be deployed.

Some test titles don't match what they check. "Thats home renders with an H2" checks for an h1, and the Header test mentions "specific text" but only checks that the h1 exists.

Many elements are found with getByTestId. Using getByRole where possible, for example for the song title or the menu button, would test the app more from the user's point of view. Writing "1 / 10" directly in the tests also means they would break if a song were added, so using songList.length would be safer.

What I would add:
My Menu passed its unit tests even when the click handler on the song titles was wrong, and a typo in the menu button's test id still passed the Header tests. These problems only showed up in the Home tests. The real shuffleSongs function is also never tested, since it is always mocked.

Because of this, I added three test files: MenuEvents.test.tsx checks that clicking a song passes the correct song to selectedMenu, that the close button works, and that the menu is hidden when closed. HeaderEvents.test.tsx checks the h1 text and the menu button. shuffleSongs.test.ts checks that shuffling keeps all the songs and does not change the original list.

Overall, the tests gave a clear picture of how the app should behave, and with these small changes they would catch problems even earlier.