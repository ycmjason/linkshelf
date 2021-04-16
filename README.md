# LinkShelf

A command-line tool to generate your own "linktree-like" website.

## Install

```
npm i -g linkshelf
```

## Usage

```
> linkshelf [config] [outDir]
```

Example:

```
> linkshelf myconfig.json dist
```

## Configuration

Here is an example configuration

```json
{
  "profilePicture": "./assets/pic.png",
  "name": "YCM Jason",
  "links": [
    {
      "title": "Github",
      "url": "https://github.com/ycmjason"
    },
    {
      "title": "Youtube",
      "url": "https://www.youtube.com/channel/UC5dnaJZdEShWfZOwSCXNGcA"
    }
  ]
}
```

## Author

YCM Jason
