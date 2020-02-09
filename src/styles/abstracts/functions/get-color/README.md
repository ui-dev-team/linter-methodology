# Introduction

Use get-color for standard colors -- see [get-chart-color](../get-chart-color/README.md)
for guidelines on color usage in charts. Avoid using hex values or rgba values directly.
Additionally, do not use the internal color variables. They are _not_ guaranteed to exist,
be backwards compatible, or be the correct value. The up-to-date names are listed in the
Acrylic documentation.

# Usage

- get-color($name, $opacity: 1.0)

Returns the color value for the associated color. An error will be thrown if a color
that doesn't exist is passed in.

Examples:

get-color(primary); => #3179B1
get-color(primary, 0.5); => rgba(49, 121, 177, 0.5)
get-color(foo); => @error Invalid color name: `foo`

Parameters:
$name - from API list
$opacity - can be a number between 0 and 1, or a percentage, where the number 1 corresponds to 100% (full opacity).

Returns:
Color — The color represented by \$name in Acrylic augemented with the passed opacity.

Raises:
(ArgumentError) — if \$name is not a valid color name
