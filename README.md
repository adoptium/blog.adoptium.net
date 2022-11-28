# ⚠ DEPRECATION NOTICE ⚠

Development of this blog has now moved to [adoptium/adoptium.net](https://github.com/adoptium/adoptium.net/tree/main/content). This blog is no longer live at https://blog.adoptium.net and a redirect has been setup to direct existing traffic to https://adoptium.net/blog. No additional pull requests will be accepted in this repository.

## Prerequisites

1. Install dependencies, run `npm install` in the root directory of the repository.

## Adding Content

1. Create a folder in `blog` that is named after your post's title. [Slugify](https://blog.tersmitten.nl/slugify/) the title if it's more than a single word. Example: `hello-world`.
2. Create a file called `index.md` in the directory you just created (`blog/hello-world`).
3. Add the required metadata at the beginning of the file
    ```
    ---
    title: Hello World
    date: "2020-04-21T12:20:00+00:00"
    author: janedoe
    featuredImage: "./featured_image.png" (optional)
    ---
    ```
    `title` is the title of your post as it appears on the website. `date` is the ISO 8601 timestamp of the publication date (`date -u +"%Y-%m-%dT%H:%M:%SZ"` generates that for you on the command line) and `author` the identifier of the author as specified in the `authors.json`. `featuredImage` (optional) the relative path to the featured image.
4. Write your post in Markdown. Save any images in the folder of your post alongside the `index.md`. Put the biggest resolution in there that you have. Responsive images will automatically be generated for you.

To preview your post, start the local development server by running `gatsby develop` in the root directory of the repository.

**WARNING**: The RSS feed is only generated in production mode: `gatsby build && gatsby serve`.

## Editing Conventions

### Excerpts

On the front page, we only display excerpts and not full posts. By default, Gatsby will shorten your post automatically, which might yield unsatisfactory results. To control that behaviour, add a field `description` with the text you want to see on the front page in the frontmatter of your post (metadata delimited with `---` at the beginning of your post).

### Images with Captions

To add captions to your images, use the following structure:

```markdown
![Alt text](./image.jpg)
*Your caption here* 
```

Our CSS will take care of rendering it correctly by looking for `img + em`.

Example:

```markdown
![Photo depiciting a drop of water](./clean-drop-of-water-liquid.jpg)
*AQA v1.0  is a first drop in an on-going series of improvements.* 
```

### Quotes

```markdown
> Quote
> 
> <cite>Name of the person</cite>
```

Example:

```markdown
> When the Well is Dry, We’ll Know the Worth of Water.
> 
> <cite>Benjamin Franklin</cite>
```

### Guest Posts

Right after the front matter, add the following snippet to introduce the person that wrote the post:

```markdown
<GuestPost>
    Some introductory text
</GuestPost>
```

This is going to render as:

```
<p className="guestpost">
    <em>Some introductory text – Adoptium Team</em>
</p>
```

Example:

```markdown
<GuestPost>
    This a guest post by <a href="https://www.linkedin.com/in/weitzelm/">Mark Weitzel</a>, General Manager, New Relic One at New Relic.
</GuestPost>
```

**Note:** Markdown is not supported within `<GuestPost/>`. This is a limitation of MDX v1 and fixed in [MDX v2](https://github.com/mdx-js/mdx/issues/1041) which is currently being developed.

## Adding Authors

1. Create an entry in `content/authors.json`. Structure:
    ```json
    {
        "janedoe": {
            "name": "Jane Doe",
            "summary": "Some info about Jane",
            "twitter": "Jane's Twitter handle",
            "github": "Jane's GitHub username"
        }
    }
    ```
2. Your profile picture comes from github but this can be changed by adding a profile picture in `content/assets/authors`. If the key in the `authors.json` is `janedoe`, name the image file `janedoe.jpg`.
