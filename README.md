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
  "profilePicture": "https://pbs.twimg.com/profile_images/1380814586811711492/INwiwIpB_400x400.jpg",
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
