# Vowels – Vowel Finder

This project is a simple **JavaScript program** that identifies and displays all the vowels present in a given string.

## Description

The program checks each character of a string and determines whether it is a vowel.

The vowels checked by the program are:

```text
a, e, i, o, u
```

For the given input:

```text
education
```

The vowels are:

```text
e
u
a
i
o
```

## How It Works

1. A string is stored in the `val` variable.
2. The program uses a `for` loop to go through each character.
3. Each character is compared with `a`, `e`, `i`, `o`, and `u`.
4. If the character is a vowel:

   * It is added to the `comp` variable.
   * The vowel is displayed using `document.write()`.
5. After checking all characters, the original string is displayed.

## Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vowels</title>
</head>
<body>
    <script>
        let val = "education";
        let comp = "";

        for (let i = 0; i < val.length; i++) {
            if (
                val[i] == "a" ||
                val[i] == "e" ||
                val[i] == "i" ||
                val[i] == "o" ||
                val[i] == "u"
            ) {
                comp += val[i];
                document.write("vowels" + "<br>" + val[i] + "<br>");
            }
        }

        document.write(val);
    </script>
</body>
</html>
```

## Example

### Input

```text
education
```

### Output

```text
vowels
e
vowels
u
vowels
a
vowels
i
vowels
o
education
```

## Technologies Used

* HTML5
* JavaScript

## How to Run

1. Save the code as `index.html`.
2. Open `index.html` in a web browser.
3. The vowels found in the string will be displayed on the webpage.

## Purpose

This project demonstrates:

* JavaScript variables
* `for` loops
* String indexing
* String length
* Conditional statements
* Logical OR (`||`)
* String concatenation
* `document.write()`
