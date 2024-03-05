**Bold**
_Italic_
`Monospaced`

This is **Bold** and this is _Italic_

Abstract 1. Let's start abstract 1.
This is still abstract 1.

Abstract 2. And after a blank line this is Abstract 2.

```
this text **won't** be _formatted_

because I want it
```

Abstract 3. Just to end this file

// Expected result:
// <p><b>Bold</b>
// <i>Italic</i>
// <tt>Monospaced</tt></p>
// <p>This is <b>Bold</b> and this is <i>Italic</i></p>
// <p>Abstract 1. Let's start abstract 1.
// This is still abstract 1.</p>
// <p>Abstract 2. And after a blank line this is Abstract 2.</p>
// <pre>
// this text **won't** be _formatted_
//
// because I want it
// </pre>
// <p>Abstract 3. Just to end this file</p>
