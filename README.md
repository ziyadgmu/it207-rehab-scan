# RehabScan

## Section 1 — Command Description

RehabScan is a simplified Node.js program that combines features of the Linux commands `grep`, `wc`, and `tail`.

The program reads a file containing rehabilitation exercises and finds all lines that contain the word entered by the user. The program then displays:

* Every line that contains the search word
* The number of lines that contain the search word
* The last three lines that contain the search word

The search is not case-sensitive. For instance, if the search word is `KNEE`, any line that contains the word `knee` will also be located by the program.

### Commands Combined

* `grep` searches for lines within the rehabilitation log file that contain the selected word.
* `wc` counts the number of lines containing the selected word.
* `tail` displays the final three lines containing the selected word.

### How to Run the Program

Ensure that the files named `rehabScan.js` and `rehabLog.txt` are in the same directory.

Open a terminal and type the following command, replacing the file name and search word as needed:

```bash
node rehabScan.js <file name> <search word>
```

For example, if the file is named `rehabLog.txt` and you would like to search for lines containing the word `knee`, type:

```bash
node rehabScan.js rehabLog.txt knee
```

Another example would be to search for all lines containing the word `soccer`:

```bash
node rehabScan.js rehabLog.txt soccer
```

## Section 2 — AI-Assisted Programming

AI was used to learn the functions of the Linux commands `grep`, `wc`, and `tail`. I also asked AI for a way to combine these commands into a single Node.js program.

AI suggested ways to use the `fs.readFileSync()` function to read the rehabilitation log file, separate the text into individual lines, and identify the lines that contained the desired search word.

I also used AI to help test the program. AI suggested scenarios such as entering a search word that appears in the rehabilitation log file multiple times, entering a search word that appears exactly three times, and entering a search word that does not appear in the file.

AI also suggested possible edge cases, including a missing file name or search word, a file that does not exist, a search word that is not contained in the rehabilitation log file, fewer than three matching lines, and a search word entered with different capitalization than it has in the log file.

I had to think independently about the purpose of the program and the contents of the rehabilitation log file. Although AI provided suggestions for handling issues that could occur, I had to decide which suggestions to use. I manually tested the scenarios and reviewed the results to ensure that the program worked as expected.

AI initially missed the importance of providing clear instructions for using the command. I added headings, error messages, and a message showing the correct command format. I was responsible for deciding which suggestions to implement, making the changes, and testing the program again.

