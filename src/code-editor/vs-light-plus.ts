export default {
  inherit: false,
  base: 'vs',
  colors: {
    'actionBar.toggledBackground': '#dddddd',
    'activityBarBadge.background': '#007acc',
    'checkbox.border': '#919191',
    'editor.background': '#ffffff',
    'editor.foreground': '#000000',
    'editor.inactiveSelectionBackground': '#e5ebf1',
    'editor.selectionHighlightBackground': '#add6ff80',
    'editorIndentGuide.activeBackground': '#939393',
    'editorIndentGuide.background': '#d3d3d3',
    'editorSuggestWidget.background': '#f3f3f3',
    'input.placeholderForeground': '#767676',
    'list.activeSelectionIconForeground': '#ffffff',
    'list.focusAndSelectionOutline': '#90c2f9',
    'list.hoverBackground': '#e8e8e8',
    'menu.border': '#d4d4d4',
    'notebook.cellBorderColor': '#e8e8e8',
    'notebook.selectedCellBackground': '#c8ddf150',
    'ports.iconRunningProcessForeground': '#369432',
    'searchEditor.textInputBorder': '#cecece',
    'settings.numberInputBorder': '#cecece',
    'settings.textInputBorder': '#cecece',
    'sideBarSectionHeader.background': '#00000000',
    'sideBarSectionHeader.border': '#61616130',
    'sideBarTitle.foreground': '#6f6f6f',
    'statusBarItem.errorBackground': '#c72e0f',
    'statusBarItem.remoteBackground': '#16825d',
    'statusBarItem.remoteForeground': '#ffffff',
    'tab.lastPinnedBorder': '#61616130',
    'terminal.inactiveSelectionBackground': '#e5ebf1',
    'widget.border': '#d4d4d4',
  },
  rules: [
    {
      foreground: '#000000',
      token: 'meta.embedded',
    },
    {
      foreground: '#000000',
      token: 'source.groovy.embedded',
    },
    {
      foreground: '#000000',
      token: 'string meta.image.inline.markdown',
    },
    {
      foreground: '#000000',
      token: 'variable.legacy.builtin.python',
    },
    {
      fontStyle: 'italic',
      token: 'emphasis',
    },
    {
      fontStyle: 'bold',
      token: 'strong',
    },
    {
      foreground: '#000080',
      token: 'meta.diff.header',
    },
    {
      foreground: '#008000',
      token: 'comment',
    },
    {
      foreground: '#0000FF',
      token: 'constant.language',
    },
    {
      foreground: '#098658',
      token: 'constant.numeric',
    },
    {
      foreground: '#098658',
      token: 'variable.other.enummember',
    },
    {
      foreground: '#098658',
      token: 'keyword.operator.plus.exponent',
    },
    {
      foreground: '#098658',
      token: 'keyword.operator.minus.exponent',
    },
    {
      foreground: '#811F3F',
      token: 'constant.regexp',
    },
    {
      foreground: '#800000',
      token: 'entity.name.tag',
    },
    {
      foreground: '#800000',
      token: 'entity.name.selector',
    },
    {
      foreground: '#E50000',
      token: 'entity.other.attribute-name',
    },
    {
      foreground: '#800000',
      token: 'entity.other.attribute-name.class.css',
    },
    {
      foreground: '#800000',
      token: 'entity.other.attribute-name.class.mixin.css',
    },
    {
      foreground: '#800000',
      token: 'entity.other.attribute-name.id.css',
    },
    {
      foreground: '#800000',
      token: 'entity.other.attribute-name.parent-selector.css',
    },
    {
      foreground: '#800000',
      token: 'entity.other.attribute-name.pseudo-class.css',
    },
    {
      foreground: '#800000',
      token: 'entity.other.attribute-name.pseudo-element.css',
    },
    {
      foreground: '#800000',
      token: 'source.css.less entity.other.attribute-name.id',
    },
    {
      foreground: '#800000',
      token: 'entity.other.attribute-name.scss',
    },
    {
      foreground: '#CD3131',
      token: 'invalid',
    },
    {
      fontStyle: 'underline',
      token: 'markup.underline',
    },
    {
      foreground: '#000080',
      fontStyle: 'bold',
      token: 'markup.bold',
    },
    {
      foreground: '#800000',
      fontStyle: 'bold',
      token: 'markup.heading',
    },
    {
      fontStyle: 'italic',
      token: 'markup.italic',
    },
    {
      fontStyle: 'strikethrough',
      token: 'markup.strikethrough',
    },
    {
      foreground: '#098658',
      token: 'markup.inserted',
    },
    {
      foreground: '#A31515',
      token: 'markup.deleted',
    },
    {
      foreground: '#0451A5',
      token: 'markup.changed',
    },
    {
      foreground: '#0451A5',
      token: 'punctuation.definition.quote.begin.markdown',
    },
    {
      foreground: '#0451A5',
      token: 'punctuation.definition.list.begin.markdown',
    },
    {
      foreground: '#800000',
      token: 'markup.inline.raw',
    },
    {
      foreground: '#800000',
      token: 'punctuation.definition.tag',
    },
    {
      foreground: '#0000FF',
      token: 'meta.preprocessor',
    },
    {
      foreground: '#0000FF',
      token: 'entity.name.function.preprocessor',
    },
    {
      foreground: '#A31515',
      token: 'meta.preprocessor.string',
    },
    {
      foreground: '#098658',
      token: 'meta.preprocessor.numeric',
    },
    {
      foreground: '#0451A5',
      token: 'meta.structure.dictionary.key.python',
    },
    {
      foreground: '#0000FF',
      token: 'storage',
    },
    {
      foreground: '#0000FF',
      token: 'storage.type',
    },
    {
      foreground: '#0000FF',
      token: 'storage.modifier',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.operator.noexcept',
    },
    {
      foreground: '#A31515',
      token: 'string',
    },
    {
      foreground: '#A31515',
      token: 'meta.embedded.assembly',
    },
    {
      foreground: '#0000FF',
      token: 'string.comment.buffered.block.pug',
    },
    {
      foreground: '#0000FF',
      token: 'string.quoted.pug',
    },
    {
      foreground: '#0000FF',
      token: 'string.interpolated.pug',
    },
    {
      foreground: '#0000FF',
      token: 'string.unquoted.plain.in.yaml',
    },
    {
      foreground: '#0000FF',
      token: 'string.unquoted.plain.out.yaml',
    },
    {
      foreground: '#0000FF',
      token: 'string.unquoted.block.yaml',
    },
    {
      foreground: '#0000FF',
      token: 'string.quoted.single.yaml',
    },
    {
      foreground: '#0000FF',
      token: 'string.quoted.double.xml',
    },
    {
      foreground: '#0000FF',
      token: 'string.quoted.single.xml',
    },
    {
      foreground: '#0000FF',
      token: 'string.unquoted.cdata.xml',
    },
    {
      foreground: '#0000FF',
      token: 'string.quoted.double.html',
    },
    {
      foreground: '#0000FF',
      token: 'string.quoted.single.html',
    },
    {
      foreground: '#0000FF',
      token: 'string.unquoted.html',
    },
    {
      foreground: '#0000FF',
      token: 'string.quoted.single.handlebars',
    },
    {
      foreground: '#0000FF',
      token: 'string.quoted.double.handlebars',
    },
    {
      foreground: '#811F3F',
      token: 'string.regexp',
    },
    {
      foreground: '#0000FF',
      token: 'punctuation.definition.template-expression.begin',
    },
    {
      foreground: '#0000FF',
      token: 'punctuation.definition.template-expression.end',
    },
    {
      foreground: '#0000FF',
      token: 'punctuation.section.embedded',
    },
    {
      foreground: '#000000',
      token: 'meta.template.expression',
    },
    {
      foreground: '#0451A5',
      token: 'support.constant.property-value',
    },
    {
      foreground: '#0451A5',
      token: 'support.constant.font-name',
    },
    {
      foreground: '#0451A5',
      token: 'support.constant.media-type',
    },
    {
      foreground: '#0451A5',
      token: 'support.constant.media',
    },
    {
      foreground: '#0451A5',
      token: 'constant.other.color.rgb-value',
    },
    {
      foreground: '#0451A5',
      token: 'constant.other.rgb-value',
    },
    {
      foreground: '#0451A5',
      token: 'support.constant.color',
    },
    {
      foreground: '#E50000',
      token: 'support.type.vendored.property-name',
    },
    {
      foreground: '#E50000',
      token: 'support.type.property-name',
    },
    {
      foreground: '#E50000',
      token: 'variable.css',
    },
    {
      foreground: '#E50000',
      token: 'variable.scss',
    },
    {
      foreground: '#E50000',
      token: 'variable.other.less',
    },
    {
      foreground: '#E50000',
      token: 'source.coffee.embedded',
    },
    {
      foreground: '#0451A5',
      token: 'support.type.property-name.json',
    },
    {
      foreground: '#0000FF',
      token: 'keyword',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.control',
    },
    {
      foreground: '#000000',
      token: 'keyword.operator',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.operator.new',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.operator.expression',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.operator.cast',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.operator.sizeof',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.operator.alignof',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.operator.typeid',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.operator.alignas',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.operator.instanceof',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.operator.logical.python',
    },
    {
      foreground: '#0000FF',
      token: 'keyword.operator.wordlike',
    },
    {
      foreground: '#098658',
      token: 'keyword.other.unit',
    },
    {
      foreground: '#800000',
      token: 'punctuation.section.embedded.begin.php',
    },
    {
      foreground: '#800000',
      token: 'punctuation.section.embedded.end.php',
    },
    {
      foreground: '#0451A5',
      token: 'support.function.git-rebase',
    },
    {
      foreground: '#098658',
      token: 'constant.sha.git-rebase',
    },
    {
      foreground: '#000000',
      token: 'storage.modifier.import.java',
    },
    {
      foreground: '#000000',
      token: 'variable.language.wildcard.java',
    },
    {
      foreground: '#000000',
      token: 'storage.modifier.package.java',
    },
    {
      foreground: '#0000FF',
      token: 'variable.language',
    },
    {
      foreground: '#795E26',
      token: 'entity.name.function',
    },
    {
      foreground: '#795E26',
      token: 'support.function',
    },
    {
      foreground: '#795E26',
      token: 'support.constant.handlebars',
    },
    {
      foreground: '#795E26',
      token: 'source.powershell variable.other.member',
    },
    {
      foreground: '#795E26',
      token: 'entity.name.operator.custom-literal',
    },
    {
      foreground: '#267F99',
      token: 'support.class',
    },
    {
      foreground: '#267F99',
      token: 'support.type',
    },
    {
      foreground: '#267F99',
      token: 'entity.name.type',
    },
    {
      foreground: '#267F99',
      token: 'entity.name.namespace',
    },
    {
      foreground: '#267F99',
      token: 'entity.other.attribute',
    },
    {
      foreground: '#267F99',
      token: 'entity.name.scope-resolution',
    },
    {
      foreground: '#267F99',
      token: 'entity.name.class',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.numeric.go',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.byte.go',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.boolean.go',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.string.go',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.uintptr.go',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.error.go',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.rune.go',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.cs',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.generic.cs',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.modifier.cs',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.variable.cs',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.annotation.java',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.generic.java',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.java',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.object.array.java',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.primitive.array.java',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.primitive.java',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.token.java',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.groovy',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.annotation.groovy',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.parameters.groovy',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.generic.groovy',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.object.array.groovy',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.primitive.array.groovy',
    },
    {
      foreground: '#267F99',
      token: 'storage.type.primitive.groovy',
    },
    {
      foreground: '#267F99',
      token: 'meta.type.cast.expr',
    },
    {
      foreground: '#267F99',
      token: 'meta.type.new.expr',
    },
    {
      foreground: '#267F99',
      token: 'support.constant.math',
    },
    {
      foreground: '#267F99',
      token: 'support.constant.dom',
    },
    {
      foreground: '#267F99',
      token: 'support.constant.json',
    },
    {
      foreground: '#267F99',
      token: 'entity.other.inherited-class',
    },
    {
      foreground: '#AF00DB',
      token: 'keyword.control',
    },
    {
      foreground: '#AF00DB',
      token: 'source.cpp keyword.operator.new',
    },
    {
      foreground: '#AF00DB',
      token: 'source.cpp keyword.operator.delete',
    },
    {
      foreground: '#AF00DB',
      token: 'keyword.other.using',
    },
    {
      foreground: '#AF00DB',
      token: 'keyword.other.operator',
    },
    {
      foreground: '#AF00DB',
      token: 'entity.name.operator',
    },
    {
      foreground: '#001080',
      token: 'variable',
    },
    {
      foreground: '#001080',
      token: 'meta.definition.variable.name',
    },
    {
      foreground: '#001080',
      token: 'support.variable',
    },
    {
      foreground: '#001080',
      token: 'entity.name.variable',
    },
    {
      foreground: '#001080',
      token: 'constant.other.placeholder',
    },
    {
      foreground: '#0070C1',
      token: 'variable.other.constant',
    },
    {
      foreground: '#0070C1',
      token: 'variable.other.enummember',
    },
    {
      foreground: '#001080',
      token: 'meta.object-literal.key',
    },
    {
      foreground: '#0451A5',
      token: 'support.constant.property-value',
    },
    {
      foreground: '#0451A5',
      token: 'support.constant.font-name',
    },
    {
      foreground: '#0451A5',
      token: 'support.constant.media-type',
    },
    {
      foreground: '#0451A5',
      token: 'support.constant.media',
    },
    {
      foreground: '#0451A5',
      token: 'constant.other.color.rgb-value',
    },
    {
      foreground: '#0451A5',
      token: 'constant.other.rgb-value',
    },
    {
      foreground: '#0451A5',
      token: 'support.constant.color',
    },
    {
      foreground: '#D16969',
      token: 'punctuation.definition.group.regexp',
    },
    {
      foreground: '#D16969',
      token: 'punctuation.definition.group.assertion.regexp',
    },
    {
      foreground: '#D16969',
      token: 'punctuation.definition.character-class.regexp',
    },
    {
      foreground: '#D16969',
      token: 'punctuation.character.set.begin.regexp',
    },
    {
      foreground: '#D16969',
      token: 'punctuation.character.set.end.regexp',
    },
    {
      foreground: '#D16969',
      token: 'keyword.operator.negation.regexp',
    },
    {
      foreground: '#D16969',
      token: 'support.other.parenthesis.regexp',
    },
    {
      foreground: '#811F3F',
      token: 'constant.character.character-class.regexp',
    },
    {
      foreground: '#811F3F',
      token: 'constant.other.character-class.set.regexp',
    },
    {
      foreground: '#811F3F',
      token: 'constant.other.character-class.regexp',
    },
    {
      foreground: '#811F3F',
      token: 'constant.character.set.regexp',
    },
    {
      foreground: '#000000',
      token: 'keyword.operator.quantifier.regexp',
    },
    {
      foreground: '#EE0000',
      token: 'keyword.operator.or.regexp',
    },
    {
      foreground: '#EE0000',
      token: 'keyword.control.anchor.regexp',
    },
    {
      foreground: '#0000FF',
      token: 'constant.character',
    },
    {
      foreground: '#0000FF',
      token: 'constant.other.option',
    },
    {
      foreground: '#EE0000',
      token: 'constant.character.escape',
    },
    {
      foreground: '#000000',
      token: 'entity.name.label',
    },
    {
      foreground: '#316BCD',
      token: 'token.info-token',
    },
    {
      foreground: '#CD9731',
      token: 'token.warn-token',
    },
    {
      foreground: '#CD3131',
      token: 'token.error-token',
    },
    {
      foreground: '#800080',
      token: 'token.debug-token',
    },
    {
      token: '',
      foreground: '#000000',
    },
  ],
  encodedTokensColors: [],
};
