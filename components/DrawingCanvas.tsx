import React, { useRef, useEffect, useState } from 'react';
import { COLORS } from '../constants';

interface DrawingCanvasProps {
  char: string;
  onClear?: () => void;
}

export const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ char, onClear }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      // Re-draw background if needed, or clear
      // For now we just clear on resize to keep it simple
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    // Clear canvas when character changes
    clearCanvas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [char]);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    setHasDrawn(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.beginPath(); // Reset path
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing && e.type !== 'mousedown' && e.type !== 'touchstart') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#181811'; // Use dark color for drawing in both modes usually, or adapt to theme
    
    // Check dark mode
    if (document.documentElement.classList.contains('dark')) {
      ctx.strokeStyle = '#ffffff'; 
    }

    if (!isDrawing) {
       ctx.beginPath();
       ctx.moveTo(x, y);
    } else {
       ctx.lineTo(x, y);
       ctx.stroke();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    if (onClear) onClear();
  };

  // Expose clear method via a button outside or passed ref, 
  // but for this UI we probably just need the internal logic.
  // Actually the UI has a "Reset" button. We can listen to a prop or use imperative handle.
  // To keep it simple, let's just use the `char` prop change to reset, and if the parent wants to reset manually
  // it can pass a key prop or similar. 
  // However, the Reset button is *inside* this component's area in the design? 
  // No, the reset button is in the header of the practice area.
  // We will pass a `ref` from parent or simply handle the reset button click in parent to force re-render.
  
  // Actually, let's just put the Reset button inside this component for simplicity 
  // or use the key-prop trick in the parent.

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <div className="w-full h-1/2 border-b border-gray-200 dark:border-gray-600"></div>
          <div className="h-full w-1/2 border-r border-gray-200 dark:border-gray-600 absolute top-0 left-0"></div>
      </div>
      
      {/* Background Character Template */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <span className="font-japanese text-[180px] text-text-main dark:text-white leading-none pb-8">{char}</span>
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none cursor-crosshair z-20"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={stopDrawing}
        onTouchMove={draw}
      />
      
      {/* Reset Button overlay */}
       <div className="absolute top-0 right-0 z-30 p-4">
         <button 
           onClick={clearCanvas}
           className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors flex items-center gap-1 bg-white/50 dark:bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full"
         >
             <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>refresh</span>
             Reset
         </button>
       </div>

       {hasDrawn && (
        <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 active:scale-95 transition-all z-30 animate-in fade-in zoom-in duration-300">
           <span className="material-symbols-outlined text-green-600 dark:text-green-400 block" style={{ fontSize: '24px' }}>check</span>
        </div>
       )}
    </div>
  );
};