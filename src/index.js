import _ from 'lodash';

import './style.css';
import myPhoto from './1.jpg';

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  var Photo = new Image();
  Photo.src = myPhoto;

  element.appendChild(Photo);

  return element;
}

document.body.appendChild(component());
