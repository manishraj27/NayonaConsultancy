import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  // Add a subtle offset based on the mouse position
  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Iridescence({
  color = [1, 1, 1],
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = true,
  ...rest
}) {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Initialize WebGL
    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    // Create program and mesh
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: { value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height) },
        uMouse: { value: new Float32Array([mousePos.current.x, mousePos.current.y]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    // Resize handler
    const resize = () => {
      const scale = 1;
      renderer.setSize(container.offsetWidth * scale, container.offsetHeight * scale);
      program.uniforms.uResolution.value = new Color(
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height,
      );
    };

    // Debounced resize
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 100);
    });
    resize();

    // Animation loop
    let animationFrameId;
    const startTime = performance.now(); // Use performance.now() for higher precision

    const update = () => {
      animationFrameId = requestAnimationFrame(update);

      // Calculate elapsed time
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;

      // Update uniforms
      program.uniforms.uTime.value = elapsedTime * 0.001; // Convert to seconds
      program.uniforms.uMouse.value[0] = mousePos.current.x;
      program.uniforms.uMouse.value[1] = mousePos.current.y;

      // Render the scene
      renderer.render({ scene: mesh });
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(update);
    container.appendChild(gl.canvas);

    // Mouse move handler
    let lastMouseUpdate = 0;
    const throttleDelay = 16; // ~60 FPS

    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastMouseUpdate < throttleDelay) return;
      lastMouseUpdate = now;

      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mousePos.current = { x, y };
    };

    if (mouseReact) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup
    return () => {
      // Cancel the animation frame
      cancelAnimationFrame(animationFrameId);
    
      // Remove the resize event listener
      window.removeEventListener("resize", resize);
    
      // Remove the mousemove event listener if enabled
      if (mouseReact) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    
      // Remove the canvas from the DOM
      container.removeChild(gl.canvas);
    
      // Clean up WebGL resources
      if (program) {
        gl.deleteProgram(program.program); // Delete the WebGL program
      }
      if (geometry) {
        gl.deleteBuffer(geometry.attributes.position.buffer); // Delete the position buffer
        gl.deleteBuffer(geometry.attributes.uv.buffer); // Delete the UV buffer
      }
      if (mesh) {
        // No explicit cleanup needed for Mesh in OGL
      }
    
      // Optionally lose the WebGL context
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color, speed, amplitude, mouseReact]);

  return <div ref={containerRef} className="w-full h-full" {...rest} />;
}