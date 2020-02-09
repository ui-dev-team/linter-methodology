---
title: Reset
path: reset
group: reset
---

# Foundations

## Reset

The reset file attempts to reset and normalize (hereafter called reset) standard elements to avoid user-agent stylesheets creating varying visual styles across browsers.

### What elements are reset?

Acrylic does not reset _every_ HTML element.
Only elements that are commonly used are reset: e.g. `<h1>`-`<h6>` but not `<samp>`.
Acrylic will only reset for supported browser use cases: e.g. Acrylic would not attempt to reset for IE8.

Acrylic chooses to only reset elements that are commonly used and in common use cases so that the reset is as small as possible.
If you are commonly resetting elements that acrylic does not, please create an RFC so that it can be added.
