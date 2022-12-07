# Ionic 3 Skeleton Loader component
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmrhieu%2Fionic-skeleton-loader.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmrhieu%2Fionic-skeleton-loader?ref=badge_shield)


## Setup

After clone or download this project.

Install Ionic CLI

```
$ npm install -g ionic
```

Install dependencies

```
$ cd <project>
$ npm install
```

Run the app on Localhost

```
$ ionic serve
```

See more at [Get started with Ionic](https://ionicframework.com/getting-started/)

## skeleton-item
`<skeleton-item>` is the main block to build more complex skeleton-style loading screen

### Usage

```
<skeleton-item height="50px" width="50px" rounded></skeleton-item>
```

You can add CSS classes or inline CSS as normal HTML element

```
<skeleton-item class="pin-image" height="50px" width="50px" rounded style="margin-bottom: 16px"></skeleton-item>
```

### Available attributes

- {height: string} can be px or %, default value is '16px'
- {width: string} can be px or %, default value is '100%'
- {radius: string} set border-radius, default value is '4px'
- {rounded} set border-radius to 999em to make rounded block when the height and width have the same value
- {no-animated} disable animation effect


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmrhieu%2Fionic-skeleton-loader.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmrhieu%2Fionic-skeleton-loader?ref=badge_large)