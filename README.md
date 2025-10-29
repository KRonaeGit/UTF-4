# UTF-4
UTF-4 (i made) is a NEW 1~3 byte variable length encoding!

## Why UTF-4?
UTF-8, which we mainly use and is an international standard, is a variable length method of 1~4 bytes. (Maximum 4 bytes)
But in fact, 3 bytes is enough to express all the characters of Unicode.

While retaining all the advantages of UTF-8, UTF-4 **can accommodate more characters in a smaller space than UTF-8!**

## Structure?
- 1byte: `0xxxxxxx`
- 2byte: `10xxxxxx xxxxxxxx`
- 3byte: `11xxxxxx xxxxxxxx xxxxxxxx`

## Advantage?
- On average, the **size is reduced by `23.9095%` or `0.9521 bytes`** per character than UTF-8!
  So if it's 100 characters, it takes up 95 bytes less! (on average)
- UTF-8 can only accommodate `2,164,864` characters,
  while UTF-4 can accommodate `4,210,816` characters! (So UTF-4 is better for accommodating)
- UTF-8 takes up less space, up to 4 bytes, **while UTF-4 takes up less space, up to 3 bytes!**
- It's **fully ASCII compatible**, just like UTF-8!
- Whatever the code point values, memory efficiency for UTF-4 is never worse than that of UTF-8!
  - It has more efficient when codepoints are in the range 2176–16511 or 67712–4210315:
  - ![image](https://github.com/user-attachments/assets/65468304-b572-45d1-875b-42888f7d112f)

## Disadvantage?
- If even one bit of data is corrupted, there is a high probability that the entire thing will be corrupted.
- Synchronization is not possible if you do not read from the beginning.
- The downside is that it is not an international standard. And no one knows even its existence.

## Usability?
This can be used when you need to reduce the size of a file (or packet).
For example:
- If you need to transmit or store a lot of text with codepoints in the range 2176–16511 or 67712–4210315.
- When encrypting text with a complex (resulting in very large size) encryption algorithm
- When zombies appear in the world and you need to communicate quickly with the other side of the globe (just kidding)

## Characters for all code points for which UTF-4 is more efficient than UTF-8
(Please note that it may contain some extended characters, unused characters, or errors)
- Languages: Arabic, Pashto, Urdu, Persian, Sanskrit, Hindi, Marathi, Nepali, Bengali, Assamese, Manipuri, Punjabi, Gujarati, Odia (Oriya), Tamil, Telugu, Kannada (Kannada), Malayalam, Sinhala (Sri Lankan), Thai, Lao, Tibetan, Myanmar (Burma), Georgian, Extended Korean, Japanese, Chinese, Extended Latin, Greek, etc
- Special characters: Emoji, Circle letters(numbers, alphabets), Unit symbol, Numbers, Math constant symbol, Math symbols, Roman numbers, braille(finger alphabet), 

Every characters that better than UTF-8 is on [Here](./advantage-characters.txt)

## UTF-4 vs UTF-8 summary
While the existing UTF-8 was designed with stability in mind,
UTF-4 is designed solely for memory efficiency.

Therefore, problems arise when data is corrupted or not read from the beginning.

While using UTF-4 is advantageous if data is not corrupted,
in practice, data corruption can occur, so using UTF-8 seems more appropriate.
