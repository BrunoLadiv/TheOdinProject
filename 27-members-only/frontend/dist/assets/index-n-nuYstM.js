var Um = Object.defineProperty
var $m = (e, t, n) =>
  t in e
    ? Um(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var Kl = (e, t, n) => ($m(e, typeof t != 'symbol' ? t + '' : t, n), n)
function mf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i)
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const l of o.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
function gf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var yf = { exports: {} },
  xl = {},
  vf = { exports: {} },
  G = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zi = Symbol.for('react.element'),
  Bm = Symbol.for('react.portal'),
  Hm = Symbol.for('react.fragment'),
  Wm = Symbol.for('react.strict_mode'),
  Qm = Symbol.for('react.profiler'),
  Vm = Symbol.for('react.provider'),
  qm = Symbol.for('react.context'),
  Km = Symbol.for('react.forward_ref'),
  Ym = Symbol.for('react.suspense'),
  Zm = Symbol.for('react.memo'),
  Jm = Symbol.for('react.lazy'),
  ac = Symbol.iterator
function Xm(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ac && e[ac]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var wf = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xf = Object.assign,
  Sf = {}
function Lr(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Sf),
    (this.updater = n || wf)
}
Lr.prototype.isReactComponent = {}
Lr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function kf() {}
kf.prototype = Lr.prototype
function $a(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Sf),
    (this.updater = n || wf)
}
var Ba = ($a.prototype = new kf())
Ba.constructor = $a
xf(Ba, Lr.prototype)
Ba.isPureReactComponent = !0
var uc = Array.isArray,
  Ef = Object.prototype.hasOwnProperty,
  Ha = { current: null },
  Cf = { key: !0, ref: !0, __self: !0, __source: !0 }
function _f(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Ef.call(t, r) && !Cf.hasOwnProperty(r) && (i[r] = t[r])
  var s = arguments.length - 2
  if (s === 1) i.children = n
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2]
    i.children = a
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r])
  return { $$typeof: Zi, type: e, key: o, ref: l, props: i, _owner: Ha.current }
}
function Gm(e, t) {
  return {
    $$typeof: Zi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Wa(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zi
}
function e0(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var cc = /\/+/g
function Yl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? e0('' + e.key)
    : t.toString(36)
}
function To(e, t, n, r, i) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var l = !1
  if (e === null) l = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        l = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Zi:
          case Bm:
            l = !0
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === '' ? '.' + Yl(l, 0) : r),
      uc(i)
        ? ((n = ''),
          e != null && (n = e.replace(cc, '$&/') + '/'),
          To(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (Wa(i) &&
            (i = Gm(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ''
                  : ('' + i.key).replace(cc, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((l = 0), (r = r === '' ? '.' : r + ':'), uc(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s]
      var a = r + Yl(o, s)
      l += To(o, t, n, a, i)
    }
  else if (((a = Xm(e)), typeof a == 'function'))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Yl(o, s++)), (l += To(o, t, n, a, i))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return l
}
function co(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    To(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function t0(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var He = { current: null },
  Oo = { transition: null },
  n0 = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: Oo,
    ReactCurrentOwner: Ha,
  }
G.Children = {
  map: co,
  forEach: function (e, t, n) {
    co(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      co(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      co(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Wa(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
G.Component = Lr
G.Fragment = Hm
G.Profiler = Qm
G.PureComponent = $a
G.StrictMode = Wm
G.Suspense = Ym
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n0
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = xf({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Ha.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (a in t)
      Ef.call(t, a) &&
        !Cf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    s = Array(a)
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2]
    r.children = s
  }
  return { $$typeof: Zi, type: e.type, key: i, ref: o, props: r, _owner: l }
}
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: qm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Vm, _context: e }),
    (e.Consumer = e)
  )
}
G.createElement = _f
G.createFactory = function (e) {
  var t = _f.bind(null, e)
  return (t.type = e), t
}
G.createRef = function () {
  return { current: null }
}
G.forwardRef = function (e) {
  return { $$typeof: Km, render: e }
}
G.isValidElement = Wa
G.lazy = function (e) {
  return { $$typeof: Jm, _payload: { _status: -1, _result: e }, _init: t0 }
}
G.memo = function (e, t) {
  return { $$typeof: Zm, type: e, compare: t === void 0 ? null : t }
}
G.startTransition = function (e) {
  var t = Oo.transition
  Oo.transition = {}
  try {
    e()
  } finally {
    Oo.transition = t
  }
}
G.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
G.useCallback = function (e, t) {
  return He.current.useCallback(e, t)
}
G.useContext = function (e) {
  return He.current.useContext(e)
}
G.useDebugValue = function () {}
G.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e)
}
G.useEffect = function (e, t) {
  return He.current.useEffect(e, t)
}
G.useId = function () {
  return He.current.useId()
}
G.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n)
}
G.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t)
}
G.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t)
}
G.useMemo = function (e, t) {
  return He.current.useMemo(e, t)
}
G.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n)
}
G.useRef = function (e) {
  return He.current.useRef(e)
}
G.useState = function (e) {
  return He.current.useState(e)
}
G.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n)
}
G.useTransition = function () {
  return He.current.useTransition()
}
G.version = '18.2.0'
vf.exports = G
var R = vf.exports
const Qa = gf(R),
  Ts = mf({ __proto__: null, default: Qa }, [R])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r0 = R,
  i0 = Symbol.for('react.element'),
  o0 = Symbol.for('react.fragment'),
  l0 = Object.prototype.hasOwnProperty,
  s0 = r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  a0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function jf(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (l = t.ref)
  for (r in t) l0.call(t, r) && !a0.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: i0, type: e, key: o, ref: l, props: i, _owner: s0.current }
}
xl.Fragment = o0
xl.jsx = jf
xl.jsxs = jf
yf.exports = xl
var k = yf.exports,
  Os = {},
  Rf = { exports: {} },
  lt = {},
  Nf = { exports: {} },
  Pf = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(O, U) {
    var b = O.length
    O.push(U)
    e: for (; 0 < b; ) {
      var V = (b - 1) >>> 1,
        W = O[V]
      if (0 < i(W, U)) (O[V] = U), (O[b] = W), (b = V)
      else break e
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0]
  }
  function r(O) {
    if (O.length === 0) return null
    var U = O[0],
      b = O.pop()
    if (b !== U) {
      O[0] = b
      e: for (var V = 0, W = O.length, re = W >>> 1; V < re; ) {
        var Re = 2 * (V + 1) - 1,
          mt = O[Re],
          Fe = Re + 1,
          qt = O[Fe]
        if (0 > i(mt, b))
          Fe < W && 0 > i(qt, mt)
            ? ((O[V] = qt), (O[Fe] = b), (V = Fe))
            : ((O[V] = mt), (O[Re] = b), (V = Re))
        else if (Fe < W && 0 > i(qt, b)) (O[V] = qt), (O[Fe] = b), (V = Fe)
        else break e
      }
    }
    return U
  }
  function i(O, U) {
    var b = O.sortIndex - U.sortIndex
    return b !== 0 ? b : O.id - U.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var l = Date,
      s = l.now()
    e.unstable_now = function () {
      return l.now() - s
    }
  }
  var a = [],
    u = [],
    p = 1,
    m = null,
    f = 3,
    g = !1,
    v = !1,
    S = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function c(O) {
    for (var U = n(u); U !== null; ) {
      if (U.callback === null) r(u)
      else if (U.startTime <= O) r(u), (U.sortIndex = U.expirationTime), t(a, U)
      else break
      U = n(u)
    }
  }
  function y(O) {
    if (((S = !1), c(O), !v))
      if (n(a) !== null) (v = !0), te(E)
      else {
        var U = n(u)
        U !== null && K(y, U.startTime - O)
      }
  }
  function E(O, U) {
    ;(v = !1), S && ((S = !1), h(_), (_ = -1)), (g = !0)
    var b = f
    try {
      for (
        c(U), m = n(a);
        m !== null && (!(m.expirationTime > U) || (O && !T()));

      ) {
        var V = m.callback
        if (typeof V == 'function') {
          ;(m.callback = null), (f = m.priorityLevel)
          var W = V(m.expirationTime <= U)
          ;(U = e.unstable_now()),
            typeof W == 'function' ? (m.callback = W) : m === n(a) && r(a),
            c(U)
        } else r(a)
        m = n(a)
      }
      if (m !== null) var re = !0
      else {
        var Re = n(u)
        Re !== null && K(y, Re.startTime - U), (re = !1)
      }
      return re
    } finally {
      ;(m = null), (f = b), (g = !1)
    }
  }
  var w = !1,
    C = null,
    _ = -1,
    N = 5,
    M = -1
  function T() {
    return !(e.unstable_now() - M < N)
  }
  function z() {
    if (C !== null) {
      var O = e.unstable_now()
      M = O
      var U = !0
      try {
        U = C(!0, O)
      } finally {
        U ? A() : ((w = !1), (C = null))
      }
    } else w = !1
  }
  var A
  if (typeof d == 'function')
    A = function () {
      d(z)
    }
  else if (typeof MessageChannel < 'u') {
    var B = new MessageChannel(),
      Z = B.port2
    ;(B.port1.onmessage = z),
      (A = function () {
        Z.postMessage(null)
      })
  } else
    A = function () {
      x(z, 0)
    }
  function te(O) {
    ;(C = O), w || ((w = !0), A())
  }
  function K(O, U) {
    _ = x(function () {
      O(e.unstable_now())
    }, U)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), te(E))
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (N = 0 < O ? Math.floor(1e3 / O) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }),
    (e.unstable_next = function (O) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var U = 3
          break
        default:
          U = f
      }
      var b = f
      f = U
      try {
        return O()
      } finally {
        f = b
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, U) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          O = 3
      }
      var b = f
      f = O
      try {
        return U()
      } finally {
        f = b
      }
    }),
    (e.unstable_scheduleCallback = function (O, U, b) {
      var V = e.unstable_now()
      switch (
        (typeof b == 'object' && b !== null
          ? ((b = b.delay), (b = typeof b == 'number' && 0 < b ? V + b : V))
          : (b = V),
        O)
      ) {
        case 1:
          var W = -1
          break
        case 2:
          W = 250
          break
        case 5:
          W = 1073741823
          break
        case 4:
          W = 1e4
          break
        default:
          W = 5e3
      }
      return (
        (W = b + W),
        (O = {
          id: p++,
          callback: U,
          priorityLevel: O,
          startTime: b,
          expirationTime: W,
          sortIndex: -1,
        }),
        b > V
          ? ((O.sortIndex = b),
            t(u, O),
            n(a) === null &&
              O === n(u) &&
              (S ? (h(_), (_ = -1)) : (S = !0), K(y, b - V)))
          : ((O.sortIndex = W), t(a, O), v || g || ((v = !0), te(E))),
        O
      )
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function (O) {
      var U = f
      return function () {
        var b = f
        f = U
        try {
          return O.apply(this, arguments)
        } finally {
          f = b
        }
      }
    })
})(Pf)
Nf.exports = Pf
var u0 = Nf.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mf = R,
  it = u0
function D(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Lf = new Set(),
  Ei = {}
function qn(e, t) {
  Er(e, t), Er(e + 'Capture', t)
}
function Er(e, t) {
  for (Ei[e] = t, e = 0; e < t.length; e++) Lf.add(t[e])
}
var Ut = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ds = Object.prototype.hasOwnProperty,
  c0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  dc = {},
  fc = {}
function d0(e) {
  return Ds.call(fc, e)
    ? !0
    : Ds.call(dc, e)
    ? !1
    : c0.test(e)
    ? (fc[e] = !0)
    : ((dc[e] = !0), !1)
}
function f0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function p0(e, t, n, r) {
  if (t === null || typeof t > 'u' || f0(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function We(e, t, n, r, i, o, l) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l)
}
var Oe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Oe[e] = new We(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Oe[t] = new We(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Oe[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Oe[e] = new We(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Oe[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Oe[e] = new We(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Oe[e] = new We(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Oe[e] = new We(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Oe[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Va = /[\-:]([a-z])/g
function qa(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Va, qa)
    Oe[t] = new We(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Va, qa)
    Oe[t] = new We(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Va, qa)
  Oe[t] = new We(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Oe[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Oe.xlinkHref = new We(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Oe[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Ka(e, t, n, r) {
  var i = Oe.hasOwnProperty(t) ? Oe[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (p0(t, n, i, r) && (n = null),
    r || i === null
      ? d0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Qt = Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fo = Symbol.for('react.element'),
  tr = Symbol.for('react.portal'),
  nr = Symbol.for('react.fragment'),
  Ya = Symbol.for('react.strict_mode'),
  zs = Symbol.for('react.profiler'),
  Tf = Symbol.for('react.provider'),
  Of = Symbol.for('react.context'),
  Za = Symbol.for('react.forward_ref'),
  Is = Symbol.for('react.suspense'),
  bs = Symbol.for('react.suspense_list'),
  Ja = Symbol.for('react.memo'),
  en = Symbol.for('react.lazy'),
  Df = Symbol.for('react.offscreen'),
  pc = Symbol.iterator
function Hr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (pc && e[pc]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var he = Object.assign,
  Zl
function ii(e) {
  if (Zl === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Zl = (t && t[1]) || ''
    }
  return (
    `
` +
    Zl +
    e
  )
}
var Jl = !1
function Xl(e, t) {
  if (!e || Jl) return ''
  Jl = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var a =
                  `
` + i[l].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                )
              }
            while (1 <= l && 0 <= s)
          break
        }
    }
  } finally {
    ;(Jl = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? ii(e) : ''
}
function h0(e) {
  switch (e.tag) {
    case 5:
      return ii(e.type)
    case 16:
      return ii('Lazy')
    case 13:
      return ii('Suspense')
    case 19:
      return ii('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Xl(e.type, !1)), e
    case 11:
      return (e = Xl(e.type.render, !1)), e
    case 1:
      return (e = Xl(e.type, !0)), e
    default:
      return ''
  }
}
function As(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case nr:
      return 'Fragment'
    case tr:
      return 'Portal'
    case zs:
      return 'Profiler'
    case Ya:
      return 'StrictMode'
    case Is:
      return 'Suspense'
    case bs:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Of:
        return (e.displayName || 'Context') + '.Consumer'
      case Tf:
        return (e._context.displayName || 'Context') + '.Provider'
      case Za:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Ja:
        return (
          (t = e.displayName || null), t !== null ? t : As(e.type) || 'Memo'
        )
      case en:
        ;(t = e._payload), (e = e._init)
        try {
          return As(e(t))
        } catch {}
    }
  return null
}
function m0(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return As(t)
    case 8:
      return t === Ya ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function mn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function zf(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function g0(e) {
  var t = zf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (l) {
          ;(r = '' + l), o.call(this, l)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (l) {
          r = '' + l
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function po(e) {
  e._valueTracker || (e._valueTracker = g0(e))
}
function If(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = zf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Wo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Fs(e, t) {
  var n = t.checked
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function hc(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = mn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function bf(e, t) {
  ;(t = t.checked), t != null && Ka(e, 'checked', t, !1)
}
function Us(e, t) {
  bf(e, t)
  var n = mn(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? $s(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && $s(e, t.type, mn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function mc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function $s(e, t, n) {
  ;(t !== 'number' || Wo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var oi = Array.isArray
function gr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + mn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function Bs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91))
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function gc(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92))
      if (oi(n)) {
        if (1 < n.length) throw Error(D(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: mn(n) }
}
function Af(e, t) {
  var n = mn(t.value),
    r = mn(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function yc(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Ff(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Hs(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ff(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var ho,
  Uf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        ho = ho || document.createElement('div'),
          ho.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ho.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Ci(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var ui = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  y0 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ui).forEach(function (e) {
  y0.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ui[t] = ui[e])
  })
})
function $f(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ui.hasOwnProperty(e) && ui[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Bf(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = $f(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var v0 = he(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function Ws(e, t) {
  if (t) {
    if (v0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(D(62))
  }
}
function Qs(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Vs = null
function Xa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var qs = null,
  yr = null,
  vr = null
function vc(e) {
  if ((e = Gi(e))) {
    if (typeof qs != 'function') throw Error(D(280))
    var t = e.stateNode
    t && ((t = _l(t)), qs(e.stateNode, e.type, t))
  }
}
function Hf(e) {
  yr ? (vr ? vr.push(e) : (vr = [e])) : (yr = e)
}
function Wf() {
  if (yr) {
    var e = yr,
      t = vr
    if (((vr = yr = null), vc(e), t)) for (e = 0; e < t.length; e++) vc(t[e])
  }
}
function Qf(e, t) {
  return e(t)
}
function Vf() {}
var Gl = !1
function qf(e, t, n) {
  if (Gl) return e(t, n)
  Gl = !0
  try {
    return Qf(e, t, n)
  } finally {
    ;(Gl = !1), (yr !== null || vr !== null) && (Vf(), Wf())
  }
}
function _i(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = _l(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(D(231, t, typeof n))
  return n
}
var Ks = !1
if (Ut)
  try {
    var Wr = {}
    Object.defineProperty(Wr, 'passive', {
      get: function () {
        Ks = !0
      },
    }),
      window.addEventListener('test', Wr, Wr),
      window.removeEventListener('test', Wr, Wr)
  } catch {
    Ks = !1
  }
function w0(e, t, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (p) {
    this.onError(p)
  }
}
var ci = !1,
  Qo = null,
  Vo = !1,
  Ys = null,
  x0 = {
    onError: function (e) {
      ;(ci = !0), (Qo = e)
    },
  }
function S0(e, t, n, r, i, o, l, s, a) {
  ;(ci = !1), (Qo = null), w0.apply(x0, arguments)
}
function k0(e, t, n, r, i, o, l, s, a) {
  if ((S0.apply(this, arguments), ci)) {
    if (ci) {
      var u = Qo
      ;(ci = !1), (Qo = null)
    } else throw Error(D(198))
    Vo || ((Vo = !0), (Ys = u))
  }
}
function Kn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Kf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function wc(e) {
  if (Kn(e) !== e) throw Error(D(188))
}
function E0(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Kn(e)), t === null)) throw Error(D(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var o = i.alternate
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return wc(i), e
        if (o === r) return wc(i), t
        o = o.sibling
      }
      throw Error(D(188))
    }
    if (n.return !== r.return) (n = i), (r = o)
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          ;(l = !0), (n = i), (r = o)
          break
        }
        if (s === r) {
          ;(l = !0), (r = i), (n = o)
          break
        }
        s = s.sibling
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            ;(l = !0), (n = o), (r = i)
            break
          }
          if (s === r) {
            ;(l = !0), (r = o), (n = i)
            break
          }
          s = s.sibling
        }
        if (!l) throw Error(D(189))
      }
    }
    if (n.alternate !== r) throw Error(D(190))
  }
  if (n.tag !== 3) throw Error(D(188))
  return n.stateNode.current === n ? e : t
}
function Yf(e) {
  return (e = E0(e)), e !== null ? Zf(e) : null
}
function Zf(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Zf(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Jf = it.unstable_scheduleCallback,
  xc = it.unstable_cancelCallback,
  C0 = it.unstable_shouldYield,
  _0 = it.unstable_requestPaint,
  we = it.unstable_now,
  j0 = it.unstable_getCurrentPriorityLevel,
  Ga = it.unstable_ImmediatePriority,
  Xf = it.unstable_UserBlockingPriority,
  qo = it.unstable_NormalPriority,
  R0 = it.unstable_LowPriority,
  Gf = it.unstable_IdlePriority,
  Sl = null,
  Mt = null
function N0(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == 'function')
    try {
      Mt.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : L0,
  P0 = Math.log,
  M0 = Math.LN2
function L0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((P0(e) / M0) | 0)) | 0
}
var mo = 64,
  go = 4194304
function li(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Ko(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455
  if (l !== 0) {
    var s = l & ~i
    s !== 0 ? (r = li(s)) : ((o &= l), o !== 0 && (r = li(o)))
  } else (l = n & ~i), l !== 0 ? (r = li(l)) : o !== 0 && (r = li(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - St(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function T0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function O0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - St(o),
      s = 1 << l,
      a = i[l]
    a === -1
      ? (!(s & n) || s & r) && (i[l] = T0(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s)
  }
}
function Zs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function ep() {
  var e = mo
  return (mo <<= 1), !(mo & 4194240) && (mo = 64), e
}
function es(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Ji(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - St(t)),
    (e[t] = n)
}
function D0(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - St(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function eu(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var oe = 0
function tp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var np,
  tu,
  rp,
  ip,
  op,
  Js = !1,
  yo = [],
  sn = null,
  an = null,
  un = null,
  ji = new Map(),
  Ri = new Map(),
  nn = [],
  z0 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Sc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      sn = null
      break
    case 'dragenter':
    case 'dragleave':
      an = null
      break
    case 'mouseover':
    case 'mouseout':
      un = null
      break
    case 'pointerover':
    case 'pointerout':
      ji.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ri.delete(t.pointerId)
  }
}
function Qr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Gi(t)), t !== null && tu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function I0(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (sn = Qr(sn, e, t, n, r, i)), !0
    case 'dragenter':
      return (an = Qr(an, e, t, n, r, i)), !0
    case 'mouseover':
      return (un = Qr(un, e, t, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return ji.set(o, Qr(ji.get(o) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Ri.set(o, Qr(Ri.get(o) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function lp(e) {
  var t = Pn(e.target)
  if (t !== null) {
    var n = Kn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Kf(n)), t !== null)) {
          ;(e.blockedOn = t),
            op(e.priority, function () {
              rp(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Do(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Vs = r), n.target.dispatchEvent(r), (Vs = null)
    } else return (t = Gi(n)), t !== null && tu(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function kc(e, t, n) {
  Do(e) && n.delete(t)
}
function b0() {
  ;(Js = !1),
    sn !== null && Do(sn) && (sn = null),
    an !== null && Do(an) && (an = null),
    un !== null && Do(un) && (un = null),
    ji.forEach(kc),
    Ri.forEach(kc)
}
function Vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Js ||
      ((Js = !0), it.unstable_scheduleCallback(it.unstable_NormalPriority, b0)))
}
function Ni(e) {
  function t(i) {
    return Vr(i, e)
  }
  if (0 < yo.length) {
    Vr(yo[0], e)
    for (var n = 1; n < yo.length; n++) {
      var r = yo[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    sn !== null && Vr(sn, e),
      an !== null && Vr(an, e),
      un !== null && Vr(un, e),
      ji.forEach(t),
      Ri.forEach(t),
      n = 0;
    n < nn.length;
    n++
  )
    (r = nn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < nn.length && ((n = nn[0]), n.blockedOn === null); )
    lp(n), n.blockedOn === null && nn.shift()
}
var wr = Qt.ReactCurrentBatchConfig,
  Yo = !0
function A0(e, t, n, r) {
  var i = oe,
    o = wr.transition
  wr.transition = null
  try {
    ;(oe = 1), nu(e, t, n, r)
  } finally {
    ;(oe = i), (wr.transition = o)
  }
}
function F0(e, t, n, r) {
  var i = oe,
    o = wr.transition
  wr.transition = null
  try {
    ;(oe = 4), nu(e, t, n, r)
  } finally {
    ;(oe = i), (wr.transition = o)
  }
}
function nu(e, t, n, r) {
  if (Yo) {
    var i = Xs(e, t, n, r)
    if (i === null) cs(e, t, r, Zo, n), Sc(e, r)
    else if (I0(i, e, t, n, r)) r.stopPropagation()
    else if ((Sc(e, r), t & 4 && -1 < z0.indexOf(e))) {
      for (; i !== null; ) {
        var o = Gi(i)
        if (
          (o !== null && np(o),
          (o = Xs(e, t, n, r)),
          o === null && cs(e, t, r, Zo, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else cs(e, t, r, null, n)
  }
}
var Zo = null
function Xs(e, t, n, r) {
  if (((Zo = null), (e = Xa(r)), (e = Pn(e)), e !== null))
    if (((t = Kn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Kf(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Zo = e), null
}
function sp(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (j0()) {
        case Ga:
          return 1
        case Xf:
          return 4
        case qo:
        case R0:
          return 16
        case Gf:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var on = null,
  ru = null,
  zo = null
function ap() {
  if (zo) return zo
  var e,
    t = ru,
    n = t.length,
    r,
    i = 'value' in on ? on.value : on.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (zo = i.slice(e, 1 < r ? 1 - r : void 0))
}
function Io(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function vo() {
  return !0
}
function Ec() {
  return !1
}
function st(e) {
  function t(n, r, i, o, l) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null)
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? vo
        : Ec),
      (this.isPropagationStopped = Ec),
      this
    )
  }
  return (
    he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = vo))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = vo))
      },
      persist: function () {},
      isPersistent: vo,
    }),
    t
  )
}
var Tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  iu = st(Tr),
  Xi = he({}, Tr, { view: 0, detail: 0 }),
  U0 = st(Xi),
  ts,
  ns,
  qr,
  kl = he({}, Xi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ou,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== qr &&
            (qr && e.type === 'mousemove'
              ? ((ts = e.screenX - qr.screenX), (ns = e.screenY - qr.screenY))
              : (ns = ts = 0),
            (qr = e)),
          ts)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ns
    },
  }),
  Cc = st(kl),
  $0 = he({}, kl, { dataTransfer: 0 }),
  B0 = st($0),
  H0 = he({}, Xi, { relatedTarget: 0 }),
  rs = st(H0),
  W0 = he({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Q0 = st(W0),
  V0 = he({}, Tr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  q0 = st(V0),
  K0 = he({}, Tr, { data: 0 }),
  _c = st(K0),
  Y0 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Z0 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  J0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function X0(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = J0[e]) ? !!t[e] : !1
}
function ou() {
  return X0
}
var G0 = he({}, Xi, {
    key: function (e) {
      if (e.key) {
        var t = Y0[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Io(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Z0[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ou,
    charCode: function (e) {
      return e.type === 'keypress' ? Io(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Io(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  eg = st(G0),
  tg = he({}, kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  jc = st(tg),
  ng = he({}, Xi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ou,
  }),
  rg = st(ng),
  ig = he({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  og = st(ig),
  lg = he({}, kl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  sg = st(lg),
  ag = [9, 13, 27, 32],
  lu = Ut && 'CompositionEvent' in window,
  di = null
Ut && 'documentMode' in document && (di = document.documentMode)
var ug = Ut && 'TextEvent' in window && !di,
  up = Ut && (!lu || (di && 8 < di && 11 >= di)),
  Rc = ' ',
  Nc = !1
function cp(e, t) {
  switch (e) {
    case 'keyup':
      return ag.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function dp(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var rr = !1
function cg(e, t) {
  switch (e) {
    case 'compositionend':
      return dp(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Nc = !0), Rc)
    case 'textInput':
      return (e = t.data), e === Rc && Nc ? null : e
    default:
      return null
  }
}
function dg(e, t) {
  if (rr)
    return e === 'compositionend' || (!lu && cp(e, t))
      ? ((e = ap()), (zo = ru = on = null), (rr = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return up && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var fg = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Pc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!fg[e.type] : t === 'textarea'
}
function fp(e, t, n, r) {
  Hf(r),
    (t = Jo(t, 'onChange')),
    0 < t.length &&
      ((n = new iu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var fi = null,
  Pi = null
function pg(e) {
  Ep(e, 0)
}
function El(e) {
  var t = lr(e)
  if (If(t)) return e
}
function hg(e, t) {
  if (e === 'change') return t
}
var pp = !1
if (Ut) {
  var is
  if (Ut) {
    var os = 'oninput' in document
    if (!os) {
      var Mc = document.createElement('div')
      Mc.setAttribute('oninput', 'return;'),
        (os = typeof Mc.oninput == 'function')
    }
    is = os
  } else is = !1
  pp = is && (!document.documentMode || 9 < document.documentMode)
}
function Lc() {
  fi && (fi.detachEvent('onpropertychange', hp), (Pi = fi = null))
}
function hp(e) {
  if (e.propertyName === 'value' && El(Pi)) {
    var t = []
    fp(t, Pi, e, Xa(e)), qf(pg, t)
  }
}
function mg(e, t, n) {
  e === 'focusin'
    ? (Lc(), (fi = t), (Pi = n), fi.attachEvent('onpropertychange', hp))
    : e === 'focusout' && Lc()
}
function gg(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return El(Pi)
}
function yg(e, t) {
  if (e === 'click') return El(t)
}
function vg(e, t) {
  if (e === 'input' || e === 'change') return El(t)
}
function wg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Et = typeof Object.is == 'function' ? Object.is : wg
function Mi(e, t) {
  if (Et(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!Ds.call(t, i) || !Et(e[i], t[i])) return !1
  }
  return !0
}
function Tc(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Oc(e, t) {
  var n = Tc(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Tc(n)
  }
}
function mp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? mp(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function gp() {
  for (var e = window, t = Wo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Wo(e.document)
  }
  return t
}
function su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function xg(e) {
  var t = gp(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    mp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && su(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var i = n.textContent.length,
          o = Math.min(r.start, i)
        ;(r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Oc(n, o))
        var l = Oc(n, r)
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Sg = Ut && 'documentMode' in document && 11 >= document.documentMode,
  ir = null,
  Gs = null,
  pi = null,
  ea = !1
function Dc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  ea ||
    ir == null ||
    ir !== Wo(r) ||
    ((r = ir),
    'selectionStart' in r && su(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (pi && Mi(pi, r)) ||
      ((pi = r),
      (r = Jo(Gs, 'onSelect')),
      0 < r.length &&
        ((t = new iu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ir))))
}
function wo(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var or = {
    animationend: wo('Animation', 'AnimationEnd'),
    animationiteration: wo('Animation', 'AnimationIteration'),
    animationstart: wo('Animation', 'AnimationStart'),
    transitionend: wo('Transition', 'TransitionEnd'),
  },
  ls = {},
  yp = {}
Ut &&
  ((yp = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete or.animationend.animation,
    delete or.animationiteration.animation,
    delete or.animationstart.animation),
  'TransitionEvent' in window || delete or.transitionend.transition)
function Cl(e) {
  if (ls[e]) return ls[e]
  if (!or[e]) return e
  var t = or[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in yp) return (ls[e] = t[n])
  return e
}
var vp = Cl('animationend'),
  wp = Cl('animationiteration'),
  xp = Cl('animationstart'),
  Sp = Cl('transitionend'),
  kp = new Map(),
  zc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function wn(e, t) {
  kp.set(e, t), qn(t, [e])
}
for (var ss = 0; ss < zc.length; ss++) {
  var as = zc[ss],
    kg = as.toLowerCase(),
    Eg = as[0].toUpperCase() + as.slice(1)
  wn(kg, 'on' + Eg)
}
wn(vp, 'onAnimationEnd')
wn(wp, 'onAnimationIteration')
wn(xp, 'onAnimationStart')
wn('dblclick', 'onDoubleClick')
wn('focusin', 'onFocus')
wn('focusout', 'onBlur')
wn(Sp, 'onTransitionEnd')
Er('onMouseEnter', ['mouseout', 'mouseover'])
Er('onMouseLeave', ['mouseout', 'mouseover'])
Er('onPointerEnter', ['pointerout', 'pointerover'])
Er('onPointerLeave', ['pointerout', 'pointerover'])
qn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
qn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
qn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
qn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
qn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
qn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var si =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Cg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(si))
function Ic(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), k0(r, t, void 0, e), (e.currentTarget = null)
}
function Ep(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget
          if (((s = s.listener), a !== o && i.isPropagationStopped())) break e
          Ic(i, s, u), (o = a)
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== o && i.isPropagationStopped())
          )
            break e
          Ic(i, s, u), (o = a)
        }
    }
  }
  if (Vo) throw ((e = Ys), (Vo = !1), (Ys = null), e)
}
function ue(e, t) {
  var n = t[oa]
  n === void 0 && (n = t[oa] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Cp(t, e, 2, !1), n.add(r))
}
function us(e, t, n) {
  var r = 0
  t && (r |= 4), Cp(n, e, r, t)
}
var xo = '_reactListening' + Math.random().toString(36).slice(2)
function Li(e) {
  if (!e[xo]) {
    ;(e[xo] = !0),
      Lf.forEach(function (n) {
        n !== 'selectionchange' && (Cg.has(n) || us(n, !1, e), us(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[xo] || ((t[xo] = !0), us('selectionchange', !1, t))
  }
}
function Cp(e, t, n, r) {
  switch (sp(t)) {
    case 1:
      var i = A0
      break
    case 4:
      i = F0
      break
    default:
      i = nu
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ks ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1)
}
function cs(e, t, n, r, i) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var l = r.tag
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return
            l = l.return
          }
        for (; s !== null; ) {
          if (((l = Pn(s)), l === null)) return
          if (((a = l.tag), a === 5 || a === 6)) {
            r = o = l
            continue e
          }
          s = s.parentNode
        }
      }
      r = r.return
    }
  qf(function () {
    var u = o,
      p = Xa(n),
      m = []
    e: {
      var f = kp.get(e)
      if (f !== void 0) {
        var g = iu,
          v = e
        switch (e) {
          case 'keypress':
            if (Io(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = eg
            break
          case 'focusin':
            ;(v = 'focus'), (g = rs)
            break
          case 'focusout':
            ;(v = 'blur'), (g = rs)
            break
          case 'beforeblur':
          case 'afterblur':
            g = rs
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Cc
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = B0
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = rg
            break
          case vp:
          case wp:
          case xp:
            g = Q0
            break
          case Sp:
            g = og
            break
          case 'scroll':
            g = U0
            break
          case 'wheel':
            g = sg
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = q0
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = jc
        }
        var S = (t & 4) !== 0,
          x = !S && e === 'scroll',
          h = S ? (f !== null ? f + 'Capture' : null) : f
        S = []
        for (var d = u, c; d !== null; ) {
          c = d
          var y = c.stateNode
          if (
            (c.tag === 5 &&
              y !== null &&
              ((c = y),
              h !== null && ((y = _i(d, h)), y != null && S.push(Ti(d, y, c)))),
            x)
          )
            break
          d = d.return
        }
        0 < S.length &&
          ((f = new g(f, v, null, n, p)), m.push({ event: f, listeners: S }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== Vs &&
            (v = n.relatedTarget || n.fromElement) &&
            (Pn(v) || v[$t]))
        )
          break e
        if (
          (g || f) &&
          ((f =
            p.window === p
              ? p
              : (f = p.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? Pn(v) : null),
              v !== null &&
                ((x = Kn(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((S = Cc),
            (y = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = jc),
              (y = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (d = 'pointer')),
            (x = g == null ? f : lr(g)),
            (c = v == null ? f : lr(v)),
            (f = new S(y, d + 'leave', g, n, p)),
            (f.target = x),
            (f.relatedTarget = c),
            (y = null),
            Pn(p) === u &&
              ((S = new S(h, d + 'enter', v, n, p)),
              (S.target = c),
              (S.relatedTarget = x),
              (y = S)),
            (x = y),
            g && v)
          )
            t: {
              for (S = g, h = v, d = 0, c = S; c; c = Xn(c)) d++
              for (c = 0, y = h; y; y = Xn(y)) c++
              for (; 0 < d - c; ) (S = Xn(S)), d--
              for (; 0 < c - d; ) (h = Xn(h)), c--
              for (; d--; ) {
                if (S === h || (h !== null && S === h.alternate)) break t
                ;(S = Xn(S)), (h = Xn(h))
              }
              S = null
            }
          else S = null
          g !== null && bc(m, f, g, S, !1),
            v !== null && x !== null && bc(m, x, v, S, !0)
        }
      }
      e: {
        if (
          ((f = u ? lr(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && f.type === 'file'))
        )
          var E = hg
        else if (Pc(f))
          if (pp) E = vg
          else {
            E = gg
            var w = mg
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (E = yg)
        if (E && (E = E(e, u))) {
          fp(m, E, n, p)
          break e
        }
        w && w(e, f, u),
          e === 'focusout' &&
            (w = f._wrapperState) &&
            w.controlled &&
            f.type === 'number' &&
            $s(f, 'number', f.value)
      }
      switch (((w = u ? lr(u) : window), e)) {
        case 'focusin':
          ;(Pc(w) || w.contentEditable === 'true') &&
            ((ir = w), (Gs = u), (pi = null))
          break
        case 'focusout':
          pi = Gs = ir = null
          break
        case 'mousedown':
          ea = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(ea = !1), Dc(m, n, p)
          break
        case 'selectionchange':
          if (Sg) break
        case 'keydown':
        case 'keyup':
          Dc(m, n, p)
      }
      var C
      if (lu)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart'
              break e
            case 'compositionend':
              _ = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              _ = 'onCompositionUpdate'
              break e
          }
          _ = void 0
        }
      else
        rr
          ? cp(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart')
      _ &&
        (up &&
          n.locale !== 'ko' &&
          (rr || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && rr && (C = ap())
            : ((on = p),
              (ru = 'value' in on ? on.value : on.textContent),
              (rr = !0))),
        (w = Jo(u, _)),
        0 < w.length &&
          ((_ = new _c(_, e, null, n, p)),
          m.push({ event: _, listeners: w }),
          C ? (_.data = C) : ((C = dp(n)), C !== null && (_.data = C)))),
        (C = ug ? cg(e, n) : dg(e, n)) &&
          ((u = Jo(u, 'onBeforeInput')),
          0 < u.length &&
            ((p = new _c('onBeforeInput', 'beforeinput', null, n, p)),
            m.push({ event: p, listeners: u }),
            (p.data = C)))
    }
    Ep(m, t)
  })
}
function Ti(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Jo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = _i(e, n)),
      o != null && r.unshift(Ti(e, o, i)),
      (o = _i(e, t)),
      o != null && r.push(Ti(e, o, i))),
      (e = e.return)
  }
  return r
}
function Xn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function bc(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode
    if (a !== null && a === r) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = _i(n, o)), a != null && l.unshift(Ti(n, a, s)))
        : i || ((a = _i(n, o)), a != null && l.push(Ti(n, a, s)))),
      (n = n.return)
  }
  l.length !== 0 && e.push({ event: t, listeners: l })
}
var _g = /\r\n?/g,
  jg = /\u0000|\uFFFD/g
function Ac(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      _g,
      `
`
    )
    .replace(jg, '')
}
function So(e, t, n) {
  if (((t = Ac(t)), Ac(e) !== t && n)) throw Error(D(425))
}
function Xo() {}
var ta = null,
  na = null
function ra(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var ia = typeof setTimeout == 'function' ? setTimeout : void 0,
  Rg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Fc = typeof Promise == 'function' ? Promise : void 0,
  Ng =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Fc < 'u'
      ? function (e) {
          return Fc.resolve(null).then(e).catch(Pg)
        }
      : ia
function Pg(e) {
  setTimeout(function () {
    throw e
  })
}
function ds(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Ni(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Ni(t)
}
function cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Uc(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Or = Math.random().toString(36).slice(2),
  Pt = '__reactFiber$' + Or,
  Oi = '__reactProps$' + Or,
  $t = '__reactContainer$' + Or,
  oa = '__reactEvents$' + Or,
  Mg = '__reactListeners$' + Or,
  Lg = '__reactHandles$' + Or
function Pn(e) {
  var t = e[Pt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[$t] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Uc(e); e !== null; ) {
          if ((n = e[Pt])) return n
          e = Uc(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Gi(e) {
  return (
    (e = e[Pt] || e[$t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(D(33))
}
function _l(e) {
  return e[Oi] || null
}
var la = [],
  sr = -1
function xn(e) {
  return { current: e }
}
function ce(e) {
  0 > sr || ((e.current = la[sr]), (la[sr] = null), sr--)
}
function ae(e, t) {
  sr++, (la[sr] = e.current), (e.current = t)
}
var gn = {},
  Ae = xn(gn),
  Ke = xn(!1),
  bn = gn
function Cr(e, t) {
  var n = e.type.contextTypes
  if (!n) return gn
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    o
  for (o in n) i[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function Ye(e) {
  return (e = e.childContextTypes), e != null
}
function Go() {
  ce(Ke), ce(Ae)
}
function $c(e, t, n) {
  if (Ae.current !== gn) throw Error(D(168))
  ae(Ae, t), ae(Ke, n)
}
function _p(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(D(108, m0(e) || 'Unknown', i))
  return he({}, n, r)
}
function el(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gn),
    (bn = Ae.current),
    ae(Ae, e),
    ae(Ke, Ke.current),
    !0
  )
}
function Bc(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(D(169))
  n
    ? ((e = _p(e, t, bn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(Ke),
      ce(Ae),
      ae(Ae, e))
    : ce(Ke),
    ae(Ke, n)
}
var zt = null,
  jl = !1,
  fs = !1
function jp(e) {
  zt === null ? (zt = [e]) : zt.push(e)
}
function Tg(e) {
  ;(jl = !0), jp(e)
}
function Sn() {
  if (!fs && zt !== null) {
    fs = !0
    var e = 0,
      t = oe
    try {
      var n = zt
      for (oe = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(zt = null), (jl = !1)
    } catch (i) {
      throw (zt !== null && (zt = zt.slice(e + 1)), Jf(Ga, Sn), i)
    } finally {
      ;(oe = t), (fs = !1)
    }
  }
  return null
}
var ar = [],
  ur = 0,
  tl = null,
  nl = 0,
  ut = [],
  ct = 0,
  An = null,
  It = 1,
  bt = ''
function _n(e, t) {
  ;(ar[ur++] = nl), (ar[ur++] = tl), (tl = e), (nl = t)
}
function Rp(e, t, n) {
  ;(ut[ct++] = It), (ut[ct++] = bt), (ut[ct++] = An), (An = e)
  var r = It
  e = bt
  var i = 32 - St(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - St(t) + i
  if (30 < o) {
    var l = i - (i % 5)
    ;(o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (It = (1 << (32 - St(t) + i)) | (n << i) | r),
      (bt = o + e)
  } else (It = (1 << o) | (n << i) | r), (bt = e)
}
function au(e) {
  e.return !== null && (_n(e, 1), Rp(e, 1, 0))
}
function uu(e) {
  for (; e === tl; )
    (tl = ar[--ur]), (ar[ur] = null), (nl = ar[--ur]), (ar[ur] = null)
  for (; e === An; )
    (An = ut[--ct]),
      (ut[ct] = null),
      (bt = ut[--ct]),
      (ut[ct] = null),
      (It = ut[--ct]),
      (ut[ct] = null)
}
var rt = null,
  tt = null,
  de = !1,
  xt = null
function Np(e, t) {
  var n = dt(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Hc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rt = e), (tt = cn(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rt = e), (tt = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = An !== null ? { id: It, overflow: bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = dt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rt = e),
            (tt = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function sa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function aa(e) {
  if (de) {
    var t = tt
    if (t) {
      var n = t
      if (!Hc(e, t)) {
        if (sa(e)) throw Error(D(418))
        t = cn(n.nextSibling)
        var r = rt
        t && Hc(e, t)
          ? Np(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (rt = e))
      }
    } else {
      if (sa(e)) throw Error(D(418))
      ;(e.flags = (e.flags & -4097) | 2), (de = !1), (rt = e)
    }
  }
}
function Wc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  rt = e
}
function ko(e) {
  if (e !== rt) return !1
  if (!de) return Wc(e), (de = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ra(e.type, e.memoizedProps))),
    t && (t = tt))
  ) {
    if (sa(e)) throw (Pp(), Error(D(418)))
    for (; t; ) Np(e, t), (t = cn(t.nextSibling))
  }
  if ((Wc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              tt = cn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      tt = null
    }
  } else tt = rt ? cn(e.stateNode.nextSibling) : null
  return !0
}
function Pp() {
  for (var e = tt; e; ) e = cn(e.nextSibling)
}
function _r() {
  ;(tt = rt = null), (de = !1)
}
function cu(e) {
  xt === null ? (xt = [e]) : xt.push(e)
}
var Og = Qt.ReactCurrentBatchConfig
function yt(e, t) {
  if (e && e.defaultProps) {
    ;(t = he({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var rl = xn(null),
  il = null,
  cr = null,
  du = null
function fu() {
  du = cr = il = null
}
function pu(e) {
  var t = rl.current
  ce(rl), (e._currentValue = t)
}
function ua(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function xr(e, t) {
  ;(il = e),
    (du = cr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (qe = !0), (e.firstContext = null))
}
function pt(e) {
  var t = e._currentValue
  if (du !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cr === null)) {
      if (il === null) throw Error(D(308))
      ;(cr = e), (il.dependencies = { lanes: 0, firstContext: e })
    } else cr = cr.next = e
  return t
}
var Mn = null
function hu(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e)
}
function Mp(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), hu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Bt(e, r)
  )
}
function Bt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var tn = !1
function mu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Lp(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function At(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function dn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), ne & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Bt(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), hu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  )
}
function bo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), eu(e, n)
  }
}
function Qc(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next)
      } while (n !== null)
      o === null ? (i = o = t) : (o = o.next = t)
    } else i = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function ol(e, t, n, r) {
  var i = e.updateQueue
  tn = !1
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending
  if (s !== null) {
    i.shared.pending = null
    var a = s,
      u = a.next
    ;(a.next = null), l === null ? (o = u) : (l.next = u), (l = a)
    var p = e.alternate
    p !== null &&
      ((p = p.updateQueue),
      (s = p.lastBaseUpdate),
      s !== l &&
        (s === null ? (p.firstBaseUpdate = u) : (s.next = u),
        (p.lastBaseUpdate = a)))
  }
  if (o !== null) {
    var m = i.baseState
    ;(l = 0), (p = u = a = null), (s = o)
    do {
      var f = s.lane,
        g = s.eventTime
      if ((r & f) === f) {
        p !== null &&
          (p = p.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var v = e,
            S = s
          switch (((f = t), (g = n), S.tag)) {
            case 1:
              if (((v = S.payload), typeof v == 'function')) {
                m = v.call(g, m, f)
                break e
              }
              m = v
              break e
            case 3:
              v.flags = (v.flags & -65537) | 128
            case 0:
              if (
                ((v = S.payload),
                (f = typeof v == 'function' ? v.call(g, m, f) : v),
                f == null)
              )
                break e
              m = he({}, m, f)
              break e
            case 2:
              tn = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [s]) : f.push(s))
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          p === null ? ((u = p = g), (a = m)) : (p = p.next = g),
          (l |= f)
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break
        ;(f = s),
          (s = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null)
      }
    } while (!0)
    if (
      (p === null && (a = m),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = p),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t
      do (l |= i.lane), (i = i.next)
      while (i !== t)
    } else o === null && (i.shared.lanes = 0)
    ;(Un |= l), (e.lanes = l), (e.memoizedState = m)
  }
}
function Vc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(D(191, i))
        i.call(r)
      }
    }
}
var Tp = new Mf.Component().refs
function ca(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : he({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = $e(),
      i = pn(e),
      o = At(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = dn(e, o, i)),
      t !== null && (kt(t, e, i, r), bo(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = $e(),
      i = pn(e),
      o = At(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = dn(e, o, i)),
      t !== null && (kt(t, e, i, r), bo(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = $e(),
      r = pn(e),
      i = At(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = dn(e, i, r)),
      t !== null && (kt(t, e, r, n), bo(t, e, r))
  },
}
function qc(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Mi(n, r) || !Mi(i, o)
      : !0
  )
}
function Op(e, t, n) {
  var r = !1,
    i = gn,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = pt(o))
      : ((i = Ye(t) ? bn : Ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Cr(e, i) : gn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function Kc(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Rl.enqueueReplaceState(t, t.state, null)
}
function da(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = Tp), mu(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = pt(o))
    : ((o = Ye(t) ? bn : Ae.current), (i.context = Cr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (ca(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Rl.enqueueReplaceState(i, i.state, null),
      ol(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Kr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309))
        var r = n.stateNode
      }
      if (!r) throw Error(D(147, e))
      var i = r,
        o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs
            s === Tp && (s = i.refs = {}), l === null ? delete s[o] : (s[o] = l)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(D(284))
    if (!n._owner) throw Error(D(290, e))
  }
  return e
}
function Eo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Yc(e) {
  var t = e._init
  return t(e._payload)
}
function Dp(e) {
  function t(h, d) {
    if (e) {
      var c = h.deletions
      c === null ? ((h.deletions = [d]), (h.flags |= 16)) : c.push(d)
    }
  }
  function n(h, d) {
    if (!e) return null
    for (; d !== null; ) t(h, d), (d = d.sibling)
    return null
  }
  function r(h, d) {
    for (h = new Map(); d !== null; )
      d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling)
    return h
  }
  function i(h, d) {
    return (h = hn(h, d)), (h.index = 0), (h.sibling = null), h
  }
  function o(h, d, c) {
    return (
      (h.index = c),
      e
        ? ((c = h.alternate),
          c !== null
            ? ((c = c.index), c < d ? ((h.flags |= 2), d) : c)
            : ((h.flags |= 2), d))
        : ((h.flags |= 1048576), d)
    )
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h
  }
  function s(h, d, c, y) {
    return d === null || d.tag !== 6
      ? ((d = ws(c, h.mode, y)), (d.return = h), d)
      : ((d = i(d, c)), (d.return = h), d)
  }
  function a(h, d, c, y) {
    var E = c.type
    return E === nr
      ? p(h, d, c.props.children, y, c.key)
      : d !== null &&
        (d.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === en &&
            Yc(E) === d.type))
      ? ((y = i(d, c.props)), (y.ref = Kr(h, d, c)), (y.return = h), y)
      : ((y = Ho(c.type, c.key, c.props, null, h.mode, y)),
        (y.ref = Kr(h, d, c)),
        (y.return = h),
        y)
  }
  function u(h, d, c, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== c.containerInfo ||
      d.stateNode.implementation !== c.implementation
      ? ((d = xs(c, h.mode, y)), (d.return = h), d)
      : ((d = i(d, c.children || [])), (d.return = h), d)
  }
  function p(h, d, c, y, E) {
    return d === null || d.tag !== 7
      ? ((d = In(c, h.mode, y, E)), (d.return = h), d)
      : ((d = i(d, c)), (d.return = h), d)
  }
  function m(h, d, c) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = ws('' + d, h.mode, c)), (d.return = h), d
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case fo:
          return (
            (c = Ho(d.type, d.key, d.props, null, h.mode, c)),
            (c.ref = Kr(h, null, d)),
            (c.return = h),
            c
          )
        case tr:
          return (d = xs(d, h.mode, c)), (d.return = h), d
        case en:
          var y = d._init
          return m(h, y(d._payload), c)
      }
      if (oi(d) || Hr(d)) return (d = In(d, h.mode, c, null)), (d.return = h), d
      Eo(h, d)
    }
    return null
  }
  function f(h, d, c, y) {
    var E = d !== null ? d.key : null
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return E !== null ? null : s(h, d, '' + c, y)
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case fo:
          return c.key === E ? a(h, d, c, y) : null
        case tr:
          return c.key === E ? u(h, d, c, y) : null
        case en:
          return (E = c._init), f(h, d, E(c._payload), y)
      }
      if (oi(c) || Hr(c)) return E !== null ? null : p(h, d, c, y, null)
      Eo(h, c)
    }
    return null
  }
  function g(h, d, c, y, E) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return (h = h.get(c) || null), s(d, h, '' + y, E)
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case fo:
          return (h = h.get(y.key === null ? c : y.key) || null), a(d, h, y, E)
        case tr:
          return (h = h.get(y.key === null ? c : y.key) || null), u(d, h, y, E)
        case en:
          var w = y._init
          return g(h, d, c, w(y._payload), E)
      }
      if (oi(y) || Hr(y)) return (h = h.get(c) || null), p(d, h, y, E, null)
      Eo(d, y)
    }
    return null
  }
  function v(h, d, c, y) {
    for (
      var E = null, w = null, C = d, _ = (d = 0), N = null;
      C !== null && _ < c.length;
      _++
    ) {
      C.index > _ ? ((N = C), (C = null)) : (N = C.sibling)
      var M = f(h, C, c[_], y)
      if (M === null) {
        C === null && (C = N)
        break
      }
      e && C && M.alternate === null && t(h, C),
        (d = o(M, d, _)),
        w === null ? (E = M) : (w.sibling = M),
        (w = M),
        (C = N)
    }
    if (_ === c.length) return n(h, C), de && _n(h, _), E
    if (C === null) {
      for (; _ < c.length; _++)
        (C = m(h, c[_], y)),
          C !== null &&
            ((d = o(C, d, _)), w === null ? (E = C) : (w.sibling = C), (w = C))
      return de && _n(h, _), E
    }
    for (C = r(h, C); _ < c.length; _++)
      (N = g(C, h, _, c[_], y)),
        N !== null &&
          (e && N.alternate !== null && C.delete(N.key === null ? _ : N.key),
          (d = o(N, d, _)),
          w === null ? (E = N) : (w.sibling = N),
          (w = N))
    return (
      e &&
        C.forEach(function (T) {
          return t(h, T)
        }),
      de && _n(h, _),
      E
    )
  }
  function S(h, d, c, y) {
    var E = Hr(c)
    if (typeof E != 'function') throw Error(D(150))
    if (((c = E.call(c)), c == null)) throw Error(D(151))
    for (
      var w = (E = null), C = d, _ = (d = 0), N = null, M = c.next();
      C !== null && !M.done;
      _++, M = c.next()
    ) {
      C.index > _ ? ((N = C), (C = null)) : (N = C.sibling)
      var T = f(h, C, M.value, y)
      if (T === null) {
        C === null && (C = N)
        break
      }
      e && C && T.alternate === null && t(h, C),
        (d = o(T, d, _)),
        w === null ? (E = T) : (w.sibling = T),
        (w = T),
        (C = N)
    }
    if (M.done) return n(h, C), de && _n(h, _), E
    if (C === null) {
      for (; !M.done; _++, M = c.next())
        (M = m(h, M.value, y)),
          M !== null &&
            ((d = o(M, d, _)), w === null ? (E = M) : (w.sibling = M), (w = M))
      return de && _n(h, _), E
    }
    for (C = r(h, C); !M.done; _++, M = c.next())
      (M = g(C, h, _, M.value, y)),
        M !== null &&
          (e && M.alternate !== null && C.delete(M.key === null ? _ : M.key),
          (d = o(M, d, _)),
          w === null ? (E = M) : (w.sibling = M),
          (w = M))
    return (
      e &&
        C.forEach(function (z) {
          return t(h, z)
        }),
      de && _n(h, _),
      E
    )
  }
  function x(h, d, c, y) {
    if (
      (typeof c == 'object' &&
        c !== null &&
        c.type === nr &&
        c.key === null &&
        (c = c.props.children),
      typeof c == 'object' && c !== null)
    ) {
      switch (c.$$typeof) {
        case fo:
          e: {
            for (var E = c.key, w = d; w !== null; ) {
              if (w.key === E) {
                if (((E = c.type), E === nr)) {
                  if (w.tag === 7) {
                    n(h, w.sibling),
                      (d = i(w, c.props.children)),
                      (d.return = h),
                      (h = d)
                    break e
                  }
                } else if (
                  w.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === en &&
                    Yc(E) === w.type)
                ) {
                  n(h, w.sibling),
                    (d = i(w, c.props)),
                    (d.ref = Kr(h, w, c)),
                    (d.return = h),
                    (h = d)
                  break e
                }
                n(h, w)
                break
              } else t(h, w)
              w = w.sibling
            }
            c.type === nr
              ? ((d = In(c.props.children, h.mode, y, c.key)),
                (d.return = h),
                (h = d))
              : ((y = Ho(c.type, c.key, c.props, null, h.mode, y)),
                (y.ref = Kr(h, d, c)),
                (y.return = h),
                (h = y))
          }
          return l(h)
        case tr:
          e: {
            for (w = c.key; d !== null; ) {
              if (d.key === w)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === c.containerInfo &&
                  d.stateNode.implementation === c.implementation
                ) {
                  n(h, d.sibling),
                    (d = i(d, c.children || [])),
                    (d.return = h),
                    (h = d)
                  break e
                } else {
                  n(h, d)
                  break
                }
              else t(h, d)
              d = d.sibling
            }
            ;(d = xs(c, h.mode, y)), (d.return = h), (h = d)
          }
          return l(h)
        case en:
          return (w = c._init), x(h, d, w(c._payload), y)
      }
      if (oi(c)) return v(h, d, c, y)
      if (Hr(c)) return S(h, d, c, y)
      Eo(h, c)
    }
    return (typeof c == 'string' && c !== '') || typeof c == 'number'
      ? ((c = '' + c),
        d !== null && d.tag === 6
          ? (n(h, d.sibling), (d = i(d, c)), (d.return = h), (h = d))
          : (n(h, d), (d = ws(c, h.mode, y)), (d.return = h), (h = d)),
        l(h))
      : n(h, d)
  }
  return x
}
var jr = Dp(!0),
  zp = Dp(!1),
  eo = {},
  Lt = xn(eo),
  Di = xn(eo),
  zi = xn(eo)
function Ln(e) {
  if (e === eo) throw Error(D(174))
  return e
}
function gu(e, t) {
  switch ((ae(zi, t), ae(Di, e), ae(Lt, eo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hs(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hs(t, e))
  }
  ce(Lt), ae(Lt, t)
}
function Rr() {
  ce(Lt), ce(Di), ce(zi)
}
function Ip(e) {
  Ln(zi.current)
  var t = Ln(Lt.current),
    n = Hs(t, e.type)
  t !== n && (ae(Di, e), ae(Lt, n))
}
function yu(e) {
  Di.current === e && (ce(Lt), ce(Di))
}
var fe = xn(0)
function ll(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var ps = []
function vu() {
  for (var e = 0; e < ps.length; e++) ps[e]._workInProgressVersionPrimary = null
  ps.length = 0
}
var Ao = Qt.ReactCurrentDispatcher,
  hs = Qt.ReactCurrentBatchConfig,
  Fn = 0,
  pe = null,
  Se = null,
  _e = null,
  sl = !1,
  hi = !1,
  Ii = 0,
  Dg = 0
function De() {
  throw Error(D(321))
}
function wu(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Et(e[n], t[n])) return !1
  return !0
}
function xu(e, t, n, r, i, o) {
  if (
    ((Fn = o),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ao.current = e === null || e.memoizedState === null ? Ag : Fg),
    (e = n(r, i)),
    hi)
  ) {
    o = 0
    do {
      if (((hi = !1), (Ii = 0), 25 <= o)) throw Error(D(301))
      ;(o += 1),
        (_e = Se = null),
        (t.updateQueue = null),
        (Ao.current = Ug),
        (e = n(r, i))
    } while (hi)
  }
  if (
    ((Ao.current = al),
    (t = Se !== null && Se.next !== null),
    (Fn = 0),
    (_e = Se = pe = null),
    (sl = !1),
    t)
  )
    throw Error(D(300))
  return e
}
function Su() {
  var e = Ii !== 0
  return (Ii = 0), e
}
function Nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return _e === null ? (pe.memoizedState = _e = e) : (_e = _e.next = e), _e
}
function ht() {
  if (Se === null) {
    var e = pe.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Se.next
  var t = _e === null ? pe.memoizedState : _e.next
  if (t !== null) (_e = t), (Se = e)
  else {
    if (e === null) throw Error(D(310))
    ;(Se = e),
      (e = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null,
      }),
      _e === null ? (pe.memoizedState = _e = e) : (_e = _e.next = e)
  }
  return _e
}
function bi(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function ms(e) {
  var t = ht(),
    n = t.queue
  if (n === null) throw Error(D(311))
  n.lastRenderedReducer = e
  var r = Se,
    i = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (i !== null) {
      var l = i.next
      ;(i.next = o.next), (o.next = l)
    }
    ;(r.baseQueue = i = o), (n.pending = null)
  }
  if (i !== null) {
    ;(o = i.next), (r = r.baseState)
    var s = (l = null),
      a = null,
      u = o
    do {
      var p = u.lane
      if ((Fn & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var m = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        a === null ? ((s = a = m), (l = r)) : (a = a.next = m),
          (pe.lanes |= p),
          (Un |= p)
      }
      u = u.next
    } while (u !== null && u !== o)
    a === null ? (l = r) : (a.next = s),
      Et(r, t.memoizedState) || (qe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (o = i.lane), (pe.lanes |= o), (Un |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function gs(e) {
  var t = ht(),
    n = t.queue
  if (n === null) throw Error(D(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState
  if (i !== null) {
    n.pending = null
    var l = (i = i.next)
    do (o = e(o, l.action)), (l = l.next)
    while (l !== i)
    Et(o, t.memoizedState) || (qe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function bp() {}
function Ap(e, t) {
  var n = pe,
    r = ht(),
    i = t(),
    o = !Et(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (qe = !0)),
    (r = r.queue),
    ku($p.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (_e !== null && _e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ai(9, Up.bind(null, n, r, i, t), void 0, null),
      je === null)
    )
      throw Error(D(349))
    Fn & 30 || Fp(n, t, i)
  }
  return i
}
function Fp(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Up(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Bp(t) && Hp(e)
}
function $p(e, t, n) {
  return n(function () {
    Bp(t) && Hp(e)
  })
}
function Bp(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Et(e, n)
  } catch {
    return !0
  }
}
function Hp(e) {
  var t = Bt(e, 1)
  t !== null && kt(t, e, 1, -1)
}
function Zc(e) {
  var t = Nt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bg.bind(null, pe, e)),
    [t.memoizedState, e]
  )
}
function Ai(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Wp() {
  return ht().memoizedState
}
function Fo(e, t, n, r) {
  var i = Nt()
  ;(pe.flags |= e),
    (i.memoizedState = Ai(1 | t, n, void 0, r === void 0 ? null : r))
}
function Nl(e, t, n, r) {
  var i = ht()
  r = r === void 0 ? null : r
  var o = void 0
  if (Se !== null) {
    var l = Se.memoizedState
    if (((o = l.destroy), r !== null && wu(r, l.deps))) {
      i.memoizedState = Ai(t, n, o, r)
      return
    }
  }
  ;(pe.flags |= e), (i.memoizedState = Ai(1 | t, n, o, r))
}
function Jc(e, t) {
  return Fo(8390656, 8, e, t)
}
function ku(e, t) {
  return Nl(2048, 8, e, t)
}
function Qp(e, t) {
  return Nl(4, 2, e, t)
}
function Vp(e, t) {
  return Nl(4, 4, e, t)
}
function qp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Kp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Nl(4, 4, qp.bind(null, t, e), n)
  )
}
function Eu() {}
function Yp(e, t) {
  var n = ht()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && wu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function Zp(e, t) {
  var n = ht()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && wu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Jp(e, t, n) {
  return Fn & 21
    ? (Et(n, t) || ((n = ep()), (pe.lanes |= n), (Un |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n))
}
function zg(e, t) {
  var n = oe
  ;(oe = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = hs.transition
  hs.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(oe = n), (hs.transition = r)
  }
}
function Xp() {
  return ht().memoizedState
}
function Ig(e, t, n) {
  var r = pn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Gp(e))
  )
    eh(t, n)
  else if (((n = Mp(e, t, n, r)), n !== null)) {
    var i = $e()
    kt(n, e, r, i), th(n, t, r)
  }
}
function bg(e, t, n) {
  var r = pn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Gp(e)) eh(t, i)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n)
        if (((i.hasEagerState = !0), (i.eagerState = s), Et(s, l))) {
          var a = t.interleaved
          a === null
            ? ((i.next = i), hu(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Mp(e, t, i, r)),
      n !== null && ((i = $e()), kt(n, e, r, i), th(n, t, r))
  }
}
function Gp(e) {
  var t = e.alternate
  return e === pe || (t !== null && t === pe)
}
function eh(e, t) {
  hi = sl = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function th(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), eu(e, n)
  }
}
var al = {
    readContext: pt,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  Ag = {
    readContext: pt,
    useCallback: function (e, t) {
      return (Nt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: pt,
    useEffect: Jc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fo(4194308, 4, qp.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Fo(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Fo(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Nt()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Nt()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ig.bind(null, pe, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Nt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Zc,
    useDebugValue: Eu,
    useDeferredValue: function (e) {
      return (Nt().memoizedState = e)
    },
    useTransition: function () {
      var e = Zc(!1),
        t = e[0]
      return (e = zg.bind(null, e[1])), (Nt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        i = Nt()
      if (de) {
        if (n === void 0) throw Error(D(407))
        n = n()
      } else {
        if (((n = t()), je === null)) throw Error(D(349))
        Fn & 30 || Fp(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        Jc($p.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ai(9, Up.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Nt(),
        t = je.identifierPrefix
      if (de) {
        var n = bt,
          r = It
        ;(n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Ii++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Dg++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Fg = {
    readContext: pt,
    useCallback: Yp,
    useContext: pt,
    useEffect: ku,
    useImperativeHandle: Kp,
    useInsertionEffect: Qp,
    useLayoutEffect: Vp,
    useMemo: Zp,
    useReducer: ms,
    useRef: Wp,
    useState: function () {
      return ms(bi)
    },
    useDebugValue: Eu,
    useDeferredValue: function (e) {
      var t = ht()
      return Jp(t, Se.memoizedState, e)
    },
    useTransition: function () {
      var e = ms(bi)[0],
        t = ht().memoizedState
      return [e, t]
    },
    useMutableSource: bp,
    useSyncExternalStore: Ap,
    useId: Xp,
    unstable_isNewReconciler: !1,
  },
  Ug = {
    readContext: pt,
    useCallback: Yp,
    useContext: pt,
    useEffect: ku,
    useImperativeHandle: Kp,
    useInsertionEffect: Qp,
    useLayoutEffect: Vp,
    useMemo: Zp,
    useReducer: gs,
    useRef: Wp,
    useState: function () {
      return gs(bi)
    },
    useDebugValue: Eu,
    useDeferredValue: function (e) {
      var t = ht()
      return Se === null ? (t.memoizedState = e) : Jp(t, Se.memoizedState, e)
    },
    useTransition: function () {
      var e = gs(bi)[0],
        t = ht().memoizedState
      return [e, t]
    },
    useMutableSource: bp,
    useSyncExternalStore: Ap,
    useId: Xp,
    unstable_isNewReconciler: !1,
  }
function Nr(e, t) {
  try {
    var n = '',
      r = t
    do (n += h0(r)), (r = r.return)
    while (r)
    var i = n
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function ys(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function fa(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var $g = typeof WeakMap == 'function' ? WeakMap : Map
function nh(e, t, n) {
  ;(n = At(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      cl || ((cl = !0), (ka = r)), fa(e, t)
    }),
    n
  )
}
function rh(e, t, n) {
  ;(n = At(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        fa(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        fa(e, t),
          typeof r != 'function' &&
            (fn === null ? (fn = new Set([this])) : fn.add(this))
        var l = t.stack
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' })
      }),
    n
  )
}
function Xc(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new $g()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = ty.bind(null, e, t, n)), t.then(e, e))
}
function Gc(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function ed(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = At(-1, 1)), (t.tag = 2), dn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Bg = Qt.ReactCurrentOwner,
  qe = !1
function Ue(e, t, n, r) {
  t.child = e === null ? zp(t, null, n, r) : jr(t, e.child, n, r)
}
function td(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    xr(t, i),
    (r = xu(e, t, n, r, o, i)),
    (n = Su()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ht(e, t, i))
      : (de && n && au(t), (t.flags |= 1), Ue(e, t, r, i), t.child)
  )
}
function nd(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !Lu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ih(e, t, o, r, i))
      : ((e = Ho(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Mi), n(l, r) && e.ref === t.ref)
    )
      return Ht(e, t, i)
  }
  return (
    (t.flags |= 1),
    (e = hn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function ih(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if (Mi(o, r) && e.ref === t.ref)
      if (((qe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (qe = !0)
      else return (t.lanes = e.lanes), Ht(e, t, i)
  }
  return pa(e, t, n, r, i)
}
function oh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(fr, et),
        (et |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(fr, et),
          (et |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ae(fr, et),
        (et |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ae(fr, et),
      (et |= r)
  return Ue(e, t, i, n), t.child
}
function lh(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function pa(e, t, n, r, i) {
  var o = Ye(n) ? bn : Ae.current
  return (
    (o = Cr(t, o)),
    xr(t, i),
    (n = xu(e, t, n, r, o, i)),
    (r = Su()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ht(e, t, i))
      : (de && r && au(t), (t.flags |= 1), Ue(e, t, n, i), t.child)
  )
}
function rd(e, t, n, r, i) {
  if (Ye(n)) {
    var o = !0
    el(t)
  } else o = !1
  if ((xr(t, i), t.stateNode === null))
    Uo(e, t), Op(t, n, r), da(t, n, r, i), (r = !0)
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps
    l.props = s
    var a = l.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = pt(u))
      : ((u = Ye(n) ? bn : Ae.current), (u = Cr(t, u)))
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == 'function' || typeof l.getSnapshotBeforeUpdate == 'function'
    m ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || a !== u) && Kc(t, l, r, u)),
      (tn = !1)
    var f = t.memoizedState
    ;(l.state = f),
      ol(t, r, l, i),
      (a = t.memoizedState),
      s !== r || f !== a || Ke.current || tn
        ? (typeof p == 'function' && (ca(t, n, p, r), (a = t.memoizedState)),
          (s = tn || qc(t, n, s, r, f, a, u))
            ? (m ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(l = t.stateNode),
      Lp(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : yt(t.type, s)),
      (l.props = u),
      (m = t.pendingProps),
      (f = l.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = pt(a))
        : ((a = Ye(n) ? bn : Ae.current), (a = Cr(t, a)))
    var g = n.getDerivedStateFromProps
    ;(p =
      typeof g == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== m || f !== a) && Kc(t, l, r, a)),
      (tn = !1),
      (f = t.memoizedState),
      (l.state = f),
      ol(t, r, l, i)
    var v = t.memoizedState
    s !== m || f !== v || Ke.current || tn
      ? (typeof g == 'function' && (ca(t, n, g, r), (v = t.memoizedState)),
        (u = tn || qc(t, n, u, r, f, v, a) || !1)
          ? (p ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, v, a),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, v, a)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return ha(e, t, n, r, o, i)
}
function ha(e, t, n, r, i, o) {
  lh(e, t)
  var l = (t.flags & 128) !== 0
  if (!r && !l) return i && Bc(t, n, !1), Ht(e, t, o)
  ;(r = t.stateNode), (Bg.current = t)
  var s =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = jr(t, e.child, null, o)), (t.child = jr(t, null, s, o)))
      : Ue(e, t, s, o),
    (t.memoizedState = r.state),
    i && Bc(t, n, !0),
    t.child
  )
}
function sh(e) {
  var t = e.stateNode
  t.pendingContext
    ? $c(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $c(e, t.context, !1),
    gu(e, t.containerInfo)
}
function id(e, t, n, r, i) {
  return _r(), cu(i), (t.flags |= 256), Ue(e, t, n, r), t.child
}
var ma = { dehydrated: null, treeContext: null, retryLane: 0 }
function ga(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function ah(e, t, n) {
  var r = t.pendingProps,
    i = fe.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ae(fe, i & 1),
    e === null)
  )
    return (
      aa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Ll(l, r, 0, null)),
              (e = In(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ga(n)),
              (t.memoizedState = ma),
              e)
            : Cu(t, l))
    )
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Hg(e, t, l, r, s, i, n)
  if (o) {
    ;(o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling)
    var a = { mode: 'hidden', children: r.children }
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = hn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = hn(s, o)) : ((o = In(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ga(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ma),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = hn(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Cu(e, t) {
  return (
    (t = Ll({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Co(e, t, n, r) {
  return (
    r !== null && cu(r),
    jr(t, e.child, null, n),
    (e = Cu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Hg(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ys(Error(D(422)))), Co(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ll({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = In(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && jr(t, e.child, null, l),
        (t.child.memoizedState = ga(l)),
        (t.memoizedState = ma),
        o)
  if (!(t.mode & 1)) return Co(e, t, l, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (o = Error(D(419))), (r = ys(o, r, void 0)), Co(e, t, l, r)
  }
  if (((s = (l & e.childLanes) !== 0), qe || s)) {
    if (((r = je), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Bt(e, i), kt(r, e, i, -1))
    }
    return Mu(), (r = ys(Error(D(421)))), Co(e, t, l, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ny.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (tt = cn(i.nextSibling)),
      (rt = t),
      (de = !0),
      (xt = null),
      e !== null &&
        ((ut[ct++] = It),
        (ut[ct++] = bt),
        (ut[ct++] = An),
        (It = e.id),
        (bt = e.overflow),
        (An = t)),
      (t = Cu(t, r.children)),
      (t.flags |= 4096),
      t)
}
function od(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), ua(e.return, t, n)
}
function vs(e, t, n, r, i) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i))
}
function uh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((Ue(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && od(e, n, t)
        else if (e.tag === 19) od(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((ae(fe, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ll(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          vs(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ll(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        vs(t, !0, n, null, o)
        break
      case 'together':
        vs(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Uo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Un |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(D(153))
  if (t.child !== null) {
    for (
      e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Wg(e, t, n) {
  switch (t.tag) {
    case 3:
      sh(t), _r()
      break
    case 5:
      Ip(t)
      break
    case 1:
      Ye(t.type) && el(t)
      break
    case 4:
      gu(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      ae(rl, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ae(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ah(e, t, n)
          : (ae(fe, fe.current & 1),
            (e = Ht(e, t, n)),
            e !== null ? e.sibling : null)
      ae(fe, fe.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uh(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ae(fe, fe.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), oh(e, t, n)
  }
  return Ht(e, t, n)
}
var ch, ya, dh, fh
ch = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
ya = function () {}
dh = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), Ln(Lt.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = Fs(e, i)), (r = Fs(e, r)), (o = [])
        break
      case 'select':
        ;(i = he({}, i, { value: void 0 })),
          (r = he({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(i = Bs(e, i)), (r = Bs(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Xo)
    }
    Ws(n, r)
    var l
    n = null
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var s = i[u]
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Ei.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
    for (u in r) {
      var a = r[u]
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''))
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]))
          } else n || (o || (o = []), o.push(u, n)), (n = a)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (o = o || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Ei.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && ue('scroll', e),
                  o || s === a || (o = []))
                : (o = o || []).push(u, a))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
fh = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Yr(e, t) {
  if (!de)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling)
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Qg(e, t, n) {
  var r = t.pendingProps
  switch ((uu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ze(t), null
    case 1:
      return Ye(t.type) && Go(), ze(t), null
    case 3:
      return (
        (r = t.stateNode),
        Rr(),
        ce(Ke),
        ce(Ae),
        vu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ko(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), xt !== null && (_a(xt), (xt = null)))),
        ya(e, t),
        ze(t),
        null
      )
    case 5:
      yu(t)
      var i = Ln(zi.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        dh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166))
          return ze(t), null
        }
        if (((e = Ln(Lt.current)), ko(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[Pt] = t), (r[Oi] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ue('cancel', r), ue('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              ue('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < si.length; i++) ue(si[i], r)
              break
            case 'source':
              ue('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              ue('error', r), ue('load', r)
              break
            case 'details':
              ue('toggle', r)
              break
            case 'input':
              hc(r, o), ue('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                ue('invalid', r)
              break
            case 'textarea':
              gc(r, o), ue('invalid', r)
          }
          Ws(n, o), (i = null)
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l]
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      So(r.textContent, s, e),
                    (i = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      So(r.textContent, s, e),
                    (i = ['children', '' + s]))
                : Ei.hasOwnProperty(l) &&
                  s != null &&
                  l === 'onScroll' &&
                  ue('scroll', r)
            }
          switch (n) {
            case 'input':
              po(r), mc(r, o, !0)
              break
            case 'textarea':
              po(r), yc(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = Xo)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(l = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ff(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Pt] = t),
            (e[Oi] = r),
            ch(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((l = Qs(n, r)), n)) {
              case 'dialog':
                ue('cancel', e), ue('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ue('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < si.length; i++) ue(si[i], e)
                i = r
                break
              case 'source':
                ue('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                ue('error', e), ue('load', e), (i = r)
                break
              case 'details':
                ue('toggle', e), (i = r)
                break
              case 'input':
                hc(e, r), (i = Fs(e, r)), ue('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = he({}, r, { value: void 0 })),
                  ue('invalid', e)
                break
              case 'textarea':
                gc(e, r), (i = Bs(e, r)), ue('invalid', e)
                break
              default:
                i = r
            }
            Ws(n, i), (s = i)
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o]
                o === 'style'
                  ? Bf(e, a)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && Uf(e, a))
                  : o === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && Ci(e, a)
                    : typeof a == 'number' && Ci(e, '' + a)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Ei.hasOwnProperty(o)
                      ? a != null && o === 'onScroll' && ue('scroll', e)
                      : a != null && Ka(e, o, a, l))
              }
            switch (n) {
              case 'input':
                po(e), mc(e, r, !1)
                break
              case 'textarea':
                po(e), yc(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + mn(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? gr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      gr(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = Xo)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return ze(t), null
    case 6:
      if (e && t.stateNode != null) fh(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(D(166))
        if (((n = Ln(zi.current)), Ln(Lt.current), ko(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (o = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                So(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  So(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r)
      }
      return ze(t), null
    case 13:
      if (
        (ce(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && tt !== null && t.mode & 1 && !(t.flags & 128))
          Pp(), _r(), (t.flags |= 98560), (o = !1)
        else if (((o = ko(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(D(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(D(317))
            o[Pt] = t
          } else
            _r(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          ze(t), (o = !1)
        } else xt !== null && (_a(xt), (xt = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? ke === 0 && (ke = 3) : Mu())),
          t.updateQueue !== null && (t.flags |= 4),
          ze(t),
          null)
    case 4:
      return (
        Rr(), ya(e, t), e === null && Li(t.stateNode.containerInfo), ze(t), null
      )
    case 10:
      return pu(t.type._context), ze(t), null
    case 17:
      return Ye(t.type) && Go(), ze(t), null
    case 19:
      if ((ce(fe), (o = t.memoizedState), o === null)) return ze(t), null
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Yr(o, !1)
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = ll(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Yr(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return ae(fe, (fe.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            we() > Pr &&
            ((t.flags |= 128), (r = !0), Yr(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = ll(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Yr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !l.alternate && !de)
            )
              return ze(t), null
          } else
            2 * we() - o.renderingStartTime > Pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Yr(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = we()),
          (t.sibling = null),
          (n = fe.current),
          ae(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (ze(t), null)
    case 22:
    case 23:
      return (
        Pu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? et & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ze(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(D(156, t.tag))
}
function Vg(e, t) {
  switch ((uu(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && Go(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Rr(),
        ce(Ke),
        ce(Ae),
        vu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return yu(t), null
    case 13:
      if (
        (ce(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340))
        _r()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return ce(fe), null
    case 4:
      return Rr(), null
    case 10:
      return pu(t.type._context), null
    case 22:
    case 23:
      return Pu(), null
    case 24:
      return null
    default:
      return null
  }
}
var _o = !1,
  Ie = !1,
  qg = typeof WeakSet == 'function' ? WeakSet : Set,
  F = null
function dr(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        ge(e, t, r)
      }
    else n.current = null
}
function va(e, t, n) {
  try {
    n()
  } catch (r) {
    ge(e, t, r)
  }
}
var ld = !1
function Kg(e, t) {
  if (((ta = Yo), (e = gp()), su(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            p = 0,
            m = e,
            f = null
          t: for (;;) {
            for (
              var g;
              m !== n || (i !== 0 && m.nodeType !== 3) || (s = l + i),
                m !== o || (r !== 0 && m.nodeType !== 3) || (a = l + r),
                m.nodeType === 3 && (l += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (f = m), (m = g)
            for (;;) {
              if (m === e) break t
              if (
                (f === n && ++u === i && (s = l),
                f === o && ++p === r && (a = l),
                (g = m.nextSibling) !== null)
              )
                break
              ;(m = f), (f = m.parentNode)
            }
            m = g
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (na = { focusedElem: e, selectionRange: n }, Yo = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e)
    else
      for (; F !== null; ) {
        t = F
        try {
          var v = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (v !== null) {
                  var S = v.memoizedProps,
                    x = v.memoizedState,
                    h = t.stateNode,
                    d = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : yt(t.type, S),
                      x
                    )
                  h.__reactInternalSnapshotBeforeUpdate = d
                }
                break
              case 3:
                var c = t.stateNode.containerInfo
                c.nodeType === 1
                  ? (c.textContent = '')
                  : c.nodeType === 9 &&
                    c.documentElement &&
                    c.removeChild(c.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(D(163))
            }
        } catch (y) {
          ge(t, t.return, y)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (F = e)
          break
        }
        F = t.return
      }
  return (v = ld), (ld = !1), v
}
function mi(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && va(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function Pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function wa(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function ph(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), ph(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[Oi], delete t[oa], delete t[Mg], delete t[Lg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function hh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function sd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hh(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function xa(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xo))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xa(e, t, n), e = e.sibling; e !== null; ) xa(e, t, n), (e = e.sibling)
}
function Sa(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sa(e, t, n), e = e.sibling; e !== null; ) Sa(e, t, n), (e = e.sibling)
}
var Me = null,
  vt = !1
function Jt(e, t, n) {
  for (n = n.child; n !== null; ) mh(e, t, n), (n = n.sibling)
}
function mh(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == 'function')
    try {
      Mt.onCommitFiberUnmount(Sl, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || dr(n, t)
    case 6:
      var r = Me,
        i = vt
      ;(Me = null),
        Jt(e, t, n),
        (Me = r),
        (vt = i),
        Me !== null &&
          (vt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Me.removeChild(n.stateNode))
      break
    case 18:
      Me !== null &&
        (vt
          ? ((e = Me),
            (n = n.stateNode),
            e.nodeType === 8
              ? ds(e.parentNode, n)
              : e.nodeType === 1 && ds(e, n),
            Ni(e))
          : ds(Me, n.stateNode))
      break
    case 4:
      ;(r = Me),
        (i = vt),
        (Me = n.stateNode.containerInfo),
        (vt = !0),
        Jt(e, t, n),
        (Me = r),
        (vt = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var o = i,
            l = o.destroy
          ;(o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && va(n, t, l),
            (i = i.next)
        } while (i !== r)
      }
      Jt(e, t, n)
      break
    case 1:
      if (
        !Ie &&
        (dr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (s) {
          ge(n, t, s)
        }
      Jt(e, t, n)
      break
    case 21:
      Jt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), Jt(e, t, n), (Ie = r))
        : Jt(e, t, n)
      break
    default:
      Jt(e, t, n)
  }
}
function ad(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new qg()),
      t.forEach(function (r) {
        var i = ry.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function gt(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var o = e,
          l = t,
          s = l
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(Me = s.stateNode), (vt = !1)
              break e
            case 3:
              ;(Me = s.stateNode.containerInfo), (vt = !0)
              break e
            case 4:
              ;(Me = s.stateNode.containerInfo), (vt = !0)
              break e
          }
          s = s.return
        }
        if (Me === null) throw Error(D(160))
        mh(o, l, i), (Me = null), (vt = !1)
        var a = i.alternate
        a !== null && (a.return = null), (i.return = null)
      } catch (u) {
        ge(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gh(t, e), (t = t.sibling)
}
function gh(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((gt(t, e), jt(e), r & 4)) {
        try {
          mi(3, e, e.return), Pl(3, e)
        } catch (S) {
          ge(e, e.return, S)
        }
        try {
          mi(5, e, e.return)
        } catch (S) {
          ge(e, e.return, S)
        }
      }
      break
    case 1:
      gt(t, e), jt(e), r & 512 && n !== null && dr(n, n.return)
      break
    case 5:
      if (
        (gt(t, e),
        jt(e),
        r & 512 && n !== null && dr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode
        try {
          Ci(i, '')
        } catch (S) {
          ge(e, e.return, S)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            s === 'input' && o.type === 'radio' && o.name != null && bf(i, o),
              Qs(s, l)
            var u = Qs(s, o)
            for (l = 0; l < a.length; l += 2) {
              var p = a[l],
                m = a[l + 1]
              p === 'style'
                ? Bf(i, m)
                : p === 'dangerouslySetInnerHTML'
                ? Uf(i, m)
                : p === 'children'
                ? Ci(i, m)
                : Ka(i, p, m, u)
            }
            switch (s) {
              case 'input':
                Us(i, o)
                break
              case 'textarea':
                Af(i, o)
                break
              case 'select':
                var f = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var g = o.value
                g != null
                  ? gr(i, !!o.multiple, g, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? gr(i, !!o.multiple, o.defaultValue, !0)
                      : gr(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[Oi] = o
          } catch (S) {
            ge(e, e.return, S)
          }
      }
      break
    case 6:
      if ((gt(t, e), jt(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162))
        ;(i = e.stateNode), (o = e.memoizedProps)
        try {
          i.nodeValue = o
        } catch (S) {
          ge(e, e.return, S)
        }
      }
      break
    case 3:
      if (
        (gt(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ni(t.containerInfo)
        } catch (S) {
          ge(e, e.return, S)
        }
      break
    case 4:
      gt(t, e), jt(e)
      break
    case 13:
      gt(t, e),
        jt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ru = we())),
        r & 4 && ad(e)
      break
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (u = Ie) || p), gt(t, e), (Ie = u)) : gt(t, e),
        jt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (F = e, p = e.child; p !== null; ) {
            for (m = F = p; F !== null; ) {
              switch (((f = F), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mi(4, f, f.return)
                  break
                case 1:
                  dr(f, f.return)
                  var v = f.stateNode
                  if (typeof v.componentWillUnmount == 'function') {
                    ;(r = f), (n = f.return)
                    try {
                      ;(t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount()
                    } catch (S) {
                      ge(r, n, S)
                    }
                  }
                  break
                case 5:
                  dr(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    cd(m)
                    continue
                  }
              }
              g !== null ? ((g.return = f), (F = g)) : cd(m)
            }
            p = p.sibling
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m
              try {
                ;(i = m.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((s = m.stateNode),
                      (a = m.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (s.style.display = $f('display', l)))
              } catch (S) {
                ge(e, e.return, S)
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = u ? '' : m.memoizedProps
              } catch (S) {
                ge(e, e.return, S)
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            ;(m.child.return = m), (m = m.child)
            continue
          }
          if (m === e) break e
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e
            p === m && (p = null), (m = m.return)
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling)
        }
      }
      break
    case 19:
      gt(t, e), jt(e), r & 4 && ad(e)
      break
    case 21:
      break
    default:
      gt(t, e), jt(e)
  }
}
function jt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hh(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(D(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (Ci(i, ''), (r.flags &= -33))
          var o = sd(e)
          Sa(e, o, i)
          break
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = sd(e)
          xa(e, s, l)
          break
        default:
          throw Error(D(161))
      }
    } catch (a) {
      ge(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Yg(e, t, n) {
  ;(F = e), yh(e)
}
function yh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var i = F,
      o = i.child
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || _o
      if (!l) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || Ie
        s = _o
        var u = Ie
        if (((_o = l), (Ie = a) && !u))
          for (F = i; F !== null; )
            (l = F),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? dd(i)
                : a !== null
                ? ((a.return = l), (F = a))
                : dd(i)
        for (; o !== null; ) (F = o), yh(o), (o = o.sibling)
        ;(F = i), (_o = s), (Ie = u)
      }
      ud(e)
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (F = o)) : ud(e)
  }
}
function ud(e) {
  for (; F !== null; ) {
    var t = F
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || Pl(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : yt(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var o = t.updateQueue
              o !== null && Vc(t, o, r)
              break
            case 3:
              var l = t.updateQueue
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Vc(t, l, n)
              }
              break
            case 5:
              var s = t.stateNode
              if (n === null && t.flags & 4) {
                n = s
                var a = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus()
                    break
                  case 'img':
                    a.src && (n.src = a.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var p = u.memoizedState
                  if (p !== null) {
                    var m = p.dehydrated
                    m !== null && Ni(m)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(D(163))
          }
        Ie || (t.flags & 512 && wa(t))
      } catch (f) {
        ge(t, t.return, f)
      }
    }
    if (t === e) {
      F = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (F = n)
      break
    }
    F = t.return
  }
}
function cd(e) {
  for (; F !== null; ) {
    var t = F
    if (t === e) {
      F = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (F = n)
      break
    }
    F = t.return
  }
}
function dd(e) {
  for (; F !== null; ) {
    var t = F
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Pl(4, t)
          } catch (a) {
            ge(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              ge(t, i, a)
            }
          }
          var o = t.return
          try {
            wa(t)
          } catch (a) {
            ge(t, o, a)
          }
          break
        case 5:
          var l = t.return
          try {
            wa(t)
          } catch (a) {
            ge(t, l, a)
          }
      }
    } catch (a) {
      ge(t, t.return, a)
    }
    if (t === e) {
      F = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (F = s)
      break
    }
    F = t.return
  }
}
var Zg = Math.ceil,
  ul = Qt.ReactCurrentDispatcher,
  _u = Qt.ReactCurrentOwner,
  ft = Qt.ReactCurrentBatchConfig,
  ne = 0,
  je = null,
  xe = null,
  Te = 0,
  et = 0,
  fr = xn(0),
  ke = 0,
  Fi = null,
  Un = 0,
  Ml = 0,
  ju = 0,
  gi = null,
  Ve = null,
  Ru = 0,
  Pr = 1 / 0,
  Dt = null,
  cl = !1,
  ka = null,
  fn = null,
  jo = !1,
  ln = null,
  dl = 0,
  yi = 0,
  Ea = null,
  $o = -1,
  Bo = 0
function $e() {
  return ne & 6 ? we() : $o !== -1 ? $o : ($o = we())
}
function pn(e) {
  return e.mode & 1
    ? ne & 2 && Te !== 0
      ? Te & -Te
      : Og.transition !== null
      ? (Bo === 0 && (Bo = ep()), Bo)
      : ((e = oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sp(e.type))),
        e)
    : 1
}
function kt(e, t, n, r) {
  if (50 < yi) throw ((yi = 0), (Ea = null), Error(D(185)))
  Ji(e, n, r),
    (!(ne & 2) || e !== je) &&
      (e === je && (!(ne & 2) && (Ml |= n), ke === 4 && rn(e, Te)),
      Ze(e, r),
      n === 1 && ne === 0 && !(t.mode & 1) && ((Pr = we() + 500), jl && Sn()))
}
function Ze(e, t) {
  var n = e.callbackNode
  O0(e, t)
  var r = Ko(e, e === je ? Te : 0)
  if (r === 0)
    n !== null && xc(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xc(n), t === 1))
      e.tag === 0 ? Tg(fd.bind(null, e)) : jp(fd.bind(null, e)),
        Ng(function () {
          !(ne & 6) && Sn()
        }),
        (n = null)
    else {
      switch (tp(r)) {
        case 1:
          n = Ga
          break
        case 4:
          n = Xf
          break
        case 16:
          n = qo
          break
        case 536870912:
          n = Gf
          break
        default:
          n = qo
      }
      n = _h(n, vh.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function vh(e, t) {
  if ((($o = -1), (Bo = 0), ne & 6)) throw Error(D(327))
  var n = e.callbackNode
  if (Sr() && e.callbackNode !== n) return null
  var r = Ko(e, e === je ? Te : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r)
  else {
    t = r
    var i = ne
    ne |= 2
    var o = xh()
    ;(je !== e || Te !== t) && ((Dt = null), (Pr = we() + 500), zn(e, t))
    do
      try {
        Gg()
        break
      } catch (s) {
        wh(e, s)
      }
    while (!0)
    fu(),
      (ul.current = o),
      (ne = i),
      xe !== null ? (t = 0) : ((je = null), (Te = 0), (t = ke))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Zs(e)), i !== 0 && ((r = i), (t = Ca(e, i)))), t === 1)
    )
      throw ((n = Fi), zn(e, 0), rn(e, r), Ze(e, we()), n)
    if (t === 6) rn(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Jg(i) &&
          ((t = fl(e, r)),
          t === 2 && ((o = Zs(e)), o !== 0 && ((r = o), (t = Ca(e, o)))),
          t === 1))
      )
        throw ((n = Fi), zn(e, 0), rn(e, r), Ze(e, we()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345))
        case 2:
          jn(e, Ve, Dt)
          break
        case 3:
          if (
            (rn(e, r), (r & 130023424) === r && ((t = Ru + 500 - we()), 10 < t))
          ) {
            if (Ko(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              $e(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = ia(jn.bind(null, e, Ve, Dt), t)
            break
          }
          jn(e, Ve, Dt)
          break
        case 4:
          if ((rn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - St(r)
            ;(o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o)
          }
          if (
            ((r = i),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Zg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ia(jn.bind(null, e, Ve, Dt), r)
            break
          }
          jn(e, Ve, Dt)
          break
        case 5:
          jn(e, Ve, Dt)
          break
        default:
          throw Error(D(329))
      }
    }
  }
  return Ze(e, we()), e.callbackNode === n ? vh.bind(null, e) : null
}
function Ca(e, t) {
  var n = gi
  return (
    e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
    (e = fl(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && _a(t)),
    e
  )
}
function _a(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e)
}
function Jg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!Et(o(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function rn(e, t) {
  for (
    t &= ~ju,
      t &= ~Ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - St(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function fd(e) {
  if (ne & 6) throw Error(D(327))
  Sr()
  var t = Ko(e, 0)
  if (!(t & 1)) return Ze(e, we()), null
  var n = fl(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Zs(e)
    r !== 0 && ((t = r), (n = Ca(e, r)))
  }
  if (n === 1) throw ((n = Fi), zn(e, 0), rn(e, t), Ze(e, we()), n)
  if (n === 6) throw Error(D(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jn(e, Ve, Dt),
    Ze(e, we()),
    null
  )
}
function Nu(e, t) {
  var n = ne
  ne |= 1
  try {
    return e(t)
  } finally {
    ;(ne = n), ne === 0 && ((Pr = we() + 500), jl && Sn())
  }
}
function $n(e) {
  ln !== null && ln.tag === 0 && !(ne & 6) && Sr()
  var t = ne
  ne |= 1
  var n = ft.transition,
    r = oe
  try {
    if (((ft.transition = null), (oe = 1), e)) return e()
  } finally {
    ;(oe = r), (ft.transition = n), (ne = t), !(ne & 6) && Sn()
  }
}
function Pu() {
  ;(et = fr.current), ce(fr)
}
function zn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Rg(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n
      switch ((uu(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Go()
          break
        case 3:
          Rr(), ce(Ke), ce(Ae), vu()
          break
        case 5:
          yu(r)
          break
        case 4:
          Rr()
          break
        case 13:
          ce(fe)
          break
        case 19:
          ce(fe)
          break
        case 10:
          pu(r.type._context)
          break
        case 22:
        case 23:
          Pu()
      }
      n = n.return
    }
  if (
    ((je = e),
    (xe = e = hn(e.current, null)),
    (Te = et = t),
    (ke = 0),
    (Fi = null),
    (ju = Ml = Un = 0),
    (Ve = gi = null),
    Mn !== null)
  ) {
    for (t = 0; t < Mn.length; t++)
      if (((n = Mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var l = o.next
          ;(o.next = i), (r.next = l)
        }
        n.pending = r
      }
    Mn = null
  }
  return e
}
function wh(e, t) {
  do {
    var n = xe
    try {
      if ((fu(), (Ao.current = al), sl)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        sl = !1
      }
      if (
        ((Fn = 0),
        (_e = Se = pe = null),
        (hi = !1),
        (Ii = 0),
        (_u.current = null),
        n === null || n.return === null)
      ) {
        ;(ke = 1), (Fi = t), (xe = null)
        break
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          a = t
        if (
          ((t = Te),
          (s.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            p = s,
            m = p.tag
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var f = p.alternate
            f
              ? ((p.updateQueue = f.updateQueue),
                (p.memoizedState = f.memoizedState),
                (p.lanes = f.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null))
          }
          var g = Gc(l)
          if (g !== null) {
            ;(g.flags &= -257),
              ed(g, l, s, o, t),
              g.mode & 1 && Xc(o, u, t),
              (t = g),
              (a = u)
            var v = t.updateQueue
            if (v === null) {
              var S = new Set()
              S.add(a), (t.updateQueue = S)
            } else v.add(a)
            break e
          } else {
            if (!(t & 1)) {
              Xc(o, u, t), Mu()
              break e
            }
            a = Error(D(426))
          }
        } else if (de && s.mode & 1) {
          var x = Gc(l)
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              ed(x, l, s, o, t),
              cu(Nr(a, s))
            break e
          }
        }
        ;(o = a = Nr(a, s)),
          ke !== 4 && (ke = 2),
          gi === null ? (gi = [o]) : gi.push(o),
          (o = l)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var h = nh(o, a, t)
              Qc(o, h)
              break e
            case 1:
              s = a
              var d = o.type,
                c = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (c !== null &&
                    typeof c.componentDidCatch == 'function' &&
                    (fn === null || !fn.has(c))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var y = rh(o, s, t)
                Qc(o, y)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      kh(n)
    } catch (E) {
      ;(t = E), xe === n && n !== null && (xe = n = n.return)
      continue
    }
    break
  } while (!0)
}
function xh() {
  var e = ul.current
  return (ul.current = al), e === null ? al : e
}
function Mu() {
  ;(ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    je === null || (!(Un & 268435455) && !(Ml & 268435455)) || rn(je, Te)
}
function fl(e, t) {
  var n = ne
  ne |= 2
  var r = xh()
  ;(je !== e || Te !== t) && ((Dt = null), zn(e, t))
  do
    try {
      Xg()
      break
    } catch (i) {
      wh(e, i)
    }
  while (!0)
  if ((fu(), (ne = n), (ul.current = r), xe !== null)) throw Error(D(261))
  return (je = null), (Te = 0), ke
}
function Xg() {
  for (; xe !== null; ) Sh(xe)
}
function Gg() {
  for (; xe !== null && !C0(); ) Sh(xe)
}
function Sh(e) {
  var t = Ch(e.alternate, e, et)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? kh(e) : (xe = t),
    (_u.current = null)
}
function kh(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Vg(n, t)), n !== null)) {
        ;(n.flags &= 32767), (xe = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ke = 6), (xe = null)
        return
      }
    } else if (((n = Qg(n, t, et)), n !== null)) {
      xe = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      xe = t
      return
    }
    xe = t = e
  } while (t !== null)
  ke === 0 && (ke = 5)
}
function jn(e, t, n) {
  var r = oe,
    i = ft.transition
  try {
    ;(ft.transition = null), (oe = 1), ey(e, t, n, r)
  } finally {
    ;(ft.transition = i), (oe = r)
  }
  return null
}
function ey(e, t, n, r) {
  do Sr()
  while (ln !== null)
  if (ne & 6) throw Error(D(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (D0(e, o),
    e === je && ((xe = je = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jo ||
      ((jo = !0),
      _h(qo, function () {
        return Sr(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = ft.transition), (ft.transition = null)
    var l = oe
    oe = 1
    var s = ne
    ;(ne |= 4),
      (_u.current = null),
      Kg(e, n),
      gh(n, e),
      xg(na),
      (Yo = !!ta),
      (na = ta = null),
      (e.current = n),
      Yg(n),
      _0(),
      (ne = s),
      (oe = l),
      (ft.transition = o)
  } else e.current = n
  if (
    (jo && ((jo = !1), (ln = e), (dl = i)),
    (o = e.pendingLanes),
    o === 0 && (fn = null),
    N0(n.stateNode),
    Ze(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (cl) throw ((cl = !1), (e = ka), (ka = null), e)
  return (
    dl & 1 && e.tag !== 0 && Sr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ea ? yi++ : ((yi = 0), (Ea = e))) : (yi = 0),
    Sn(),
    null
  )
}
function Sr() {
  if (ln !== null) {
    var e = tp(dl),
      t = ft.transition,
      n = oe
    try {
      if (((ft.transition = null), (oe = 16 > e ? 16 : e), ln === null))
        var r = !1
      else {
        if (((e = ln), (ln = null), (dl = 0), ne & 6)) throw Error(D(331))
        var i = ne
        for (ne |= 4, F = e.current; F !== null; ) {
          var o = F,
            l = o.child
          if (F.flags & 16) {
            var s = o.deletions
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a]
                for (F = u; F !== null; ) {
                  var p = F
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mi(8, p, o)
                  }
                  var m = p.child
                  if (m !== null) (m.return = p), (F = m)
                  else
                    for (; F !== null; ) {
                      p = F
                      var f = p.sibling,
                        g = p.return
                      if ((ph(p), p === u)) {
                        F = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = g), (F = f)
                        break
                      }
                      F = g
                    }
                }
              }
              var v = o.alternate
              if (v !== null) {
                var S = v.child
                if (S !== null) {
                  v.child = null
                  do {
                    var x = S.sibling
                    ;(S.sibling = null), (S = x)
                  } while (S !== null)
                }
              }
              F = o
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (F = l)
          else
            e: for (; F !== null; ) {
              if (((o = F), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mi(9, o, o.return)
                }
              var h = o.sibling
              if (h !== null) {
                ;(h.return = o.return), (F = h)
                break e
              }
              F = o.return
            }
        }
        var d = e.current
        for (F = d; F !== null; ) {
          l = F
          var c = l.child
          if (l.subtreeFlags & 2064 && c !== null) (c.return = l), (F = c)
          else
            e: for (l = d; F !== null; ) {
              if (((s = F), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pl(9, s)
                  }
                } catch (E) {
                  ge(s, s.return, E)
                }
              if (s === l) {
                F = null
                break e
              }
              var y = s.sibling
              if (y !== null) {
                ;(y.return = s.return), (F = y)
                break e
              }
              F = s.return
            }
        }
        if (
          ((ne = i), Sn(), Mt && typeof Mt.onPostCommitFiberRoot == 'function')
        )
          try {
            Mt.onPostCommitFiberRoot(Sl, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(oe = n), (ft.transition = t)
    }
  }
  return !1
}
function pd(e, t, n) {
  ;(t = Nr(n, t)),
    (t = nh(e, t, 1)),
    (e = dn(e, t, 1)),
    (t = $e()),
    e !== null && (Ji(e, 1, t), Ze(e, t))
}
function ge(e, t, n) {
  if (e.tag === 3) pd(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pd(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (fn === null || !fn.has(r)))
        ) {
          ;(e = Nr(n, e)),
            (e = rh(t, e, 1)),
            (t = dn(t, e, 1)),
            (e = $e()),
            t !== null && (Ji(t, 1, e), Ze(t, e))
          break
        }
      }
      t = t.return
    }
}
function ty(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = $e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    je === e &&
      (Te & n) === n &&
      (ke === 4 || (ke === 3 && (Te & 130023424) === Te && 500 > we() - Ru)
        ? zn(e, 0)
        : (ju |= n)),
    Ze(e, t)
}
function Eh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = go), (go <<= 1), !(go & 130023424) && (go = 4194304))
      : (t = 1))
  var n = $e()
  ;(e = Bt(e, t)), e !== null && (Ji(e, t, n), Ze(e, n))
}
function ny(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Eh(e, n)
}
function ry(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(D(314))
  }
  r !== null && r.delete(t), Eh(e, n)
}
var Ch
Ch = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ke.current) qe = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (qe = !1), Wg(e, t, n)
      qe = !!(e.flags & 131072)
    }
  else (qe = !1), de && t.flags & 1048576 && Rp(t, nl, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Uo(e, t), (e = t.pendingProps)
      var i = Cr(t, Ae.current)
      xr(t, n), (i = xu(null, t, r, e, i, n))
      var o = Su()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((o = !0), el(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            mu(t),
            (i.updater = Rl),
            (t.stateNode = i),
            (i._reactInternals = t),
            da(t, r, e, n),
            (t = ha(null, t, r, !0, o, n)))
          : ((t.tag = 0), de && o && au(t), Ue(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Uo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = oy(r)),
          (e = yt(r, e)),
          i)
        ) {
          case 0:
            t = pa(null, t, r, e, n)
            break e
          case 1:
            t = rd(null, t, r, e, n)
            break e
          case 11:
            t = td(null, t, r, e, n)
            break e
          case 14:
            t = nd(null, t, r, yt(r.type, e), n)
            break e
        }
        throw Error(D(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        pa(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        rd(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((sh(t), e === null)) throw Error(D(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Lp(e, t),
          ol(t, r, null, n)
        var l = t.memoizedState
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(i = Nr(Error(D(423)), t)), (t = id(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Nr(Error(D(424)), t)), (t = id(e, t, r, n, i))
            break e
          } else
            for (
              tt = cn(t.stateNode.containerInfo.firstChild),
                rt = t,
                de = !0,
                xt = null,
                n = zp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((_r(), r === i)) {
            t = Ht(e, t, n)
            break e
          }
          Ue(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Ip(t),
        e === null && aa(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        ra(r, i) ? (l = null) : o !== null && ra(r, o) && (t.flags |= 32),
        lh(e, t),
        Ue(e, t, l, n),
        t.child
      )
    case 6:
      return e === null && aa(t), null
    case 13:
      return ah(e, t, n)
    case 4:
      return (
        gu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jr(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        td(e, t, r, i, n)
      )
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          ae(rl, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Et(o.value, l)) {
            if (o.children === i.children && !Ke.current) {
              t = Ht(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies
              if (s !== null) {
                l = o.child
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      ;(a = At(-1, n & -n)), (a.tag = 2)
                      var u = o.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var p = u.pending
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (u.pending = a)
                      }
                    }
                    ;(o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      ua(o.return, n, t),
                      (s.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(D(341))
                ;(l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  ua(l, n, t),
                  (l = o.sibling)
              } else l = o.child
              if (l !== null) l.return = o
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null
                    break
                  }
                  if (((o = l.sibling), o !== null)) {
                    ;(o.return = l.return), (l = o)
                    break
                  }
                  l = l.return
                }
              o = l
            }
        Ue(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        xr(t, n),
        (i = pt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (i = yt(r, t.pendingProps)),
        (i = yt(r.type, i)),
        nd(e, t, r, i, n)
      )
    case 15:
      return ih(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        Uo(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), el(t)) : (e = !1),
        xr(t, n),
        Op(t, r, i),
        da(t, r, i, n),
        ha(null, t, r, !0, e, n)
      )
    case 19:
      return uh(e, t, n)
    case 22:
      return oh(e, t, n)
  }
  throw Error(D(156, t.tag))
}
function _h(e, t) {
  return Jf(e, t)
}
function iy(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function dt(e, t, n, r) {
  return new iy(e, t, n, r)
}
function Lu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function oy(e) {
  if (typeof e == 'function') return Lu(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Za)) return 11
    if (e === Ja) return 14
  }
  return 2
}
function hn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = dt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Ho(e, t, n, r, i, o) {
  var l = 2
  if (((r = e), typeof e == 'function')) Lu(e) && (l = 1)
  else if (typeof e == 'string') l = 5
  else
    e: switch (e) {
      case nr:
        return In(n.children, i, o, t)
      case Ya:
        ;(l = 8), (i |= 8)
        break
      case zs:
        return (e = dt(12, n, t, i | 2)), (e.elementType = zs), (e.lanes = o), e
      case Is:
        return (e = dt(13, n, t, i)), (e.elementType = Is), (e.lanes = o), e
      case bs:
        return (e = dt(19, n, t, i)), (e.elementType = bs), (e.lanes = o), e
      case Df:
        return Ll(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Tf:
              l = 10
              break e
            case Of:
              l = 9
              break e
            case Za:
              l = 11
              break e
            case Ja:
              l = 14
              break e
            case en:
              ;(l = 16), (r = null)
              break e
          }
        throw Error(D(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = dt(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function In(e, t, n, r) {
  return (e = dt(7, e, r, t)), (e.lanes = n), e
}
function Ll(e, t, n, r) {
  return (
    (e = dt(22, e, r, t)),
    (e.elementType = Df),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function ws(e, t, n) {
  return (e = dt(6, e, null, t)), (e.lanes = n), e
}
function xs(e, t, n) {
  return (
    (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function ly(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = es(0)),
    (this.expirationTimes = es(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = es(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function Tu(e, t, n, r, i, o, l, s, a) {
  return (
    (e = new ly(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = dt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    mu(o),
    e
  )
}
function sy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: tr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function jh(e) {
  if (!e) return gn
  e = e._reactInternals
  e: {
    if (Kn(e) !== e || e.tag !== 1) throw Error(D(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(D(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ye(n)) return _p(e, n, t)
  }
  return t
}
function Rh(e, t, n, r, i, o, l, s, a) {
  return (
    (e = Tu(n, r, !0, e, i, o, l, s, a)),
    (e.context = jh(null)),
    (n = e.current),
    (r = $e()),
    (i = pn(n)),
    (o = At(r, i)),
    (o.callback = t ?? null),
    dn(n, o, i),
    (e.current.lanes = i),
    Ji(e, i, r),
    Ze(e, r),
    e
  )
}
function Tl(e, t, n, r) {
  var i = t.current,
    o = $e(),
    l = pn(i)
  return (
    (n = jh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = At(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dn(i, t, l)),
    e !== null && (kt(e, i, l, o), bo(e, i, l)),
    l
  )
}
function pl(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function hd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Ou(e, t) {
  hd(e, t), (e = e.alternate) && hd(e, t)
}
function ay() {
  return null
}
var Nh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Du(e) {
  this._internalRoot = e
}
Ol.prototype.render = Du.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(D(409))
  Tl(e, t, null, null)
}
Ol.prototype.unmount = Du.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    $n(function () {
      Tl(null, e, null, null)
    }),
      (t[$t] = null)
  }
}
function Ol(e) {
  this._internalRoot = e
}
Ol.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ip()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++);
    nn.splice(n, 0, e), n === 0 && lp(e)
  }
}
function zu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Dl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function md() {}
function uy(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = pl(l)
        o.call(u)
      }
    }
    var l = Rh(t, r, e, 0, null, !1, !1, '', md)
    return (
      (e._reactRootContainer = l),
      (e[$t] = l.current),
      Li(e.nodeType === 8 ? e.parentNode : e),
      $n(),
      l
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var s = r
    r = function () {
      var u = pl(a)
      s.call(u)
    }
  }
  var a = Tu(e, 0, !1, null, null, !1, !1, '', md)
  return (
    (e._reactRootContainer = a),
    (e[$t] = a.current),
    Li(e.nodeType === 8 ? e.parentNode : e),
    $n(function () {
      Tl(t, a, n, r)
    }),
    a
  )
}
function zl(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var l = o
    if (typeof i == 'function') {
      var s = i
      i = function () {
        var a = pl(l)
        s.call(a)
      }
    }
    Tl(t, l, e, i)
  } else l = uy(n, t, e, i, r)
  return pl(l)
}
np = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = li(t.pendingLanes)
        n !== 0 &&
          (eu(t, n | 1), Ze(t, we()), !(ne & 6) && ((Pr = we() + 500), Sn()))
      }
      break
    case 13:
      $n(function () {
        var r = Bt(e, 1)
        if (r !== null) {
          var i = $e()
          kt(r, e, 1, i)
        }
      }),
        Ou(e, 1)
  }
}
tu = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728)
    if (t !== null) {
      var n = $e()
      kt(t, e, 134217728, n)
    }
    Ou(e, 134217728)
  }
}
rp = function (e) {
  if (e.tag === 13) {
    var t = pn(e),
      n = Bt(e, t)
    if (n !== null) {
      var r = $e()
      kt(n, e, t, r)
    }
    Ou(e, t)
  }
}
ip = function () {
  return oe
}
op = function (e, t) {
  var n = oe
  try {
    return (oe = e), t()
  } finally {
    oe = n
  }
}
qs = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Us(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var i = _l(r)
            if (!i) throw Error(D(90))
            If(r), Us(r, i)
          }
        }
      }
      break
    case 'textarea':
      Af(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && gr(e, !!n.multiple, t, !1)
  }
}
Qf = Nu
Vf = $n
var cy = { usingClientEntryPoint: !1, Events: [Gi, lr, _l, Hf, Wf, Nu] },
  Zr = {
    findFiberByHostInstance: Pn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  dy = {
    bundleType: Zr.bundleType,
    version: Zr.version,
    rendererPackageName: Zr.rendererPackageName,
    rendererConfig: Zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Yf(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Zr.findFiberByHostInstance || ay,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Ro.isDisabled && Ro.supportsFiber)
    try {
      ;(Sl = Ro.inject(dy)), (Mt = Ro)
    } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cy
lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!zu(t)) throw Error(D(200))
  return sy(e, t, null, n)
}
lt.createRoot = function (e, t) {
  if (!zu(e)) throw Error(D(299))
  var n = !1,
    r = '',
    i = Nh
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Tu(e, 1, !1, null, null, n, !1, r, i)),
    (e[$t] = t.current),
    Li(e.nodeType === 8 ? e.parentNode : e),
    new Du(t)
  )
}
lt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(D(188))
      : ((e = Object.keys(e).join(',')), Error(D(268, e)))
  return (e = Yf(t)), (e = e === null ? null : e.stateNode), e
}
lt.flushSync = function (e) {
  return $n(e)
}
lt.hydrate = function (e, t, n) {
  if (!Dl(t)) throw Error(D(200))
  return zl(null, e, t, !0, n)
}
lt.hydrateRoot = function (e, t, n) {
  if (!zu(e)) throw Error(D(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    l = Nh
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Rh(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[$t] = t.current),
    Li(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new Ol(t)
}
lt.render = function (e, t, n) {
  if (!Dl(t)) throw Error(D(200))
  return zl(null, e, t, !1, n)
}
lt.unmountComponentAtNode = function (e) {
  if (!Dl(e)) throw Error(D(40))
  return e._reactRootContainer
    ? ($n(function () {
        zl(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[$t] = null)
        })
      }),
      !0)
    : !1
}
lt.unstable_batchedUpdates = Nu
lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Dl(n)) throw Error(D(200))
  if (e == null || e._reactInternals === void 0) throw Error(D(38))
  return zl(e, t, n, !1, r)
}
lt.version = '18.2.0-next-9e3b772b8-20220608'
function Ph() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ph)
    } catch (e) {
      console.error(e)
    }
}
Ph(), (Rf.exports = lt)
var Iu = Rf.exports
const fy = gf(Iu),
  py = mf({ __proto__: null, default: fy }, [Iu])
var gd = Iu
;(Os.createRoot = gd.createRoot), (Os.hydrateRoot = gd.hydrateRoot)
function Rt({ type: e = 'primary', children: t, onClick: n }) {
  return e === 'secondary'
    ? k.jsx('button', {
        onClick: n,
        className:
          'px-6 py-2 mx-2 my-2 text-sm text-indigo-700 transition duration-150 ease-in-out bg-white border border-indigo-700 rounded hover:border-indigo-600 hover:text-indigo-600',
        children: t,
      })
    : k.jsx('button', {
        onClick: n,
        className:
          'px-6 py-2 mx-2 my-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 rounded hover:bg-indigo-600',
        children: t,
      })
}
var Mh = { exports: {} },
  Lh = {}
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var to = R
function hy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var my = typeof Object.is == 'function' ? Object.is : hy,
  gy = to.useSyncExternalStore,
  yy = to.useRef,
  vy = to.useEffect,
  wy = to.useMemo,
  xy = to.useDebugValue
Lh.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = yy(null)
  if (o.current === null) {
    var l = { hasValue: !1, value: null }
    o.current = l
  } else l = o.current
  o = wy(
    function () {
      function a(g) {
        if (!u) {
          if (((u = !0), (p = g), (g = r(g)), i !== void 0 && l.hasValue)) {
            var v = l.value
            if (i(v, g)) return (m = v)
          }
          return (m = g)
        }
        if (((v = m), my(p, g))) return v
        var S = r(g)
        return i !== void 0 && i(v, S) ? v : ((p = g), (m = S))
      }
      var u = !1,
        p,
        m,
        f = n === void 0 ? null : n
      return [
        function () {
          return a(t())
        },
        f === null
          ? void 0
          : function () {
              return a(f())
            },
      ]
    },
    [t, n, r, i]
  )
  var s = gy(e, o[0], o[1])
  return (
    vy(
      function () {
        ;(l.hasValue = !0), (l.value = s)
      },
      [s]
    ),
    xy(s),
    s
  )
}
Mh.exports = Lh
var Sy = Mh.exports,
  nt = 'default' in Ts ? Qa : Ts,
  yd = Symbol.for('react-redux-context'),
  vd = typeof globalThis < 'u' ? globalThis : {}
function ky() {
  if (!nt.createContext) return {}
  const e = vd[yd] ?? (vd[yd] = new Map())
  let t = e.get(nt.createContext)
  return t || ((t = nt.createContext(null)), e.set(nt.createContext, t)), t
}
var yn = ky(),
  Ey = () => {
    throw new Error('uSES not initialized!')
  }
function bu(e = yn) {
  return function () {
    return nt.useContext(e)
  }
}
var Th = bu(),
  Oh = Ey,
  Cy = (e) => {
    Oh = e
  },
  _y = (e, t) => e === t
function jy(e = yn) {
  const t = e === yn ? Th : bu(e),
    n = (r, i = {}) => {
      const { equalityFn: o = _y, devModeChecks: l = {} } =
          typeof i == 'function' ? { equalityFn: i } : i,
        {
          store: s,
          subscription: a,
          getServerState: u,
          stabilityCheck: p,
          identityFunctionCheck: m,
        } = t()
      nt.useRef(!0)
      const f = nt.useCallback(
          {
            [r.name](v) {
              return r(v)
            },
          }[r.name],
          [r, p, l.stabilityCheck]
        ),
        g = Oh(a.addNestedSub, s.getState, u || s.getState, f, o)
      return nt.useDebugValue(g), g
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var Dr = jy()
function Dh(e) {
  e()
}
function Ry() {
  let e = null,
    t = null
  return {
    clear() {
      ;(e = null), (t = null)
    },
    notify() {
      Dh(() => {
        let n = e
        for (; n; ) n.callback(), (n = n.next)
      })
    },
    get() {
      const n = []
      let r = e
      for (; r; ) n.push(r), (r = r.next)
      return n
    },
    subscribe(n) {
      let r = !0
      const i = (t = { callback: n, next: null, prev: t })
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next))
        }
      )
    },
  }
}
var wd = { notify() {}, get: () => [] }
function Ny(e, t) {
  let n,
    r = wd,
    i = 0,
    o = !1
  function l(S) {
    p()
    const x = r.subscribe(S)
    let h = !1
    return () => {
      h || ((h = !0), x(), m())
    }
  }
  function s() {
    r.notify()
  }
  function a() {
    v.onStateChange && v.onStateChange()
  }
  function u() {
    return o
  }
  function p() {
    i++, n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = Ry()))
  }
  function m() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = wd))
  }
  function f() {
    o || ((o = !0), p())
  }
  function g() {
    o && ((o = !1), m())
  }
  const v = {
    addNestedSub: l,
    notifyNestedSubs: s,
    handleChangeWrapper: a,
    isSubscribed: u,
    trySubscribe: f,
    tryUnsubscribe: g,
    getListeners: () => r,
  }
  return v
}
var Py =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  My = Py ? nt.useLayoutEffect : nt.useEffect
function xd(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function vi(e, t) {
  if (xd(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  const n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !xd(e[n[i]], t[n[i]]))
      return !1
  return !0
}
function Ly({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = 'once',
  identityFunctionCheck: o = 'once',
}) {
  const l = nt.useMemo(() => {
      const u = Ny(e)
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: o,
      }
    }, [e, r, i, o]),
    s = nt.useMemo(() => e.getState(), [e])
  My(() => {
    const { subscription: u } = l
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      s !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0)
      }
    )
  }, [l, s])
  const a = t || yn
  return nt.createElement(a.Provider, { value: l }, n)
}
var Ty = Ly
function zh(e = yn) {
  const t = e === yn ? Th : bu(e),
    n = () => {
      const { store: r } = t()
      return r
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var Ih = zh()
function Oy(e = yn) {
  const t = e === yn ? Ih : zh(e),
    n = () => t().dispatch
  return Object.assign(n, { withTypes: () => n }), n
}
var zr = Oy(),
  Dy = Dh
Cy(Sy.useSyncExternalStoreWithSelector)
function Pe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var zy = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  Sd = zy,
  Ss = () => Math.random().toString(36).substring(7).split('').join('.'),
  Iy = {
    INIT: `@@redux/INIT${Ss()}`,
    REPLACE: `@@redux/REPLACE${Ss()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ss()}`,
  },
  hl = Iy
function Tt(e) {
  if (typeof e != 'object' || e === null) return !1
  let t = e
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}
function bh(e, t, n) {
  if (typeof e != 'function') throw new Error(Pe(2))
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Pe(0))
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(Pe(1))
    return n(bh)(e, t)
  }
  let r = e,
    i = t,
    o = new Map(),
    l = o,
    s = 0,
    a = !1
  function u() {
    l === o &&
      ((l = new Map()),
      o.forEach((x, h) => {
        l.set(h, x)
      }))
  }
  function p() {
    if (a) throw new Error(Pe(3))
    return i
  }
  function m(x) {
    if (typeof x != 'function') throw new Error(Pe(4))
    if (a) throw new Error(Pe(5))
    let h = !0
    u()
    const d = s++
    return (
      l.set(d, x),
      function () {
        if (h) {
          if (a) throw new Error(Pe(6))
          ;(h = !1), u(), l.delete(d), (o = null)
        }
      }
    )
  }
  function f(x) {
    if (!Tt(x)) throw new Error(Pe(7))
    if (typeof x.type > 'u') throw new Error(Pe(8))
    if (typeof x.type != 'string') throw new Error(Pe(17))
    if (a) throw new Error(Pe(9))
    try {
      ;(a = !0), (i = r(i, x))
    } finally {
      a = !1
    }
    return (
      (o = l).forEach((d) => {
        d()
      }),
      x
    )
  }
  function g(x) {
    if (typeof x != 'function') throw new Error(Pe(10))
    ;(r = x), f({ type: hl.REPLACE })
  }
  function v() {
    const x = m
    return {
      subscribe(h) {
        if (typeof h != 'object' || h === null) throw new Error(Pe(11))
        function d() {
          const y = h
          y.next && y.next(p())
        }
        return d(), { unsubscribe: x(d) }
      },
      [Sd]() {
        return this
      },
    }
  }
  return (
    f({ type: hl.INIT }),
    { dispatch: f, subscribe: m, getState: p, replaceReducer: g, [Sd]: v }
  )
}
function by(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t]
    if (typeof n(void 0, { type: hl.INIT }) > 'u') throw new Error(Pe(12))
    if (typeof n(void 0, { type: hl.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Pe(13))
  })
}
function Ah(e) {
  const t = Object.keys(e),
    n = {}
  for (let o = 0; o < t.length; o++) {
    const l = t[o]
    typeof e[l] == 'function' && (n[l] = e[l])
  }
  const r = Object.keys(n)
  let i
  try {
    by(n)
  } catch (o) {
    i = o
  }
  return function (l = {}, s) {
    if (i) throw i
    let a = !1
    const u = {}
    for (let p = 0; p < r.length; p++) {
      const m = r[p],
        f = n[m],
        g = l[m],
        v = f(g, s)
      if (typeof v > 'u') throw (s && s.type, new Error(Pe(14)))
      ;(u[m] = v), (a = a || v !== g)
    }
    return (a = a || r.length !== Object.keys(l).length), a ? u : l
  }
}
function ml(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      )
}
function Ay(...e) {
  return (t) => (n, r) => {
    const i = t(n, r)
    let o = () => {
      throw new Error(Pe(15))
    }
    const l = { getState: i.getState, dispatch: (a, ...u) => o(a, ...u) },
      s = e.map((a) => a(l))
    return (o = ml(...s)(i.dispatch)), { ...i, dispatch: o }
  }
}
function Fh(e) {
  return Tt(e) && 'type' in e && typeof e.type == 'string'
}
var Au = Symbol.for('immer-nothing'),
  wi = Symbol.for('immer-draftable'),
  Je = Symbol.for('immer-state')
function Le(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  )
}
var Bn = Object.getPrototypeOf
function Ct(e) {
  return !!e && !!e[Je]
}
function _t(e) {
  var t
  return e
    ? Uh(e) ||
        Array.isArray(e) ||
        !!e[wi] ||
        !!((t = e.constructor) != null && t[wi]) ||
        no(e) ||
        ro(e)
    : !1
}
var Fy = Object.prototype.constructor.toString()
function Uh(e) {
  if (!e || typeof e != 'object') return !1
  const t = Bn(e)
  if (t === null) return !0
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor
  return n === Object
    ? !0
    : typeof n == 'function' && Function.toString.call(n) === Fy
}
function Uy(e) {
  return Ct(e) || Le(15, e), e[Je].base_
}
function Ui(e, t) {
  Hn(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e)
      })
    : e.forEach((n, r) => t(r, n, e))
}
function Hn(e) {
  const t = e[Je]
  return t ? t.type_ : Array.isArray(e) ? 1 : no(e) ? 2 : ro(e) ? 3 : 0
}
function $i(e, t) {
  return Hn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function ks(e, t) {
  return Hn(e) === 2 ? e.get(t) : e[t]
}
function $h(e, t, n) {
  const r = Hn(e)
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n)
}
function $y(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function no(e) {
  return e instanceof Map
}
function ro(e) {
  return e instanceof Set
}
function Rn(e) {
  return e.copy_ || e.base_
}
function ja(e, t) {
  if (no(e)) return new Map(e)
  if (ro(e)) return new Set(e)
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  if (!t && Uh(e))
    return Bn(e) ? { ...e } : Object.assign(Object.create(null), e)
  const n = Object.getOwnPropertyDescriptors(e)
  delete n[Je]
  let r = Reflect.ownKeys(n)
  for (let i = 0; i < r.length; i++) {
    const o = r[i],
      l = n[o]
    l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
      (l.get || l.set) &&
        (n[o] = {
          configurable: !0,
          writable: !0,
          enumerable: l.enumerable,
          value: e[o],
        })
  }
  return Object.create(Bn(e), n)
}
function Fu(e, t = !1) {
  return (
    Il(e) ||
      Ct(e) ||
      !_t(e) ||
      (Hn(e) > 1 && (e.set = e.add = e.clear = e.delete = By),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Fu(r, !0))),
    e
  )
}
function By() {
  Le(2)
}
function Il(e) {
  return Object.isFrozen(e)
}
var Ra = {}
function Wn(e) {
  const t = Ra[e]
  return t || Le(0, e), t
}
function Hy(e, t) {
  Ra[e] || (Ra[e] = t)
}
var Bi
function Bh() {
  return Bi
}
function Wy(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  }
}
function kd(e, t) {
  t &&
    (Wn('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t))
}
function Na(e) {
  Pa(e), e.drafts_.forEach(Qy), (e.drafts_ = null)
}
function Pa(e) {
  e === Bi && (Bi = e.parent_)
}
function Ed(e) {
  return (Bi = Wy(Bi, e))
}
function Qy(e) {
  const t = e[Je]
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0)
}
function Cd(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length
  const n = t.drafts_[0]
  return (
    e !== void 0 && e !== n
      ? (n[Je].modified_ && (Na(t), Le(4)),
        _t(e) && ((e = gl(t, e)), t.parent_ || yl(t, e)),
        t.patches_ &&
          Wn('Patches').generateReplacementPatches_(
            n[Je].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = gl(t, n, [])),
    Na(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Au ? e : void 0
  )
}
function gl(e, t, n) {
  if (Il(t)) return t
  const r = t[Je]
  if (!r) return Ui(t, (i, o) => _d(e, r, t, i, o, n)), t
  if (r.scope_ !== e) return t
  if (!r.modified_) return yl(e, r.base_, !0), r.base_
  if (!r.finalized_) {
    ;(r.finalized_ = !0), r.scope_.unfinalizedDrafts_--
    const i = r.copy_
    let o = i,
      l = !1
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (l = !0)),
      Ui(o, (s, a) => _d(e, r, i, s, a, n, l)),
      yl(e, i, !1),
      n &&
        e.patches_ &&
        Wn('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_)
  }
  return r.copy_
}
function _d(e, t, n, r, i, o, l) {
  if (Ct(i)) {
    const s =
        o && t && t.type_ !== 3 && !$i(t.assigned_, r) ? o.concat(r) : void 0,
      a = gl(e, i, s)
    if (($h(n, r, a), Ct(a))) e.canAutoFreeze_ = !1
    else return
  } else l && n.add(i)
  if (_t(i) && !Il(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return
    gl(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        yl(e, i)
  }
}
function yl(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Fu(t, n)
}
function Vy(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Bh(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    }
  let i = r,
    o = Uu
  n && ((i = [r]), (o = Hi))
  const { revoke: l, proxy: s } = Proxy.revocable(i, o)
  return (r.draft_ = s), (r.revoke_ = l), s
}
var Uu = {
    get(e, t) {
      if (t === Je) return e
      const n = Rn(e)
      if (!$i(n, t)) return qy(e, n, t)
      const r = n[t]
      return e.finalized_ || !_t(r)
        ? r
        : r === Es(e.base_, t)
        ? (Cs(e), (e.copy_[t] = La(r, e)))
        : r
    },
    has(e, t) {
      return t in Rn(e)
    },
    ownKeys(e) {
      return Reflect.ownKeys(Rn(e))
    },
    set(e, t, n) {
      const r = Hh(Rn(e), t)
      if (r != null && r.set) return r.set.call(e.draft_, n), !0
      if (!e.modified_) {
        const i = Es(Rn(e), t),
          o = i == null ? void 0 : i[Je]
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0
        if ($y(n, i) && (n !== void 0 || $i(e.base_, t))) return !0
        Cs(e), Ma(e)
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      )
    },
    deleteProperty(e, t) {
      return (
        Es(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Cs(e), Ma(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      )
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Rn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t)
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t],
        }
      )
    },
    defineProperty() {
      Le(11)
    },
    getPrototypeOf(e) {
      return Bn(e.base_)
    },
    setPrototypeOf() {
      Le(12)
    },
  },
  Hi = {}
Ui(Uu, (e, t) => {
  Hi[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
})
Hi.deleteProperty = function (e, t) {
  return Hi.set.call(this, e, t, void 0)
}
Hi.set = function (e, t, n) {
  return Uu.set.call(this, e[0], t, n, e[0])
}
function Es(e, t) {
  const n = e[Je]
  return (n ? Rn(n) : e)[t]
}
function qy(e, t, n) {
  var i
  const r = Hh(t, n)
  return r
    ? 'value' in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0
}
function Hh(e, t) {
  if (!(t in e)) return
  let n = Bn(e)
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t)
    if (r) return r
    n = Bn(n)
  }
}
function Ma(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Ma(e.parent_))
}
function Cs(e) {
  e.copy_ || (e.copy_ = ja(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var Ky = class {
  constructor(e) {
    ;(this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == 'function' && typeof n != 'function') {
          const o = n
          n = t
          const l = this
          return function (a = o, ...u) {
            return l.produce(a, (p) => n.call(this, p, ...u))
          }
        }
        typeof n != 'function' && Le(6),
          r !== void 0 && typeof r != 'function' && Le(7)
        let i
        if (_t(t)) {
          const o = Ed(this),
            l = La(t, void 0)
          let s = !0
          try {
            ;(i = n(l)), (s = !1)
          } finally {
            s ? Na(o) : Pa(o)
          }
          return kd(o, r), Cd(i, o)
        } else if (!t || typeof t != 'object') {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === Au && (i = void 0),
            this.autoFreeze_ && Fu(i, !0),
            r)
          ) {
            const o = [],
              l = []
            Wn('Patches').generateReplacementPatches_(t, i, o, l), r(o, l)
          }
          return i
        } else Le(1, t)
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == 'function')
          return (l, ...s) => this.produceWithPatches(l, (a) => t(a, ...s))
        let r, i
        return [
          this.produce(t, n, (l, s) => {
            ;(r = l), (i = s)
          }),
          r,
          i,
        ]
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy)
  }
  createDraft(e) {
    _t(e) || Le(8), Ct(e) && (e = Wh(e))
    const t = Ed(this),
      n = La(e, void 0)
    return (n[Je].isManual_ = !0), Pa(t), n
  }
  finishDraft(e, t) {
    const n = e && e[Je]
    ;(!n || !n.isManual_) && Le(9)
    const { scope_: r } = n
    return kd(r, t), Cd(void 0, r)
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e
  }
  applyPatches(e, t) {
    let n
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n]
      if (i.path.length === 0 && i.op === 'replace') {
        e = i.value
        break
      }
    }
    n > -1 && (t = t.slice(n + 1))
    const r = Wn('Patches').applyPatches_
    return Ct(e) ? r(e, t) : this.produce(e, (i) => r(i, t))
  }
}
function La(e, t) {
  const n = no(e)
    ? Wn('MapSet').proxyMap_(e, t)
    : ro(e)
    ? Wn('MapSet').proxySet_(e, t)
    : Vy(e, t)
  return (t ? t.scope_ : Bh()).drafts_.push(n), n
}
function Wh(e) {
  return Ct(e) || Le(10, e), Qh(e)
}
function Qh(e) {
  if (!_t(e) || Il(e)) return e
  const t = e[Je]
  let n
  if (t) {
    if (!t.modified_) return t.base_
    ;(t.finalized_ = !0), (n = ja(e, t.scope_.immer_.useStrictShallowCopy_))
  } else n = ja(e, !0)
  return (
    Ui(n, (r, i) => {
      $h(n, r, Qh(i))
    }),
    t && (t.finalized_ = !1),
    n
  )
}
function Yy() {
  const t = 'replace',
    n = 'add',
    r = 'remove'
  function i(f, g, v, S) {
    switch (f.type_) {
      case 0:
      case 2:
        return l(f, g, v, S)
      case 1:
        return o(f, g, v, S)
      case 3:
        return s(f, g, v, S)
    }
  }
  function o(f, g, v, S) {
    let { base_: x, assigned_: h } = f,
      d = f.copy_
    d.length < x.length && (([x, d] = [d, x]), ([v, S] = [S, v]))
    for (let c = 0; c < x.length; c++)
      if (h[c] && d[c] !== x[c]) {
        const y = g.concat([c])
        v.push({ op: t, path: y, value: m(d[c]) }),
          S.push({ op: t, path: y, value: m(x[c]) })
      }
    for (let c = x.length; c < d.length; c++) {
      const y = g.concat([c])
      v.push({ op: n, path: y, value: m(d[c]) })
    }
    for (let c = d.length - 1; x.length <= c; --c) {
      const y = g.concat([c])
      S.push({ op: r, path: y })
    }
  }
  function l(f, g, v, S) {
    const { base_: x, copy_: h } = f
    Ui(f.assigned_, (d, c) => {
      const y = ks(x, d),
        E = ks(h, d),
        w = c ? ($i(x, d) ? t : n) : r
      if (y === E && w === t) return
      const C = g.concat(d)
      v.push(w === r ? { op: w, path: C } : { op: w, path: C, value: E }),
        S.push(
          w === n
            ? { op: r, path: C }
            : w === r
            ? { op: n, path: C, value: m(y) }
            : { op: t, path: C, value: m(y) }
        )
    })
  }
  function s(f, g, v, S) {
    let { base_: x, copy_: h } = f,
      d = 0
    x.forEach((c) => {
      if (!h.has(c)) {
        const y = g.concat([d])
        v.push({ op: r, path: y, value: c }),
          S.unshift({ op: n, path: y, value: c })
      }
      d++
    }),
      (d = 0),
      h.forEach((c) => {
        if (!x.has(c)) {
          const y = g.concat([d])
          v.push({ op: n, path: y, value: c }),
            S.unshift({ op: r, path: y, value: c })
        }
        d++
      })
  }
  function a(f, g, v, S) {
    v.push({ op: t, path: [], value: g === Au ? void 0 : g }),
      S.push({ op: t, path: [], value: f })
  }
  function u(f, g) {
    return (
      g.forEach((v) => {
        const { path: S, op: x } = v
        let h = f
        for (let E = 0; E < S.length - 1; E++) {
          const w = Hn(h)
          let C = S[E]
          typeof C != 'string' && typeof C != 'number' && (C = '' + C),
            (w === 0 || w === 1) &&
              (C === '__proto__' || C === 'constructor') &&
              Le(19),
            typeof h == 'function' && C === 'prototype' && Le(19),
            (h = ks(h, C)),
            typeof h != 'object' && Le(18, S.join('/'))
        }
        const d = Hn(h),
          c = p(v.value),
          y = S[S.length - 1]
        switch (x) {
          case t:
            switch (d) {
              case 2:
                return h.set(y, c)
              case 3:
                Le(16)
              default:
                return (h[y] = c)
            }
          case n:
            switch (d) {
              case 1:
                return y === '-' ? h.push(c) : h.splice(y, 0, c)
              case 2:
                return h.set(y, c)
              case 3:
                return h.add(c)
              default:
                return (h[y] = c)
            }
          case r:
            switch (d) {
              case 1:
                return h.splice(y, 1)
              case 2:
                return h.delete(y)
              case 3:
                return h.delete(v.value)
              default:
                return delete h[y]
            }
          default:
            Le(17, x)
        }
      }),
      f
    )
  }
  function p(f) {
    if (!_t(f)) return f
    if (Array.isArray(f)) return f.map(p)
    if (no(f))
      return new Map(Array.from(f.entries()).map(([v, S]) => [v, p(S)]))
    if (ro(f)) return new Set(Array.from(f).map(p))
    const g = Object.create(Bn(f))
    for (const v in f) g[v] = p(f[v])
    return $i(f, wi) && (g[wi] = f[wi]), g
  }
  function m(f) {
    return Ct(f) ? p(f) : f
  }
  Hy('Patches', {
    applyPatches_: u,
    generatePatches_: i,
    generateReplacementPatches_: a,
  })
}
var ot = new Ky(),
  io = ot.produce,
  Vh = ot.produceWithPatches.bind(ot)
ot.setAutoFreeze.bind(ot)
ot.setUseStrictShallowCopy.bind(ot)
var jd = ot.applyPatches.bind(ot)
ot.createDraft.bind(ot)
ot.finishDraft.bind(ot)
function Zy(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t)
}
function Jy(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(t)
}
function Xy(
  e,
  t = 'expected all items to be functions, instead received the following types: '
) {
  if (!e.every((n) => typeof n == 'function')) {
    const n = e
      .map((r) =>
        typeof r == 'function' ? `function ${r.name || 'unnamed'}()` : typeof r
      )
      .join(', ')
    throw new TypeError(`${t}[${n}]`)
  }
}
var Rd = (e) => (Array.isArray(e) ? e : [e])
function Gy(e) {
  const t = Array.isArray(e[0]) ? e[0] : e
  return (
    Xy(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    t
  )
}
function ev(e, t) {
  const n = [],
    { length: r } = e
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t))
  return n
}
var tv = class {
    constructor(e) {
      this.value = e
    }
    deref() {
      return this.value
    }
  },
  nv = typeof WeakRef < 'u' ? WeakRef : tv,
  rv = 0,
  Nd = 1
function No() {
  return { s: rv, v: void 0, o: null, p: null }
}
function Wi(e, t = {}) {
  let n = No()
  const { resultEqualityCheck: r } = t
  let i,
    o = 0
  function l() {
    var m
    let s = n
    const { length: a } = arguments
    for (let f = 0, g = a; f < g; f++) {
      const v = arguments[f]
      if (typeof v == 'function' || (typeof v == 'object' && v !== null)) {
        let S = s.o
        S === null && (s.o = S = new WeakMap())
        const x = S.get(v)
        x === void 0 ? ((s = No()), S.set(v, s)) : (s = x)
      } else {
        let S = s.p
        S === null && (s.p = S = new Map())
        const x = S.get(v)
        x === void 0 ? ((s = No()), S.set(v, s)) : (s = x)
      }
    }
    const u = s
    let p
    if (
      (s.s === Nd ? (p = s.v) : ((p = e.apply(null, arguments)), o++),
      (u.s = Nd),
      r)
    ) {
      const f =
        ((m = i == null ? void 0 : i.deref) == null ? void 0 : m.call(i)) ?? i
      f != null && r(f, p) && ((p = f), o !== 0 && o--),
        (i =
          (typeof p == 'object' && p !== null) || typeof p == 'function'
            ? new nv(p)
            : p)
    }
    return (u.v = p), p
  }
  return (
    (l.clearCache = () => {
      ;(n = No()), l.resetResultsCount()
    }),
    (l.resultsCount = () => o),
    (l.resetResultsCount = () => {
      o = 0
    }),
    l
  )
}
function qh(e, ...t) {
  const n = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let o = 0,
        l = 0,
        s,
        a = {},
        u = i.pop()
      typeof u == 'object' && ((a = u), (u = i.pop())),
        Zy(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`
        )
      const p = { ...n, ...a },
        {
          memoize: m,
          memoizeOptions: f = [],
          argsMemoize: g = Wi,
          argsMemoizeOptions: v = [],
          devModeChecks: S = {},
        } = p,
        x = Rd(f),
        h = Rd(v),
        d = Gy(i),
        c = m(function () {
          return o++, u.apply(null, arguments)
        }, ...x),
        y = g(function () {
          l++
          const w = ev(d, arguments)
          return (s = c.apply(null, w)), s
        }, ...h)
      return Object.assign(y, {
        resultFunc: u,
        memoizedResultFunc: c,
        dependencies: d,
        dependencyRecomputations: () => l,
        resetDependencyRecomputations: () => {
          l = 0
        },
        lastResult: () => s,
        recomputations: () => o,
        resetRecomputations: () => {
          o = 0
        },
        memoize: m,
        argsMemoize: g,
      })
    }
  return Object.assign(r, { withTypes: () => r }), r
}
var $u = qh(Wi),
  iv = Object.assign(
    (e, t = $u) => {
      Jy(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      )
      const n = Object.keys(e),
        r = n.map((o) => e[o])
      return t(r, (...o) => o.reduce((l, s, a) => ((l[n[a]] = s), l), {}))
    },
    { withTypes: () => iv }
  )
function Kh(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == 'function' ? o(n, r, e) : i(o)
}
var ov = Kh(),
  lv = Kh,
  sv = (...e) => {
    const t = qh(...e),
      n = Object.assign(
        (...r) => {
          const i = t(...r),
            o = (l, ...s) => i(Ct(l) ? Wh(l) : l, ...s)
          return Object.assign(o, i), o
        },
        { withTypes: () => n }
      )
    return n
  }
sv(Wi)
var av =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? ml
              : ml.apply(null, arguments)
        },
  uv = (e) => e && typeof e.match == 'function'
function Be(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r)
      if (!i) throw new Error(be(0))
      return {
        type: e,
        payload: i.payload,
        ...('meta' in i && { meta: i.meta }),
        ...('error' in i && { error: i.error }),
      }
    }
    return { type: e, payload: r[0] }
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => Fh(r) && r.type === e),
    n
  )
}
var Yh = class ai extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ai.prototype)
  }
  static get [Symbol.species]() {
    return ai
  }
  concat(...t) {
    return super.concat.apply(this, t)
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new ai(...t[0].concat(this))
      : new ai(...t.concat(this))
  }
}
function Pd(e) {
  return _t(e) ? io(e, () => {}) : e
}
function Md(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t)
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i
  }
  if (!n.insert) throw new Error(be(10))
  const r = n.insert(t, e)
  return e.set(t, r), r
}
function cv(e) {
  return typeof e == 'boolean'
}
var dv = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {}
      let l = new Yh()
      return n && (cv(n) ? l.push(ov) : l.push(lv(n.extraArgument))), l
    },
  pr = 'RTK_autoBatch',
  Jr = () => (e) => ({ payload: e, meta: { [pr]: !0 } }),
  Zh = (e) => (t) => {
    setTimeout(t, e)
  },
  fv =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Zh(10),
  pv =
    (e = { type: 'raf' }) =>
    (t) =>
    (...n) => {
      const r = t(...n)
      let i = !0,
        o = !1,
        l = !1
      const s = new Set(),
        a =
          e.type === 'tick'
            ? queueMicrotask
            : e.type === 'raf'
            ? fv
            : e.type === 'callback'
            ? e.queueNotification
            : Zh(e.timeout),
        u = () => {
          ;(l = !1), o && ((o = !1), s.forEach((p) => p()))
        }
      return Object.assign({}, r, {
        subscribe(p) {
          const m = () => i && p(),
            f = r.subscribe(m)
          return (
            s.add(p),
            () => {
              f(), s.delete(p)
            }
          )
        },
        dispatch(p) {
          var m
          try {
            return (
              (i = !((m = p == null ? void 0 : p.meta) != null && m[pr])),
              (o = !i),
              o && (l || ((l = !0), a(u))),
              r.dispatch(p)
            )
          } finally {
            i = !0
          }
        },
      })
    },
  hv = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {}
      let i = new Yh(e)
      return r && i.push(pv(typeof r == 'object' ? r : void 0)), i
    },
  mv = !0
function gv(e) {
  const t = dv(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: l = void 0,
    } = e || {}
  let s
  if (typeof n == 'function') s = n
  else if (Tt(n)) s = Ah(n)
  else throw new Error(be(1))
  let a
  typeof r == 'function' ? (a = r(t)) : (a = t())
  let u = ml
  i && (u = av({ trace: !mv, ...(typeof i == 'object' && i) }))
  const p = Ay(...a),
    m = hv(p)
  let f = typeof l == 'function' ? l(m) : m()
  const g = u(...f)
  return bh(s, o, g)
}
function Jh(e) {
  const t = {},
    n = []
  let r
  const i = {
    addCase(o, l) {
      const s = typeof o == 'string' ? o : o.type
      if (!s) throw new Error(be(28))
      if (s in t) throw new Error(be(29))
      return (t[s] = l), i
    },
    addMatcher(o, l) {
      return n.push({ matcher: o, reducer: l }), i
    },
    addDefaultCase(o) {
      return (r = o), i
    },
  }
  return e(i), [t, n, r]
}
function yv(e) {
  return typeof e == 'function'
}
function vv(e, t) {
  let [n, r, i] = Jh(t),
    o
  if (yv(e)) o = () => Pd(e())
  else {
    const s = Pd(e)
    o = () => s
  }
  function l(s = o(), a) {
    let u = [
      n[a.type],
      ...r.filter(({ matcher: p }) => p(a)).map(({ reducer: p }) => p),
    ]
    return (
      u.filter((p) => !!p).length === 0 && (u = [i]),
      u.reduce((p, m) => {
        if (m)
          if (Ct(p)) {
            const g = m(p, a)
            return g === void 0 ? p : g
          } else {
            if (_t(p)) return io(p, (f) => m(f, a))
            {
              const f = m(p, a)
              if (f === void 0) {
                if (p === null) return p
                throw new Error(be(9))
              }
              return f
            }
          }
        return p
      }, s)
    )
  }
  return (l.getInitialState = o), l
}
var wv = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  Bu = (e = 21) => {
    let t = '',
      n = e
    for (; n--; ) t += wv[(Math.random() * 64) | 0]
    return t
  },
  Xh = (e, t) => (uv(e) ? e.match(t) : e(t))
function Wt(...e) {
  return (t) => e.some((n) => Xh(n, t))
}
function xi(...e) {
  return (t) => e.every((n) => Xh(n, t))
}
function bl(e, t) {
  if (!e || !e.meta) return !1
  const n = typeof e.meta.requestId == 'string',
    r = t.indexOf(e.meta.requestStatus) > -1
  return n && r
}
function oo(e) {
  return (
    typeof e[0] == 'function' &&
    'pending' in e[0] &&
    'fulfilled' in e[0] &&
    'rejected' in e[0]
  )
}
function Hu(...e) {
  return e.length === 0
    ? (t) => bl(t, ['pending'])
    : oo(e)
    ? (t) => {
        const n = e.map((i) => i.pending)
        return Wt(...n)(t)
      }
    : Hu()(e[0])
}
function Mr(...e) {
  return e.length === 0
    ? (t) => bl(t, ['rejected'])
    : oo(e)
    ? (t) => {
        const n = e.map((i) => i.rejected)
        return Wt(...n)(t)
      }
    : Mr()(e[0])
}
function Al(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue
  return e.length === 0
    ? (n) => xi(Mr(...e), t)(n)
    : oo(e)
    ? (n) => xi(Mr(...e), t)(n)
    : Al()(e[0])
}
function vn(...e) {
  return e.length === 0
    ? (t) => bl(t, ['fulfilled'])
    : oo(e)
    ? (t) => {
        const n = e.map((i) => i.fulfilled)
        return Wt(...n)(t)
      }
    : vn()(e[0])
}
function Ta(...e) {
  return e.length === 0
    ? (t) => bl(t, ['pending', 'fulfilled', 'rejected'])
    : oo(e)
    ? (t) => {
        const n = []
        for (const i of e) n.push(i.pending, i.rejected, i.fulfilled)
        return Wt(...n)(t)
      }
    : Ta()(e[0])
}
var xv = ['name', 'message', 'stack', 'code'],
  _s = class {
    constructor(e, t) {
      Kl(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  Ld = class {
    constructor(e, t) {
      Kl(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  Sv = (e) => {
    if (typeof e == 'object' && e !== null) {
      const t = {}
      for (const n of xv) typeof e[n] == 'string' && (t[n] = e[n])
      return t
    }
    return { message: String(e) }
  },
  Td = (() => {
    function e(t, n, r) {
      const i = Be(t + '/fulfilled', (a, u, p, m) => ({
          payload: a,
          meta: {
            ...(m || {}),
            arg: p,
            requestId: u,
            requestStatus: 'fulfilled',
          },
        })),
        o = Be(t + '/pending', (a, u, p) => ({
          payload: void 0,
          meta: {
            ...(p || {}),
            arg: u,
            requestId: a,
            requestStatus: 'pending',
          },
        })),
        l = Be(t + '/rejected', (a, u, p, m, f) => ({
          payload: m,
          error: ((r && r.serializeError) || Sv)(a || 'Rejected'),
          meta: {
            ...(f || {}),
            arg: p,
            requestId: u,
            rejectedWithValue: !!m,
            requestStatus: 'rejected',
            aborted: (a == null ? void 0 : a.name) === 'AbortError',
            condition: (a == null ? void 0 : a.name) === 'ConditionError',
          },
        }))
      function s(a) {
        return (u, p, m) => {
          const f = r != null && r.idGenerator ? r.idGenerator(a) : Bu(),
            g = new AbortController()
          let v, S
          function x(d) {
            ;(S = d), g.abort()
          }
          const h = (async function () {
            var y, E
            let d
            try {
              let w =
                (y = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : y.call(r, a, { getState: p, extra: m })
              if ((Ev(w) && (w = await w), w === !1 || g.signal.aborted))
                throw {
                  name: 'ConditionError',
                  message: 'Aborted due to condition callback returning false.',
                }
              const C = new Promise((_, N) => {
                ;(v = () => {
                  N({ name: 'AbortError', message: S || 'Aborted' })
                }),
                  g.signal.addEventListener('abort', v)
              })
              u(
                o(
                  f,
                  a,
                  (E = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : E.call(
                        r,
                        { requestId: f, arg: a },
                        { getState: p, extra: m }
                      )
                )
              ),
                (d = await Promise.race([
                  C,
                  Promise.resolve(
                    n(a, {
                      dispatch: u,
                      getState: p,
                      extra: m,
                      requestId: f,
                      signal: g.signal,
                      abort: x,
                      rejectWithValue: (_, N) => new _s(_, N),
                      fulfillWithValue: (_, N) => new Ld(_, N),
                    })
                  ).then((_) => {
                    if (_ instanceof _s) throw _
                    return _ instanceof Ld
                      ? i(_.payload, f, a, _.meta)
                      : i(_, f, a)
                  }),
                ]))
            } catch (w) {
              d =
                w instanceof _s ? l(null, f, a, w.payload, w.meta) : l(w, f, a)
            } finally {
              v && g.signal.removeEventListener('abort', v)
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                l.match(d) &&
                d.meta.condition) ||
                u(d),
              d
            )
          })()
          return Object.assign(h, {
            abort: x,
            requestId: f,
            arg: a,
            unwrap() {
              return h.then(kv)
            },
          })
        }
      }
      return Object.assign(s, {
        pending: o,
        rejected: l,
        fulfilled: i,
        settled: Wt(l, i),
        typePrefix: t,
      })
    }
    return (e.withTypes = () => e), e
  })()
function kv(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload
  if (e.error) throw e.error
  return e.payload
}
function Ev(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function'
}
var Cv = Symbol.for('rtk-slice-createasyncthunk')
function _v(e, t) {
  return `${e}/${t}`
}
function jv({ creators: e } = {}) {
  var n
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Cv]
  return function (i) {
    const { name: o, reducerPath: l = o } = i
    if (!o) throw new Error(be(11))
    typeof process < 'u'
    const s =
        (typeof i.reducers == 'function' ? i.reducers(Nv()) : i.reducers) || {},
      a = Object.keys(s),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      p = {
        addCase(c, y) {
          const E = typeof c == 'string' ? c : c.type
          if (!E) throw new Error(be(12))
          if (E in u.sliceCaseReducersByType) throw new Error(be(13))
          return (u.sliceCaseReducersByType[E] = y), p
        },
        addMatcher(c, y) {
          return u.sliceMatchers.push({ matcher: c, reducer: y }), p
        },
        exposeAction(c, y) {
          return (u.actionCreators[c] = y), p
        },
        exposeCaseReducer(c, y) {
          return (u.sliceCaseReducersByName[c] = y), p
        },
      }
    a.forEach((c) => {
      const y = s[c],
        E = {
          reducerName: c,
          type: _v(o, c),
          createNotation: typeof i.reducers == 'function',
        }
      Mv(y) ? Tv(E, y, p, t) : Pv(E, y, p)
    })
    function m() {
      const [c = {}, y = [], E = void 0] =
          typeof i.extraReducers == 'function'
            ? Jh(i.extraReducers)
            : [i.extraReducers],
        w = { ...c, ...u.sliceCaseReducersByType }
      return vv(i.initialState, (C) => {
        for (let _ in w) C.addCase(_, w[_])
        for (let _ of u.sliceMatchers) C.addMatcher(_.matcher, _.reducer)
        for (let _ of y) C.addMatcher(_.matcher, _.reducer)
        E && C.addDefaultCase(E)
      })
    }
    const f = (c) => c,
      g = new Map()
    let v
    function S(c, y) {
      return v || (v = m()), v(c, y)
    }
    function x() {
      return v || (v = m()), v.getInitialState()
    }
    function h(c, y = !1) {
      function E(C) {
        let _ = C[c]
        return typeof _ > 'u' && y && (_ = x()), _
      }
      function w(C = f) {
        const _ = Md(g, y, { insert: () => new WeakMap() })
        return Md(_, C, {
          insert: () => {
            const N = {}
            for (const [M, T] of Object.entries(i.selectors ?? {}))
              N[M] = Rv(T, C, x, y)
            return N
          },
        })
      }
      return {
        reducerPath: c,
        getSelectors: w,
        get selectors() {
          return w(E)
        },
        selectSlice: E,
      }
    }
    const d = {
      name: o,
      reducer: S,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: x,
      ...h(l),
      injectInto(c, { reducerPath: y, ...E } = {}) {
        const w = y ?? l
        return (
          c.inject({ reducerPath: w, reducer: S }, E), { ...d, ...h(w, !0) }
        )
      },
    }
    return d
  }
}
function Rv(e, t, n, r) {
  function i(o, ...l) {
    let s = t(o)
    return typeof s > 'u' && r && (s = n()), e(s, ...l)
  }
  return (i.unwrapped = e), i
}
var Nn = jv()
function Nv() {
  function e(t, n) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: t, ...n }
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n)
            },
          }[t.name],
          { _reducerDefinitionType: 'reducer' }
        )
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: t,
          reducer: n,
        }
      },
      asyncThunk: e,
    }
  )
}
function Pv({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, l
  if ('reducer' in r) {
    if (n && !Lv(r)) throw new Error(be(17))
    ;(o = r.reducer), (l = r.prepare)
  } else o = r
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, l ? Be(e, l) : Be(e))
}
function Mv(e) {
  return e._reducerDefinitionType === 'asyncThunk'
}
function Lv(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare'
}
function Tv({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(be(18))
  const {
      payloadCreator: o,
      fulfilled: l,
      pending: s,
      rejected: a,
      settled: u,
      options: p,
    } = n,
    m = i(e, o, p)
  r.exposeAction(t, m),
    l && r.addCase(m.fulfilled, l),
    s && r.addCase(m.pending, s),
    a && r.addCase(m.rejected, a),
    u && r.addMatcher(m.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: l || Po,
      pending: s || Po,
      rejected: a || Po,
      settled: u || Po,
    })
}
function Po() {}
var Ov = (e, t) => {
    if (typeof e != 'function') throw new Error(be(32))
  },
  Wu = 'listenerMiddleware',
  Dv = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: o } = e
    if (t) i = Be(t).match
    else if (n) (t = n.type), (i = n.match)
    else if (r) i = r
    else if (!i) throw new Error(be(21))
    return Ov(o), { predicate: i, type: t, effect: o }
  },
  zv = Object.assign(
    (e) => {
      const { type: t, predicate: n, effect: r } = Dv(e)
      return {
        id: Bu(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(be(22))
        },
      }
    },
    { withTypes: () => zv }
  ),
  Iv = Object.assign(Be(`${Wu}/add`), { withTypes: () => Iv })
Be(`${Wu}/removeAll`)
var bv = Object.assign(Be(`${Wu}/remove`), { withTypes: () => bv })
function be(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
const Od = {
    user: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  },
  Gh = Nn({
    name: 'auth',
    initialState: Od,
    reducers: {
      setCredentials: (e, t) => {
        const { user: n, accessToken: r } = t.payload
        ;(e.user = n), (e.token = r || Od.token)
      },
      logout: (e) => {
        ;(e.user = null), (e.token = null), localStorage.clear()
      },
    },
  }),
  { setCredentials: Qu, logout: em } = Gh.actions,
  Av = Gh.reducer
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ye() {
  return (
    (ye = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    ye.apply(this, arguments)
  )
}
var ve
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(ve || (ve = {}))
const Dd = 'popstate'
function Fv(e) {
  e === void 0 && (e = {})
  function t(i, o) {
    let {
      pathname: l = '/',
      search: s = '',
      hash: a = '',
    } = Ot(i.location.hash.substr(1))
    return (
      !l.startsWith('/') && !l.startsWith('.') && (l = '/' + l),
      Qi(
        '',
        { pathname: l, search: s, hash: a },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || 'default'
      )
    )
  }
  function n(i, o) {
    let l = i.document.querySelector('base'),
      s = ''
    if (l && l.getAttribute('href')) {
      let a = i.location.href,
        u = a.indexOf('#')
      s = u === -1 ? a : a.slice(0, u)
    }
    return s + '#' + (typeof o == 'string' ? o : Vn(o))
  }
  function r(i, o) {
    Qn(
      i.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(o) +
        ')'
    )
  }
  return $v(t, n, r, e)
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Qn(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function Uv() {
  return Math.random().toString(36).substr(2, 8)
}
function zd(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Qi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ye(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Ot(t) : t,
      { state: n, key: (t && t.key) || r || Uv() }
    )
  )
}
function Vn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function Ot(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function $v(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    s = ve.Pop,
    a = null,
    u = p()
  u == null && ((u = 0), l.replaceState(ye({}, l.state, { idx: u }), ''))
  function p() {
    return (l.state || { idx: null }).idx
  }
  function m() {
    s = ve.Pop
    let x = p(),
      h = x == null ? null : x - u
    ;(u = x), a && a({ action: s, location: S.location, delta: h })
  }
  function f(x, h) {
    s = ve.Push
    let d = Qi(S.location, x, h)
    n && n(d, x), (u = p() + 1)
    let c = zd(d, u),
      y = S.createHref(d)
    try {
      l.pushState(c, '', y)
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E
      i.location.assign(y)
    }
    o && a && a({ action: s, location: S.location, delta: 1 })
  }
  function g(x, h) {
    s = ve.Replace
    let d = Qi(S.location, x, h)
    n && n(d, x), (u = p())
    let c = zd(d, u),
      y = S.createHref(d)
    l.replaceState(c, '', y),
      o && a && a({ action: s, location: S.location, delta: 0 })
  }
  function v(x) {
    let h = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      d = typeof x == 'string' ? x : Vn(x)
    return (
      (d = d.replace(/ $/, '%20')),
      X(
        h,
        'No window.location.(origin|href) available to create URL for href: ' +
          d
      ),
      new URL(d, h)
    )
  }
  let S = {
    get action() {
      return s
    },
    get location() {
      return e(i, l)
    },
    listen(x) {
      if (a) throw new Error('A history only accepts one active listener')
      return (
        i.addEventListener(Dd, m),
        (a = x),
        () => {
          i.removeEventListener(Dd, m), (a = null)
        }
      )
    },
    createHref(x) {
      return t(i, x)
    },
    createURL: v,
    encodeLocation(x) {
      let h = v(x)
      return { pathname: h.pathname, search: h.search, hash: h.hash }
    },
    push: f,
    replace: g,
    go(x) {
      return l.go(x)
    },
  }
  return S
}
var me
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(me || (me = {}))
const Bv = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function Hv(e) {
  return e.index === !0
}
function Oa(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let l = [...n, o],
        s = typeof i.id == 'string' ? i.id : l.join('-')
      if (
        (X(
          i.index !== !0 || !i.children,
          'Cannot specify children on an index route'
        ),
        X(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Hv(i))
      ) {
        let a = ye({}, i, t(i), { id: s })
        return (r[s] = a), a
      } else {
        let a = ye({}, i, t(i), { id: s, children: void 0 })
        return (
          (r[s] = a), i.children && (a.children = Oa(i.children, t, l, r)), a
        )
      }
    })
  )
}
function hr(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? Ot(t) : t,
    i = Ir(r.pathname || '/', n)
  if (i == null) return null
  let o = tm(e)
  Qv(o)
  let l = null
  for (let s = 0; l == null && s < o.length; ++s) {
    let a = r1(i)
    l = e1(o[s], a)
  }
  return l
}
function Wv(e, t) {
  let { route: n, pathname: r, params: i } = e
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle }
}
function tm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let i = (o, l, s) => {
    let a = {
      relativePath: s === void 0 ? o.path || '' : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    }
    a.relativePath.startsWith('/') &&
      (X(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (a.relativePath = a.relativePath.slice(r.length)))
    let u = Ft([r, a.relativePath]),
      p = n.concat(a)
    o.children &&
      o.children.length > 0 &&
      (X(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      tm(o.children, t, p, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Xv(u, o.index), routesMeta: p })
  }
  return (
    e.forEach((o, l) => {
      var s
      if (o.path === '' || !((s = o.path) != null && s.includes('?'))) i(o, l)
      else for (let a of nm(o.path)) i(o, l, a)
    }),
    t
  )
}
function nm(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '')
  if (r.length === 0) return i ? [o, ''] : [o]
  let l = nm(r.join('/')),
    s = []
  return (
    s.push(...l.map((a) => (a === '' ? o : [o, a].join('/')))),
    i && s.push(...l),
    s.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  )
}
function Qv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Gv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  )
}
const Vv = /^:[\w-]+$/,
  qv = 3,
  Kv = 2,
  Yv = 1,
  Zv = 10,
  Jv = -2,
  Id = (e) => e === '*'
function Xv(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(Id) && (r += Jv),
    t && (r += Kv),
    n
      .filter((i) => !Id(i))
      .reduce((i, o) => i + (Vv.test(o) ? qv : o === '' ? Yv : Zv), r)
  )
}
function Gv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function e1(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    o = []
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      p = t1(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u
      )
    if (!p) return null
    Object.assign(r, p.params)
    let m = s.route
    o.push({
      params: r,
      pathname: Ft([i, p.pathname]),
      pathnameBase: l1(Ft([i, p.pathnameBase])),
      route: m,
    }),
      p.pathnameBase !== '/' && (i = Ft([i, p.pathnameBase]))
  }
  return o
}
function t1(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = n1(e.path, e.caseSensitive, e.end),
    i = t.match(n)
  if (!i) return null
  let o = i[0],
    l = o.replace(/(.)\/+$/, '$1'),
    s = i.slice(1)
  return {
    params: r.reduce((u, p, m) => {
      let { paramName: f, isOptional: g } = p
      if (f === '*') {
        let S = s[m] || ''
        l = o.slice(0, o.length - S.length).replace(/(.)\/+$/, '$1')
      }
      const v = s[m]
      return (
        g && !v ? (u[f] = void 0) : (u[f] = (v || '').replace(/%2F/g, '/')), u
      )
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  }
}
function n1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Qn(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  )
}
function r1(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/')
  } catch (t) {
    return (
      Qn(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function Ir(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
function i1(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? Ot(e) : e
  return {
    pathname: n ? (n.startsWith('/') ? n : o1(n, t)) : t,
    search: s1(r),
    hash: a1(i),
  }
}
function o1(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function js(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function rm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  )
}
function Fl(e, t) {
  let n = rm(e)
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase)
}
function Ul(e, t, n, r) {
  r === void 0 && (r = !1)
  let i
  typeof e == 'string'
    ? (i = Ot(e))
    : ((i = ye({}, e)),
      X(
        !i.pathname || !i.pathname.includes('?'),
        js('?', 'pathname', 'search', i)
      ),
      X(
        !i.pathname || !i.pathname.includes('#'),
        js('#', 'pathname', 'hash', i)
      ),
      X(!i.search || !i.search.includes('#'), js('#', 'search', 'hash', i)))
  let o = e === '' || i.pathname === '',
    l = o ? '/' : i.pathname,
    s
  if (l == null) s = n
  else {
    let m = t.length - 1
    if (!r && l.startsWith('..')) {
      let f = l.split('/')
      for (; f[0] === '..'; ) f.shift(), (m -= 1)
      i.pathname = f.join('/')
    }
    s = m >= 0 ? t[m] : '/'
  }
  let a = i1(i, s),
    u = l && l !== '/' && l.endsWith('/'),
    p = (o || l === '.') && n.endsWith('/')
  return !a.pathname.endsWith('/') && (u || p) && (a.pathname += '/'), a
}
const Ft = (e) => e.join('/').replace(/\/\/+/g, '/'),
  l1 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  s1 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  a1 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
class Vu {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r)
  }
}
function im(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const om = ['post', 'put', 'patch', 'delete'],
  u1 = new Set(om),
  c1 = ['get', ...om],
  d1 = new Set(c1),
  f1 = new Set([301, 302, 303, 307, 308]),
  p1 = new Set([307, 308]),
  Rs = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  h1 = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Xr = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  lm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  m1 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  sm = 'remix-router-transitions'
function g1(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n
  X(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  )
  let i
  if (e.mapRouteProperties) i = e.mapRouteProperties
  else if (e.detectErrorBoundary) {
    let j = e.detectErrorBoundary
    i = (P) => ({ hasErrorBoundary: j(P) })
  } else i = m1
  let o = {},
    l = Oa(e.routes, i, void 0, o),
    s,
    a = e.basename || '/',
    u = ye(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    p = null,
    m = new Set(),
    f = null,
    g = null,
    v = null,
    S = e.hydrationData != null,
    x = hr(l, e.history.location, a),
    h = null
  if (x == null) {
    let j = at(404, { pathname: e.history.location.pathname }),
      { matches: P, route: L } = Wd(l)
    ;(x = P), (h = { [L.id]: j })
  }
  let d,
    c = x.some((j) => j.route.lazy),
    y = x.some((j) => j.route.loader)
  if (c) d = !1
  else if (!y) d = !0
  else if (u.v7_partialHydration) {
    let j = e.hydrationData ? e.hydrationData.loaderData : null,
      P = e.hydrationData ? e.hydrationData.errors : null,
      L = (I) =>
        I.route.loader
          ? I.route.loader.hydrate === !0
            ? !1
            : (j && j[I.route.id] !== void 0) || (P && P[I.route.id] !== void 0)
          : !0
    if (P) {
      let I = x.findIndex(($) => P[$.route.id] !== void 0)
      d = x.slice(0, I + 1).every(L)
    } else d = x.every(L)
  } else d = e.hydrationData != null
  let E,
    w = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: x,
      initialized: d,
      navigation: Rs,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = ve.Pop,
    _ = !1,
    N,
    M = !1,
    T = new Map(),
    z = null,
    A = !1,
    B = !1,
    Z = [],
    te = [],
    K = new Map(),
    O = 0,
    U = -1,
    b = new Map(),
    V = new Set(),
    W = new Map(),
    re = new Map(),
    Re = new Set(),
    mt = new Map(),
    Fe = new Map(),
    qt = !1
  function _m() {
    if (
      ((p = e.history.listen((j) => {
        let { action: P, location: L, delta: I } = j
        if (qt) {
          qt = !1
          return
        }
        Qn(
          Fe.size === 0 || I != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        )
        let $ = oc({
          currentLocation: w.location,
          nextLocation: L,
          historyAction: P,
        })
        if ($ && I != null) {
          ;(qt = !0),
            e.history.go(I * -1),
            so($, {
              state: 'blocked',
              location: L,
              proceed() {
                so($, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: L,
                }),
                  e.history.go(I)
              },
              reset() {
                let J = new Map(w.blockers)
                J.set($, Xr), Xe({ blockers: J })
              },
            })
          return
        }
        return En(P, L)
      })),
      n)
    ) {
      R1(t, T)
      let j = () => N1(t, T)
      t.addEventListener('pagehide', j),
        (z = () => t.removeEventListener('pagehide', j))
    }
    return w.initialized || En(ve.Pop, w.location, { initialHydration: !0 }), E
  }
  function jm() {
    p && p(),
      z && z(),
      m.clear(),
      N && N.abort(),
      w.fetchers.forEach((j, P) => lo(P)),
      w.blockers.forEach((j, P) => ic(P))
  }
  function Rm(j) {
    return m.add(j), () => m.delete(j)
  }
  function Xe(j, P) {
    P === void 0 && (P = {}), (w = ye({}, w, j))
    let L = [],
      I = []
    u.v7_fetcherPersist &&
      w.fetchers.forEach(($, J) => {
        $.state === 'idle' && (Re.has(J) ? I.push(J) : L.push(J))
      }),
      [...m].forEach(($) =>
        $(w, {
          deletedFetchers: I,
          unstable_viewTransitionOpts: P.viewTransitionOpts,
          unstable_flushSync: P.flushSync === !0,
        })
      ),
      u.v7_fetcherPersist &&
        (L.forEach(($) => w.fetchers.delete($)), I.forEach(($) => lo($)))
  }
  function Fr(j, P, L) {
    var I, $
    let { flushSync: J } = L === void 0 ? {} : L,
      q =
        w.actionData != null &&
        w.navigation.formMethod != null &&
        wt(w.navigation.formMethod) &&
        w.navigation.state === 'loading' &&
        ((I = j.state) == null ? void 0 : I._isRedirect) !== !0,
      Q
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (Q = P.actionData)
        : (Q = null)
      : q
      ? (Q = w.actionData)
      : (Q = null)
    let H = P.loaderData
        ? Hd(w.loaderData, P.loaderData, P.matches || [], P.errors)
        : w.loaderData,
      ee = w.blockers
    ee.size > 0 && ((ee = new Map(ee)), ee.forEach((se, Ne) => ee.set(Ne, Xr)))
    let Ee =
      _ === !0 ||
      (w.navigation.formMethod != null &&
        wt(w.navigation.formMethod) &&
        (($ = j.state) == null ? void 0 : $._isRedirect) !== !0)
    s && ((l = s), (s = void 0)),
      A ||
        C === ve.Pop ||
        (C === ve.Push
          ? e.history.push(j, j.state)
          : C === ve.Replace && e.history.replace(j, j.state))
    let Y
    if (C === ve.Pop) {
      let se = T.get(w.location.pathname)
      se && se.has(j.pathname)
        ? (Y = { currentLocation: w.location, nextLocation: j })
        : T.has(j.pathname) &&
          (Y = { currentLocation: j, nextLocation: w.location })
    } else if (M) {
      let se = T.get(w.location.pathname)
      se
        ? se.add(j.pathname)
        : ((se = new Set([j.pathname])), T.set(w.location.pathname, se)),
        (Y = { currentLocation: w.location, nextLocation: j })
    }
    Xe(
      ye({}, P, {
        actionData: Q,
        loaderData: H,
        historyAction: C,
        location: j,
        initialized: !0,
        navigation: Rs,
        revalidation: 'idle',
        restoreScrollPosition: sc(j, P.matches || w.matches),
        preventScrollReset: Ee,
        blockers: ee,
      }),
      { viewTransitionOpts: Y, flushSync: J === !0 }
    ),
      (C = ve.Pop),
      (_ = !1),
      (M = !1),
      (A = !1),
      (B = !1),
      (Z = []),
      (te = [])
  }
  async function Xu(j, P) {
    if (typeof j == 'number') {
      e.history.go(j)
      return
    }
    let L = Da(
        w.location,
        w.matches,
        a,
        u.v7_prependBasename,
        j,
        u.v7_relativeSplatPath,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative
      ),
      {
        path: I,
        submission: $,
        error: J,
      } = bd(u.v7_normalizeFormMethod, !1, L, P),
      q = w.location,
      Q = Qi(w.location, I, P && P.state)
    Q = ye({}, Q, e.history.encodeLocation(Q))
    let H = P && P.replace != null ? P.replace : void 0,
      ee = ve.Push
    H === !0
      ? (ee = ve.Replace)
      : H === !1 ||
        ($ != null &&
          wt($.formMethod) &&
          $.formAction === w.location.pathname + w.location.search &&
          (ee = ve.Replace))
    let Ee =
        P && 'preventScrollReset' in P ? P.preventScrollReset === !0 : void 0,
      Y = (P && P.unstable_flushSync) === !0,
      se = oc({ currentLocation: q, nextLocation: Q, historyAction: ee })
    if (se) {
      so(se, {
        state: 'blocked',
        location: Q,
        proceed() {
          so(se, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: Q,
          }),
            Xu(j, P)
        },
        reset() {
          let Ne = new Map(w.blockers)
          Ne.set(se, Xr), Xe({ blockers: Ne })
        },
      })
      return
    }
    return await En(ee, Q, {
      submission: $,
      pendingError: J,
      preventScrollReset: Ee,
      replace: P && P.replace,
      enableViewTransition: P && P.unstable_viewTransition,
      flushSync: Y,
    })
  }
  function Nm() {
    if (
      (Hl(),
      Xe({ revalidation: 'loading' }),
      w.navigation.state !== 'submitting')
    ) {
      if (w.navigation.state === 'idle') {
        En(w.historyAction, w.location, { startUninterruptedRevalidation: !0 })
        return
      }
      En(C || w.historyAction, w.navigation.location, {
        overrideNavigation: w.navigation,
      })
    }
  }
  async function En(j, P, L) {
    N && N.abort(),
      (N = null),
      (C = j),
      (A = (L && L.startUninterruptedRevalidation) === !0),
      bm(w.location, w.matches),
      (_ = (L && L.preventScrollReset) === !0),
      (M = (L && L.enableViewTransition) === !0)
    let I = s || l,
      $ = L && L.overrideNavigation,
      J = hr(I, P, a),
      q = (L && L.flushSync) === !0
    if (!J) {
      let Ne = at(404, { pathname: P.pathname }),
        { matches: Ge, route: Ce } = Wd(I)
      Wl(),
        Fr(
          P,
          { matches: Ge, loaderData: {}, errors: { [Ce.id]: Ne } },
          { flushSync: q }
        )
      return
    }
    if (
      w.initialized &&
      !B &&
      S1(w.location, P) &&
      !(L && L.submission && wt(L.submission.formMethod))
    ) {
      Fr(P, { matches: J }, { flushSync: q })
      return
    }
    N = new AbortController()
    let Q = ei(e.history, P, N.signal, L && L.submission),
      H,
      ee
    if (L && L.pendingError) ee = { [Si(J).route.id]: L.pendingError }
    else if (L && L.submission && wt(L.submission.formMethod)) {
      let Ne = await Pm(Q, P, L.submission, J, {
        replace: L.replace,
        flushSync: q,
      })
      if (Ne.shortCircuited) return
      ;(H = Ne.pendingActionData),
        (ee = Ne.pendingActionError),
        ($ = Ns(P, L.submission)),
        (q = !1),
        (Q = new Request(Q.url, { signal: Q.signal }))
    }
    let {
      shortCircuited: Ee,
      loaderData: Y,
      errors: se,
    } = await Mm(
      Q,
      P,
      J,
      $,
      L && L.submission,
      L && L.fetcherSubmission,
      L && L.replace,
      L && L.initialHydration === !0,
      q,
      H,
      ee
    )
    Ee ||
      ((N = null),
      Fr(
        P,
        ye({ matches: J }, H ? { actionData: H } : {}, {
          loaderData: Y,
          errors: se,
        })
      ))
  }
  async function Pm(j, P, L, I, $) {
    $ === void 0 && ($ = {}), Hl()
    let J = _1(P, L)
    Xe({ navigation: J }, { flushSync: $.flushSync === !0 })
    let q,
      Q = Ia(I, P)
    if (!Q.route.action && !Q.route.lazy)
      q = {
        type: me.error,
        error: at(405, {
          method: j.method,
          pathname: P.pathname,
          routeId: Q.route.id,
        }),
      }
    else if (
      ((q = await Gr('action', j, Q, I, o, i, a, u.v7_relativeSplatPath)),
      j.signal.aborted)
    )
      return { shortCircuited: !0 }
    if (On(q)) {
      let H
      return (
        $ && $.replace != null
          ? (H = $.replace)
          : (H = q.location === w.location.pathname + w.location.search),
        await Ur(w, q, { submission: L, replace: H }),
        { shortCircuited: !0 }
      )
    }
    if (mr(q)) {
      let H = Si(I, Q.route.id)
      return (
        ($ && $.replace) !== !0 && (C = ve.Push),
        { pendingActionData: {}, pendingActionError: { [H.route.id]: q.error } }
      )
    }
    if (Tn(q)) throw at(400, { type: 'defer-action' })
    return { pendingActionData: { [Q.route.id]: q.data } }
  }
  async function Mm(j, P, L, I, $, J, q, Q, H, ee, Ee) {
    let Y = I || Ns(P, $),
      se = $ || J || qd(Y),
      Ne = s || l,
      [Ge, Ce] = Ad(
        e.history,
        w,
        L,
        se,
        P,
        u.v7_partialHydration && Q === !0,
        B,
        Z,
        te,
        Re,
        W,
        V,
        Ne,
        a,
        ee,
        Ee
      )
    if (
      (Wl(
        (ie) =>
          !(L && L.some((le) => le.route.id === ie)) ||
          (Ge && Ge.some((le) => le.route.id === ie))
      ),
      (U = ++O),
      Ge.length === 0 && Ce.length === 0)
    ) {
      let ie = nc()
      return (
        Fr(
          P,
          ye(
            { matches: L, loaderData: {}, errors: Ee || null },
            ee ? { actionData: ee } : {},
            ie ? { fetchers: new Map(w.fetchers) } : {}
          ),
          { flushSync: H }
        ),
        { shortCircuited: !0 }
      )
    }
    if (!A && (!u.v7_partialHydration || !Q)) {
      Ce.forEach((le) => {
        let Qe = w.fetchers.get(le.key),
          uo = ti(void 0, Qe ? Qe.data : void 0)
        w.fetchers.set(le.key, uo)
      })
      let ie = ee || w.actionData
      Xe(
        ye(
          { navigation: Y },
          ie
            ? Object.keys(ie).length === 0
              ? { actionData: null }
              : { actionData: ie }
            : {},
          Ce.length > 0 ? { fetchers: new Map(w.fetchers) } : {}
        ),
        { flushSync: H }
      )
    }
    Ce.forEach((ie) => {
      K.has(ie.key) && Yt(ie.key), ie.controller && K.set(ie.key, ie.controller)
    })
    let Yn = () => Ce.forEach((ie) => Yt(ie.key))
    N && N.signal.addEventListener('abort', Yn)
    let {
      results: Ql,
      loaderResults: Zn,
      fetcherResults: Zt,
    } = await Gu(w.matches, L, Ge, Ce, j)
    if (j.signal.aborted) return { shortCircuited: !0 }
    N && N.signal.removeEventListener('abort', Yn),
      Ce.forEach((ie) => K.delete(ie.key))
    let Cn = Qd(Ql)
    if (Cn) {
      if (Cn.idx >= Ge.length) {
        let ie = Ce[Cn.idx - Ge.length].key
        V.add(ie)
      }
      return await Ur(w, Cn.result, { replace: q }), { shortCircuited: !0 }
    }
    let { loaderData: Vl, errors: Br } = Bd(w, L, Ge, Zn, Ee, Ce, Zt, mt)
    mt.forEach((ie, le) => {
      ie.subscribe((Qe) => {
        ;(Qe || ie.done) && mt.delete(le)
      })
    }),
      u.v7_partialHydration &&
        Q &&
        w.errors &&
        Object.entries(w.errors)
          .filter((ie) => {
            let [le] = ie
            return !Ge.some((Qe) => Qe.route.id === le)
          })
          .forEach((ie) => {
            let [le, Qe] = ie
            Br = Object.assign(Br || {}, { [le]: Qe })
          })
    let ql = nc(),
      Jn = rc(U),
      ao = ql || Jn || Ce.length > 0
    return ye(
      { loaderData: Vl, errors: Br },
      ao ? { fetchers: new Map(w.fetchers) } : {}
    )
  }
  function Lm(j, P, L, I) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      )
    K.has(j) && Yt(j)
    let $ = (I && I.unstable_flushSync) === !0,
      J = s || l,
      q = Da(
        w.location,
        w.matches,
        a,
        u.v7_prependBasename,
        L,
        u.v7_relativeSplatPath,
        P,
        I == null ? void 0 : I.relative
      ),
      Q = hr(J, q, a)
    if (!Q) {
      $r(j, P, at(404, { pathname: q }), { flushSync: $ })
      return
    }
    let {
      path: H,
      submission: ee,
      error: Ee,
    } = bd(u.v7_normalizeFormMethod, !0, q, I)
    if (Ee) {
      $r(j, P, Ee, { flushSync: $ })
      return
    }
    let Y = Ia(Q, H)
    if (((_ = (I && I.preventScrollReset) === !0), ee && wt(ee.formMethod))) {
      Tm(j, P, H, Y, Q, $, ee)
      return
    }
    W.set(j, { routeId: P, path: H }), Om(j, P, H, Y, Q, $, ee)
  }
  async function Tm(j, P, L, I, $, J, q) {
    if ((Hl(), W.delete(j), !I.route.action && !I.route.lazy)) {
      let le = at(405, { method: q.formMethod, pathname: L, routeId: P })
      $r(j, P, le, { flushSync: J })
      return
    }
    let Q = w.fetchers.get(j)
    Kt(j, j1(q, Q), { flushSync: J })
    let H = new AbortController(),
      ee = ei(e.history, L, H.signal, q)
    K.set(j, H)
    let Ee = O,
      Y = await Gr('action', ee, I, $, o, i, a, u.v7_relativeSplatPath)
    if (ee.signal.aborted) {
      K.get(j) === H && K.delete(j)
      return
    }
    if (u.v7_fetcherPersist && Re.has(j)) {
      if (On(Y) || mr(Y)) {
        Kt(j, Gt(void 0))
        return
      }
    } else {
      if (On(Y))
        if ((K.delete(j), U > Ee)) {
          Kt(j, Gt(void 0))
          return
        } else return V.add(j), Kt(j, ti(q)), Ur(w, Y, { fetcherSubmission: q })
      if (mr(Y)) {
        $r(j, P, Y.error)
        return
      }
    }
    if (Tn(Y)) throw at(400, { type: 'defer-action' })
    let se = w.navigation.location || w.location,
      Ne = ei(e.history, se, H.signal),
      Ge = s || l,
      Ce =
        w.navigation.state !== 'idle'
          ? hr(Ge, w.navigation.location, a)
          : w.matches
    X(Ce, "Didn't find any matches after fetcher action")
    let Yn = ++O
    b.set(j, Yn)
    let Ql = ti(q, Y.data)
    w.fetchers.set(j, Ql)
    let [Zn, Zt] = Ad(
      e.history,
      w,
      Ce,
      q,
      se,
      !1,
      B,
      Z,
      te,
      Re,
      W,
      V,
      Ge,
      a,
      { [I.route.id]: Y.data },
      void 0
    )
    Zt.filter((le) => le.key !== j).forEach((le) => {
      let Qe = le.key,
        uo = w.fetchers.get(Qe),
        Fm = ti(void 0, uo ? uo.data : void 0)
      w.fetchers.set(Qe, Fm),
        K.has(Qe) && Yt(Qe),
        le.controller && K.set(Qe, le.controller)
    }),
      Xe({ fetchers: new Map(w.fetchers) })
    let Cn = () => Zt.forEach((le) => Yt(le.key))
    H.signal.addEventListener('abort', Cn)
    let {
      results: Vl,
      loaderResults: Br,
      fetcherResults: ql,
    } = await Gu(w.matches, Ce, Zn, Zt, Ne)
    if (H.signal.aborted) return
    H.signal.removeEventListener('abort', Cn),
      b.delete(j),
      K.delete(j),
      Zt.forEach((le) => K.delete(le.key))
    let Jn = Qd(Vl)
    if (Jn) {
      if (Jn.idx >= Zn.length) {
        let le = Zt[Jn.idx - Zn.length].key
        V.add(le)
      }
      return Ur(w, Jn.result)
    }
    let { loaderData: ao, errors: ie } = Bd(
      w,
      w.matches,
      Zn,
      Br,
      void 0,
      Zt,
      ql,
      mt
    )
    if (w.fetchers.has(j)) {
      let le = Gt(Y.data)
      w.fetchers.set(j, le)
    }
    rc(Yn),
      w.navigation.state === 'loading' && Yn > U
        ? (X(C, 'Expected pending action'),
          N && N.abort(),
          Fr(w.navigation.location, {
            matches: Ce,
            loaderData: ao,
            errors: ie,
            fetchers: new Map(w.fetchers),
          }))
        : (Xe({
            errors: ie,
            loaderData: Hd(w.loaderData, ao, Ce, ie),
            fetchers: new Map(w.fetchers),
          }),
          (B = !1))
  }
  async function Om(j, P, L, I, $, J, q) {
    let Q = w.fetchers.get(j)
    Kt(j, ti(q, Q ? Q.data : void 0), { flushSync: J })
    let H = new AbortController(),
      ee = ei(e.history, L, H.signal)
    K.set(j, H)
    let Ee = O,
      Y = await Gr('loader', ee, I, $, o, i, a, u.v7_relativeSplatPath)
    if (
      (Tn(Y) && (Y = (await cm(Y, ee.signal, !0)) || Y),
      K.get(j) === H && K.delete(j),
      !ee.signal.aborted)
    ) {
      if (Re.has(j)) {
        Kt(j, Gt(void 0))
        return
      }
      if (On(Y))
        if (U > Ee) {
          Kt(j, Gt(void 0))
          return
        } else {
          V.add(j), await Ur(w, Y)
          return
        }
      if (mr(Y)) {
        $r(j, P, Y.error)
        return
      }
      X(!Tn(Y), 'Unhandled fetcher deferred data'), Kt(j, Gt(Y.data))
    }
  }
  async function Ur(j, P, L) {
    let {
      submission: I,
      fetcherSubmission: $,
      replace: J,
    } = L === void 0 ? {} : L
    P.revalidate && (B = !0)
    let q = Qi(j.location, P.location, { _isRedirect: !0 })
    if ((X(q, 'Expected a location on the redirect navigation'), n)) {
      let se = !1
      if (P.reloadDocument) se = !0
      else if (lm.test(P.location)) {
        const Ne = e.history.createURL(P.location)
        se = Ne.origin !== t.location.origin || Ir(Ne.pathname, a) == null
      }
      if (se) {
        J ? t.location.replace(P.location) : t.location.assign(P.location)
        return
      }
    }
    N = null
    let Q = J === !0 ? ve.Replace : ve.Push,
      { formMethod: H, formAction: ee, formEncType: Ee } = j.navigation
    !I && !$ && H && ee && Ee && (I = qd(j.navigation))
    let Y = I || $
    if (p1.has(P.status) && Y && wt(Y.formMethod))
      await En(Q, q, {
        submission: ye({}, Y, { formAction: P.location }),
        preventScrollReset: _,
      })
    else {
      let se = Ns(q, I)
      await En(Q, q, {
        overrideNavigation: se,
        fetcherSubmission: $,
        preventScrollReset: _,
      })
    }
  }
  async function Gu(j, P, L, I, $) {
    let J = await Promise.all([
        ...L.map((H) => Gr('loader', $, H, P, o, i, a, u.v7_relativeSplatPath)),
        ...I.map((H) =>
          H.matches && H.match && H.controller
            ? Gr(
                'loader',
                ei(e.history, H.path, H.controller.signal),
                H.match,
                H.matches,
                o,
                i,
                a,
                u.v7_relativeSplatPath
              )
            : { type: me.error, error: at(404, { pathname: H.path }) }
        ),
      ]),
      q = J.slice(0, L.length),
      Q = J.slice(L.length)
    return (
      await Promise.all([
        Vd(
          j,
          L,
          q,
          q.map(() => $.signal),
          !1,
          w.loaderData
        ),
        Vd(
          j,
          I.map((H) => H.match),
          Q,
          I.map((H) => (H.controller ? H.controller.signal : null)),
          !0
        ),
      ]),
      { results: J, loaderResults: q, fetcherResults: Q }
    )
  }
  function Hl() {
    ;(B = !0),
      Z.push(...Wl()),
      W.forEach((j, P) => {
        K.has(P) && (te.push(P), Yt(P))
      })
  }
  function Kt(j, P, L) {
    L === void 0 && (L = {}),
      w.fetchers.set(j, P),
      Xe(
        { fetchers: new Map(w.fetchers) },
        { flushSync: (L && L.flushSync) === !0 }
      )
  }
  function $r(j, P, L, I) {
    I === void 0 && (I = {})
    let $ = Si(w.matches, P)
    lo(j),
      Xe(
        { errors: { [$.route.id]: L }, fetchers: new Map(w.fetchers) },
        { flushSync: (I && I.flushSync) === !0 }
      )
  }
  function ec(j) {
    return (
      u.v7_fetcherPersist &&
        (re.set(j, (re.get(j) || 0) + 1), Re.has(j) && Re.delete(j)),
      w.fetchers.get(j) || h1
    )
  }
  function lo(j) {
    let P = w.fetchers.get(j)
    K.has(j) && !(P && P.state === 'loading' && b.has(j)) && Yt(j),
      W.delete(j),
      b.delete(j),
      V.delete(j),
      Re.delete(j),
      w.fetchers.delete(j)
  }
  function Dm(j) {
    if (u.v7_fetcherPersist) {
      let P = (re.get(j) || 0) - 1
      P <= 0 ? (re.delete(j), Re.add(j)) : re.set(j, P)
    } else lo(j)
    Xe({ fetchers: new Map(w.fetchers) })
  }
  function Yt(j) {
    let P = K.get(j)
    X(P, 'Expected fetch controller: ' + j), P.abort(), K.delete(j)
  }
  function tc(j) {
    for (let P of j) {
      let L = ec(P),
        I = Gt(L.data)
      w.fetchers.set(P, I)
    }
  }
  function nc() {
    let j = [],
      P = !1
    for (let L of V) {
      let I = w.fetchers.get(L)
      X(I, 'Expected fetcher: ' + L),
        I.state === 'loading' && (V.delete(L), j.push(L), (P = !0))
    }
    return tc(j), P
  }
  function rc(j) {
    let P = []
    for (let [L, I] of b)
      if (I < j) {
        let $ = w.fetchers.get(L)
        X($, 'Expected fetcher: ' + L),
          $.state === 'loading' && (Yt(L), b.delete(L), P.push(L))
      }
    return tc(P), P.length > 0
  }
  function zm(j, P) {
    let L = w.blockers.get(j) || Xr
    return Fe.get(j) !== P && Fe.set(j, P), L
  }
  function ic(j) {
    w.blockers.delete(j), Fe.delete(j)
  }
  function so(j, P) {
    let L = w.blockers.get(j) || Xr
    X(
      (L.state === 'unblocked' && P.state === 'blocked') ||
        (L.state === 'blocked' && P.state === 'blocked') ||
        (L.state === 'blocked' && P.state === 'proceeding') ||
        (L.state === 'blocked' && P.state === 'unblocked') ||
        (L.state === 'proceeding' && P.state === 'unblocked'),
      'Invalid blocker state transition: ' + L.state + ' -> ' + P.state
    )
    let I = new Map(w.blockers)
    I.set(j, P), Xe({ blockers: I })
  }
  function oc(j) {
    let { currentLocation: P, nextLocation: L, historyAction: I } = j
    if (Fe.size === 0) return
    Fe.size > 1 && Qn(!1, 'A router only supports one blocker at a time')
    let $ = Array.from(Fe.entries()),
      [J, q] = $[$.length - 1],
      Q = w.blockers.get(J)
    if (
      !(Q && Q.state === 'proceeding') &&
      q({ currentLocation: P, nextLocation: L, historyAction: I })
    )
      return J
  }
  function Wl(j) {
    let P = []
    return (
      mt.forEach((L, I) => {
        ;(!j || j(I)) && (L.cancel(), P.push(I), mt.delete(I))
      }),
      P
    )
  }
  function Im(j, P, L) {
    if (((f = j), (v = P), (g = L || null), !S && w.navigation === Rs)) {
      S = !0
      let I = sc(w.location, w.matches)
      I != null && Xe({ restoreScrollPosition: I })
    }
    return () => {
      ;(f = null), (v = null), (g = null)
    }
  }
  function lc(j, P) {
    return (
      (g &&
        g(
          j,
          P.map((I) => Wv(I, w.loaderData))
        )) ||
      j.key
    )
  }
  function bm(j, P) {
    if (f && v) {
      let L = lc(j, P)
      f[L] = v()
    }
  }
  function sc(j, P) {
    if (f) {
      let L = lc(j, P),
        I = f[L]
      if (typeof I == 'number') return I
    }
    return null
  }
  function Am(j) {
    ;(o = {}), (s = Oa(j, i, void 0, o))
  }
  return (
    (E = {
      get basename() {
        return a
      },
      get future() {
        return u
      },
      get state() {
        return w
      },
      get routes() {
        return l
      },
      get window() {
        return t
      },
      initialize: _m,
      subscribe: Rm,
      enableScrollRestoration: Im,
      navigate: Xu,
      fetch: Lm,
      revalidate: Nm,
      createHref: (j) => e.history.createHref(j),
      encodeLocation: (j) => e.history.encodeLocation(j),
      getFetcher: ec,
      deleteFetcher: Dm,
      dispose: jm,
      getBlocker: zm,
      deleteBlocker: ic,
      _internalFetchControllers: K,
      _internalActiveDeferreds: mt,
      _internalSetRoutes: Am,
    }),
    E
  )
}
function y1(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  )
}
function Da(e, t, n, r, i, o, l, s) {
  let a, u
  if (l) {
    a = []
    for (let m of t)
      if ((a.push(m), m.route.id === l)) {
        u = m
        break
      }
  } else (a = t), (u = t[t.length - 1])
  let p = Ul(i || '.', Fl(a, o), Ir(e.pathname, n) || e.pathname, s === 'path')
  return (
    i == null && ((p.search = e.search), (p.hash = e.hash)),
    (i == null || i === '' || i === '.') &&
      u &&
      u.route.index &&
      !qu(p.search) &&
      (p.search = p.search ? p.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (p.pathname = p.pathname === '/' ? n : Ft([n, p.pathname])),
    Vn(p)
  )
}
function bd(e, t, n, r) {
  if (!r || !y1(r)) return { path: n }
  if (r.formMethod && !C1(r.formMethod))
    return { path: n, error: at(405, { method: r.formMethod }) }
  let i = () => ({ path: n, error: at(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    l = e ? o.toUpperCase() : o.toLowerCase(),
    s = um(n)
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!wt(l)) return i()
      let f =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((g, v) => {
              let [S, x] = v
              return (
                '' +
                g +
                S +
                '=' +
                x +
                `
`
              )
            }, '')
          : String(r.body)
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      }
    } else if (r.formEncType === 'application/json') {
      if (!wt(l)) return i()
      try {
        let f = typeof r.body == 'string' ? JSON.parse(r.body) : r.body
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        }
      } catch {
        return i()
      }
    }
  }
  X(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  )
  let a, u
  if (r.formData) (a = za(r.formData)), (u = r.formData)
  else if (r.body instanceof FormData) (a = za(r.body)), (u = r.body)
  else if (r.body instanceof URLSearchParams) (a = r.body), (u = $d(a))
  else if (r.body == null) (a = new URLSearchParams()), (u = new FormData())
  else
    try {
      ;(a = new URLSearchParams(r.body)), (u = $d(a))
    } catch {
      return i()
    }
  let p = {
    formMethod: l,
    formAction: s,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: u,
    json: void 0,
    text: void 0,
  }
  if (wt(p.formMethod)) return { path: n, submission: p }
  let m = Ot(n)
  return (
    t && m.search && qu(m.search) && a.append('index', ''),
    (m.search = '?' + a),
    { path: Vn(m), submission: p }
  )
}
function v1(e, t) {
  let n = e
  if (t) {
    let r = e.findIndex((i) => i.route.id === t)
    r >= 0 && (n = e.slice(0, r))
  }
  return n
}
function Ad(e, t, n, r, i, o, l, s, a, u, p, m, f, g, v, S) {
  let x = S ? Object.values(S)[0] : v ? Object.values(v)[0] : void 0,
    h = e.createURL(t.location),
    d = e.createURL(i),
    c = S ? Object.keys(S)[0] : void 0,
    E = v1(n, c).filter((C, _) => {
      let { route: N } = C
      if (N.lazy) return !0
      if (N.loader == null) return !1
      if (o)
        return N.loader.hydrate
          ? !0
          : t.loaderData[N.id] === void 0 &&
              (!t.errors || t.errors[N.id] === void 0)
      if (w1(t.loaderData, t.matches[_], C) || s.some((z) => z === C.route.id))
        return !0
      let M = t.matches[_],
        T = C
      return Fd(
        C,
        ye(
          {
            currentUrl: h,
            currentParams: M.params,
            nextUrl: d,
            nextParams: T.params,
          },
          r,
          {
            actionResult: x,
            defaultShouldRevalidate:
              l ||
              h.pathname + h.search === d.pathname + d.search ||
              h.search !== d.search ||
              am(M, T),
          }
        )
      )
    }),
    w = []
  return (
    p.forEach((C, _) => {
      if (o || !n.some((A) => A.route.id === C.routeId) || u.has(_)) return
      let N = hr(f, C.path, g)
      if (!N) {
        w.push({
          key: _,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        })
        return
      }
      let M = t.fetchers.get(_),
        T = Ia(N, C.path),
        z = !1
      m.has(_)
        ? (z = !1)
        : a.includes(_)
        ? (z = !0)
        : M && M.state !== 'idle' && M.data === void 0
        ? (z = l)
        : (z = Fd(
            T,
            ye(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: d,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: x, defaultShouldRevalidate: l }
            )
          )),
        z &&
          w.push({
            key: _,
            routeId: C.routeId,
            path: C.path,
            matches: N,
            match: T,
            controller: new AbortController(),
          })
    }),
    [E, w]
  )
}
function w1(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0
  return r || i
}
function am(e, t) {
  let n = e.route.path
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  )
}
function Fd(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t)
    if (typeof n == 'boolean') return n
  }
  return t.defaultShouldRevalidate
}
async function Ud(e, t, n) {
  if (!e.lazy) return
  let r = await e.lazy()
  if (!e.lazy) return
  let i = n[e.id]
  X(i, 'No route found in manifest')
  let o = {}
  for (let l in r) {
    let a = i[l] !== void 0 && l !== 'hasErrorBoundary'
    Qn(
      !a,
      'Route "' +
        i.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !a && !Bv.has(l) && (o[l] = r[l])
  }
  Object.assign(i, o), Object.assign(i, ye({}, t(i), { lazy: void 0 }))
}
async function Gr(e, t, n, r, i, o, l, s, a) {
  a === void 0 && (a = {})
  let u,
    p,
    m,
    f = (S) => {
      let x,
        h = new Promise((d, c) => (x = c))
      return (
        (m = () => x()),
        t.signal.addEventListener('abort', m),
        Promise.race([
          S({ request: t, params: n.params, context: a.requestContext }),
          h,
        ])
      )
    }
  try {
    let S = n.route[e]
    if (n.route.lazy)
      if (S) {
        let x,
          h = await Promise.all([
            f(S).catch((d) => {
              x = d
            }),
            Ud(n.route, o, i),
          ])
        if (x) throw x
        p = h[0]
      } else if ((await Ud(n.route, o, i), (S = n.route[e]), S)) p = await f(S)
      else if (e === 'action') {
        let x = new URL(t.url),
          h = x.pathname + x.search
        throw at(405, { method: t.method, pathname: h, routeId: n.route.id })
      } else return { type: me.data, data: void 0 }
    else if (S) p = await f(S)
    else {
      let x = new URL(t.url),
        h = x.pathname + x.search
      throw at(404, { pathname: h })
    }
    X(
      p !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    )
  } catch (S) {
    ;(u = me.error), (p = S)
  } finally {
    m && t.signal.removeEventListener('abort', m)
  }
  if (E1(p)) {
    let S = p.status
    if (f1.has(S)) {
      let h = p.headers.get('Location')
      if (
        (X(
          h,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !lm.test(h))
      )
        h = Da(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, h, s)
      else if (!a.isStaticRequest) {
        let d = new URL(t.url),
          c = h.startsWith('//') ? new URL(d.protocol + h) : new URL(h),
          y = Ir(c.pathname, l) != null
        c.origin === d.origin && y && (h = c.pathname + c.search + c.hash)
      }
      if (a.isStaticRequest) throw (p.headers.set('Location', h), p)
      return {
        type: me.redirect,
        status: S,
        location: h,
        revalidate: p.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: p.headers.get('X-Remix-Reload-Document') !== null,
      }
    }
    if (a.isRouteRequest)
      throw { type: u === me.error ? me.error : me.data, response: p }
    let x
    try {
      let h = p.headers.get('Content-Type')
      h && /\bapplication\/json\b/.test(h)
        ? p.body == null
          ? (x = null)
          : (x = await p.json())
        : (x = await p.text())
    } catch (h) {
      return { type: me.error, error: h }
    }
    return u === me.error
      ? { type: u, error: new Vu(S, p.statusText, x), headers: p.headers }
      : { type: me.data, data: x, statusCode: p.status, headers: p.headers }
  }
  if (u === me.error) return { type: u, error: p }
  if (k1(p)) {
    var g, v
    return {
      type: me.deferred,
      deferredData: p,
      statusCode: (g = p.init) == null ? void 0 : g.status,
      headers:
        ((v = p.init) == null ? void 0 : v.headers) &&
        new Headers(p.init.headers),
    }
  }
  return { type: me.data, data: p }
}
function ei(e, t, n, r) {
  let i = e.createURL(um(t)).toString(),
    o = { signal: n }
  if (r && wt(r.formMethod)) {
    let { formMethod: l, formEncType: s } = r
    ;(o.method = l.toUpperCase()),
      s === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': s })),
          (o.body = JSON.stringify(r.json)))
        : s === 'text/plain'
        ? (o.body = r.text)
        : s === 'application/x-www-form-urlencoded' && r.formData
        ? (o.body = za(r.formData))
        : (o.body = r.formData)
  }
  return new Request(i, o)
}
function za(e) {
  let t = new URLSearchParams()
  for (let [n, r] of e.entries()) t.append(n, typeof r == 'string' ? r : r.name)
  return t
}
function $d(e) {
  let t = new FormData()
  for (let [n, r] of e.entries()) t.append(n, r)
  return t
}
function x1(e, t, n, r, i) {
  let o = {},
    l = null,
    s,
    a = !1,
    u = {}
  return (
    n.forEach((p, m) => {
      let f = t[m].route.id
      if (
        (X(!On(p), 'Cannot handle redirect results in processLoaderData'),
        mr(p))
      ) {
        let g = Si(e, f),
          v = p.error
        r && ((v = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[g.route.id] == null && (l[g.route.id] = v),
          (o[f] = void 0),
          a || ((a = !0), (s = im(p.error) ? p.error.status : 500)),
          p.headers && (u[f] = p.headers)
      } else
        Tn(p)
          ? (i.set(f, p.deferredData), (o[f] = p.deferredData.data))
          : (o[f] = p.data),
          p.statusCode != null &&
            p.statusCode !== 200 &&
            !a &&
            (s = p.statusCode),
          p.headers && (u[f] = p.headers)
    }),
    r && ((l = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: l, statusCode: s || 200, loaderHeaders: u }
  )
}
function Bd(e, t, n, r, i, o, l, s) {
  let { loaderData: a, errors: u } = x1(t, n, r, i, s)
  for (let p = 0; p < o.length; p++) {
    let { key: m, match: f, controller: g } = o[p]
    X(
      l !== void 0 && l[p] !== void 0,
      'Did not find corresponding fetcher result'
    )
    let v = l[p]
    if (!(g && g.signal.aborted))
      if (mr(v)) {
        let S = Si(e.matches, f == null ? void 0 : f.route.id)
        ;(u && u[S.route.id]) || (u = ye({}, u, { [S.route.id]: v.error })),
          e.fetchers.delete(m)
      } else if (On(v)) X(!1, 'Unhandled fetcher revalidation redirect')
      else if (Tn(v)) X(!1, 'Unhandled fetcher deferred data')
      else {
        let S = Gt(v.data)
        e.fetchers.set(m, S)
      }
  }
  return { loaderData: a, errors: u }
}
function Hd(e, t, n, r) {
  let i = ye({}, t)
  for (let o of n) {
    let l = o.route.id
    if (
      (t.hasOwnProperty(l)
        ? t[l] !== void 0 && (i[l] = t[l])
        : e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break
  }
  return i
}
function Si(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  )
}
function Wd(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        }
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  }
}
function at(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    l = 'Unknown Server Error',
    s = 'Unknown @remix-run/router error'
  return (
    e === 400
      ? ((l = 'Bad Request'),
        i && n && r
          ? (s =
              'You made a ' +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o === 'defer-action'
          ? (s = 'defer() is not supported in actions')
          : o === 'invalid-body' && (s = 'Unable to encode submission body'))
      : e === 403
      ? ((l = 'Forbidden'),
        (s = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((l = 'Not Found'), (s = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((l = 'Method Not Allowed'),
        i && n && r
          ? (s =
              'You made a ' +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i && (s = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Vu(e || 500, l, new Error(s), !0)
  )
}
function Qd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t]
    if (On(n)) return { result: n, idx: t }
  }
}
function um(e) {
  let t = typeof e == 'string' ? Ot(e) : e
  return Vn(ye({}, t, { hash: '' }))
}
function S1(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== ''
}
function Tn(e) {
  return e.type === me.deferred
}
function mr(e) {
  return e.type === me.error
}
function On(e) {
  return (e && e.type) === me.redirect
}
function k1(e) {
  let t = e
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  )
}
function E1(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  )
}
function C1(e) {
  return d1.has(e.toLowerCase())
}
function wt(e) {
  return u1.has(e.toLowerCase())
}
async function Vd(e, t, n, r, i, o) {
  for (let l = 0; l < n.length; l++) {
    let s = n[l],
      a = t[l]
    if (!a) continue
    let u = e.find((m) => m.route.id === a.route.id),
      p = u != null && !am(u, a) && (o && o[a.route.id]) !== void 0
    if (Tn(s) && (i || p)) {
      let m = r[l]
      X(m, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await cm(s, m, i).then((f) => {
          f && (n[l] = f || n[l])
        })
    }
  }
}
async function cm(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: me.data, data: e.deferredData.unwrappedData }
      } catch (i) {
        return { type: me.error, error: i }
      }
    return { type: me.data, data: e.deferredData.data }
  }
}
function qu(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '')
}
function Ia(e, t) {
  let n = typeof t == 'string' ? Ot(t).search : t.search
  if (e[e.length - 1].route.index && qu(n || '')) return e[e.length - 1]
  let r = rm(e)
  return r[r.length - 1]
}
function qd(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: l,
  } = e
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      }
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      }
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      }
  }
}
function Ns(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      }
}
function _1(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  }
}
function ti(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      }
}
function j1(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  }
}
function Gt(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  }
}
function R1(e, t) {
  try {
    let n = e.sessionStorage.getItem(sm)
    if (n) {
      let r = JSON.parse(n)
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []))
    }
  } catch {}
}
function N1(e, t) {
  if (t.size > 0) {
    let n = {}
    for (let [r, i] of t) n[r] = [...i]
    try {
      e.sessionStorage.setItem(sm, JSON.stringify(n))
    } catch (r) {
      Qn(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      )
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vi() {
  return (
    (Vi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Vi.apply(this, arguments)
  )
}
const $l = R.createContext(null),
  dm = R.createContext(null),
  kn = R.createContext(null),
  Bl = R.createContext(null),
  Vt = R.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  fm = R.createContext(null)
function P1(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  br() || X(!1)
  let { basename: r, navigator: i } = R.useContext(kn),
    { hash: o, pathname: l, search: s } = hm(e, { relative: n }),
    a = l
  return (
    r !== '/' && (a = l === '/' ? r : Ft([r, l])),
    i.createHref({ pathname: a, search: s, hash: o })
  )
}
function br() {
  return R.useContext(Bl) != null
}
function Ar() {
  return br() || X(!1), R.useContext(Bl).location
}
function pm(e) {
  R.useContext(kn).static || R.useLayoutEffect(e)
}
function Ku() {
  let { isDataRoute: e } = R.useContext(Vt)
  return e ? H1() : M1()
}
function M1() {
  br() || X(!1)
  let e = R.useContext($l),
    { basename: t, future: n, navigator: r } = R.useContext(kn),
    { matches: i } = R.useContext(Vt),
    { pathname: o } = Ar(),
    l = JSON.stringify(Fl(i, n.v7_relativeSplatPath)),
    s = R.useRef(!1)
  return (
    pm(() => {
      s.current = !0
    }),
    R.useCallback(
      function (u, p) {
        if ((p === void 0 && (p = {}), !s.current)) return
        if (typeof u == 'number') {
          r.go(u)
          return
        }
        let m = Ul(u, JSON.parse(l), o, p.relative === 'path')
        e == null &&
          t !== '/' &&
          (m.pathname = m.pathname === '/' ? t : Ft([t, m.pathname])),
          (p.replace ? r.replace : r.push)(m, p.state, p)
      },
      [t, r, l, o, e]
    )
  )
}
const L1 = R.createContext(null)
function T1(e) {
  let t = R.useContext(Vt).outlet
  return t && R.createElement(L1.Provider, { value: e }, t)
}
function hm(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = R.useContext(kn),
    { matches: i } = R.useContext(Vt),
    { pathname: o } = Ar(),
    l = JSON.stringify(Fl(i, r.v7_relativeSplatPath))
  return R.useMemo(() => Ul(e, JSON.parse(l), o, n === 'path'), [e, l, o, n])
}
function O1(e, t, n, r) {
  br() || X(!1)
  let { navigator: i } = R.useContext(kn),
    { matches: o } = R.useContext(Vt),
    l = o[o.length - 1],
    s = l ? l.params : {}
  l && l.pathname
  let a = l ? l.pathnameBase : '/'
  l && l.route
  let u = Ar(),
    p
  if (t) {
    var m
    let x = typeof t == 'string' ? Ot(t) : t
    a === '/' || ((m = x.pathname) != null && m.startsWith(a)) || X(!1), (p = x)
  } else p = u
  let f = p.pathname || '/',
    g = f
  if (a !== '/') {
    let x = a.replace(/^\//, '').split('/')
    g = '/' + f.replace(/^\//, '').split('/').slice(x.length).join('/')
  }
  let v = hr(e, { pathname: g }),
    S = A1(
      v &&
        v.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, s, x.params),
            pathname: Ft([
              a,
              i.encodeLocation
                ? i.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === '/'
                ? a
                : Ft([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    )
  return t && S
    ? R.createElement(
        Bl.Provider,
        {
          value: {
            location: Vi(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              p
            ),
            navigationType: ve.Pop,
          },
        },
        S
      )
    : S
}
function D1() {
  let e = B1(),
    t = im(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
  return R.createElement(
    R.Fragment,
    null,
    R.createElement('h2', null, 'Unexpected Application Error!'),
    R.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? R.createElement('pre', { style: i }, n) : null,
    null
  )
}
const z1 = R.createElement(D1, null)
class I1 extends R.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error !== void 0
      ? R.createElement(
          Vt.Provider,
          { value: this.props.routeContext },
          R.createElement(fm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children
  }
}
function b1(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = R.useContext($l)
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement(Vt.Provider, { value: t }, r)
  )
}
function A1(e, t, n, r) {
  var i
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o
    if ((o = n) != null && o.errors) e = n.matches
    else return null
  }
  let l = e,
    s = (i = n) == null ? void 0 : i.errors
  if (s != null) {
    let p = l.findIndex(
      (m) => m.route.id && (s == null ? void 0 : s[m.route.id])
    )
    p >= 0 || X(!1), (l = l.slice(0, Math.min(l.length, p + 1)))
  }
  let a = !1,
    u = -1
  if (n && r && r.v7_partialHydration)
    for (let p = 0; p < l.length; p++) {
      let m = l[p]
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (u = p),
        m.route.id)
      ) {
        let { loaderData: f, errors: g } = n,
          v =
            m.route.loader &&
            f[m.route.id] === void 0 &&
            (!g || g[m.route.id] === void 0)
        if (m.route.lazy || v) {
          ;(a = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]])
          break
        }
      }
    }
  return l.reduceRight((p, m, f) => {
    let g,
      v = !1,
      S = null,
      x = null
    n &&
      ((g = s && m.route.id ? s[m.route.id] : void 0),
      (S = m.route.errorElement || z1),
      a &&
        (u < 0 && f === 0
          ? (W1('route-fallback', !1), (v = !0), (x = null))
          : u === f &&
            ((v = !0), (x = m.route.hydrateFallbackElement || null))))
    let h = t.concat(l.slice(0, f + 1)),
      d = () => {
        let c
        return (
          g
            ? (c = S)
            : v
            ? (c = x)
            : m.route.Component
            ? (c = R.createElement(m.route.Component, null))
            : m.route.element
            ? (c = m.route.element)
            : (c = p),
          R.createElement(b1, {
            match: m,
            routeContext: { outlet: p, matches: h, isDataRoute: n != null },
            children: c,
          })
        )
      }
    return n && (m.route.ErrorBoundary || m.route.errorElement || f === 0)
      ? R.createElement(I1, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: g,
          children: d(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : d()
  }, null)
}
var mm = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    )
  })(mm || {}),
  vl = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    )
  })(vl || {})
function F1(e) {
  let t = R.useContext($l)
  return t || X(!1), t
}
function U1(e) {
  let t = R.useContext(dm)
  return t || X(!1), t
}
function $1(e) {
  let t = R.useContext(Vt)
  return t || X(!1), t
}
function gm(e) {
  let t = $1(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || X(!1), n.route.id
}
function B1() {
  var e
  let t = R.useContext(fm),
    n = U1(vl.UseRouteError),
    r = gm(vl.UseRouteError)
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function H1() {
  let { router: e } = F1(mm.UseNavigateStable),
    t = gm(vl.UseNavigateStable),
    n = R.useRef(!1)
  return (
    pm(() => {
      n.current = !0
    }),
    R.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == 'number'
              ? e.navigate(i)
              : e.navigate(i, Vi({ fromRouteId: t }, o)))
      },
      [e, t]
    )
  )
}
const Kd = {}
function W1(e, t, n) {
  !t && !Kd[e] && (Kd[e] = !0)
}
function Q1(e) {
  let { to: t, replace: n, state: r, relative: i } = e
  br() || X(!1)
  let { future: o, static: l } = R.useContext(kn),
    { matches: s } = R.useContext(Vt),
    { pathname: a } = Ar(),
    u = Ku(),
    p = Ul(t, Fl(s, o.v7_relativeSplatPath), a, i === 'path'),
    m = JSON.stringify(p)
  return (
    R.useEffect(
      () => u(JSON.parse(m), { replace: n, state: r, relative: i }),
      [u, m, i, n, r]
    ),
    null
  )
}
function ym(e) {
  return T1(e.context)
}
function V1(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = ve.Pop,
    navigator: o,
    static: l = !1,
    future: s,
  } = e
  br() && X(!1)
  let a = t.replace(/^\/*/, '/'),
    u = R.useMemo(
      () => ({
        basename: a,
        navigator: o,
        static: l,
        future: Vi({ v7_relativeSplatPath: !1 }, s),
      }),
      [a, s, o, l]
    )
  typeof r == 'string' && (r = Ot(r))
  let {
      pathname: p = '/',
      search: m = '',
      hash: f = '',
      state: g = null,
      key: v = 'default',
    } = r,
    S = R.useMemo(() => {
      let x = Ir(p, a)
      return x == null
        ? null
        : {
            location: { pathname: x, search: m, hash: f, state: g, key: v },
            navigationType: i,
          }
    }, [a, p, m, f, g, v, i])
  return S == null
    ? null
    : R.createElement(
        kn.Provider,
        { value: u },
        R.createElement(Bl.Provider, { children: n, value: S })
      )
}
new Promise(() => {})
function q1(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  }
  return (
    e.Component &&
      Object.assign(t, {
        element: R.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: R.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: R.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  )
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qi() {
  return (
    (qi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    qi.apply(this, arguments)
  )
}
function K1(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    i,
    o
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
  return n
}
function Y1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Z1(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Y1(e)
}
function ba(e) {
  return (
    e === void 0 && (e = ''),
    new URLSearchParams(
      typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n]
            return t.concat(Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]])
          }, [])
    )
  )
}
function J1(e, t) {
  let n = ba(e)
  return (
    t &&
      t.forEach((r, i) => {
        n.has(i) ||
          t.getAll(i).forEach((o) => {
            n.append(i, o)
          })
      }),
    n
  )
}
const X1 = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  G1 = '6'
try {
  window.__reactRouterVersion = G1
} catch {}
function ew(e, t) {
  return g1({
    basename: t == null ? void 0 : t.basename,
    future: qi({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Fv({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || tw(),
    routes: e,
    mapRouteProperties: q1,
    window: t == null ? void 0 : t.window,
  }).initialize()
}
function tw() {
  var e
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
  return t && t.errors && (t = qi({}, t, { errors: nw(t.errors) })), t
}
function nw(e) {
  if (!e) return null
  let t = Object.entries(e),
    n = {}
  for (let [r, i] of t)
    if (i && i.__type === 'RouteErrorResponse')
      n[r] = new Vu(i.status, i.statusText, i.data, i.internal === !0)
    else if (i && i.__type === 'Error') {
      if (i.__subType) {
        let o = window[i.__subType]
        if (typeof o == 'function')
          try {
            let l = new o(i.message)
            ;(l.stack = ''), (n[r] = l)
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message)
        ;(o.stack = ''), (n[r] = o)
      }
    } else n[r] = i
  return n
}
const rw = R.createContext({ isTransitioning: !1 }),
  iw = R.createContext(new Map()),
  ow = 'startTransition',
  Yd = Ts[ow],
  lw = 'flushSync',
  Zd = py[lw]
function sw(e) {
  Yd ? Yd(e) : e()
}
function ni(e) {
  Zd ? Zd(e) : e()
}
class aw {
  constructor() {
    ;(this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        ;(this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r))
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r))
          })
      }))
  }
}
function uw(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = R.useState(n.state),
    [l, s] = R.useState(),
    [a, u] = R.useState({ isTransitioning: !1 }),
    [p, m] = R.useState(),
    [f, g] = R.useState(),
    [v, S] = R.useState(),
    x = R.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    d = R.useCallback(
      (C) => {
        h ? sw(C) : C()
      },
      [h]
    ),
    c = R.useCallback(
      (C, _) => {
        let {
          deletedFetchers: N,
          unstable_flushSync: M,
          unstable_viewTransitionOpts: T,
        } = _
        N.forEach((A) => x.current.delete(A)),
          C.fetchers.forEach((A, B) => {
            A.data !== void 0 && x.current.set(B, A.data)
          })
        let z =
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function'
        if (!T || z) {
          M ? ni(() => o(C)) : d(() => o(C))
          return
        }
        if (M) {
          ni(() => {
            f && (p && p.resolve(), f.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: T.currentLocation,
                nextLocation: T.nextLocation,
              })
          })
          let A = n.window.document.startViewTransition(() => {
            ni(() => o(C))
          })
          A.finished.finally(() => {
            ni(() => {
              m(void 0), g(void 0), s(void 0), u({ isTransitioning: !1 })
            })
          }),
            ni(() => g(A))
          return
        }
        f
          ? (p && p.resolve(),
            f.skipTransition(),
            S({
              state: C,
              currentLocation: T.currentLocation,
              nextLocation: T.nextLocation,
            }))
          : (s(C),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: T.currentLocation,
              nextLocation: T.nextLocation,
            }))
      },
      [n.window, f, p, x, d]
    )
  R.useLayoutEffect(() => n.subscribe(c), [n, c]),
    R.useEffect(() => {
      a.isTransitioning && !a.flushSync && m(new aw())
    }, [a]),
    R.useEffect(() => {
      if (p && l && n.window) {
        let C = l,
          _ = p.promise,
          N = n.window.document.startViewTransition(async () => {
            d(() => o(C)), await _
          })
        N.finished.finally(() => {
          m(void 0), g(void 0), s(void 0), u({ isTransitioning: !1 })
        }),
          g(N)
      }
    }, [d, l, p, n.window]),
    R.useEffect(() => {
      p && l && i.location.key === l.location.key && p.resolve()
    }, [p, f, i.location, l]),
    R.useEffect(() => {
      !a.isTransitioning &&
        v &&
        (s(v.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation,
        }),
        S(void 0))
    }, [a.isTransitioning, v]),
    R.useEffect(() => {}, [])
  let y = R.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (C) => n.navigate(C),
        push: (C, _, N) =>
          n.navigate(C, {
            state: _,
            preventScrollReset: N == null ? void 0 : N.preventScrollReset,
          }),
        replace: (C, _, N) =>
          n.navigate(C, {
            replace: !0,
            state: _,
            preventScrollReset: N == null ? void 0 : N.preventScrollReset,
          }),
      }),
      [n]
    ),
    E = n.basename || '/',
    w = R.useMemo(
      () => ({ router: n, navigator: y, static: !1, basename: E }),
      [n, y, E]
    )
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(
      $l.Provider,
      { value: w },
      R.createElement(
        dm.Provider,
        { value: i },
        R.createElement(
          iw.Provider,
          { value: x.current },
          R.createElement(
            rw.Provider,
            { value: a },
            R.createElement(
              V1,
              {
                basename: E,
                location: i.location,
                navigationType: i.historyAction,
                navigator: y,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? R.createElement(cw, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  )
}
function cw(e) {
  let { routes: t, future: n, state: r } = e
  return O1(t, void 0, r, n)
}
const dw =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  fw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  wl = R.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: s,
        target: a,
        to: u,
        preventScrollReset: p,
        unstable_viewTransition: m,
      } = t,
      f = K1(t, X1),
      { basename: g } = R.useContext(kn),
      v,
      S = !1
    if (typeof u == 'string' && fw.test(u) && ((v = u), dw))
      try {
        let c = new URL(window.location.href),
          y = u.startsWith('//') ? new URL(c.protocol + u) : new URL(u),
          E = Ir(y.pathname, g)
        y.origin === c.origin && E != null
          ? (u = E + y.search + y.hash)
          : (S = !0)
      } catch {}
    let x = P1(u, { relative: i }),
      h = pw(u, {
        replace: l,
        state: s,
        target: a,
        preventScrollReset: p,
        relative: i,
        unstable_viewTransition: m,
      })
    function d(c) {
      r && r(c), c.defaultPrevented || h(c)
    }
    return R.createElement(
      'a',
      qi({}, f, { href: v || x, onClick: S || o ? r : d, ref: n, target: a })
    )
  })
var Jd
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(Jd || (Jd = {}))
var Xd
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(Xd || (Xd = {}))
function pw(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    a = Ku(),
    u = Ar(),
    p = hm(e, { relative: l })
  return R.useCallback(
    (m) => {
      if (Z1(m, n)) {
        m.preventDefault()
        let f = r !== void 0 ? r : Vn(u) === Vn(p)
        a(e, {
          replace: f,
          state: i,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: s,
        })
      }
    },
    [u, a, p, r, i, n, e, o, l, s]
  )
}
function hw(e) {
  let t = R.useRef(ba(e)),
    n = R.useRef(!1),
    r = Ar(),
    i = R.useMemo(() => J1(r.search, n.current ? null : t.current), [r.search]),
    o = Ku(),
    l = R.useCallback(
      (s, a) => {
        const u = ba(typeof s == 'function' ? s(i) : s)
        ;(n.current = !0), o('?' + u, a)
      },
      [o, i]
    )
  return [i, l]
}
function mw({ setShowBecomeMemberModal: e }) {
  const t = Dr((r) => r.auth.user),
    n = zr()
  return k.jsxs('ul', {
    className:
      'absolute z-40 visible w-48 py-1 mt-2 transition duration-300 translate-y-1/2 bg-white rounded shadow opacity-100 dark:bg-white',
    children: [
      !t.isMember &&
        k.jsxs('li', {
          onClick: () => e(!0),
          className:
            'flex items-center px-3 py-3 text-sm font-normal leading-3 tracking-normal text-black cursor-pointer dark:black hover:bg-gray-100',
          children: [
            k.jsxs('svg', {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                k.jsx('path', {
                  d: 'M8.00002 8C6.34689 8 4.89064 6.44687 4.75001 4.5375C4.67814 3.56875 4.97814 2.67188 5.59376 2.0125C6.20001 1.35938 7.05626 1 8.00002 1C8.93752 1 9.79064 1.3625 10.4 2.01875C11.0188 2.68437 11.3188 3.57812 11.2469 4.5375C11.1063 6.44687 9.65002 8 8.00002 8ZM8.00002 2C7.33752 2 6.74064 2.24687 6.32501 2.69375C5.90314 3.14687 5.69689 3.77812 5.74689 4.46562C5.84689 5.84062 6.87814 7.00313 7.99689 7.00313C9.11564 7.00313 10.1469 5.84062 10.2469 4.46562C10.2969 3.7875 10.0906 3.15938 9.66252 2.7C9.25002 2.24688 8.65627 2 8.00002 2Z',
                  fill: '#1F2937',
                }),
                k.jsx('path', {
                  d: 'M13.5 14.9999H2.50002C2.20002 14.9999 1.93127 14.8749 1.74377 14.6531C1.54064 14.4093 1.45939 14.0781 1.51877 13.7437C1.78127 12.2812 2.60627 11.0499 3.90002 10.1906C5.05002 9.42494 6.50627 9.00307 8.00002 9.00307C9.49377 9.00307 10.95 9.42494 12.1 10.1906C13.3938 11.0531 14.2188 12.2812 14.4813 13.7437C14.5406 14.0781 14.4594 14.4093 14.2563 14.6531C14.0688 14.8749 13.8 14.9999 13.5 14.9999ZM2.50627 13.9999H13.4938C13.5 13.9843 13.5031 13.9593 13.4969 13.9187C13.0125 11.2281 10.3063 9.99994 8.00002 9.99994C5.69377 9.99994 2.98752 11.2281 2.50314 13.9187C2.49689 13.9593 2.50002 13.9843 2.50627 13.9999Z',
                  fill: '#1F2937',
                }),
              ],
            }),
            k.jsx('span', { className: 'ml-2', children: 'Join The Club' }),
          ],
        }),
      k.jsx(wl, {
        to: '/my-posts',
        children: k.jsxs('li', {
          to: '/my-posts',
          className:
            'flex items-center px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-black hover:bg-gray-100',
          children: [
            k.jsxs('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              className: 'icon icon-tabler icon-tabler-device-mobile',
              width: 16,
              height: 16,
              viewBox: '0 0 24 24',
              strokeWidth: '1.5',
              stroke: 'currentColor',
              fill: 'none',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              children: [
                k.jsx('path', { stroke: 'none', d: 'M0 0h24v24H0z' }),
                k.jsx('rect', { x: 7, y: 4, width: 10, height: 16, rx: 1 }),
                k.jsx('line', { x1: 11, y1: 5, x2: 13, y2: 5 }),
                k.jsx('line', { x1: 12, y1: 17, x2: 12, y2: '17.01' }),
              ],
            }),
            k.jsx('span', { className: 'ml-2', children: 'My Posts' }),
          ],
        }),
      }),
      k.jsx('li', {
        children: k.jsx('hr', {
          className: 'my-1 border-gray-200 dark:border-gray-300',
        }),
      }),
      k.jsxs('li', {
        onClick: () => n(em()),
        className:
          'flex items-center px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-black hover:bg-gray-100',
        children: [
          k.jsxs('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            className: 'icon icon-tabler icon-tabler-x',
            width: 16,
            height: 16,
            viewBox: '0 0 24 24',
            strokeWidth: '1.5',
            stroke: 'currentColor',
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            children: [
              k.jsx('path', { stroke: 'none', d: 'M0 0h24v24H0z' }),
              k.jsx('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
              k.jsx('line', { x1: 6, y1: 6, x2: 18, y2: 18 }),
            ],
          }),
          k.jsx('span', { className: 'ml-2', children: 'Sign Out' }),
        ],
      }),
    ],
  })
}
var vm = ((e) => (
  (e.uninitialized = 'uninitialized'),
  (e.pending = 'pending'),
  (e.fulfilled = 'fulfilled'),
  (e.rejected = 'rejected'),
  e
))(vm || {})
function gw(e) {
  return {
    status: e,
    isUninitialized: e === 'uninitialized',
    isLoading: e === 'pending',
    isSuccess: e === 'fulfilled',
    isError: e === 'rejected',
  }
}
function yw(e) {
  return new RegExp('(^|:)//').test(e)
}
var vw = (e) => e.replace(/\/$/, ''),
  ww = (e) => e.replace(/^\//, '')
function xw(e, t) {
  if (!e) return t
  if (!t) return e
  if (yw(t)) return t
  const n = e.endsWith('/') || !t.startsWith('?') ? '/' : ''
  return (e = vw(e)), (t = ww(t)), `${e}${n}${t}`
}
var Gd = (e) => [].concat(...e)
function Sw() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine
}
function kw() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden'
}
var ef = Tt
function wm(e, t) {
  if (e === t || !((ef(e) && ef(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t
  const n = Object.keys(t),
    r = Object.keys(e)
  let i = n.length === r.length
  const o = Array.isArray(t) ? [] : {}
  for (const l of n) (o[l] = wm(e[l], t[l])), i && (i = e[l] === o[l])
  return i ? e : o
}
var tf = (...e) => fetch(...e),
  Ew = (e) => e.status >= 200 && e.status <= 299,
  Cw = (e) => /ion\/(vnd\.api\+)?json/.test(e.get('content-type') || '')
function nf(e) {
  if (!Tt(e)) return e
  const t = { ...e }
  for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n]
  return t
}
function _w({
  baseUrl: e,
  prepareHeaders: t = (m) => m,
  fetchFn: n = tf,
  paramsSerializer: r,
  isJsonContentType: i = Cw,
  jsonContentType: o = 'application/json',
  jsonReplacer: l,
  timeout: s,
  responseHandler: a,
  validateStatus: u,
  ...p
} = {}) {
  return (
    typeof fetch > 'u' &&
      n === tf &&
      console.warn(
        'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
      ),
    async (f, g) => {
      const {
        signal: v,
        getState: S,
        extra: x,
        endpoint: h,
        forced: d,
        type: c,
      } = g
      let y,
        {
          url: E,
          headers: w = new Headers(p.headers),
          params: C = void 0,
          responseHandler: _ = a ?? 'json',
          validateStatus: N = u ?? Ew,
          timeout: M = s,
          ...T
        } = typeof f == 'string' ? { url: f } : f,
        z = { ...p, signal: v, ...T }
      ;(w = new Headers(nf(w))),
        (z.headers =
          (await t(w, {
            getState: S,
            extra: x,
            endpoint: h,
            forced: d,
            type: c,
          })) || w)
      const A = (W) =>
        typeof W == 'object' &&
        (Tt(W) || Array.isArray(W) || typeof W.toJSON == 'function')
      if (
        (!z.headers.has('content-type') &&
          A(z.body) &&
          z.headers.set('content-type', o),
        A(z.body) && i(z.headers) && (z.body = JSON.stringify(z.body, l)),
        C)
      ) {
        const W = ~E.indexOf('?') ? '&' : '?',
          re = r ? r(C) : new URLSearchParams(nf(C))
        E += W + re
      }
      E = xw(e, E)
      const B = new Request(E, z)
      y = { request: new Request(E, z) }
      let te,
        K = !1,
        O =
          M &&
          setTimeout(() => {
            ;(K = !0), g.abort()
          }, M)
      try {
        te = await n(B)
      } catch (W) {
        return {
          error: {
            status: K ? 'TIMEOUT_ERROR' : 'FETCH_ERROR',
            error: String(W),
          },
          meta: y,
        }
      } finally {
        O && clearTimeout(O)
      }
      const U = te.clone()
      y.response = U
      let b,
        V = ''
      try {
        let W
        if (
          (await Promise.all([
            m(te, _).then(
              (re) => (b = re),
              (re) => (W = re)
            ),
            U.text().then(
              (re) => (V = re),
              () => {}
            ),
          ]),
          W)
        )
          throw W
      } catch (W) {
        return {
          error: {
            status: 'PARSING_ERROR',
            originalStatus: te.status,
            data: V,
            error: String(W),
          },
          meta: y,
        }
      }
      return N(te, b)
        ? { data: b, meta: y }
        : { error: { status: te.status, data: b }, meta: y }
    }
  )
  async function m(f, g) {
    if (typeof g == 'function') return g(f)
    if (
      (g === 'content-type' && (g = i(f.headers) ? 'json' : 'text'),
      g === 'json')
    ) {
      const v = await f.text()
      return v.length ? JSON.parse(v) : null
    }
    return f.text()
  }
}
var rf = class {
    constructor(e, t = void 0) {
      ;(this.value = e), (this.meta = t)
    }
  },
  Yu = Be('__rtkq/focused'),
  xm = Be('__rtkq/unfocused'),
  Zu = Be('__rtkq/online'),
  Sm = Be('__rtkq/offline')
function km(e) {
  return e.type === 'query'
}
function jw(e) {
  return e.type === 'mutation'
}
function Ju(e, t, n, r, i, o) {
  return Rw(e)
    ? e(t, n, r, i).map(Aa).map(o)
    : Array.isArray(e)
    ? e.map(Aa).map(o)
    : []
}
function Rw(e) {
  return typeof e == 'function'
}
function Aa(e) {
  return typeof e == 'string' ? { type: e } : e
}
function of(e) {
  return e != null
}
function kr(e) {
  let t = 0
  for (const n in e) t++
  return t
}
function Nw(e, t) {
  return e.catch(t)
}
var Ki = Symbol('forceQueryFn'),
  Fa = (e) => typeof e[Ki] == 'function'
function Pw({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: n,
  api: r,
  context: i,
}) {
  const o = new Map(),
    l = new Map(),
    {
      unsubscribeQueryResult: s,
      removeMutationResult: a,
      updateSubscriptionOptions: u,
    } = r.internalActions
  return {
    buildInitiateQuery: v,
    buildInitiateMutation: S,
    getRunningQueryThunk: p,
    getRunningMutationThunk: m,
    getRunningQueriesThunk: f,
    getRunningMutationsThunk: g,
  }
  function p(x, h) {
    return (d) => {
      var E
      const c = i.endpointDefinitions[x],
        y = e({ queryArgs: h, endpointDefinition: c, endpointName: x })
      return (E = o.get(d)) == null ? void 0 : E[y]
    }
  }
  function m(x, h) {
    return (d) => {
      var c
      return (c = l.get(d)) == null ? void 0 : c[h]
    }
  }
  function f() {
    return (x) => Object.values(o.get(x) || {}).filter(of)
  }
  function g() {
    return (x) => Object.values(l.get(x) || {}).filter(of)
  }
  function v(x, h) {
    const d =
      (
        c,
        {
          subscribe: y = !0,
          forceRefetch: E,
          subscriptionOptions: w,
          [Ki]: C,
          ..._
        } = {}
      ) =>
      (N, M) => {
        var W
        const T = e({ queryArgs: c, endpointDefinition: h, endpointName: x }),
          z = t({
            ..._,
            type: 'query',
            subscribe: y,
            forceRefetch: E,
            subscriptionOptions: w,
            endpointName: x,
            originalArgs: c,
            queryCacheKey: T,
            [Ki]: C,
          }),
          A = r.endpoints[x].select(c),
          B = N(z),
          Z = A(M()),
          { requestId: te, abort: K } = B,
          O = Z.requestId !== te,
          U = (W = o.get(N)) == null ? void 0 : W[T],
          b = () => A(M()),
          V = Object.assign(
            C
              ? B.then(b)
              : O && !U
              ? Promise.resolve(Z)
              : Promise.all([U, B]).then(b),
            {
              arg: c,
              requestId: te,
              subscriptionOptions: w,
              queryCacheKey: T,
              abort: K,
              async unwrap() {
                const re = await V
                if (re.isError) throw re.error
                return re.data
              },
              refetch: () => N(d(c, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                y && N(s({ queryCacheKey: T, requestId: te }))
              },
              updateSubscriptionOptions(re) {
                ;(V.subscriptionOptions = re),
                  N(
                    u({
                      endpointName: x,
                      requestId: te,
                      queryCacheKey: T,
                      options: re,
                    })
                  )
              },
            }
          )
        if (!U && !O && !C) {
          const re = o.get(N) || {}
          ;(re[T] = V),
            o.set(N, re),
            V.then(() => {
              delete re[T], kr(re) || o.delete(N)
            })
        }
        return V
      }
    return d
  }
  function S(x) {
    return (h, { track: d = !0, fixedCacheKey: c } = {}) =>
      (y, E) => {
        const w = n({
            type: 'mutation',
            endpointName: x,
            originalArgs: h,
            track: d,
            fixedCacheKey: c,
          }),
          C = y(w),
          { requestId: _, abort: N, unwrap: M } = C,
          T = Nw(
            C.unwrap().then((Z) => ({ data: Z })),
            (Z) => ({ error: Z })
          ),
          z = () => {
            y(a({ requestId: _, fixedCacheKey: c }))
          },
          A = Object.assign(T, {
            arg: C.arg,
            requestId: _,
            abort: N,
            unwrap: M,
            reset: z,
          }),
          B = l.get(y) || {}
        return (
          l.set(y, B),
          (B[_] = A),
          A.then(() => {
            delete B[_], kr(B) || l.delete(y)
          }),
          c &&
            ((B[c] = A),
            A.then(() => {
              B[c] === A && (delete B[c], kr(B) || l.delete(y))
            })),
          A
        )
      }
  }
}
function lf(e) {
  return e
}
function Mw({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: n },
  serializeQueryArgs: r,
  api: i,
  assertTagType: o,
}) {
  const l = (d, c, y, E) => (w, C) => {
      const _ = n[d],
        N = r({ queryArgs: c, endpointDefinition: _, endpointName: d })
      if (
        (w(
          i.internalActions.queryResultPatched({ queryCacheKey: N, patches: y })
        ),
        !E)
      )
        return
      const M = i.endpoints[d].select(c)(C()),
        T = Ju(_.providesTags, M.data, void 0, c, {}, o)
      w(
        i.internalActions.updateProvidedBy({
          queryCacheKey: N,
          providedTags: T,
        })
      )
    },
    s =
      (d, c, y, E = !0) =>
      (w, C) => {
        const N = i.endpoints[d].select(c)(C())
        let M = {
          patches: [],
          inversePatches: [],
          undo: () => w(i.util.patchQueryData(d, c, M.inversePatches, E)),
        }
        if (N.status === 'uninitialized') return M
        let T
        if ('data' in N)
          if (_t(N.data)) {
            const [z, A, B] = Vh(N.data, y)
            M.patches.push(...A), M.inversePatches.push(...B), (T = z)
          } else
            (T = y(N.data)),
              M.patches.push({ op: 'replace', path: [], value: T }),
              M.inversePatches.push({ op: 'replace', path: [], value: N.data })
        return (
          M.patches.length === 0 ||
            w(i.util.patchQueryData(d, c, M.patches, E)),
          M
        )
      },
    a = (d, c, y) => (E) =>
      E(
        i.endpoints[d].initiate(c, {
          subscribe: !1,
          forceRefetch: !0,
          [Ki]: () => ({ data: y }),
        })
      ),
    u = async (
      d,
      {
        signal: c,
        abort: y,
        rejectWithValue: E,
        fulfillWithValue: w,
        dispatch: C,
        getState: _,
        extra: N,
      }
    ) => {
      const M = n[d.endpointName]
      try {
        let T = lf,
          z
        const A = {
            signal: c,
            abort: y,
            dispatch: C,
            getState: _,
            extra: N,
            endpoint: d.endpointName,
            type: d.type,
            forced: d.type === 'query' ? p(d, _()) : void 0,
          },
          B = d.type === 'query' ? d[Ki] : void 0
        if (
          (B
            ? (z = B())
            : M.query
            ? ((z = await t(M.query(d.originalArgs), A, M.extraOptions)),
              M.transformResponse && (T = M.transformResponse))
            : (z = await M.queryFn(d.originalArgs, A, M.extraOptions, (Z) =>
                t(Z, A, M.extraOptions)
              )),
          typeof process < 'u',
          z.error)
        )
          throw new rf(z.error, z.meta)
        return w(await T(z.data, z.meta, d.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: z.meta,
          [pr]: !0,
        })
      } catch (T) {
        let z = T
        if (z instanceof rf) {
          let A = lf
          M.query && M.transformErrorResponse && (A = M.transformErrorResponse)
          try {
            return E(await A(z.value, z.meta, d.originalArgs), {
              baseQueryMeta: z.meta,
              [pr]: !0,
            })
          } catch (B) {
            z = B
          }
        }
        throw (typeof process < 'u', console.error(z), z)
      }
    }
  function p(d, c) {
    var _, N, M
    const y =
        (N = (_ = c[e]) == null ? void 0 : _.queries) == null
          ? void 0
          : N[d.queryCacheKey],
      E = (M = c[e]) == null ? void 0 : M.config.refetchOnMountOrArgChange,
      w = y == null ? void 0 : y.fulfilledTimeStamp,
      C = d.forceRefetch ?? (d.subscribe && E)
    return C ? C === !0 || (Number(new Date()) - Number(w)) / 1e3 >= C : !1
  }
  const m = Td(`${e}/executeQuery`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [pr]: !0 }
      },
      condition(d, { getState: c }) {
        var M, T, z
        const y = c(),
          E =
            (T = (M = y[e]) == null ? void 0 : M.queries) == null
              ? void 0
              : T[d.queryCacheKey],
          w = E == null ? void 0 : E.fulfilledTimeStamp,
          C = d.originalArgs,
          _ = E == null ? void 0 : E.originalArgs,
          N = n[d.endpointName]
        return Fa(d)
          ? !0
          : (E == null ? void 0 : E.status) === 'pending'
          ? !1
          : p(d, y) ||
            (km(N) &&
              (z = N == null ? void 0 : N.forceRefetch) != null &&
              z.call(N, {
                currentArg: C,
                previousArg: _,
                endpointState: E,
                state: y,
              }))
          ? !0
          : !w
      },
      dispatchConditionRejection: !0,
    }),
    f = Td(`${e}/executeMutation`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [pr]: !0 }
      },
    }),
    g = (d) => 'force' in d,
    v = (d) => 'ifOlderThan' in d,
    S = (d, c, y) => (E, w) => {
      const C = g(y) && y.force,
        _ = v(y) && y.ifOlderThan,
        N = (T = !0) => {
          const z = { forceRefetch: T, isPrefetch: !0 }
          return i.endpoints[d].initiate(c, z)
        },
        M = i.endpoints[d].select(c)(w())
      if (C) E(N())
      else if (_) {
        const T = M == null ? void 0 : M.fulfilledTimeStamp
        if (!T) {
          E(N())
          return
        }
        ;(Number(new Date()) - Number(new Date(T))) / 1e3 >= _ && E(N())
      } else E(N(!1))
    }
  function x(d) {
    return (c) => {
      var y, E
      return (
        ((E = (y = c == null ? void 0 : c.meta) == null ? void 0 : y.arg) ==
        null
          ? void 0
          : E.endpointName) === d
      )
    }
  }
  function h(d, c) {
    return {
      matchPending: xi(Hu(d), x(c)),
      matchFulfilled: xi(vn(d), x(c)),
      matchRejected: xi(Mr(d), x(c)),
    }
  }
  return {
    queryThunk: m,
    mutationThunk: f,
    prefetch: S,
    updateQueryData: s,
    upsertQueryData: a,
    patchQueryData: l,
    buildMatchThunkActions: h,
  }
}
function Em(e, t, n, r) {
  return Ju(
    n[e.meta.arg.endpointName][t],
    vn(e) ? e.payload : void 0,
    Al(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    'baseQueryMeta' in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  )
}
function Mo(e, t, n) {
  const r = e[t]
  r && n(r)
}
function Yi(e) {
  return ('arg' in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId
}
function sf(e, t, n) {
  const r = e[Yi(t)]
  r && n(r)
}
var ri = {}
function Lw({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  context: {
    endpointDefinitions: r,
    apiUid: i,
    extractRehydrationInfo: o,
    hasRehydrationInfo: l,
  },
  assertTagType: s,
  config: a,
}) {
  const u = Be(`${e}/resetApiState`),
    p = Nn({
      name: `${e}/queries`,
      initialState: ri,
      reducers: {
        removeQueryResult: {
          reducer(c, { payload: { queryCacheKey: y } }) {
            delete c[y]
          },
          prepare: Jr(),
        },
        queryResultPatched: {
          reducer(c, { payload: { queryCacheKey: y, patches: E } }) {
            Mo(c, y, (w) => {
              w.data = jd(w.data, E.concat())
            })
          },
          prepare: Jr(),
        },
      },
      extraReducers(c) {
        c.addCase(t.pending, (y, { meta: E, meta: { arg: w } }) => {
          var _
          const C = Fa(w)
          y[(_ = w.queryCacheKey)] ??
            (y[_] = { status: 'uninitialized', endpointName: w.endpointName }),
            Mo(y, w.queryCacheKey, (N) => {
              ;(N.status = 'pending'),
                (N.requestId = C && N.requestId ? N.requestId : E.requestId),
                w.originalArgs !== void 0 && (N.originalArgs = w.originalArgs),
                (N.startedTimeStamp = E.startedTimeStamp)
            })
        })
          .addCase(t.fulfilled, (y, { meta: E, payload: w }) => {
            Mo(y, E.arg.queryCacheKey, (C) => {
              if (C.requestId !== E.requestId && !Fa(E.arg)) return
              const { merge: _ } = r[E.arg.endpointName]
              if (((C.status = 'fulfilled'), _))
                if (C.data !== void 0) {
                  const {
                    fulfilledTimeStamp: N,
                    arg: M,
                    baseQueryMeta: T,
                    requestId: z,
                  } = E
                  let A = io(C.data, (B) =>
                    _(B, w, {
                      arg: M.originalArgs,
                      baseQueryMeta: T,
                      fulfilledTimeStamp: N,
                      requestId: z,
                    })
                  )
                  C.data = A
                } else C.data = w
              else
                C.data =
                  r[E.arg.endpointName].structuralSharing ?? !0
                    ? wm(Ct(C.data) ? Uy(C.data) : C.data, w)
                    : w
              delete C.error, (C.fulfilledTimeStamp = E.fulfilledTimeStamp)
            })
          })
          .addCase(
            t.rejected,
            (
              y,
              {
                meta: { condition: E, arg: w, requestId: C },
                error: _,
                payload: N,
              }
            ) => {
              Mo(y, w.queryCacheKey, (M) => {
                if (!E) {
                  if (M.requestId !== C) return
                  ;(M.status = 'rejected'), (M.error = N ?? _)
                }
              })
            }
          )
          .addMatcher(l, (y, E) => {
            const { queries: w } = o(E)
            for (const [C, _] of Object.entries(w))
              ((_ == null ? void 0 : _.status) === 'fulfilled' ||
                (_ == null ? void 0 : _.status) === 'rejected') &&
                (y[C] = _)
          })
      },
    }),
    m = Nn({
      name: `${e}/mutations`,
      initialState: ri,
      reducers: {
        removeMutationResult: {
          reducer(c, { payload: y }) {
            const E = Yi(y)
            E in c && delete c[E]
          },
          prepare: Jr(),
        },
      },
      extraReducers(c) {
        c.addCase(
          n.pending,
          (
            y,
            { meta: E, meta: { requestId: w, arg: C, startedTimeStamp: _ } }
          ) => {
            C.track &&
              (y[Yi(E)] = {
                requestId: w,
                status: 'pending',
                endpointName: C.endpointName,
                startedTimeStamp: _,
              })
          }
        )
          .addCase(n.fulfilled, (y, { payload: E, meta: w }) => {
            w.arg.track &&
              sf(y, w, (C) => {
                C.requestId === w.requestId &&
                  ((C.status = 'fulfilled'),
                  (C.data = E),
                  (C.fulfilledTimeStamp = w.fulfilledTimeStamp))
              })
          })
          .addCase(n.rejected, (y, { payload: E, error: w, meta: C }) => {
            C.arg.track &&
              sf(y, C, (_) => {
                _.requestId === C.requestId &&
                  ((_.status = 'rejected'), (_.error = E ?? w))
              })
          })
          .addMatcher(l, (y, E) => {
            const { mutations: w } = o(E)
            for (const [C, _] of Object.entries(w))
              ((_ == null ? void 0 : _.status) === 'fulfilled' ||
                (_ == null ? void 0 : _.status) === 'rejected') &&
                C !== (_ == null ? void 0 : _.requestId) &&
                (y[C] = _)
          })
      },
    }),
    f = Nn({
      name: `${e}/invalidation`,
      initialState: ri,
      reducers: {
        updateProvidedBy: {
          reducer(c, y) {
            var C, _
            const { queryCacheKey: E, providedTags: w } = y.payload
            for (const N of Object.values(c))
              for (const M of Object.values(N)) {
                const T = M.indexOf(E)
                T !== -1 && M.splice(T, 1)
              }
            for (const { type: N, id: M } of w) {
              const T =
                (C = c[N] ?? (c[N] = {}))[(_ = M || '__internal_without_id')] ??
                (C[_] = [])
              T.includes(E) || T.push(E)
            }
          },
          prepare: Jr(),
        },
      },
      extraReducers(c) {
        c.addCase(
          p.actions.removeQueryResult,
          (y, { payload: { queryCacheKey: E } }) => {
            for (const w of Object.values(y))
              for (const C of Object.values(w)) {
                const _ = C.indexOf(E)
                _ !== -1 && C.splice(_, 1)
              }
          }
        )
          .addMatcher(l, (y, E) => {
            var C, _
            const { provided: w } = o(E)
            for (const [N, M] of Object.entries(w))
              for (const [T, z] of Object.entries(M)) {
                const A =
                  (C = y[N] ?? (y[N] = {}))[
                    (_ = T || '__internal_without_id')
                  ] ?? (C[_] = [])
                for (const B of z) A.includes(B) || A.push(B)
              }
          })
          .addMatcher(Wt(vn(t), Al(t)), (y, E) => {
            const w = Em(E, 'providesTags', r, s),
              { queryCacheKey: C } = E.meta.arg
            f.caseReducers.updateProvidedBy(
              y,
              f.actions.updateProvidedBy({ queryCacheKey: C, providedTags: w })
            )
          })
      },
    }),
    g = Nn({
      name: `${e}/subscriptions`,
      initialState: ri,
      reducers: {
        updateSubscriptionOptions(c, y) {},
        unsubscribeQueryResult(c, y) {},
        internal_getRTKQSubscriptions() {},
      },
    }),
    v = Nn({
      name: `${e}/internalSubscriptions`,
      initialState: ri,
      reducers: {
        subscriptionsUpdated: {
          reducer(c, y) {
            return jd(c, y.payload)
          },
          prepare: Jr(),
        },
      },
    }),
    S = Nn({
      name: `${e}/config`,
      initialState: {
        online: Sw(),
        focused: kw(),
        middlewareRegistered: !1,
        ...a,
      },
      reducers: {
        middlewareRegistered(c, { payload: y }) {
          c.middlewareRegistered =
            c.middlewareRegistered === 'conflict' || i !== y ? 'conflict' : !0
        },
      },
      extraReducers: (c) => {
        c.addCase(Zu, (y) => {
          y.online = !0
        })
          .addCase(Sm, (y) => {
            y.online = !1
          })
          .addCase(Yu, (y) => {
            y.focused = !0
          })
          .addCase(xm, (y) => {
            y.focused = !1
          })
          .addMatcher(l, (y) => ({ ...y }))
      },
    }),
    x = Ah({
      queries: p.reducer,
      mutations: m.reducer,
      provided: f.reducer,
      subscriptions: v.reducer,
      config: S.reducer,
    }),
    h = (c, y) => x(u.match(y) ? void 0 : c, y),
    d = {
      ...S.actions,
      ...p.actions,
      ...g.actions,
      ...v.actions,
      ...m.actions,
      ...f.actions,
      resetApiState: u,
    }
  return { reducer: h, actions: d }
}
var Dn = Symbol.for('RTKQ/skipToken'),
  Cm = { status: 'uninitialized' },
  af = io(Cm, () => {}),
  uf = io(Cm, () => {})
function Tw({ serializeQueryArgs: e, reducerPath: t, createSelector: n }) {
  const r = (m) => af,
    i = (m) => uf
  return {
    buildQuerySelector: s,
    buildMutationSelector: a,
    selectInvalidatedBy: u,
    selectCachedArgsForQuery: p,
  }
  function o(m) {
    return { ...m, ...gw(m.status) }
  }
  function l(m) {
    return m[t]
  }
  function s(m, f) {
    return (g) => {
      const v = e({ queryArgs: g, endpointDefinition: f, endpointName: m })
      return n(
        g === Dn
          ? r
          : (h) => {
              var d, c
              return (
                ((c = (d = l(h)) == null ? void 0 : d.queries) == null
                  ? void 0
                  : c[v]) ?? af
              )
            },
        o
      )
    }
  }
  function a() {
    return (m) => {
      let f
      return (
        typeof m == 'object' ? (f = Yi(m) ?? Dn) : (f = m),
        n(
          f === Dn
            ? i
            : (S) => {
                var x, h
                return (
                  ((h = (x = l(S)) == null ? void 0 : x.mutations) == null
                    ? void 0
                    : h[f]) ?? uf
                )
              },
          o
        )
      )
    }
  }
  function u(m, f) {
    const g = m[t],
      v = new Set()
    for (const S of f.map(Aa)) {
      const x = g.provided[S.type]
      if (!x) continue
      let h = (S.id !== void 0 ? x[S.id] : Gd(Object.values(x))) ?? []
      for (const d of h) v.add(d)
    }
    return Gd(
      Array.from(v.values()).map((S) => {
        const x = g.queries[S]
        return x
          ? [
              {
                queryCacheKey: S,
                endpointName: x.endpointName,
                originalArgs: x.originalArgs,
              },
            ]
          : []
      })
    )
  }
  function p(m, f) {
    return Object.values(m[t].queries)
      .filter(
        (g) =>
          (g == null ? void 0 : g.endpointName) === f &&
          g.status !== 'uninitialized'
      )
      .map((g) => g.originalArgs)
  }
}
var Gn = WeakMap ? new WeakMap() : void 0,
  cf = ({ endpointName: e, queryArgs: t }) => {
    let n = ''
    const r = Gn == null ? void 0 : Gn.get(t)
    if (typeof r == 'string') n = r
    else {
      const i = JSON.stringify(t, (o, l) =>
        Tt(l)
          ? Object.keys(l)
              .sort()
              .reduce((s, a) => ((s[a] = l[a]), s), {})
          : l
      )
      Tt(t) && (Gn == null || Gn.set(t, i)), (n = i)
    }
    return `${e}(${n})`
  }
function Ow(...e) {
  return function (n) {
    const r = Wi((u) => {
        var p
        return (p = n.extractRehydrationInfo) == null
          ? void 0
          : p.call(n, u, { reducerPath: n.reducerPath ?? 'api' })
      }),
      i = {
        reducerPath: 'api',
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: 'delayed',
        ...n,
        extractRehydrationInfo: r,
        serializeQueryArgs(u) {
          let p = cf
          if ('serializeQueryArgs' in u.endpointDefinition) {
            const m = u.endpointDefinition.serializeQueryArgs
            p = (f) => {
              const g = m(f)
              return typeof g == 'string' ? g : cf({ ...f, queryArgs: g })
            }
          } else n.serializeQueryArgs && (p = n.serializeQueryArgs)
          return p(u)
        },
        tagTypes: [...(n.tagTypes || [])],
      },
      o = {
        endpointDefinitions: {},
        batch(u) {
          u()
        },
        apiUid: Bu(),
        extractRehydrationInfo: r,
        hasRehydrationInfo: Wi((u) => r(u) != null),
      },
      l = {
        injectEndpoints: a,
        enhanceEndpoints({ addTagTypes: u, endpoints: p }) {
          if (u) for (const m of u) i.tagTypes.includes(m) || i.tagTypes.push(m)
          if (p)
            for (const [m, f] of Object.entries(p))
              typeof f == 'function'
                ? f(o.endpointDefinitions[m])
                : Object.assign(o.endpointDefinitions[m] || {}, f)
          return l
        },
      },
      s = e.map((u) => u.init(l, i, o))
    function a(u) {
      const p = u.endpoints({
        query: (m) => ({ ...m, type: 'query' }),
        mutation: (m) => ({ ...m, type: 'mutation' }),
      })
      for (const [m, f] of Object.entries(p)) {
        if (u.overrideExisting !== !0 && m in o.endpointDefinitions) {
          if (u.overrideExisting === 'throw') throw new Error(be(39))
          typeof process < 'u'
          continue
        }
        o.endpointDefinitions[m] = f
        for (const g of s) g.injectEndpoint(m, f)
      }
      return l
    }
    return l.injectEndpoints({ endpoints: n.endpoints })
  }
}
function Dw(e) {
  for (let t in e) return !1
  return !0
}
var zw = 2147483647 / 1e3 - 1,
  Iw = ({
    reducerPath: e,
    api: t,
    queryThunk: n,
    context: r,
    internalState: i,
  }) => {
    const { removeQueryResult: o, unsubscribeQueryResult: l } =
        t.internalActions,
      s = Wt(l.match, n.fulfilled, n.rejected)
    function a(f) {
      const g = i.currentSubscriptions[f]
      return !!g && !Dw(g)
    }
    const u = {},
      p = (f, g, v) => {
        var S
        if (s(f)) {
          const x = g.getState()[e],
            { queryCacheKey: h } = l.match(f) ? f.payload : f.meta.arg
          m(
            h,
            (S = x.queries[h]) == null ? void 0 : S.endpointName,
            g,
            x.config
          )
        }
        if (t.util.resetApiState.match(f))
          for (const [x, h] of Object.entries(u))
            h && clearTimeout(h), delete u[x]
        if (r.hasRehydrationInfo(f)) {
          const x = g.getState()[e],
            { queries: h } = r.extractRehydrationInfo(f)
          for (const [d, c] of Object.entries(h))
            m(d, c == null ? void 0 : c.endpointName, g, x.config)
        }
      }
    function m(f, g, v, S) {
      const x = r.endpointDefinitions[g],
        h = (x == null ? void 0 : x.keepUnusedDataFor) ?? S.keepUnusedDataFor
      if (h === 1 / 0) return
      const d = Math.max(0, Math.min(h, zw))
      if (!a(f)) {
        const c = u[f]
        c && clearTimeout(c),
          (u[f] = setTimeout(() => {
            a(f) || v.dispatch(o({ queryCacheKey: f })), delete u[f]
          }, d * 1e3))
      }
    }
    return p
  },
  bw = ({
    reducerPath: e,
    context: t,
    context: { endpointDefinitions: n },
    mutationThunk: r,
    queryThunk: i,
    api: o,
    assertTagType: l,
    refetchQuery: s,
    internalState: a,
  }) => {
    const { removeQueryResult: u } = o.internalActions,
      p = Wt(vn(r), Al(r)),
      m = Wt(vn(r, i), Mr(r, i))
    let f = []
    const g = (x, h) => {
      p(x)
        ? S(Em(x, 'invalidatesTags', n, l), h)
        : m(x)
        ? S([], h)
        : o.util.invalidateTags.match(x) &&
          S(Ju(x.payload, void 0, void 0, void 0, void 0, l), h)
    }
    function v(x) {
      var h, d
      for (const c in x.queries)
        if (((h = x.queries[c]) == null ? void 0 : h.status) === 'pending')
          return !0
      for (const c in x.mutations)
        if (((d = x.mutations[c]) == null ? void 0 : d.status) === 'pending')
          return !0
      return !1
    }
    function S(x, h) {
      const d = h.getState(),
        c = d[e]
      if ((f.push(...x), c.config.invalidationBehavior === 'delayed' && v(c)))
        return
      const y = f
      if (((f = []), y.length === 0)) return
      const E = o.util.selectInvalidatedBy(d, y)
      t.batch(() => {
        const w = Array.from(E.values())
        for (const { queryCacheKey: C } of w) {
          const _ = c.queries[C],
            N = a.currentSubscriptions[C] ?? {}
          _ &&
            (kr(N) === 0
              ? h.dispatch(u({ queryCacheKey: C }))
              : _.status !== 'uninitialized' && h.dispatch(s(_, C)))
        }
      })
    }
    return g
  },
  Aw = ({
    reducerPath: e,
    queryThunk: t,
    api: n,
    refetchQuery: r,
    internalState: i,
  }) => {
    const o = {},
      l = (f, g) => {
        ;(n.internalActions.updateSubscriptionOptions.match(f) ||
          n.internalActions.unsubscribeQueryResult.match(f)) &&
          a(f.payload, g),
          (t.pending.match(f) || (t.rejected.match(f) && f.meta.condition)) &&
            a(f.meta.arg, g),
          (t.fulfilled.match(f) ||
            (t.rejected.match(f) && !f.meta.condition)) &&
            s(f.meta.arg, g),
          n.util.resetApiState.match(f) && p()
      }
    function s({ queryCacheKey: f }, g) {
      const v = g.getState()[e],
        S = v.queries[f],
        x = i.currentSubscriptions[f]
      if (!S || S.status === 'uninitialized') return
      const { lowestPollingInterval: h, skipPollingIfUnfocused: d } = m(x)
      if (!Number.isFinite(h)) return
      const c = o[f]
      c != null && c.timeout && (clearTimeout(c.timeout), (c.timeout = void 0))
      const y = Date.now() + h
      o[f] = {
        nextPollTimestamp: y,
        pollingInterval: h,
        timeout: setTimeout(() => {
          ;(v.config.focused || !d) && g.dispatch(r(S, f)),
            s({ queryCacheKey: f }, g)
        }, h),
      }
    }
    function a({ queryCacheKey: f }, g) {
      const S = g.getState()[e].queries[f],
        x = i.currentSubscriptions[f]
      if (!S || S.status === 'uninitialized') return
      const { lowestPollingInterval: h } = m(x)
      if (!Number.isFinite(h)) {
        u(f)
        return
      }
      const d = o[f],
        c = Date.now() + h
      ;(!d || c < d.nextPollTimestamp) && s({ queryCacheKey: f }, g)
    }
    function u(f) {
      const g = o[f]
      g != null && g.timeout && clearTimeout(g.timeout), delete o[f]
    }
    function p() {
      for (const f of Object.keys(o)) u(f)
    }
    function m(f = {}) {
      let g = !1,
        v = Number.POSITIVE_INFINITY
      for (let S in f)
        f[S].pollingInterval &&
          ((v = Math.min(f[S].pollingInterval, v)),
          (g = f[S].skipPollingIfUnfocused || g))
      return { lowestPollingInterval: v, skipPollingIfUnfocused: g }
    }
    return l
  },
  Fw = ({
    reducerPath: e,
    context: t,
    api: n,
    refetchQuery: r,
    internalState: i,
  }) => {
    const { removeQueryResult: o } = n.internalActions,
      l = (a, u) => {
        Yu.match(a) && s(u, 'refetchOnFocus'),
          Zu.match(a) && s(u, 'refetchOnReconnect')
      }
    function s(a, u) {
      const p = a.getState()[e],
        m = p.queries,
        f = i.currentSubscriptions
      t.batch(() => {
        for (const g of Object.keys(f)) {
          const v = m[g],
            S = f[g]
          if (!S || !v) continue
          ;(Object.values(S).some((h) => h[u] === !0) ||
            (Object.values(S).every((h) => h[u] === void 0) && p.config[u])) &&
            (kr(S) === 0
              ? a.dispatch(o({ queryCacheKey: g }))
              : v.status !== 'uninitialized' && a.dispatch(r(v, g)))
        }
      })
    }
    return l
  },
  df = new Error('Promise never resolved before cacheEntryRemoved.'),
  Uw = ({
    api: e,
    reducerPath: t,
    context: n,
    queryThunk: r,
    mutationThunk: i,
    internalState: o,
  }) => {
    const l = Ta(r),
      s = Ta(i),
      a = vn(r, i),
      u = {},
      p = (g, v, S) => {
        const x = m(g)
        if (r.pending.match(g)) {
          const h = S[t].queries[x],
            d = v.getState()[t].queries[x]
          !h &&
            d &&
            f(
              g.meta.arg.endpointName,
              g.meta.arg.originalArgs,
              x,
              v,
              g.meta.requestId
            )
        } else if (i.pending.match(g))
          v.getState()[t].mutations[x] &&
            f(
              g.meta.arg.endpointName,
              g.meta.arg.originalArgs,
              x,
              v,
              g.meta.requestId
            )
        else if (a(g)) {
          const h = u[x]
          h != null &&
            h.valueResolved &&
            (h.valueResolved({ data: g.payload, meta: g.meta.baseQueryMeta }),
            delete h.valueResolved)
        } else if (
          e.internalActions.removeQueryResult.match(g) ||
          e.internalActions.removeMutationResult.match(g)
        ) {
          const h = u[x]
          h && (delete u[x], h.cacheEntryRemoved())
        } else if (e.util.resetApiState.match(g))
          for (const [h, d] of Object.entries(u))
            delete u[h], d.cacheEntryRemoved()
      }
    function m(g) {
      return l(g)
        ? g.meta.arg.queryCacheKey
        : s(g)
        ? g.meta.arg.fixedCacheKey ?? g.meta.requestId
        : e.internalActions.removeQueryResult.match(g)
        ? g.payload.queryCacheKey
        : e.internalActions.removeMutationResult.match(g)
        ? Yi(g.payload)
        : ''
    }
    function f(g, v, S, x, h) {
      const d = n.endpointDefinitions[g],
        c = d == null ? void 0 : d.onCacheEntryAdded
      if (!c) return
      let y = {}
      const E = new Promise((T) => {
          y.cacheEntryRemoved = T
        }),
        w = Promise.race([
          new Promise((T) => {
            y.valueResolved = T
          }),
          E.then(() => {
            throw df
          }),
        ])
      w.catch(() => {}), (u[S] = y)
      const C = e.endpoints[g].select(d.type === 'query' ? v : S),
        _ = x.dispatch((T, z, A) => A),
        N = {
          ...x,
          getCacheEntry: () => C(x.getState()),
          requestId: h,
          extra: _,
          updateCachedData:
            d.type === 'query'
              ? (T) => x.dispatch(e.util.updateQueryData(g, v, T))
              : void 0,
          cacheDataLoaded: w,
          cacheEntryRemoved: E,
        },
        M = c(v, N)
      Promise.resolve(M).catch((T) => {
        if (T !== df) throw T
      })
    }
    return p
  },
  $w = ({ api: e, context: t, queryThunk: n, mutationThunk: r }) => {
    const i = Hu(n, r),
      o = Mr(n, r),
      l = vn(n, r),
      s = {}
    return (u, p) => {
      var m, f
      if (i(u)) {
        const {
            requestId: g,
            arg: { endpointName: v, originalArgs: S },
          } = u.meta,
          x = t.endpointDefinitions[v],
          h = x == null ? void 0 : x.onQueryStarted
        if (h) {
          const d = {},
            c = new Promise((C, _) => {
              ;(d.resolve = C), (d.reject = _)
            })
          c.catch(() => {}), (s[g] = d)
          const y = e.endpoints[v].select(x.type === 'query' ? S : g),
            E = p.dispatch((C, _, N) => N),
            w = {
              ...p,
              getCacheEntry: () => y(p.getState()),
              requestId: g,
              extra: E,
              updateCachedData:
                x.type === 'query'
                  ? (C) => p.dispatch(e.util.updateQueryData(v, S, C))
                  : void 0,
              queryFulfilled: c,
            }
          h(S, w)
        }
      } else if (l(u)) {
        const { requestId: g, baseQueryMeta: v } = u.meta
        ;(m = s[g]) == null || m.resolve({ data: u.payload, meta: v }),
          delete s[g]
      } else if (o(u)) {
        const { requestId: g, rejectedWithValue: v, baseQueryMeta: S } = u.meta
        ;(f = s[g]) == null ||
          f.reject({
            error: u.payload ?? u.error,
            isUnhandledError: !v,
            meta: S,
          }),
          delete s[g]
      }
    }
  },
  Bw =
    ({ api: e, context: { apiUid: t }, reducerPath: n }) =>
    (r, i) => {
      e.util.resetApiState.match(r) &&
        i.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < 'u'
    },
  Hw = ({ api: e, queryThunk: t, internalState: n }) => {
    const r = `${e.reducerPath}/subscriptions`
    let i = null,
      o = null
    const { updateSubscriptionOptions: l, unsubscribeQueryResult: s } =
        e.internalActions,
      a = (g, v) => {
        var x, h, d
        if (l.match(v)) {
          const { queryCacheKey: c, requestId: y, options: E } = v.payload
          return (
            (x = g == null ? void 0 : g[c]) != null && x[y] && (g[c][y] = E), !0
          )
        }
        if (s.match(v)) {
          const { queryCacheKey: c, requestId: y } = v.payload
          return g[c] && delete g[c][y], !0
        }
        if (e.internalActions.removeQueryResult.match(v))
          return delete g[v.payload.queryCacheKey], !0
        if (t.pending.match(v)) {
          const {
              meta: { arg: c, requestId: y },
            } = v,
            E = g[(h = c.queryCacheKey)] ?? (g[h] = {})
          return (
            (E[`${y}_running`] = {}),
            c.subscribe && (E[y] = c.subscriptionOptions ?? E[y] ?? {}),
            !0
          )
        }
        let S = !1
        if (t.fulfilled.match(v) || t.rejected.match(v)) {
          const c = g[v.meta.arg.queryCacheKey] || {},
            y = `${v.meta.requestId}_running`
          S || (S = !!c[y]), delete c[y]
        }
        if (t.rejected.match(v)) {
          const {
            meta: { condition: c, arg: y, requestId: E },
          } = v
          if (c && y.subscribe) {
            const w = g[(d = y.queryCacheKey)] ?? (g[d] = {})
            ;(w[E] = y.subscriptionOptions ?? w[E] ?? {}), (S = !0)
          }
        }
        return S
      },
      u = () => n.currentSubscriptions,
      f = {
        getSubscriptions: u,
        getSubscriptionCount: (g) => {
          const S = u()[g] ?? {}
          return kr(S)
        },
        isRequestSubscribed: (g, v) => {
          var x
          const S = u()
          return !!((x = S == null ? void 0 : S[g]) != null && x[v])
        },
      }
    return (g, v) => {
      if (
        (i || (i = JSON.parse(JSON.stringify(n.currentSubscriptions))),
        e.util.resetApiState.match(g))
      )
        return (i = n.currentSubscriptions = {}), (o = null), [!0, !1]
      if (e.internalActions.internal_getRTKQSubscriptions.match(g))
        return [!1, f]
      const S = a(n.currentSubscriptions, g)
      let x = !0
      if (S) {
        o ||
          (o = setTimeout(() => {
            const c = JSON.parse(JSON.stringify(n.currentSubscriptions)),
              [, y] = Vh(i, () => c)
            v.next(e.internalActions.subscriptionsUpdated(y)),
              (i = c),
              (o = null)
          }, 500))
        const h = typeof g.type == 'string' && !!g.type.startsWith(r),
          d = t.rejected.match(g) && g.meta.condition && !!g.meta.arg.subscribe
        x = !h && !d
      }
      return [x, !1]
    }
  }
function Ww(e) {
  const { reducerPath: t, queryThunk: n, api: r, context: i } = e,
    { apiUid: o } = i,
    l = { invalidateTags: Be(`${t}/invalidateTags`) },
    s = (m) => m.type.startsWith(`${t}/`),
    a = [Bw, Iw, bw, Aw, Uw, $w]
  return {
    middleware: (m) => {
      let f = !1
      const v = {
          ...e,
          internalState: { currentSubscriptions: {} },
          refetchQuery: p,
          isThisApiSliceAction: s,
        },
        S = a.map((d) => d(v)),
        x = Hw(v),
        h = Fw(v)
      return (d) => (c) => {
        if (!Fh(c)) return d(c)
        f || ((f = !0), m.dispatch(r.internalActions.middlewareRegistered(o)))
        const y = { ...m, next: d },
          E = m.getState(),
          [w, C] = x(c, y, E)
        let _
        if (
          (w ? (_ = d(c)) : (_ = C),
          m.getState()[t] && (h(c, y, E), s(c) || i.hasRehydrationInfo(c)))
        )
          for (let N of S) N(c, y, E)
        return _
      }
    },
    actions: l,
  }
  function p(m, f, g = {}) {
    return n({
      type: 'query',
      endpointName: m.endpointName,
      originalArgs: m.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: f,
      ...g,
    })
  }
}
function Xt(e, ...t) {
  return Object.assign(e, ...t)
}
var ff = Symbol(),
  Qw = ({ createSelector: e = $u } = {}) => ({
    name: ff,
    init(
      t,
      {
        baseQuery: n,
        tagTypes: r,
        reducerPath: i,
        serializeQueryArgs: o,
        keepUnusedDataFor: l,
        refetchOnMountOrArgChange: s,
        refetchOnFocus: a,
        refetchOnReconnect: u,
        invalidationBehavior: p,
      },
      m
    ) {
      Yy()
      const f = (O) => (typeof process < 'u', O)
      Object.assign(t, {
        reducerPath: i,
        endpoints: {},
        internalActions: {
          onOnline: Zu,
          onOffline: Sm,
          onFocus: Yu,
          onFocusLost: xm,
        },
        util: {},
      })
      const {
          queryThunk: g,
          mutationThunk: v,
          patchQueryData: S,
          updateQueryData: x,
          upsertQueryData: h,
          prefetch: d,
          buildMatchThunkActions: c,
        } = Mw({
          baseQuery: n,
          reducerPath: i,
          context: m,
          api: t,
          serializeQueryArgs: o,
          assertTagType: f,
        }),
        { reducer: y, actions: E } = Lw({
          context: m,
          queryThunk: g,
          mutationThunk: v,
          reducerPath: i,
          assertTagType: f,
          config: {
            refetchOnFocus: a,
            refetchOnReconnect: u,
            refetchOnMountOrArgChange: s,
            keepUnusedDataFor: l,
            reducerPath: i,
            invalidationBehavior: p,
          },
        })
      Xt(t.util, {
        patchQueryData: S,
        updateQueryData: x,
        upsertQueryData: h,
        prefetch: d,
        resetApiState: E.resetApiState,
      }),
        Xt(t.internalActions, E)
      const { middleware: w, actions: C } = Ww({
        reducerPath: i,
        context: m,
        queryThunk: g,
        mutationThunk: v,
        api: t,
        assertTagType: f,
      })
      Xt(t.util, C), Xt(t, { reducer: y, middleware: w })
      const {
        buildQuerySelector: _,
        buildMutationSelector: N,
        selectInvalidatedBy: M,
        selectCachedArgsForQuery: T,
      } = Tw({ serializeQueryArgs: o, reducerPath: i, createSelector: e })
      Xt(t.util, { selectInvalidatedBy: M, selectCachedArgsForQuery: T })
      const {
        buildInitiateQuery: z,
        buildInitiateMutation: A,
        getRunningMutationThunk: B,
        getRunningMutationsThunk: Z,
        getRunningQueriesThunk: te,
        getRunningQueryThunk: K,
      } = Pw({
        queryThunk: g,
        mutationThunk: v,
        api: t,
        serializeQueryArgs: o,
        context: m,
      })
      return (
        Xt(t.util, {
          getRunningMutationThunk: B,
          getRunningMutationsThunk: Z,
          getRunningQueryThunk: K,
          getRunningQueriesThunk: te,
        }),
        {
          name: ff,
          injectEndpoint(O, U) {
            var V
            const b = t
            ;(V = b.endpoints)[O] ?? (V[O] = {}),
              km(U)
                ? Xt(
                    b.endpoints[O],
                    { name: O, select: _(O, U), initiate: z(O, U) },
                    c(g, O)
                  )
                : jw(U) &&
                  Xt(
                    b.endpoints[O],
                    { name: O, select: N(), initiate: A(O) },
                    c(v, O)
                  )
          },
        }
      )
    },
  })
function Vw(e) {
  return e.type === 'query'
}
function qw(e) {
  return e.type === 'mutation'
}
function Lo(e, ...t) {
  return Object.assign(e, ...t)
}
function Ps(e) {
  return e.replace(e[0], e[0].toUpperCase())
}
var er = WeakMap ? new WeakMap() : void 0,
  Kw = ({ endpointName: e, queryArgs: t }) => {
    let n = ''
    const r = er == null ? void 0 : er.get(t)
    if (typeof r == 'string') n = r
    else {
      const i = JSON.stringify(t, (o, l) =>
        Tt(l)
          ? Object.keys(l)
              .sort()
              .reduce((s, a) => ((s[a] = l[a]), s), {})
          : l
      )
      Tt(t) && (er == null || er.set(t, i)), (n = i)
    }
    return `${e}(${n})`
  },
  Ms = Symbol()
function pf(e, t, n, r) {
  const i = R.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == 'object'
            ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
            : e,
      }),
      [e, t, n, r]
    ),
    o = R.useRef(i)
  return (
    R.useEffect(() => {
      o.current.serialized !== i.serialized && (o.current = i)
    }, [i]),
    o.current.serialized === i.serialized ? o.current.queryArgs : e
  )
}
function Ls(e) {
  const t = R.useRef(e)
  return (
    R.useEffect(() => {
      vi(t.current, e) || (t.current = e)
    }, [e]),
    vi(t.current, e) ? t.current : e
  )
}
var Yw =
    typeof window < 'u' && window.document && window.document.createElement
      ? R.useLayoutEffect
      : R.useEffect,
  Zw = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: vm.pending,
        }
      : e
function Jw({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: { useDispatch: n, useSelector: r, useStore: i },
    unstable__sideEffectsInRender: o,
    createSelector: l,
  },
  serializeQueryArgs: s,
  context: a,
}) {
  const u = o ? (v) => v() : R.useEffect
  return { buildQueryHooks: f, buildMutationHook: g, usePrefetch: m }
  function p(v, S, x) {
    if (S != null && S.endpointName && v.isUninitialized) {
      const { endpointName: w } = S,
        C = a.endpointDefinitions[w]
      s({
        queryArgs: S.originalArgs,
        endpointDefinition: C,
        endpointName: w,
      }) === s({ queryArgs: x, endpointDefinition: C, endpointName: w }) &&
        (S = void 0)
    }
    let h = v.isSuccess ? v.data : S == null ? void 0 : S.data
    h === void 0 && (h = v.data)
    const d = h !== void 0,
      c = v.isLoading,
      y = !d && c,
      E = v.isSuccess || (c && d)
    return {
      ...v,
      data: h,
      currentData: v.data,
      isFetching: c,
      isLoading: y,
      isSuccess: E,
    }
  }
  function m(v, S) {
    const x = n(),
      h = Ls(S)
    return R.useCallback(
      (d, c) => x(e.util.prefetch(v, d, { ...h, ...c })),
      [v, x, h]
    )
  }
  function f(v) {
    const S = (
        d,
        {
          refetchOnReconnect: c,
          refetchOnFocus: y,
          refetchOnMountOrArgChange: E,
          skip: w = !1,
          pollingInterval: C = 0,
          skipPollingIfUnfocused: _ = !1,
        } = {}
      ) => {
        const { initiate: N } = e.endpoints[v],
          M = n(),
          T = R.useRef()
        if (!T.current) {
          const b = M(e.internalActions.internal_getRTKQSubscriptions())
          T.current = b
        }
        const z = pf(w ? Dn : d, Kw, a.endpointDefinitions[v], v),
          A = Ls({
            refetchOnReconnect: c,
            refetchOnFocus: y,
            pollingInterval: C,
            skipPollingIfUnfocused: _,
          }),
          B = R.useRef(!1),
          Z = R.useRef()
        let { queryCacheKey: te, requestId: K } = Z.current || {},
          O = !1
        te && K && (O = T.current.isRequestSubscribed(te, K))
        const U = !O && B.current
        return (
          u(() => {
            B.current = O
          }),
          u(() => {
            U && (Z.current = void 0)
          }, [U]),
          u(() => {
            var W
            const b = Z.current
            if ((typeof process < 'u', z === Dn)) {
              b == null || b.unsubscribe(), (Z.current = void 0)
              return
            }
            const V = (W = Z.current) == null ? void 0 : W.subscriptionOptions
            if (!b || b.arg !== z) {
              b == null || b.unsubscribe()
              const re = M(N(z, { subscriptionOptions: A, forceRefetch: E }))
              Z.current = re
            } else A !== V && b.updateSubscriptionOptions(A)
          }, [M, N, E, z, A, U]),
          R.useEffect(
            () => () => {
              var b
              ;(b = Z.current) == null || b.unsubscribe(), (Z.current = void 0)
            },
            []
          ),
          R.useMemo(
            () => ({
              refetch: () => {
                var b
                if (!Z.current) throw new Error(be(38))
                return (b = Z.current) == null ? void 0 : b.refetch()
              },
            }),
            []
          )
        )
      },
      x = ({
        refetchOnReconnect: d,
        refetchOnFocus: c,
        pollingInterval: y = 0,
        skipPollingIfUnfocused: E = !1,
      } = {}) => {
        const { initiate: w } = e.endpoints[v],
          C = n(),
          [_, N] = R.useState(Ms),
          M = R.useRef(),
          T = Ls({
            refetchOnReconnect: d,
            refetchOnFocus: c,
            pollingInterval: y,
            skipPollingIfUnfocused: E,
          })
        u(() => {
          var Z, te
          const B = (Z = M.current) == null ? void 0 : Z.subscriptionOptions
          T !== B &&
            ((te = M.current) == null || te.updateSubscriptionOptions(T))
        }, [T])
        const z = R.useRef(T)
        u(() => {
          z.current = T
        }, [T])
        const A = R.useCallback(
          function (B, Z = !1) {
            let te
            return (
              t(() => {
                var K
                ;(K = M.current) == null || K.unsubscribe(),
                  (M.current = te =
                    C(
                      w(B, { subscriptionOptions: z.current, forceRefetch: !Z })
                    )),
                  N(B)
              }),
              te
            )
          },
          [C, w]
        )
        return (
          R.useEffect(
            () => () => {
              var B
              ;(B = M == null ? void 0 : M.current) == null || B.unsubscribe()
            },
            []
          ),
          R.useEffect(() => {
            _ !== Ms && !M.current && A(_, !0)
          }, [_, A]),
          R.useMemo(() => [A, _], [A, _])
        )
      },
      h = (d, { skip: c = !1, selectFromResult: y } = {}) => {
        const { select: E } = e.endpoints[v],
          w = pf(c ? Dn : d, s, a.endpointDefinitions[v], v),
          C = R.useRef(),
          _ = R.useMemo(
            () =>
              l([E(w), (A, B) => B, (A) => w], p, {
                memoizeOptions: { resultEqualityCheck: vi },
              }),
            [E, w]
          ),
          N = R.useMemo(
            () =>
              y
                ? l([_], y, {
                    devModeChecks: { identityFunctionCheck: 'never' },
                  })
                : _,
            [_, y]
          ),
          M = r((A) => N(A, C.current), vi),
          T = i(),
          z = _(T.getState(), C.current)
        return (
          Yw(() => {
            C.current = z
          }, [z]),
          M
        )
      }
    return {
      useQueryState: h,
      useQuerySubscription: S,
      useLazyQuerySubscription: x,
      useLazyQuery(d) {
        const [c, y] = x(d),
          E = h(y, { ...d, skip: y === Ms }),
          w = R.useMemo(() => ({ lastArg: y }), [y])
        return R.useMemo(() => [c, E, w], [c, E, w])
      },
      useQuery(d, c) {
        const y = S(d, c),
          E = h(d, {
            selectFromResult: d === Dn || (c != null && c.skip) ? void 0 : Zw,
            ...c,
          }),
          {
            data: w,
            status: C,
            isLoading: _,
            isSuccess: N,
            isError: M,
            error: T,
          } = E
        return (
          R.useDebugValue({
            data: w,
            status: C,
            isLoading: _,
            isSuccess: N,
            isError: M,
            error: T,
          }),
          R.useMemo(() => ({ ...E, ...y }), [E, y])
        )
      },
    }
  }
  function g(v) {
    return ({ selectFromResult: S, fixedCacheKey: x } = {}) => {
      const { select: h, initiate: d } = e.endpoints[v],
        c = n(),
        [y, E] = R.useState()
      R.useEffect(
        () => () => {
          ;(y != null && y.arg.fixedCacheKey) || y == null || y.reset()
        },
        [y]
      )
      const w = R.useCallback(
          function (V) {
            const W = c(d(V, { fixedCacheKey: x }))
            return E(W), W
          },
          [c, d, x]
        ),
        { requestId: C } = y || {},
        _ = R.useMemo(
          () =>
            h({
              fixedCacheKey: x,
              requestId: y == null ? void 0 : y.requestId,
            }),
          [x, y, h]
        ),
        N = R.useMemo(() => (S ? l([_], S) : _), [S, _]),
        M = r(N, vi),
        T = x == null ? (y == null ? void 0 : y.arg.originalArgs) : void 0,
        z = R.useCallback(() => {
          t(() => {
            y && E(void 0),
              x &&
                c(
                  e.internalActions.removeMutationResult({
                    requestId: C,
                    fixedCacheKey: x,
                  })
                )
          })
        }, [c, x, y, C]),
        {
          endpointName: A,
          data: B,
          status: Z,
          isLoading: te,
          isSuccess: K,
          isError: O,
          error: U,
        } = M
      R.useDebugValue({
        endpointName: A,
        data: B,
        status: Z,
        isLoading: te,
        isSuccess: K,
        isError: O,
        error: U,
      })
      const b = R.useMemo(
        () => ({ ...M, originalArgs: T, reset: z }),
        [M, T, z]
      )
      return R.useMemo(() => [w, b], [w, b])
    }
  }
}
var Xw = Symbol(),
  Gw = ({
    batch: e = Dy,
    hooks: t = { useDispatch: zr, useSelector: Dr, useStore: Ih },
    createSelector: n = $u,
    unstable__sideEffectsInRender: r = !1,
    ...i
  } = {}) => ({
    name: Xw,
    init(o, { serializeQueryArgs: l }, s) {
      const a = o,
        {
          buildQueryHooks: u,
          buildMutationHook: p,
          usePrefetch: m,
        } = Jw({
          api: o,
          moduleOptions: {
            batch: e,
            hooks: t,
            unstable__sideEffectsInRender: r,
            createSelector: n,
          },
          serializeQueryArgs: l,
          context: s,
        })
      return (
        Lo(a, { usePrefetch: m }),
        Lo(s, { batch: e }),
        {
          injectEndpoint(f, g) {
            if (Vw(g)) {
              const {
                useQuery: v,
                useLazyQuery: S,
                useLazyQuerySubscription: x,
                useQueryState: h,
                useQuerySubscription: d,
              } = u(f)
              Lo(a.endpoints[f], {
                useQuery: v,
                useLazyQuery: S,
                useLazyQuerySubscription: x,
                useQueryState: h,
                useQuerySubscription: d,
              }),
                (o[`use${Ps(f)}Query`] = v),
                (o[`useLazy${Ps(f)}Query`] = S)
            } else if (qw(g)) {
              const v = p(f)
              Lo(a.endpoints[f], { useMutation: v }),
                (o[`use${Ps(f)}Mutation`] = v)
            }
          },
        }
      )
    },
  }),
  ex = Ow(Qw(), Gw())
const tx = 'https://members-only-backend-ov7p.onrender.com/api',
  nx = _w({
    baseUrl: tx,
    credentials: 'include',
    prepareHeaders: (e) => {
      const t = localStorage.getItem('token')
      return t && e.set('Authorization', `Bearer ${t}`), e
    },
  }),
  ki = ex({ reducerPath: 'api', baseQuery: nx, endpoints: (e) => ({}) }),
  rx = ki.injectEndpoints({
    endpoints: (e) => ({
      getPosts: e.query({
        query: (t) => ({
          url: `/posts?page=${t != null && t.page ? t.page : 1}&limit=${
            t != null && t.limit ? t.limit : ''
          }}`,
          method: 'GET',
        }),
        providesTags: ['Post'],
      }),
      createPost: e.mutation({
        query: (t) => ({ url: '/posts', method: 'POST', body: t }),
        invalidatesTags: ['Post'],
      }),
      deletePost: e.mutation({
        query: (t) => ({ url: `/posts/${t}`, method: 'DELETE' }),
        invalidatesTags: ['Post'],
      }),
    }),
  }),
  {
    useCreatePostMutation: ix,
    useGetPostsQuery: ox,
    useDeletePostMutation: lx,
  } = rx
function sx({ setShowNewPostModal: e }) {
  const [t, { data: n, error: r, isLoading: i }] = ix(),
    [o, l] = R.useState(''),
    [s, a] = R.useState('')
  ;(n == null ? void 0 : n.message) === 'Post created successfully' &&
    setTimeout(() => {
      e(!1)
    }, 1e3),
    R.useEffect(
      () => (
        (document.body.style.overflow = 'hidden'),
        () => {
          document.body.style.overflow = 'auto'
        }
      ),
      []
    )
  function u(p) {
    p.preventDefault(), !(!o || !s) && t({ title: o, content: s })
  }
  return k.jsx('div', {
    className:
      'absolute z-50 w-full min-h-screen inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-lg ',
    children: k.jsx('div', {
      className: 'flex items-center justify-center px-4 py-8',
      children: k.jsxs('div', {
        className:
          'relative p-6  rounded shadow-lg w-96 bg-gray-800 translate-y-1/2',
        children: [
          k.jsx('p', {
            className:
              'text-lg font-bold leading-none text-gray-800 dark:text-gray-100',
            children: 'New Post',
          }),
          k.jsxs('form', {
            onSubmit: u,
            className: 'mt-5',
            children: [
              k.jsxs('div', {
                className: 'flex flex-col mt-4',
                children: [
                  k.jsx('div', {
                    children: k.jsx('input', {
                      maxLength: '280',
                      required: !0,
                      placeholder: 'title',
                      value: o,
                      onChange: (p) => l(p.target.value),
                      className:
                        'w-full px-4 py-3 mt-2 text-xs font-medium leading-3 text-gray-500 border border-gray-200 rounded-lg resize-none dark:text-gray-400 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 focus:outline-none',
                    }),
                  }),
                  k.jsx('textarea', {
                    maxLength: '180',
                    required: !0,
                    value: s,
                    onChange: (p) => a(p.target.value),
                    placeholder: 'what are you thinking ?',
                    className:
                      'px-4 py-3 mt-2 text-xs font-medium leading-3 text-gray-500 border border-gray-200 rounded-lg resize-none h-36 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 focus:outline-none',
                  }),
                ],
              }),
              (n == null ? void 0 : n.message) &&
                k.jsx('p', {
                  className: 'text-green-500 mt-2',
                  children: n.message,
                }),
              r &&
                k.jsx('p', {
                  className: 'text-red-600 mt-2',
                  children: r.message,
                }),
              k.jsx('button', {
                type: 'submit',
                disabled: i,
                id: 'submit',
                className:
                  'px-5 py-3 mt-5 text-xs font-semibold leading-3 text-gray-100 bg-indigo-700 rounded focus:outline-none dark:bg-indigo-600 hover:bg-opacity-80',
                children: 'Create',
              }),
            ],
          }),
          k.jsx('div', {
            className:
              'absolute top-0 right-0 m-3 text-gray-400 text-gray-600 transition duration-150 ease-in-out cursor-pointer dark:text-gray-100',
            onClick: () => e(!1),
            children: k.jsxs('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-label': 'Close',
              className: 'icon icon-tabler icon-tabler-x',
              width: '20',
              height: '20',
              viewBox: '0 0 24 24',
              strokeWidth: '2.5',
              stroke: 'currentColor',
              fill: 'none',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              children: [
                k.jsx('path', { stroke: 'none', d: 'M0 0h24v24H0z' }),
                k.jsx('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
                k.jsx('line', { x1: '6', y1: '6', x2: '18', y2: '18' }),
              ],
            }),
          }),
        ],
      }),
    }),
  })
}
const ax = ki.injectEndpoints({
    endpoints: (e) => ({
      login: e.mutation({
        query: (t) => ({ url: '/auth/login', method: 'POST', body: t }),
      }),
      register: e.mutation({
        query: (t) => ({ url: '/auth/register', method: 'POST', body: t }),
      }),
      getById: e.query({ query: (t) => `/auth/user/${t}` }),
      becomeMember: e.mutation({
        query: (t) => ({ url: '/auth/become-member', method: 'POST', body: t }),
      }),
    }),
  }),
  {
    useLoginMutation: ux,
    useRegisterMutation: cx,
    useGetByIdQuery: dx,
    useBecomeMemberMutation: fx,
  } = ax
function px({ setShowSignUpModal: e, setShowSignInModal: t }) {
  const [n, r] = R.useState(''),
    [i, o] = R.useState(''),
    [l, s] = R.useState(''),
    [a, u] = R.useState(''),
    [p, { data: m, isLoading: f, error: g }] = cx(),
    v = zr()
  R.useEffect(() => {
    m &&
      m.token &&
      (localStorage.setItem('token', m.token),
      localStorage.setItem('user', JSON.stringify(m.user)),
      v(Qu({ user: m.user, accessToken: m.token })),
      setTimeout(() => {
        e(!1)
      }, 1e3))
  }, [m]),
    R.useEffect(
      () => (
        (document.body.style.overflow = 'hidden'),
        () => {
          document.body.style.overflow = 'auto'
        }
      ),
      []
    )
  function S(x) {
    x.preventDefault(),
      !(!n || !i || !l || !a) &&
        p({ email: n, password: i, name: l, lastName: a })
  }
  return k.jsx(k.Fragment, {
    children: k.jsx('div', {
      className:
        'absolute z-50  w-full min-h-screen inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-lg',
      children: k.jsx('div', {
        role: 'alert',
        className:
          'container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center translate-y-1/2',
        children: k.jsxs('div', {
          className:
            'relative w-11/12 sm:w-8/12 md:w-10/12 bg-gray-800 shadow  rounded',
          children: [
            k.jsxs('form', {
              onSubmit: S,
              className: 'md:px-10 py-4 px-5 md:py-6',
              children: [
                k.jsx('p', {
                  className: 'text-2xl font-bold leading-normal text-white ',
                  children: 'Sign up',
                }),
                k.jsxs('div', {
                  children: [
                    k.jsx('div', {
                      className:
                        'bg-gray-50 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200 mt-5',
                      children: k.jsx('input', {
                        className:
                          'py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none',
                        type: 'text',
                        placeholder: 'First Name',
                        required: !0,
                        value: l,
                        onChange: (x) => s(x.target.value),
                        'aria-label': 'first name',
                      }),
                    }),
                    k.jsx('div', {
                      className:
                        'bg-gray-50 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200 mt-5',
                      children: k.jsx('input', {
                        className:
                          'py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none',
                        type: 'text',
                        placeholder: 'Last Name',
                        required: !0,
                        value: a,
                        onChange: (x) => u(x.target.value),
                        'aria-label': 'Last Name',
                      }),
                    }),
                    k.jsx('div', {
                      className:
                        'bg-gray-50 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200 mt-5',
                      children: k.jsx('input', {
                        className:
                          'py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none',
                        type: 'email',
                        placeholder: 'Email',
                        required: !0,
                        value: n,
                        onChange: (x) => r(x.target.value),
                        'aria-label': 'Email',
                      }),
                    }),
                    k.jsx('div', {
                      className:
                        'bg-gray-50 mt-3 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200',
                      children: k.jsx('input', {
                        className:
                          'py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none',
                        type: 'password',
                        placeholder: 'Password',
                        required: !0,
                        'aria-label': 'Password',
                        value: i,
                        onChange: (x) => o(x.target.value),
                      }),
                    }),
                  ],
                }),
                (m == null ? void 0 : m.message) &&
                  k.jsx('p', {
                    className: 'text-green-500 mt-2',
                    children: m.message,
                  }),
                g &&
                  k.jsx('p', {
                    className: 'text-red-500 mt-2',
                    children: g == null ? void 0 : g.data.message,
                  }),
                k.jsxs('div', {
                  className:
                    'md:flex items-center justify-between mt-4 md:mt-6',
                  children: [
                    k.jsxs('p', {
                      className:
                        'text-xs leading-3 text-gray-600 dark:text-gray-300 ',
                      children: [
                        'Already have an account?',
                        ' ',
                        k.jsx('span', {
                          onClick: () => {
                            e(!1), t(!0)
                          },
                          'aria-hidden': 'true',
                          className:
                            'cursor-pointer text-indigo-700 dark:text-indigo-600 underline font-semibold',
                          children: 'Sign In',
                        }),
                      ],
                    }),
                    k.jsx('button', {
                      disabled: f,
                      type: 'submit',
                      'aria-label': 'Sign Up',
                      className:
                        'mt-4 md:mt-0 md:ml-10 p-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded focus:outline-none',
                      children: k.jsx('p', {
                        disabled: f,
                        className:
                          'text-sm font-medium leading-none text-gray-100',
                        children: 'Create account',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            k.jsx('div', {
              onClick: () => e(!1),
              'aria-hidden': 'true',
              className:
                'cursor-pointer absolute top-0 right-0 m-3 text-gray-800 transition duration-150 ease-in-out',
              children: k.jsxs('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-label': 'Close',
                className: 'icon icon-tabler icon-tabler-x',
                width: 20,
                height: 20,
                viewBox: '0 0 24 24',
                strokeWidth: '2.5',
                stroke: 'white',
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                children: [
                  k.jsx('path', { stroke: 'none', d: 'M0 0h24v24H0z' }),
                  k.jsx('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
                  k.jsx('line', { x1: 6, y1: 6, x2: 18, y2: 18 }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  })
}
function hx({ setShowSignInModal: e, setShowSignUpModal: t }) {
  const [n, r] = R.useState(''),
    [i, o] = R.useState(''),
    [l, { data: s, isLoading: a, error: u }] = ux(),
    p = zr()
  R.useEffect(() => {
    s &&
      s.token &&
      (localStorage.setItem('token', s.token),
      localStorage.setItem('user', JSON.stringify(s.user)),
      p(Qu({ user: s.user, accessToken: s.token })),
      setTimeout(() => {
        e(!1)
      }, 1e3))
  }, [s]),
    R.useEffect(
      () => (
        (document.body.style.overflow = 'hidden'),
        () => {
          document.body.style.overflow = 'auto'
        }
      ),
      []
    )
  function m(f) {
    f.preventDefault(), !(!n || !i) && l({ email: n, password: i })
  }
  return k.jsx(k.Fragment, {
    children: k.jsx('div', {
      className:
        'absolute z-50  w-full min-h-screen inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-lg',
      children: k.jsx('div', {
        role: 'alert',
        className:
          'container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center translate-y-1/2',
        children: k.jsxs('div', {
          className:
            'relative w-11/12 sm:w-8/12 md:w-10/12 bg-gray-800 shadow  rounded',
          children: [
            k.jsxs('form', {
              onSubmit: m,
              className: 'md:px-10 py-4 px-5 md:py-6',
              children: [
                k.jsx('p', {
                  className: 'text-2xl font-bold leading-normal text-white ',
                  children: 'Sign in',
                }),
                k.jsxs('div', {
                  children: [
                    k.jsx('div', {
                      className:
                        'bg-gray-50 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200 mt-5',
                      children: k.jsx('input', {
                        className:
                          'py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none',
                        type: 'email',
                        placeholder: 'Email',
                        value: n,
                        onChange: (f) => r(f.target.value),
                      }),
                    }),
                    k.jsx('div', {
                      className:
                        'bg-gray-50 mt-3 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200',
                      children: k.jsx('input', {
                        className:
                          'py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none',
                        type: 'password',
                        placeholder: 'Password',
                        value: i,
                        onChange: (f) => o(f.target.value),
                      }),
                    }),
                    (s == null ? void 0 : s.message) &&
                      k.jsx('p', {
                        className: 'text-green-500',
                        children: s.message,
                      }),
                    u &&
                      k.jsx('p', {
                        className: 'text-red-500 mt-2',
                        children: u.data.message,
                      }),
                  ],
                }),
                k.jsxs('div', {
                  className:
                    'md:flex items-center justify-between mt-4 md:mt-6',
                  children: [
                    k.jsxs('p', {
                      className:
                        'text-xs leading-3 text-gray-600 dark:text-gray-300 ',
                      children: [
                        "Don't have an account?",
                        k.jsx('span', {
                          onClick: () => {
                            e(!1), t(!0)
                          },
                          className:
                            'cursor-pointer text-indigo-700 dark:text-indigo-600 underline font-semibold',
                          children: 'Sign Up',
                        }),
                      ],
                    }),
                    k.jsx('button', {
                      disabled: a,
                      type: 'submit',
                      className:
                        'mt-4 md:mt-0 md:ml-10 p-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded focus:outline-none',
                      children: k.jsx('p', {
                        className:
                          'text-sm font-medium leading-none text-gray-100',
                        children: 'Login',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            k.jsx('div', {
              onClick: () => e(!1),
              'aria-hidden': 'true',
              className:
                'cursor-pointer absolute top-0 right-0 m-3 text-gray-800 transition duration-150 ease-in-out',
              children: k.jsxs('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-label': 'Close',
                className: 'icon icon-tabler icon-tabler-x',
                width: 20,
                height: 20,
                viewBox: '0 0 24 24',
                strokeWidth: '2.5',
                stroke: 'white',
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                children: [
                  k.jsx('path', { stroke: 'none', d: 'M0 0h24v24H0z' }),
                  k.jsx('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
                  k.jsx('line', { x1: 6, y1: 6, x2: 18, y2: 18 }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  })
}
const mx = ({ setShowBecomeMemberModal: e }) => {
    const [t, n] = R.useState(''),
      r = zr(),
      [i, { data: o, isLoading: l, error: s }] = fx()
    ;(o == null ? void 0 : o.message) === 'You are now a member!' &&
      (r(Qu({ user: o.user })),
      setTimeout(() => {
        e(!1)
      }, 1e3)),
      R.useEffect(
        () => (
          (document.body.style.overflow = 'hidden'),
          () => {
            document.body.style.overflow = 'auto'
          }
        ),
        []
      )
    function a(u) {
      u.preventDefault(), i({ password: t })
    }
    return k.jsx('div', {
      className:
        'absolute z-50 w-full min-h-screen inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-lg',
      id: 'modal',
      children: k.jsx('div', {
        role: 'alert',
        className:
          'container translate-y-1/2 mx-auto w-11/12 md:w-2/3 max-w-lg',
        children: k.jsxs('form', {
          onSubmit: a,
          className:
            'py-8 px-5 md:px-32 bg-white shadow-md rounded border border-gray-400',
          children: [
            k.jsx('div', {
              className: 'w-full flex justify-center text-gray-600 mb-4',
              children: k.jsxs('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                className: 'icon icon-tabler icon-tabler-lock',
                width: 56,
                height: 56,
                viewBox: '0 0 24 24',
                strokeWidth: 1,
                stroke: 'currentColor',
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                children: [
                  k.jsx('path', { stroke: 'none', d: 'M0 0h24v24H0z' }),
                  k.jsx('rect', { x: 5, y: 11, width: 14, height: 10, rx: 2 }),
                  k.jsx('circle', { cx: 12, cy: 16, r: 1 }),
                  k.jsx('path', { d: 'M8 11v-4a4 4 0 0 1 8 0v4' }),
                ],
              }),
            }),
            k.jsx('h1', {
              className:
                'text-center text-gray-800 font-lg font-bold tracking-normal leading-tight mb-5',
              children: 'Become a Club Member',
            }),
            k.jsx('input', {
              id: 'pass',
              className:
                'mb-5 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border',
              placeholder: 'Enter Password',
              required: !0,
              value: t,
              onChange: (u) => n(u.target.value),
            }),
            s &&
              k.jsx('p', {
                className: 'text-red-500 text-sm',
                children: s.data.message,
              }),
            o &&
              k.jsx('p', {
                className: 'text-green-500 text-sm',
                children: o.message,
              }),
            k.jsxs('div', {
              className: 'flex items-center justify-center w-full',
              children: [
                k.jsx('button', {
                  type: 'submit',
                  className:
                    'focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm',
                  children: 'Submit',
                }),
                k.jsx('button', {
                  className:
                    'focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm',
                  onClick: () => e(!1),
                  disabled: l,
                  children: 'Cancel',
                }),
              ],
            }),
          ],
        }),
      }),
    })
  },
  Ua = './assets/user-BrLtvXik.png'
function gx() {
  const [e, t] = R.useState(!1),
    [n, r] = R.useState(!1),
    i = Dr((v) => v.auth.user),
    o = zr(),
    [l, s] = R.useState(!1),
    [a, u] = R.useState(!1),
    [p, m] = R.useState(!1),
    [f, g] = R.useState(!1)
  return k.jsxs('div', {
    className: 'bg-gray-200',
    children: [
      f && k.jsx(mx, { setShowBecomeMemberModal: g }),
      k.jsxs('div', {
        className: 'relative h-full ',
        children: [
          a && k.jsx(hx, { setShowSignInModal: u, setShowSignUpModal: m }),
          p && k.jsx(px, { setShowSignUpModal: m, setShowSignInModal: u }),
          l && k.jsx(sx, { setShowNewPostModal: s }),
          k.jsx('div', {
            className: 'bg-white',
            children: k.jsx('div', {
              className: '2xl:container 2xl:mx-auto',
              children: k.jsxs('nav', {
                className: !0,
                children: [
                  k.jsxs('div', {
                    className: 'flex flex-row justify-between ',
                    children: [
                      k.jsxs(wl, {
                        to: '/',
                        className:
                          'flex items-center py-5 py-6 pl-4 pr-8 space-x-3 lg:pl-7 sm:pl-6',
                        children: [
                          k.jsx('svg', {
                            className: 'cursor-pointer',
                            width: 34,
                            height: 34,
                            viewBox: '0 0 34 34',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: k.jsx('path', {
                              d: 'M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z',
                              fill: '#1F2937',
                            }),
                          }),
                          k.jsx('h1', {
                            className:
                              'text-2xl font-normal leading-6 text-gray-800 ',
                            children: 'OpinionBoard',
                          }),
                        ],
                      }),
                      k.jsxs('div', {
                        className:
                          'flex-row justify-between flex-auto hidden py-6 border-l border-r border-gray-200 lg:flex px-7',
                        children: [
                          i &&
                            k.jsxs('div', {
                              className: !0,
                              children: [
                                k.jsx('p', {
                                  className:
                                    'text-xs font-normal leading-3 text-gray-600 ',
                                  children: i.fullName,
                                }),
                                k.jsx('h3', {
                                  className:
                                    'mt-2 text-xl font-bold leading-5 text-gray-800 ',
                                  children: 'Welcome Back',
                                }),
                              ],
                            }),
                          i &&
                            k.jsx(Rt, {
                              onClick: () => s(!0),
                              children: 'New Post',
                            }),
                        ],
                      }),
                      !i &&
                        k.jsxs('div', {
                          className: 'flex items-center hidden mx-10 sm:flex',
                          children: [
                            k.jsx(Rt, {
                              onClick: () => m(!0),
                              type: 'secondary',
                              children: 'Sign Up',
                            }),
                            k.jsx(Rt, {
                              onClick: () => u(!0),
                              children: 'Login',
                            }),
                          ],
                        }),
                      i &&
                        k.jsxs('div', {
                          className:
                            'relative flex-row justify-end hidden py-6 pl-8 pr-4 sm:flex lg:pr-7 sm:pr-6',
                          children: [
                            e && k.jsx(mw, { setShowBecomeMemberModal: g }),
                            k.jsxs('div', {
                              className:
                                'flex flex-row items-center justify-center ',
                              children: [
                                k.jsx('img', {
                                  className: 'w-10 h-10 ',
                                  src: Ua,
                                  width: '40px',
                                  alt: 'individual person image-3',
                                }),
                                k.jsxs('div', {
                                  className: 'ml-2',
                                  children: [
                                    k.jsx('p', {
                                      className:
                                        'text-lg font-semibold leading-4 text-gray-800',
                                      children: i.fullName,
                                    }),
                                    k.jsx('p', {
                                      className:
                                        'mt-1 text-xs font-normal leading-3 text-gray-600 ',
                                      children: i.email,
                                    }),
                                  ],
                                }),
                                k.jsx('svg', {
                                  onClick: () => t(l ? !1 : !e),
                                  className: `${
                                    e ? 'rotate-180' : ''
                                  } cursor-pointer transform duration-100 xl:ml-7 lg:ml-3.5 ml-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800`,
                                  width: 14,
                                  height: 8,
                                  viewBox: '0 0 14 8',
                                  fill: 'none',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: k.jsx('path', {
                                    d: 'M1 1L7 7L13 1',
                                    stroke: '#1F2937',
                                    strokeWidth: '1.5',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      k.jsxs('div', {
                        id: 'bgIcon',
                        onClick: () => r(!n),
                        className:
                          'block py-6 pr-4 cursor-pointer focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 sm:hidden lg:pr-7 sm:pr-6',
                        children: [
                          k.jsxs('svg', {
                            className: `${n ? 'hidden' : ''}`,
                            width: 24,
                            height: 24,
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: [
                              k.jsx('path', {
                                className: 'duration-150 transform ',
                                d: 'M4 6H20',
                                stroke: '#1F2937',
                                strokeWidth: '1.5',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                              k.jsx('path', {
                                d: 'M4 12H20',
                                stroke: '#1F2937',
                                strokeWidth: '1.5',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                              k.jsx('path', {
                                className: 'duration-150 transform ',
                                d: 'M4 18H20',
                                stroke: '#1F2937',
                                strokeWidth: '1.5',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                            ],
                          }),
                          k.jsxs('svg', {
                            className: `${n ? '' : 'hidden'} `,
                            width: 24,
                            height: 24,
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: [
                              k.jsx('path', {
                                d: 'M18 6L6 18',
                                stroke: '#1F2937',
                                strokeWidth: '1.5',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                              k.jsx('path', {
                                d: 'M6 6L18 18',
                                stroke: '#1F2937',
                                strokeWidth: '1.5',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  k.jsxs('div', {
                    className:
                      'flex-col hidden px-4 lg:hidden sm:flex lg:px-7 sm:px-6 ',
                    children: [
                      k.jsx('hr', { className: 'w-full bg-gray-200 ' }),
                      k.jsxs('div', {
                        className: !0,
                        children: [
                          i &&
                            k.jsxs('div', {
                              className:
                                'flex flex-row justify-between flex-auto pb-4 mt-3 lg:hidden',
                              children: [
                                k.jsx('p', {
                                  className:
                                    'text-xs font-normal leading-3 text-gray-600 ',
                                  children: i.fullName,
                                }),
                                k.jsx('h3', {
                                  className:
                                    'mt-2 text-xl font-bold leading-5 text-gray-800 ',
                                  children: 'Welcome Back',
                                }),
                              ],
                            }),
                          i &&
                            k.jsx(Rt, {
                              onClick: () => s(!0),
                              children: 'New Post',
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          k.jsx('div', {
            id: 'MobileNavigation',
            className: `${n ? '' : 'hidden'}  sm:hidden h-full bg-white `,
            children: k.jsxs('div', {
              className: 'flex flex-col justify-between h-full ',
              children: [
                k.jsxs('div', {
                  className: 'flex flex-col px-4 lg:px-7 sm:px-6',
                  children: [
                    k.jsx('hr', { className: 'w-full bg-gray-200 ' }),
                    k.jsx('div', {
                      className:
                        'flex flex-row justify-between flex-auto pb-4 mt-3 lg:hidden',
                      children:
                        i &&
                        k.jsxs('div', {
                          className: !0,
                          children: [
                            k.jsx('p', {
                              className:
                                'text-xs font-normal leading-3 text-gray-600 ',
                              children: i.fullName,
                            }),
                            k.jsx('h3', {
                              className:
                                'mt-2 text-xl font-bold leading-5 text-gray-800 ',
                              children: 'Welcome Back',
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
                k.jsxs('div', {
                  className: 'flex flex-col justify-end h-full mt-12 ',
                  children: [
                    !i &&
                      k.jsx(Rt, { onClick: () => u(!0), children: 'Login' }),
                    !i &&
                      k.jsx(Rt, { onClick: () => m(!0), children: 'Sign Up' }),
                    i &&
                      k.jsx(Rt, { onClick: () => s(!0), children: 'New Post' }),
                    i &&
                      !(i != null && i.isMember) &&
                      k.jsx(Rt, {
                        onClick: () => g(!0),
                        children: 'Become a member',
                      }),
                    i &&
                      k.jsx(Rt, {
                        children: k.jsx(wl, {
                          to: '/my-posts',
                          children: 'My Posts ',
                        }),
                      }),
                    i &&
                      k.jsx(Rt, { onClick: () => o(em()), children: 'Logout' }),
                  ],
                }),
                i &&
                  k.jsxs('div', {
                    className:
                      'bottom-0 left-0 flex flex-row items-center w-full px-8 py-6 bg-gray-100 ',
                    children: [
                      k.jsx('img', {
                        className: 'w-10 h-10 ',
                        src: Ua,
                        width: '40px',
                        alt: 'individual person image-3',
                      }),
                      k.jsxs('div', {
                        className: 'ml-2',
                        children: [
                          k.jsx('p', {
                            className:
                              'text-lg font-semibold leading-4 text-gray-800',
                            children: i.fullName,
                          }),
                          k.jsx('p', {
                            className:
                              'mt-1 text-xs font-normal leading-3 text-gray-600 ',
                            children: i.email,
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          }),
        ],
      }),
    ],
  })
}
function yx() {
  return k.jsx('footer', {
    className:
      'bg-white  flex justify-center shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4',
    children: k.jsx('div', {
      className: 'flex justify-center space-x-6',
      children: k.jsxs('a', {
        href: 'https://github.com/BrunoLadiv/',
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'text-gray-500 flex gap-2 hover:text-gray-900',
        children: [
          k.jsx('svg', {
            className: 'h-5 w-5',
            fill: 'currentColor',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            children: k.jsx('path', {
              fillRule: 'evenodd',
              d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              clipRule: 'evenodd',
            }),
          }),
          k.jsx('span', { children: '/brunoladiv' }),
        ],
      }),
    }),
  })
}
function vx() {
  return k.jsxs(k.Fragment, {
    children: [k.jsx(gx, {}), k.jsx(ym, {}), k.jsx(yx, {})],
  })
}
const wx = gv({
  reducer: { [ki.reducerPath]: ki.reducer, auth: Av },
  middleware: (e) => e().concat(ki.middleware),
  devTools: !0,
})
function xx() {
  return k.jsxs('main', {
    className:
      'h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]',
    children: [
      k.jsx('h1', {
        className: 'text-9xl font-extrabold text-white tracking-widest',
        children: '404',
      }),
      k.jsx('div', {
        className: 'bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute',
        children: 'Page Not Found',
      }),
      k.jsx('button', {
        className: 'mt-5',
        children: k.jsxs('a', {
          className:
            'relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring',
          children: [
            k.jsx('span', {
              className:
                'absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0',
            }),
            k.jsx(wl, {
              to: '/',
              className:
                'relative block px-8 py-3 bg-[#1A2238] border border-current',
              children: k.jsx('span', { children: 'Go Home' }),
            }),
          ],
        }),
      }),
    ],
  })
}
function Sx(e) {
  const t = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    n = new Date(e),
    r = n.getDate(),
    i = n.getMonth(),
    o = t[i],
    l = n.getFullYear()
  let s = n.getHours()
  const a = n.getMinutes(),
    u = s >= 12 ? 'pm' : 'am'
  s > 12 && (s -= 12)
  const p = a < 10 ? `0${a}` : a
  return { day: r, month: o, year: l, hours: s, minutes: p, amOrPm: u }
}
function kx({ post: e }) {
  const [t, { isLoading: n }] = lx(),
    { data: r } = dx(e.author),
    i = Dr((f) => f.auth.user),
    { day: o, month: l, year: s, hours: a, minutes: u, amOrPm: p } = Sx(e.date)
  function m() {
    confirm('Are you sure you want to delete this post?') && t(e._id)
  }
  return k.jsxs('div', {
    className:
      'group flex items-center relative   justify-center flex-grow-1 flex-shrink-0 w-full h-full bg-white border border-gray-200 rounded-md shadow-none cursor-pointer hover:shadow-lg',
    children: [
      (e == null ? void 0 : e.author) === (i == null ? void 0 : i.id) &&
        k.jsx('span', {
          onClick: n ? '' : m,
          className:
            'hidden absolute hover:scale-150 top-1 right-4 group-hover:block',
          children: 'x',
        }),
      k.jsxs('div', {
        className:
          'flex flex-col space-y-1.5 items-start flex-1 h-[198px]  lg:px-0 px-4 py-5 max-w-xs md:w-full overflow-hidden',
        children: [
          k.jsxs('div', {
            className: 'flex flex-row mb-2',
            children: [
              k.jsx('div', {
                children: k.jsx('img', {
                  className: 'rounded-full',
                  src: Ua,
                  alt: 'avatar',
                  width: '40px',
                }),
              }),
              k.jsxs('div', {
                className: 'ml-2',
                children: [
                  k.jsx('p', {
                    title:
                      i != null && i.isMember
                        ? ''
                        : 'Join the club the see post details',
                    className: `text-sm font-medium leading-none text-gray-400 ${
                      i != null && i.isMember ? 'text-gray-800' : ''
                    }`,
                    children:
                      (i != null && i.isMember) ||
                      (e == null ? void 0 : e.author) ===
                        (i == null ? void 0 : i.id)
                        ? r == null
                          ? void 0
                          : r.user.fullName
                        : 'Anonymous',
                  }),
                  k.jsxs('div', {
                    className: 'flex justify-start mt-1 space-x-6',
                    children: [
                      k.jsxs('div', {
                        className: 'flex justify-between text-white',
                        children: [
                          k.jsxs('svg', {
                            className: 'mr-1 fill-current',
                            width: 12,
                            height: 12,
                            viewBox: '0 0 12 12',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: [
                              k.jsx('path', {
                                d: 'M9 2.5H3C2.44772 2.5 2 2.94772 2 3.5V9.5C2 10.0523 2.44772 10.5 3 10.5H9C9.55228 10.5 10 10.0523 10 9.5V3.5C10 2.94772 9.55228 2.5 9 2.5Z',
                                stroke: '#4B5563',
                                strokeWidth: '0.75',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                              k.jsx('path', {
                                d: 'M8 1.5V3.5',
                                stroke: '#4B5563',
                                strokeWidth: '0.75',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                              k.jsx('path', {
                                d: 'M4 1.5V3.5',
                                stroke: '#4B5563',
                                strokeWidth: '0.75',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                              k.jsx('path', {
                                d: 'M2 5.5H10',
                                stroke: '#4B5563',
                                strokeWidth: '0.75',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                            ],
                          }),
                          k.jsx('p', {
                            className: 'text-sm leading-none text-gray-600',
                            children:
                              (i != null && i.isMember) ||
                              (e == null ? void 0 : e.author) ===
                                (i == null ? void 0 : i.id)
                                ? `${o} ${l}, ${s}`
                                : '*******',
                          }),
                        ],
                      }),
                      k.jsxs('div', {
                        className: 'flex justify-end text-white',
                        children: [
                          k.jsxs('svg', {
                            className: 'mx-1 fill-current',
                            width: 12,
                            height: 12,
                            viewBox: '0 0 12 12',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: [
                              k.jsx('path', {
                                d: 'M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z',
                                stroke: '#4B5563',
                                strokeWidth: '0.75',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                              k.jsx('path', {
                                d: 'M6 3.5V6L7.5 7.5',
                                stroke: '#4B5563',
                                strokeWidth: '0.75',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                            ],
                          }),
                          k.jsx('p', {
                            className: 'text-sm leading-none text-gray-600',
                            children:
                              (i != null && i.isMember) ||
                              (e == null ? void 0 : e.author) ===
                                (i == null ? void 0 : i.id)
                                ? `${a}:${u} ${p}`
                                : '*******',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          k.jsx('p', {
            className: 'text-lg font-medium leading-none text-gray-800',
            children: e.title,
          }),
          k.jsx('p', {
            className:
              'text-sm break-words leading-tight whitespace-normal  text-gray-500',
            children: e.content,
          }),
        ],
      }),
    ],
  })
}
function Ex({ title: e, titleId: t, ...n }, r) {
  return R.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        'data-slot': 'icon',
        ref: r,
        'aria-labelledby': t,
      },
      n
    ),
    e ? R.createElement('title', { id: t }, e) : null,
    R.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18',
    })
  )
}
const Cx = R.forwardRef(Ex),
  _x = Cx
function jx({ title: e, titleId: t, ...n }, r) {
  return R.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        'data-slot': 'icon',
        ref: r,
        'aria-labelledby': t,
      },
      n
    ),
    e ? R.createElement('title', { id: t }, e) : null,
    R.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3',
    })
  )
}
const Rx = R.forwardRef(jx),
  Nx = Rx
function Px({ active: e, setActive: t, totalPages: n, myPosts: r }) {
  const [, i] = hw({})
  R.useEffect(() => {
    i({ page: e })
  }, [e])
  const o = () => {
      e !== n && t(e + 1)
    },
    l = () => {
      e <= 1 || t(e - 1)
    }
  if (!r)
    return k.jsx('div', {
      className: 'flex justify-center',
      children: k.jsxs('div', {
        className: 'flex items-center gap-8',
        children: [
          k.jsx('div', {
            className: e === 1 ? 'hidden' : '',
            onClick: l,
            children: k.jsx(_x, { strokeWidth: 2, className: 'h-4 w-4' }),
          }),
          k.jsxs('p', {
            color: 'gray',
            className: 'font-normal',
            children: [
              'Page ',
              k.jsx('strong', { className: 'text-gray-900', children: e }),
              ' of',
              ' ',
              k.jsx('strong', { className: 'text-gray-900', children: n }),
            ],
          }),
          k.jsx('div', {
            className: e === n ? 'hidden' : '',
            onClick: o,
            children: k.jsx(Nx, { strokeWidth: 2, className: 'h-4 w-4' }),
          }),
        ],
      }),
    })
}
function Mx() {
  return k.jsx('div', {
    className: 'flex min-h-[725px] justify-center items-center',
    children: k.jsxs('div', {
      role: 'status',
      children: [
        k.jsxs('svg', {
          'aria-hidden': 'true',
          className:
            'inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600',
          viewBox: '0 0 100 101',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            k.jsx('path', {
              d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
              fill: 'currentColor',
            }),
            k.jsx('path', {
              d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
              fill: 'currentFill',
            }),
          ],
        }),
        k.jsx('span', { className: 'sr-only', children: 'Loading...' }),
      ],
    }),
  })
}
function hf({ myPosts: e = !1 }) {
  const [t, n] = R.useState(1),
    r = Dr((u) => u.auth.user),
    {
      data: i,
      isLoading: o,
      isError: l,
      error: s,
    } = ox({ page: t, limit: e ? '' : 9 }),
    a = e
      ? i == null
        ? void 0
        : i.posts.filter((u) => u.author === r.id)
      : i == null
      ? void 0
      : i.posts
  return o
    ? k.jsx(Mx, {})
    : l
    ? k.jsxs('div', { children: ['Error: ', s.message] })
    : k.jsxs(k.Fragment, {
        children: [
          k.jsx('div', {
            className: 'container min-h-[735px] mx-auto',
            children: k.jsx('div', {
              className:
                'flex items-center justify-center py-4 mx-2 lg:py-14 lg:mx-14',
              children: k.jsx('div', {
                className:
                  'grid justify-center lg:min-w-[1140px] md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-x-6 gap-y-4',
                children: a.map((u) => k.jsx(kx, { post: u }, u._id)),
              }),
            }),
          }),
          k.jsx(Px, {
            setActive: n,
            active: t,
            totalPages: i == null ? void 0 : i.totalPages,
            myPosts: e,
          }),
        ],
      })
}
const Lx = () =>
    Dr((t) => t.auth.user)
      ? k.jsx(ym, {})
      : k.jsx(Q1, { to: '/', replace: !0 }),
  Tx = ew([
    {
      path: '/',
      element: k.jsx(vx, {}),
      errorElement: k.jsx(xx, {}),
      children: [
        { path: '/', element: k.jsx(hf, {}) },
        {
          path: '',
          element: k.jsx(Lx, {}),
          children: [
            { path: '/my-posts', element: k.jsx(hf, { myPosts: !0 }) },
          ],
        },
      ],
    },
  ])
Os.createRoot(document.getElementById('root')).render(
  k.jsx(Qa.StrictMode, {
    children: k.jsx(Ty, { store: wx, children: k.jsx(uw, { router: Tx }) }),
  })
)
