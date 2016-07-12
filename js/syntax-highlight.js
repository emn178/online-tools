(function ($) {
  var LANGUAGES = {
    '1c': '1C',
    'accesslog': 'Access log',
    'actionscript': 'ActionScript',
    'ada': 'Ada',
    'apache': 'Apache',
    'applescript': 'AppleScript',
    'arduino': 'Arduino',
    'armasm': 'ARM Assembly',
    'asciidoc': 'AsciiDoc',
    'aspectj': 'AspectJ',
    'autohotkey': 'AutoHotkey',
    'autoit': 'AutoIt',
    'avrasm': 'AVR Assembler',
    'axapta': 'Axapta',
    'bash': 'Bash',
    'basic': 'Basic',
    'bnf': 'Backus–Naur Form',
    'brainfuck': 'Brainfuck',
    'cal': 'C/AL',
    'capnproto': 'Cap’n Proto',
    'ceylon': 'Ceylon',
    'clojure-repl': 'Clojure REPL',
    'clojure': 'Clojure',
    'cmake': 'CMake',
    'coffeescript': 'CoffeeScript',
    'coq': 'Coq',
    'cos': 'Caché Object Script',
    'cpp': 'C++',
    'crmsh': 'crmsh',
    'crystal': 'Crystal',
    'cs': 'C#',
    'csp': 'CSP',
    'css': 'CSS',
    'd': 'D',
    'dart': 'Dart',
    'delphi': 'Delphi',
    'diff': 'Diff',
    'django': 'Django',
    'dns': 'DNS Zone file',
    'dockerfile': 'Dockerfile',
    'dos': 'DOS .bat',
    'dsconfig': 'dsconfig',
    'dts': 'Device Tree',
    'dust': 'Dust',
    'elixir': 'Elixir',
    'elm': 'Elm',
    'erb': 'ERB (Embedded Ruby)',
    'erlang-repl': 'Erlang REPL',
    'erlang': 'Erlang',
    'excel': 'Excel',
    'fix': 'FIX',
    'fortran': 'Fortran',
    'fsharp': 'F#',
    'gams': 'GAMS',
    'gauss': 'GAUSS',
    'gcode': 'G-code (ISO 6983)',
    'gherkin': 'Gherkin',
    'glsl': 'GLSL',
    'go': 'Go',
    'golo': 'Golo',
    'gradle': 'Gradle',
    'groovy': 'Groovy',
    'haml': 'Haml',
    'handlebars': 'Handlebars',
    'haskell': 'Haskell',
    'haxe': 'Haxe',
    'hsp': 'HSP',
    'html': 'HTML',
    'htmlbars': 'HTMLBars',
    'http': 'HTTP',
    'inform7': 'Inform 7',
    'ini': 'Ini',
    'irpf90': 'IRPF90',
    'java': 'Java',
    'javascript': 'JavaScript',
    'json': 'JSON',
    'julia': 'Julia',
    'kotlin': 'Kotlin',
    'lasso': 'Lasso',
    'ldif': 'LDIF',
    'less': 'Less',
    'lisp': 'Lisp',
    'livecodeserver': 'LiveCode',
    'livescript': 'LiveScript',
    'lsl': 'Linden Scripting Language',
    'lua': 'Lua',
    'makefile': 'Makefile',
    'markdown': 'Markdown',
    'mathematica': 'Mathematica',
    'matlab': 'Matlab',
    'maxima': 'Maxima',
    'mel': 'MEL',
    'mercury': 'Mercury',
    'mipsasm': 'MIPS Assembly',
    'mizar': 'Mizar',
    'mojolicious': 'Mojolicious',
    'monkey': 'Monkey',
    'moonscript': 'MoonScript',
    'nginx': 'Nginx',
    'nimrod': 'Nimrod',
    'nix': 'Nix',
    'nsis': 'NSIS',
    'objectivec': 'Objective-C',
    'ocaml': 'OCaml',
    'openscad': 'OpenSCAD',
    'oxygene': 'Oxygene',
    'parser3': 'Parser3',
    'perl': 'Perl',
    'pf': 'pf',
    'php': 'PHP',
    'pony': 'Pony',
    'powershell': 'PowerShell',
    'processing': 'Processing',
    'profile': 'Python profile',
    'prolog': 'Prolog',
    'protobuf': 'Protocol Buffers',
    'puppet': 'Puppet',
    'purebasic': 'PureBASIC',
    'python': 'Python',
    'q': 'Q',
    'qml': 'QML',
    'r': 'R',
    'rib': 'RenderMan RIB',
    'roboconf': 'Roboconf',
    'rsl': 'RenderMan RSL',
    'ruby': 'Ruby',
    'ruleslanguage': 'Oracle Rules Language',
    'rust': 'Rust',
    'scala': 'Scala',
    'scheme': 'Scheme',
    'scilab': 'Scilab',
    'scss': 'SCSS',
    'smali': 'Smali',
    'smalltalk': 'Smalltalk',
    'sml': 'SML',
    'sqf': 'SQF',
    'sql': 'SQL',
    'stan': 'Stan',
    'stata': 'Stata',
    'step21': 'STEP Part 21',
    'stylus': 'Stylus',
    'swift': 'Swift',
    'taggerscript': 'Tagger Script',
    'tap': 'Test Anything Protocol',
    'tcl': 'Tcl',
    'tex': 'TeX',
    'thrift': 'Thrift',
    'tp': 'TP',
    'twig': 'Twig',
    'typescript': 'TypeScript',
    'vala': 'Vala',
    'vbnet': 'VB.NET',
    'vbscript-html': 'VBScript in HTML',
    'vbscript': 'VBScript',
    'verilog': 'Verilog',
    'vhdl': 'VHDL',
    'vim': 'Vim Script',
    'x86asm': 'Intel x86 Assembly',
    'xl': 'XL',
    'xml': 'XML',
    'xquery': 'XQuery',
    'yaml': 'YAML',
    'zephir': 'Zephir'
  };

  var STYLES = ['Default', 'Agate', 'Androidstudio', 'Arduino Light', 'Arta', 'Ascetic', 'Atelier Cave Dark', 'Atelier Cave Light', 'Atelier Dune Dark', 'Atelier Dune Light', 'Atelier Estuary Dark', 'Atelier Estuary Light', 'Atelier Forest Dark', 'Atelier Forest Light', 'Atelier Heath Dark', 'Atelier Heath Light', 'Atelier Lakeside Dark', 'Atelier Lakeside Light', 'Atelier Plateau Dark', 'Atelier Plateau Light', 'Atelier Savanna Dark', 'Atelier Savanna Light', 'Atelier Seaside Dark', 'Atelier Seaside Light', 'Atelier Sulphurpool Dark', 'Atelier Sulphurpool Light', 'Brown Paper', 'Codepen Embed', 'Color Brewer', 'Dark', 'Darkula', 'Docco', 'Dracula', 'Far', 'Foundation', 'Github Gist', 'Github', 'Googlecode', 'Grayscale', 'Gruvbox Dark', 'Gruvbox Light', 'Hopscotch', 'Hybrid', 'Idea', 'Ir Black', 'Kimbie Dark', 'Kimbie Light', 'Magula', 'Mono Blue', 'Monokai Sublime', 'Monokai', 'Obsidian', 'Ocean', 'Paraiso Dark', 'Paraiso Light', 'Pojoaque', 'Purebasic', 'Qtcreator Dark', 'Qtcreator Light', 'Railscasts', 'Rainbow', 'School Book', 'Solarized Dark', 'Solarized Light', 'Sunburst', 'Tomorrow Night Blue', 'Tomorrow Night Bright', 'Tomorrow Night Eighties', 'Tomorrow Night', 'Tomorrow', 'Vs', 'Xcode', 'Xt 256', 'Zenburn'];

  var localStorage = window.localStorage;

  var elements = {}, recentLanguages = [], lastStyle = 'Default';
  if (localStorage) {
    try {
      lastStyle = localStorage['lastStyle'] || 'Default';
      var array = JSON.parse(localStorage['recentLanguages']);
      if ($.isArray(array)) {
        recentLanguages = array;
      }
    } catch (e) {
    }
  }

  function highlight(input) {
    elements.code.text(input);
    elements.code.attr('class', elements.language.val());
    hljs.highlightBlock(elements.code[0]);
  }
  window.highlight = highlight;

  function refreshRecentLanguages() {
    var html = '';
    recentLanguages.forEach(function (key) {
      html += '<option value="' + key + '">' + LANGUAGES[key] + '</option>';
    });
    elements.groupRecent.html(html);
  }

  $(document).ready(function () {
    elements.code = $('<code class="html"/>');
    $('<pre/>').append(elements.code).insertAfter($('#output'));
    $('#output').remove();

    elements.groupRecent = $('<optgroup label="Recent"></optgroup>')
    elements.groupAll = $('<optgroup label="All"></optgroup>');
    elements.language = $('<select />')
      .append(elements.groupRecent, elements.groupAll)
      .change(function () {
        $('#execute').click();

        recentLanguages.unshift(elements.language.val());
        var arr = [];
        // unique
        recentLanguages.forEach(function (key) {
          if ($.inArray(key, arr) == -1) {
            arr.push(key);
          }
        });
        recentLanguages = arr.slice(0, 10);

        if (localStorage) {
          localStorage['recentLanguages'] = JSON.stringify(recentLanguages);
        }

        var label = elements.language.find(":selected").parent().attr('label');
        if (label == 'All') {
          refreshRecentLanguages();
        }
      });
    $('<div class="option-block"><label>Language: </label></div>').append(elements.language).insertBefore('.submit');

    var html = '';
    for (var key in LANGUAGES) {
      html += '<option value="' + key + '">' + LANGUAGES[key] + '</option>';
    }
    elements.groupAll.html(html);
    refreshRecentLanguages();
    if (recentLanguages.length) {
      elements.language.val(recentLanguages[0]);
    }

    elements.style = $('<select id="style"></select>').change(function () {
      var style = elements.style.val();
      $('link[title]').attr('disabled', 'disabled');
      $('link[title="' + style + '"]').removeAttr('disabled');
      if (localStorage) {
        localStorage['lastStyle'] = style;
      }
    });
    $('<div class="option-block"><label>Style: </label></div>').append(elements.style).insertBefore('.submit');

    html = '';
    STYLES.forEach(function (style) {
      html += '<option value="' + style + '">' + style + '</option>';
    });
    elements.style.html(html).val(lastStyle).change();
  });
})(jQuery);
