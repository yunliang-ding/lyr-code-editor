import * as vscodeThemeToMonacoThemeWeb from 'vscode-theme-to-monaco-theme-web';
import { wireTmGrammars } from 'monaco-editor-textmate';
import { loadWASM } from 'onigasm';
import { Registry } from 'monaco-textmate';
import darkPlus from './theme/dark-plus.json';
import lightPlus from './theme/light-plus.json';

const OssUrl = 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/monaco';

let hasLoadOnigasm = false;

export const loadVscodeTheme = async (monaco, editor, language) => {
  // 加载onigasm的WebAssembly文件
  if (!hasLoadOnigasm) {
    hasLoadOnigasm = true;
    await loadWASM(`${OssUrl}/onigasm/onigasm.wasm`);
  }
  const grammars = new Map();
  grammars.set(
    language,
    {
      css: 'source.css',
      html: 'text.html.basic',
      less: 'source.css.less',
      typescript: 'source.ts',
      javascript: 'source.js',
      javascriptreact: 'source.js.jsx',
      json: 'source.json',
    }[language],
  );
  // 创建一个注册表，可以从作用域名称创建语法
  const registry = new Registry({
    getGrammarDefinition: async (scopeName: string) => {
      const path = {
        'text.html.basic': 'html.tmLanguage.json',
        'source.css': 'css.tmLanguage.json',
        'source.css.less': 'less.tmLanguage.json',
        'source.ts': 'TypeScript.tmLanguage.json',
        'source.js': 'JavaScript.tmLanguage.json',
        'source.js.jsx': 'JavaScriptReact.tmLanguage.json',
        'source.json': 'JSON.tmLanguage.json',
      }[scopeName];
      return path
        ? {
            format: 'json',
            content: await (await fetch(`${OssUrl}/grammars/${path}`)).text(),
          }
        : null;
    },
  } as any);
  // 注册
  monaco.languages.register({ id: language });
  // 重新覆盖主题
  monaco.editor.defineTheme('vs-dark', vscodeThemeToMonacoThemeWeb.convertTheme(darkPlus));
  monaco.editor.defineTheme('vs', vscodeThemeToMonacoThemeWeb.convertTheme(lightPlus));
  setTimeout(() => {
    wireTmGrammars(monaco, registry, grammars, editor);
  }, 100);
};
