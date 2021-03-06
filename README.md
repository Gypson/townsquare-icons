# Townsquare Icons

Collection of Heroicons. (Made by @codex-zaydek)

## Usage

Icons are grouped into the following categories: `Solid` and `Outline`. Icon names are prefixed with "Icon" and can be imported from their category folder.

Icon components support the following props:

- `accessibilityLabel` (string) - Label to provide accessibility controls.
- `decorative` (bool) - Icon is decorative only and does not require accessibility controls.
- `size` (number | string) - Size of the icon (`em` is preferred). Default is "1em".
- `color` (string) - Custom CSS hexcode or name to color the icon SVG with.
- `inline` (bool) - Display the component inline instead of block.

> `accessibilityLabel` or `decorative` is required, but not both.
