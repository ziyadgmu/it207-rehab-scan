# RehabScan

## Section 1 — Command Description

RehabScan is a simplified Node.js command-line tool that combines features from the Linux commands `grep`, `wc`, and `tail`.

The program reads a rehabilitation or workout log file and searches for lines containing a word entered by the user. It then:

1. Displays every line containing the search word.
2. Counts the total number of matching lines.
3. Displays the last three matching lines.

The search is not case-sensitive. For example, searching for `KNEE` will also find lines containing `knee`.

### Commands Combined

* `grep` searches for lines containing the selected word.
* `wc` counts the number of matching lines.
* `tail` displays the final three matching lines.

### How to Run the Program

The `rehabScan.js` and `rehabLog.txt` files should be located in the same directory.

The command uses the following format:

```bash
node rehabScan.js <file name> <search word>
```

Example:

```bash
node rehabScan.js rehabLog.txt knee
```

Another example:

```bash
node rehabScan.js rehabLog.txt soccer
```

## Section 2 — AI-Assisted Programming

I used AI to help me understand the basic purposes of the Linux commands `grep`, `wc`, and `tail`. I also asked AI how simplified versions of these commands could be combined into one Node.js program.

AI helped explain how `fs.readFileSync()` could be used to read the file, how the contents could be separated into individual lines, and how the matching lines could be counted and displayed.

I also asked AI to suggest test scenarios and possible edge cases. The suggested test scenarios included searching for a word with several matches, searching for a word with exactly three matches, and searching for a word that does not appear in the file.

Possible edge cases included:

* A missing file name
* A missing search word
* A file that does not exist
* A search word that does not appear in the file
* Fewer than three matching lines
* Different capitalizations of the search word

I had to think independently about the purpose of the tool, the contents of the rehabilitation log, the organization of the output, and which suggested changes should be used. I also manually ran the test cases and reviewed the results.

One thing AI initially missed was making the command instructions clear to the user. I added headings, error messages, and a usage message showing the correct command format. I was responsible for reviewing the suggestions, implementing the final changes, and testing the program.
