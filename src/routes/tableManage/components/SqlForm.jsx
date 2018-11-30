import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/sql-hint';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
import 'codemirror/addon/selection/active-line';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/sql/sql';
import 'codemirror/theme/monokai.css';
import React from 'react';
import CodeMirror from 'react-codemirror';

const options = {
  theme: 'monokai',
  styleActiveLine: true,
  mode: 'sql',
  extraKeys: { Ctrl: 'autocomplete' }, //输入s然后ctrl就可以弹出选择项
  // lineNumbers: true,
  tabSize: 10,
  // readOnly:"nocursor",
  smartIndent: true,
  scrollbarStyle: 'overlay',
  // keymap:"defaule"
};

const SqlFrom = ({ onChangeCode, code, onCodeFocusChange }) => {
  return (
    <CodeMirror
      value={code}
      onChange={newCode => onChangeCode(newCode)}
      options={options}
      // onFocusChange={onCodeFocusChange}
    />
  );
};

export default SqlFrom;
