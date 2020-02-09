---
title: Color
path: color
group: color
---

- Start Date: 2017-06-9

# Summary

Create a single method for developers to access the Anaplan color palette in Acrylic:
creating a common vocabulary between design and engineering, avoiding common
bugs, and removing unnecessary work for designers and developers.

Scenarios:

Color value needs changing
“Name” needs changing
New palette
multiple palettes same page
Default color palette is old - needs deprecating when called
Create custom palette/theme
Hot load custom theme

Approaches:

- expose global variables
- only expose colors via a function (keeping colors private)
  - variable names are internal, i.e. we can control the exposed API
  - refactoring names internally doesn’t expose external api.
- CSS variables

# Motivation

## Why are we doing this?

With a common color palette we create a common visual experience that sets
user's expectations around what the colors mean.

Using hex values directly in code can cause issues:

- a single character mistake can cause slight variations in design that can be hard to catch by the naked eye.
- they are abstract and don't have inherent semantics
- hard to communicate hex values when collaborating
- not easy to memorize

## What use cases does it support?

With a single interface to use for colors we can:

- easily reuse colors
- create a common vocabulary for designers and engineers to use
- avoids having to copy/paste hex values from designs
- speeds up red lining as hex values are no longer necessary
- any changes to the color palette can be globally applied in a single location
- easily allow for "theme" switching as we would just load a different color palette w/ the same "API" ( variable names), even being able to extend this to customers.

## What is the expected outcome?

- eliminate direct hex/rgba values use in code
- enforce consistent usage of the Anaplan color palette
- create shared vocabulary for Anaplan color palettes between design and engineering

# Detailed design

`get-color($name, $opacity)`

By importing `plum` (or `get-color` directly), developers can call the function anywhere in their SASS. Using the documentation or designs, the developer provides a public api `name` which maps to an private variable that then returns the appropriate color variable. Optionally, an alpha can be provided.

## SASS API

### \$name

The name parameter establishes the vocabulary of the color palette and serves as the API for `get-color`. The name parameter can abstract away the hex or rgba values: i.e. rather than a designer/developer remembering/memorizing and saying `#3179B1` we can use a semantically meaningful word like `primary` or `brand`. Additionally, the vocabulary can be larger than the actual values in the palette: `primary` and `brand` can map to the same private value.

Exposing a set of distinct names, mapped to our private variables and colors, means that we can change the API and maintain backwards compatibility. For example, if we started with a name `foo` and later wanted to use `bar`, we can keep both `foo` and `bar` in the API; `@warn`-ing anyone who uses the deprecated `foo` that `bar` is now the preferred `$name` until a certain point in time when it will break ( a major version upgrade ). If we exposed global variables that we wanted to change ( `$foo` ) changing the variable name ( `$foo` -> `$bar` ) would break consumers' builds.

Names will be kept as a flat map. Creating hierarchy complicates the function syntax subsequently creating a poor developer experience. With hierarchy, an additional parameter is required for each level of hierarchy (e.g. `get-color(level1, level2, brand)`) or it forces the function to require named parameters (e.g. `get-color($firstLevel: level1, $secondLevel: level2, $name: brand)`) which is bug prone in that sass does not have a mechanism for forcing named/un-named parameters. Fortunately, if the above principles of backwards compatibility are maintained adding a prefix/suffix can create a pseudo-hierarchy to the names if necessary.

Lastly, multiple palettes can be created (we are starting with the "legacy" palette) and an additional parameter can be added to allow users to switch between palettes. It is the responsibility of Acrylic to maintain the public api names in all supported palettes.

### \$alpha

The alpha parameter can take any value that the "a" parameter of `rgba()` would as well as common values in design: `light` could be shorthand for `0.30`, but one could also pass `0.40` when necessary.

Complex logic can be added to `@warn` a user when they are using an exact value that is close to a common value: e.g. "You passed value "0.35"; "light" (0.30) is a preferred value".

Unlike opacity, alpha allows the control of a single property and doesn't affect children. If a developer wants only the "pure" color returned, so they can do manipulation that they want (e.g opacity for ), the alpha parameter is optional and when not provided will return the "pure" color.

# How We Teach This

Clear documentation on the Acrylic website.

# Alternatives

- CSS4 variables
  - Our browser support needs block this currently.
- Expose the sass functionality in a similar JS based API.
  - Sass should derive from JS or vice-versa.
- Only whitelist for specific hex values/rgba values.
- Expose global variables rather than function.
  - Unable to control external API: changing a variable name doesn't allow for backwards compatible API.
  - To expose multiple color palettes, a prefix/suffix would need to be reused from the start. Otherwise, the API would be completely re-written to introduce additional palettes.

# Unresolved questions

# Future features

- Expose a JS api in addition to the sass.
- Import colors from JSON
- Export Sketch color palette generated from internal palettes
- explore simultaneously supporting CSS4 variables to allow for easy theme-ing.
