# JavaScript Logic Challenge

3️⃣ This is the THIRD PROJECT of the Full Stack Development Bootcamp with Geekshubs Academy. Based only on JAVASCRIPT logic.

💻 Stack: <img src="https://img.shields.io/badge/JavaScript-F7DF1E">

###Table of Contents 🗂️

- [Repository of the exercise (ES) ℹ️](#Repository-of-the-exercise)
- [Coding process ➡️](#➡️-coding-process)
- [Author ✏️](#-author)



## Repository of the exercise
- Cloned from here: https://github.com/GeeksHubsAcademy/javascript-empanadas-challenge

###  ➡️  Coding process:
- ##### Coding time: 2 hours ⏳

- ##### Project explanation: 💬

The idea is to find the best way to combine halves with different prices, paying for the most expensive of each group of 3.
We look for a function that takes 3 arguments (a, b, c) that are the number of empanadas (the 3 original types - chicken, meat & veggies)
General premises:
    - 3x1 offer (pay the highest price)
    - Total number of empanadas is less than 40
    - Total number of empanadas is multiple of 3
    - There are 3 types of empanadas
    - You can join 2 different halves in one empanada (paying the average price)

After writing the proper code, the exercise would be done after all tests are passed 👌

MY SOLUTION of this exercise is simple:
 - 3 if statements take care of the possible errors:
    - total order is not multiple of 3
    - total order is more than 40
    - one or more of the ammounts (a, b, c) is less than 0.
- Given the previous conditions, I find the arithmetic mean of total order.
    - I would add all order ammounts (a, b and c) as "total price"
    - And divide it by 3
    - This would result in a decimal number, that I would round up using "Math.ceil()"

After a first try I checked the expected results of tests were whole numbers, so I used Math.floor.
Then changed it to Math.ceil as I realised they were rounded up.
Last I took care of Errors using "throw Error".
For this I did 3 separate "ifs" with different error messages but it could be done altoghether as a general "throw Error"


### ✏️ Author:
**Sergio Torres García**
Project Developer ([GitHub](https://github.com/SergioTorresGarcia))