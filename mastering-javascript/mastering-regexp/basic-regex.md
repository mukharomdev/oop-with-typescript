Regular expressions (regex or regexp) are extremely useful in extracting information from any text by searching for one or more matches of a specific search pattern (i.e. a specific sequence of ASCII or unicode characters).

Fields of application range from validation to parsing/replacing strings, passing through translating data to other formats and web scraping.

One of the most interesting features is that once you’ve learned the syntax, you can actually use this tool in (almost) all programming languages ​​(JavaScript, Java, VB, C #, C / C++, Python, Perl, Ruby, Delphi, R, Tcl, and many others) with the slightest distinctions about the support of the most advanced features and syntax versions supported by the engines.

Let’s start by looking at some examples and explanations
#### Basic topics
**Anchors — ^ and $**
```sh
^The        matches any string that starts with The -> Try it!
end$        matches a string that ends with end
^The end$   exact string match (starts and ends with The end)
roar        matches any string that has the text roar in it
```
**Quantifiers — * + ? and {}**
```sh
abc*        matches a string that has ab followed by zero or more c -> Try it!
abc+        matches a string that has ab followed by one or more c
abc?        matches a string that has ab followed by zero or one c
abc{2}      matches a string that has ab followed by 2 c
abc{2,}     matches a string that has ab followed by 2 or more c
abc{2,5}    matches a string that has ab followed by 2 up to 5 c
a(bc)*      matches a string that has a followed by zero or more copies of the sequence bc
a(bc){2,5}  matches a string that has a followed by 2 up to 5 copies of the sequence bc

```
**OR operator — | or [ ]**
```
a(b|c)     matches a string that has a followed by b or c (and captures b or c) -> Try it!
a[bc]      same as previous, but without capturing b or c

```
**Character classes — \d \w \s and .**
```sh
\d         matches a single character that is a digit -> Try it!
\w         matches a word character (alphanumeric character plus underscore) -> Try it!
\s         matches a whitespace character (includes tabs and line breaks)
.          matches any character -> Try it!

```
Use the . operator carefully since often class or negated character class (which we’ll cover next) are faster and more precise.

\d, \w and \s also present their negations with \D, \W and \S respectively.

For example, \D will perform the inverse match with respect to that obtained with \d.
```
\D         matches a single non-digit character -> Try it!
```
In order to be taken literally, you must escape the characters ^.[$()|*+?{\with a backslash \ as they have special meaning.

```
\$\d       matches a string that has a $ before one digit -> Try it!

```

Notice that you can match also non-printable characters like tabs \t, new-lines \n, carriage returns \r.

Flags

We are learning how to construct a regex but forgetting a fundamental concept: flags.

A regex usually comes within this form /abc/, where the search pattern is delimited by two slash characters /. At the end we can specify a flag with these values (we can also combine them each other):

   - g (global) does not return after the first match, restarting the subsequent searches from the end of the previous match
   - m (multi-line) when enabled ^ and $ will match the start and end of a line, instead of the whole string
   - i (insensitive) makes the whole expression case-insensitive (for instance /aBc/i would match AbC)

...
# Intermediate topics
**Grouping and capturing — ()**
```
a(bc)           parentheses create a capturing group with value bc -> Try it!
a(?:bc)*        using ?: we disable the capturing group -> Try it!
a(?<foo>bc)     using ?<foo> we put a name to the group -> Try it!

```
This operator is very useful when we need to extract information from strings or data using your preferred programming language. Any multiple occurrences captured by several groups will be exposed in the form of a classical array: we will access their values specifying using an index on the result of the match.

If we choose to put a name to the groups (using (?<foo>...)) we will be able to retrieve the group values using the match result like a dictionary where the keys will be the name of each group.

source :
- https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285


