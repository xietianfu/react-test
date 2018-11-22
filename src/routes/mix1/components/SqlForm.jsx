import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/markdown-fold';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/css-hint';
import 'codemirror/addon/hint/html-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/sql-hint';
import 'codemirror/addon/hint/xml-hint';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
import 'codemirror/addon/selection/active-line';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/go/go';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/http/http';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/meta';
import 'codemirror/mode/php/php';
import 'codemirror/mode/python/python';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/vue/vue';
import 'codemirror/mode/xml/xml';
import 'codemirror/theme/monokai.css';
import React from 'react';
import CodeMirror from 'react-codemirror';
import { ChartSetting } from '../index'; // eslint-disable-line

const options = {
  theme: 'monokai',
  styleActiveLine: true,
  mode: 'javascript',
  extraKeys: { Ctrl: 'autocomplete' }, //输入s然后ctrl就可以弹出选择项
  // lineNumbers: true,
  tabSize: 10,
  // readOnly:"nocursor",
  smartIndent: true,
  scrollbarStyle: 'overlay',
  // keymap:"defaule"
};

const SqlFrom = ({ onChangeCode, code, onCodeFocusChange }) => {
  console.log(code);
  return (
    <CodeMirror
      value={code}
      onChange={newCode => onChangeCode(newCode)}
      options={options}
      onFocusChange={onCodeFocusChange}
    />
  );
};

export default SqlFrom;
