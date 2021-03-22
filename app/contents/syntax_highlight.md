---
title: Syntax Highlight
template: page.pug
js: js/syntax-highlight.js
method: highlight
action: Highlight
auto_update: true
description: Online syntax highlight tool
keywords: syntax highlight
---
<span>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/highlight.min.js"></script>
  <link rel="stylesheet" title="Default" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/default.min.css" />
  <link rel="alternate stylesheet" title="Agate" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/agate.min.css" disabled />
  <link rel="alternate stylesheet" title="Androidstudio" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/androidstudio.min.css" disabled />
  <link rel="alternate stylesheet" title="Arduino Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/arduino-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Arta" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/arta.min.css" disabled />
  <link rel="alternate stylesheet" title="Ascetic" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/ascetic.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Cave Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-cave-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Cave Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-cave-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Dune Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-dune-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Dune Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-dune-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Estuary Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-estuary-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Estuary Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-estuary-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Forest Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-forest-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Forest Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-forest-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Heath Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-heath-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Heath Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-heath-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Lakeside Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-lakeside-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Lakeside Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-lakeside-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Plateau Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-plateau-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Plateau Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-plateau-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Savanna Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-savanna-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Savanna Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-savanna-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Seaside Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-seaside-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Seaside Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-seaside-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Sulphurpool Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-sulphurpool-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Atelier Sulphurpool Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/atelier-sulphurpool-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Brown Paper" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/brown-paper.min.css" disabled />
  <link rel="alternate stylesheet" title="Codepen Embed" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/codepen-embed.min.css" disabled />
  <link rel="alternate stylesheet" title="Color Brewer" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/color-brewer.min.css" disabled />
  <link rel="alternate stylesheet" title="Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Darkula" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/darkula.min.css" disabled />
  <link rel="alternate stylesheet" title="Docco" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/docco.min.css" disabled />
  <link rel="alternate stylesheet" title="Dracula" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/dracula.min.css" disabled />
  <link rel="alternate stylesheet" title="Far" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/far.min.css" disabled />
  <link rel="alternate stylesheet" title="Foundation" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/foundation.min.css" disabled />
  <link rel="alternate stylesheet" title="Github Gist" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/github-gist.min.css" disabled />
  <link rel="alternate stylesheet" title="Github" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/github.min.css" disabled />
  <link rel="alternate stylesheet" title="Googlecode" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/googlecode.min.css" disabled />
  <link rel="alternate stylesheet" title="Grayscale" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/grayscale.min.css" disabled />
  <link rel="alternate stylesheet" title="Gruvbox Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/gruvbox-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Gruvbox Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/gruvbox-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Hopscotch" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/hopscotch.min.css" disabled />
  <link rel="alternate stylesheet" title="Hybrid" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/hybrid.min.css" disabled />
  <link rel="alternate stylesheet" title="Idea" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/idea.min.css" disabled />
  <link rel="alternate stylesheet" title="Ir Black" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/ir-black.min.css" disabled />
  <link rel="alternate stylesheet" title="Kimbie Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/kimbie.dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Kimbie Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/kimbie.light.min.css" disabled />
  <link rel="alternate stylesheet" title="Magula" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/magula.min.css" disabled />
  <link rel="alternate stylesheet" title="Mono Blue" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/mono-blue.min.css" disabled />
  <link rel="alternate stylesheet" title="Monokai Sublime" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/monokai-sublime.min.css" disabled />
  <link rel="alternate stylesheet" title="Monokai" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/monokai.min.css" disabled />
  <link rel="alternate stylesheet" title="Obsidian" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/obsidian.min.css" disabled />
  <link rel="alternate stylesheet" title="Ocean" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/ocean.min.css" disabled />
  <link rel="alternate stylesheet" title="Paraiso Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/paraiso-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Paraiso Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/paraiso-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Pojoaque" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/pojoaque.min.css" disabled />
  <link rel="alternate stylesheet" title="Purebasic" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/purebasic.min.css" disabled />
  <link rel="alternate stylesheet" title="Qtcreator Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/qtcreator_dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Qtcreator Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/qtcreator_light.min.css" disabled />
  <link rel="alternate stylesheet" title="Railscasts" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/railscasts.min.css" disabled />
  <link rel="alternate stylesheet" title="Rainbow" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/rainbow.min.css" disabled />
  <link rel="alternate stylesheet" title="School Book" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/school-book.min.css" disabled />
  <link rel="alternate stylesheet" title="Solarized Dark" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/solarized-dark.min.css" disabled />
  <link rel="alternate stylesheet" title="Solarized Light" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/solarized-light.min.css" disabled />
  <link rel="alternate stylesheet" title="Sunburst" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/sunburst.min.css" disabled />
  <link rel="alternate stylesheet" title="Tomorrow Night Blue" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/tomorrow-night-blue.min.css" disabled />
  <link rel="alternate stylesheet" title="Tomorrow Night Bright" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/tomorrow-night-bright.min.css" disabled />
  <link rel="alternate stylesheet" title="Tomorrow Night Eighties" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/tomorrow-night-eighties.min.css" disabled />
  <link rel="alternate stylesheet" title="Tomorrow Night" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/tomorrow-night.min.css" disabled />
  <link rel="alternate stylesheet" title="Tomorrow" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/tomorrow.min.css" disabled />
  <link rel="alternate stylesheet" title="Vs" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/vs.min.css" disabled />
  <link rel="alternate stylesheet" title="Xcode" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/xcode.min.css" disabled />
  <link rel="alternate stylesheet" title="Xt 256" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/xt256.min.css" disabled />
  <link rel="alternate stylesheet" title="Zenburn" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/zenburn.min.css" disabled />
</span>
