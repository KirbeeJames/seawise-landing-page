/* =============================================
   Smoke Background — WebGL2 Fragment Shader
   Vanilla JS port of spooky-smoke-animation.tsx
   Supports multiple canvases with different colors
   ============================================= */

(function () {
  var HERO_COLOR = '#2dd4bf'; // SeaWise teal for hero

  var fragmentShaderSource = '#version 300 es\n' +
    'precision highp float;\n' +
    'out vec4 O;\n' +
    'uniform float time;\n' +
    'uniform vec2 resolution;\n' +
    'uniform vec3 u_color;\n' +
    '#define FC gl_FragCoord.xy\n' +
    '#define R resolution\n' +
    '#define T (time+660.)\n' +
    'float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}\n' +
    'float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}\n' +
    'float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}\n' +
    'void main(){\n' +
    '  vec2 uv=(FC-.5*R)/R.y;\n' +
    '  vec3 col=vec3(1);\n' +
    '  uv.x+=.25;\n' +
    '  uv*=vec2(2,1);\n' +
    '  float n=fbm(uv*.28-vec2(T*.01,0));\n' +
    '  n=noise(uv*3.+n*2.);\n' +
    '  col.r-=fbm(uv+vec2(0,T*.015)+n);\n' +
    '  col.g-=fbm(uv*1.003+vec2(0,T*.015)+n+.003);\n' +
    '  col.b-=fbm(uv*1.006+vec2(0,T*.015)+n+.006);\n' +
    '  col=mix(col, u_color, dot(col,vec3(.21,.71,.07)));\n' +
    '  col=mix(vec3(.04,.10,.19),col,min(time*.1,1.));\n' +
    '  col=clamp(col,.04,1.);\n' +
    '  O=vec4(col,1);\n' +
    '}';

  var vertexShaderSource = '#version 300 es\n' +
    'precision highp float;\n' +
    'in vec4 position;\n' +
    'void main(){gl_Position=position;}';

  function hexToRgb(hex) {
    var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return r ? [parseInt(r[1], 16) / 255, parseInt(r[2], 16) / 255, parseInt(r[3], 16) / 255] : [0.5, 0.5, 0.5];
  }

  function createRenderer(canvas, color) {
    var gl = canvas.getContext('webgl2');
    if (!gl) { canvas.style.display = 'none'; return null; }

    function compile(type, source) {
      var s = gl.createShader(type);
      gl.shaderSource(s, source);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(s));
      }
      return s;
    }

    var vs = compile(gl.VERTEX_SHADER, vertexShaderSource);
    var fs = compile(gl.FRAGMENT_SHADER, fragmentShaderSource);
    var program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return null;
    }

    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    var pos = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    var uResolution = gl.getUniformLocation(program, 'resolution');
    var uTime = gl.getUniformLocation(program, 'time');
    var uColor = gl.getUniformLocation(program, 'u_color');
    var rgb = hexToRgb(color);

    return {
      resize: function () {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      },
      render: function (now) {
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.uniform2f(uResolution, canvas.width, canvas.height);
        gl.uniform1f(uTime, now * 0.001);
        gl.uniform3fv(uColor, rgb);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
    };
  }

  function initAllSmoke() {
    var renderers = [];

    // Hero canvas
    var heroCanvas = document.getElementById('smoke-canvas');
    if (heroCanvas) {
      var hr = createRenderer(heroCanvas, HERO_COLOR);
      if (hr) renderers.push(hr);
    }

    // Section canvases (with data-color attribute)
    var sectionCanvases = document.querySelectorAll('.smoke-bg');
    for (var i = 0; i < sectionCanvases.length; i++) {
      var c = sectionCanvases[i];
      var color = c.getAttribute('data-color') || HERO_COLOR;
      var sr = createRenderer(c, color);
      if (sr) renderers.push(sr);
    }

    if (renderers.length === 0) return;

    // Resize all
    function resizeAll() {
      for (var i = 0; i < renderers.length; i++) renderers[i].resize();
    }
    resizeAll();
    window.addEventListener('resize', resizeAll);

    // Single animation loop for all renderers
    function loop(now) {
      for (var i = 0; i < renderers.length; i++) renderers[i].render(now);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllSmoke);
  } else {
    initAllSmoke();
  }
})();
