import { X as styleInject } from './client.7aab66ca.js';

var css_248z = ".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:#000;color:var(--mdc-theme-on-surface,#000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 75ms linear}.mdc-menu-surface[dir=rtl],[dir=rtl] .mdc-menu-surface{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.smui-menu-surface--static{position:static;z-index:0;display:inline-block;transform:scale(1);opacity:1}";
styleInject(css_248z);

function Anchor(node, _ref) {
  var _ref$classForward = _ref.classForward,
      classForward = _ref$classForward === void 0 ? function () {} : _ref$classForward;
  var classList = [];

  function addClass(className) {
    var idx = classList.indexOf(className);

    if (idx === -1) {
      node.classList.add(className);
      classList.push(className);

      if (classForward) {
        classForward(classList);
      }
    }
  }

  function removeClass(className) {
    var idx = classList.indexOf(className);

    if (idx !== -1) {
      node.classList.remove(className);
      classList.splice(idx, 1);

      if (classForward) {
        classForward(classList);
      }
    }
  }

  addClass('mdc-menu-surface--anchor');
  return {
    destroy: function destroy() {
      removeClass('mdc-menu-surface--anchor');
    }
  };
}

export { Anchor as A };