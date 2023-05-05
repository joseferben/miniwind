# miniwind

*Archived:* I wasn't able to find a good subset that keeps PageSpeed and me as developer happy. 

miniwind is a subset of TailwindCSS that is reasonably small so that it can be used without a build step.

It mainly contains utility classes for layout and spacing.

Use it with something like [pico.css](https://picocss.com/) which provides sensible defaults for typography, colors and responsive design.

miniwind **does not** contain responsive variants or utilities for colors or typography, as those things should be taken care of by your (classless) CSS framework.

## Getting started

Grab `miniwind.css` and serve it with your website. You can also use it with something like [PostCSS](https://postcss.org/) to purge the unused classes.

The compressed file is about 5KB in size.

## Features

- Padding
- Margin
- Width
- Height
- Flex
- Whitespace
- Hyphens

_Warning: The feature set can change at any time. The goal is to keep the CSS file small in size._

## Contributing

Adjust the regex in the `safelist` and run

`npx tailwindcss --config tailwind.config.js --input main.css --output miniwind.css`

If you feel like something is missing or too much, feel free to open an issue or a pull request.
