# Main structure

All pages are `.html` files stored in the main folder at https://github.com/lorenzocharles/report

* `index.html` is the main file - Foreword
* `summary.html` is Summary
* `report.html` is Report > Background
* `report.narrative.html` is Report > Main Narrative
  * `_includes/report.narrative.1.html` is Report > Narrative > Introduction
  * `_includes/report.narrative.2.html` is Report > Narrative > Mare Nostrum's Demise
  * etc.

## Making changes

1. Right-click on a `.html` file from the list above, e.g. `report.html`, and then `Open Link in New Tab`
2. In the new tab, click on the *pencil* button on the top-right to start editing that file
3. Use <kbd>cmd</kbd> + <kbd>F</kbd> to search for the word / sentence you want to change
4. Make your changes to the content
5. When you're done, scroll down to the bottom of the page and the press the green `Commit changes` button

### Changing images

Images are inside code blocks that look like this

```ruby
{% include image-block.html caption='Deaths, 1993 - 2012. Source: Migreurop.' image='3.1-map2.jpg' %}
```
You can change the text for `caption`, by editing the bit between `caption='` and `'`. Make sure there are no single quotes `'` in that text, otherwise the image code will break. 

Likewise, you can change the file by editing the bit between `image='` and `'`. 

It's good practice not to have spaces in file names, so before you upload a file make sure its name has no spaces (and possibly only letters and numbers), e.g. change `My File / final.jpg` to `my-file-final.jpg`

###  Changing footnotes

Footnotes are inside code blocks that look like this 

```ruby
{% include footnote-block.html content='See Hein de Haas [...] in consequence.' %}
```

We recommend using www.html-cleaner.com if you're copying from a Word document.

1. In HTML Cleaner, paste in your content from the Word doc 
2. Press `Clean HTML` under the HTML screen on the left
3. To use a footnote, navigate to the bottom of the HTML where you'll find links to the footnotes that look like `<p><a>something or other [8]</a> Footnotes content here </p>`
4. **Copy** only the text which you want to appear when someone clicks the red flag, e.g. in the above example you'd copy `Footnotes content here`
5. Back to Github, **paste** the footnote text in between the `content='` and `'`. Make sure there are no single quotes `'` in that text, otherwise the footnote code will break.
6. When you're happy with the changes, scroll down to the bottom of the page and the press the green `Commit changes` button
