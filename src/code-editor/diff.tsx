/* eslint-disable no-bitwise */
import { CSSProperties, useEffect } from 'react';
import loader from '@monaco-editor/loader';
import './index.less';

export interface MonacoDiffProps {
  id?: string;
  value?: string;
  originalValue?: string;
  language?: string;
  cdnPath?: string;
  style?: CSSProperties;
  theme?: 'vs-dark' | 'vs';
}

export default ({
  id = 'monaco-container-diff',
  value = '',
  originalValue = '',
  language = 'javascript',
  style = {},
  theme = 'vs-dark',
  ...rest
}: MonacoDiffProps) => {
  useEffect(() => {
    // 配置资源CDN
    loader.config({
      paths: {
        vs: rest.cdnPath,
      },
    });
    loader.init().then((monaco) => {
      const diffEditor = monaco.editor.createDiffEditor(
        document.getElementById(id),
        {
          theme,
          selectOnLineNumbers: true,
          automaticLayout: true,
          readOnly: true,
          renderSideBySide: true,
          scrollBeyondLastLine: false,
          fontSize: 14,
          fontWeight: '500',
          minimap: {
            enabled: false,
          },
          ...rest,
        },
      );
      const originalModel = (window as any).monaco.editor.createModel(
        originalValue,
        language,
      );
      const modifiedModal = (window as any).monaco.editor.createModel(
        value,
        language,
      );
      diffEditor.setModel({
        original: originalModel,
        modified: modifiedModal,
      });
    });
  }, []);
  return <div id={id} style={style} className="app-code-editor-diff" />;
};
