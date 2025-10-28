import React, { useEffect, useRef, useState } from 'react';

function getLinkInfo(link: HTMLElement | null) {
  if (!link) return null;
  const rect = link.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b;
}

const SQUARE_SIZE = 40;
const SQUARE_RADIUS = 12;
const DOT_SIZE = 8;
const CORNER_LENGTH = 14;
const CORNER_THICKNESS = 2;
const CORNER_COLOR = '#fff';

const TargetCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [linkBounds, setLinkBounds] = useState<null | ReturnType<typeof getLinkInfo>>(null);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  // Animated cursor state
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const size = useRef({ width: SQUARE_SIZE, height: SQUARE_SIZE });
  const [renderState, setRenderState] = useState({
    x: pos.current.x,
    y: pos.current.y,
    width: size.current.width,
    height: size.current.height,
    borderRadius: SQUARE_RADIUS + 'px',
  });

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);

  // Track mouse position
  useEffect(() => {
    function move(e: MouseEvent) {
      setMouse({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Hover detection
  useEffect(() => {
    function onMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target && target.closest('a')) {
        const link = target.closest('a')!;
        setLinkBounds(getLinkInfo(link));
        setIsHoveringLink(true);
      }
    }
    function onMouseOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target && target.closest('a')) {
        setIsHoveringLink(false);
        setLinkBounds(null);
      }
    }
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    return () => {
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  // Magnetic animation loop
  useEffect(() => {
    let running = true;
    function animate() {
      // Target: hovered <a> or mouse
      let target;
      let targetWidth = SQUARE_SIZE,
          targetHeight = SQUARE_SIZE,
          borderRadius = SQUARE_RADIUS + 'px';
      if (isHoveringLink && linkBounds) {
        target = { x: linkBounds.x, y: linkBounds.y };
        targetWidth = linkBounds.width + 12;
        targetHeight = linkBounds.height + 12;
        // borderRadius = '16px'; // If you want it more rounded in hover mode, uncomment.
      } else {
        target = mouse;
        targetWidth = SQUARE_SIZE;
        targetHeight = SQUARE_SIZE;
        borderRadius = SQUARE_RADIUS + 'px';
      }
      // Animate position and size
      pos.current.x = lerp(pos.current.x, target.x, 0.18);
      pos.current.y = lerp(pos.current.y, target.y, 0.18);
      size.current.width = lerp(size.current.width, targetWidth, 0.18);
      size.current.height = lerp(size.current.height, targetHeight, 0.18);

      setRenderState(prev => {
        return {
          x: pos.current.x,
          y: pos.current.y,
          width: size.current.width,
          height: size.current.height,
          borderRadius,
        };
      });
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, [mouse, isHoveringLink, linkBounds]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: renderState.width,
        height: renderState.height,
        borderRadius: renderState.borderRadius,
        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(calc(${renderState.x}px - 50%), calc(${renderState.y}px - 50%)`,
        transition: 'border-radius 0.18s',
        mixBlendMode: 'exclusion',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Top Left Corner */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: CORNER_LENGTH,
        height: CORNER_LENGTH,
        pointerEvents: 'none',
        opacity: 1,
      }}>
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: CORNER_LENGTH,
          height: CORNER_THICKNESS,
          background: CORNER_COLOR,
          borderRadius: CORNER_THICKNESS,
        }} />
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: CORNER_THICKNESS,
          height: CORNER_LENGTH,
          background: CORNER_COLOR,
          borderRadius: CORNER_THICKNESS,
        }} />
      </div>
      {/* Top Right Corner */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: CORNER_LENGTH,
        height: CORNER_LENGTH,
        pointerEvents: 'none',
        opacity: 1,
      }}>
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: CORNER_LENGTH,
          height: CORNER_THICKNESS,
          background: CORNER_COLOR,
          borderRadius: CORNER_THICKNESS,
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: CORNER_THICKNESS,
          height: CORNER_LENGTH,
          background: CORNER_COLOR,
          borderRadius: CORNER_THICKNESS,
        }} />
      </div>
      {/* Bottom Left Corner */}
      <div style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: CORNER_LENGTH,
        height: CORNER_LENGTH,
        pointerEvents: 'none',
        opacity: 1,
      }}>
        <div style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: CORNER_LENGTH,
          height: CORNER_THICKNESS,
          background: CORNER_COLOR,
          borderRadius: CORNER_THICKNESS,
        }} />
        <div style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: CORNER_THICKNESS,
          height: CORNER_LENGTH,
          background: CORNER_COLOR,
          borderRadius: CORNER_THICKNESS,
        }} />
      </div>
      {/* Bottom Right Corner */}
      <div style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: CORNER_LENGTH,
        height: CORNER_LENGTH,
        pointerEvents: 'none',
        opacity: 1,
      }}>
        <div style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: CORNER_LENGTH,
          height: CORNER_THICKNESS,
          background: CORNER_COLOR,
          borderRadius: CORNER_THICKNESS,
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: CORNER_THICKNESS,
          height: CORNER_LENGTH,
          background: CORNER_COLOR,
          borderRadius: CORNER_THICKNESS,
        }} />
      </div>
      {/* Center dot shown only if not hovering a link */}
      {!isHoveringLink && (
        <div
          style={{
            width: DOT_SIZE,
            height: DOT_SIZE,
            borderRadius: '50%',
            background: '#f04',
            opacity: 1,
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
};

export default TargetCursor;
