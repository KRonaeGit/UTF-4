# UTF-4
UTF-4 is a NEW 1~3 byte variable length encoding!

## Why UTF-4?
UTF-8, which we mainly use and is an international standard, is a variable length method of 1~4 bytes. (Maximum 4 bytes)
But in fact, 3 bytes is enough to express all the characters of Unicode.

While retaining all the advantages of UTF-8, UTF-4 **can accommodate more characters in a smaller space than UTF-8!**

## Structure?
- 1byte: `0xxxxxxx`
- 2byte: `10xxxxxx xxxxxxxx`
- 3byte: `11xxxxxx xxxxxxxx xxxxxxxx`

## Advantage?
- It's **fully ASCII compatible**, just like UTF-8!
- UTF-8 can only accommodate `2,164,864` characters,
  while UTF-4 can accommodate `4,210,816` characters! (So UTF-4 is better for accommodating)
- UTF-8 takes up less space, up to 4 bytes, **while UTF-4 takes up less space, up to 3 bytes!**
- It always has an advantage over UTF-8, no matter what the code point value is! (Please see the table below)
  ![image](https://github.com/user-attachments/assets/65468304-b572-45d1-875b-42888f7d112f)
