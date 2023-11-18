/* eslint-disable @iceworks/best-practices/recommend-polyfill */
import { CodeEditor, CodeProps } from '../index';
import { debounce } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { decrypt, encrypt } from '../../index';
import { babelParse, babelParseCode, isEmpty } from 'react-core-form-tools';
import {
  IconFullscreen,
  IconFullscreenExit,
} from '@arco-design/web-react/icon';
import './index.less';

export default ({
  value,
  onChange = () => {},
  style = { height: 300, width: 360 },
  defaultCode = '() => {}',
  noChangeClearCode = false,
  codeRef = useRef({}),
  require,
  useEncrypt = false,
  debounceTime = 300,
  ...rest
}: CodeProps) => {
  const [errorInfo, setErrorInfo] = useState('');
  const [fullScreen, setFullScreen] = useState(false);
  const valueRef = useRef(value);
  useEffect(() => {
    valueRef.current = value;
  }, [value]);
  useEffect(() => {
    Object.assign(codeRef.current, {
      getModuleDefault: () => {
        return babelParse({
          code: decrypt(valueRef.current, false), // 解码
          require,
        });
      },
      getModule: () => {
        return babelParse({
          code: decrypt(valueRef.current, false), // 解码
          exportDefault: false,
          require,
        });
      },
      getEs5Code: () => {
        return babelParseCode({
          code: valueRef.current,
          require,
        });
      },
    });
  }, []);
  return (
    <div
      className={fullScreen ? 'function_data_box_full' : 'function_data_box'}
      style={style}
    >
      {errorInfo && <div className="function_data_error_info">{errorInfo}</div>}
      <div className="function_data_box_full_screen">
        {fullScreen ? (
          <IconFullscreen
            onClick={() => {
              setFullScreen(!fullScreen);
            }}
          />
        ) : (
          <IconFullscreenExit
            onClick={() => {
              setFullScreen(!fullScreen);
            }}
          />
        )}
      </div>
      <CodeEditor
        value={decrypt(value, false) || defaultCode}
        minimapEnabled={false}
        {...rest}
        language="javascript"
        codeRef={codeRef}
        onChange={debounce(async (codeString) => {
          try {
            if (
              isEmpty(codeString) ||
              (codeString === defaultCode && noChangeClearCode)
            ) {
              setErrorInfo('');
              return onChange(undefined);
            }
            onChange(useEncrypt ? encrypt(codeString) : codeString);
            valueRef.current = codeString; // 同步文本
            babelParse({
              code: codeString,
              require,
            });
            setErrorInfo('');
          } catch (error) {
            setErrorInfo(error.toString());
          }
        }, debounceTime)}
      />
    </div>
  );
};
