import { useRef, useState } from 'react';
import { Template, TextOverlay } from '../App';
import { Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CollageCanvasProps {
  template: Template;
  images: (string | null)[];
  textOverlays: TextOverlay[];
  selectedTextId: string | null;
  onTextSelect: (id: string | null) => void;
  onTextUpdate: (id: string, updates: Partial<TextOverlay>) => void;
}

export function CollageCanvas({
  template,
  images,
  textOverlays,
  selectedTextId,
  onTextSelect,
  onTextUpdate
}: CollageCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [editingTextId, setEditingTextId] = useState<string | null>(null);
  const [draggedTextId, setDraggedTextId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const getLayoutClasses = () => {
    switch (template.layout) {
      case 'grid-2':
        return 'grid grid-cols-2 gap-4';
      case 'grid-3':
        return 'grid grid-cols-3 gap-4';
      case 'grid-4':
        return 'grid grid-cols-2 gap-4';
      case 'grid-6':
        return 'grid grid-cols-3 gap-4';
      case 'horizontal-2':
        return 'flex gap-4';
      case 'vertical-2':
        return 'flex flex-col gap-4';
      case 'featured-left':
        return 'grid grid-cols-2 gap-4 grid-rows-2';
      case 'featured-right':
        return 'grid grid-cols-2 gap-4 grid-rows-2';
      default:
        return 'grid grid-cols-2 gap-4';
    }
  };

  const getSlotClasses = (index: number) => {
    if (template.layout === 'featured-left' && index === 0) {
      return 'row-span-2';
    }
    if (template.layout === 'featured-right' && index === 1) {
      return 'row-span-2';
    }
    return '';
  };

  const handleTextMouseDown = (e: React.MouseEvent, textId: string) => {
    e.preventDefault();
    const text = textOverlays.find(t => t.id === textId);
    if (!text) return;

    setDraggedTextId(textId);
    onTextSelect(textId);
    
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left - text.x,
        y: e.clientY - rect.top - text.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedTextId || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragOffset.x;
    const y = e.clientY - rect.top - dragOffset.y;

    onTextUpdate(draggedTextId, {
      x: Math.max(0, Math.min(x, rect.width - 100)),
      y: Math.max(0, Math.min(y, rect.height - 50))
    });
  };

  const handleMouseUp = () => {
    setDraggedTextId(null);
  };

  const handleTextDoubleClick = (textId: string) => {
    setEditingTextId(textId);
  };

  const handleTextChange = (textId: string, newText: string) => {
    onTextUpdate(textId, { text: newText });
  };

  const handleTextBlur = () => {
    setEditingTextId(null);
  };

  const handleDownload = () => {
    // Note: This is a simplified download - in a real app you'd use html2canvas or similar
    alert('Download functionality would be implemented with html2canvas library');
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center h-full bg-gray-100">
      <div className="mb-4">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Collage
        </button>
      </div>

      <div
        ref={canvasRef}
        className="relative bg-white shadow-lg rounded-lg overflow-hidden"
        style={{ width: '800px', height: '800px' }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={(e) => {
          if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('image-slot')) {
            onTextSelect(null);
          }
        }}
      >
        <div className={`w-full h-full p-6 ${getLayoutClasses()}`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`image-slot relative bg-gray-200 rounded-lg overflow-hidden ${getSlotClasses(index)}`}
            >
              {image ? (
                <ImageWithFallback
                  src={image}
                  alt={`Collage image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-sm">Image {index + 1}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Text Overlays */}
        {textOverlays.map((textOverlay) => (
          <div
            key={textOverlay.id}
            style={{
              position: 'absolute',
              left: `${textOverlay.x}px`,
              top: `${textOverlay.y}px`,
              fontSize: `${textOverlay.fontSize}px`,
              color: textOverlay.color,
              fontFamily: textOverlay.fontFamily,
              cursor: draggedTextId === textOverlay.id ? 'grabbing' : 'grab',
              userSelect: 'none',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              border: selectedTextId === textOverlay.id ? '2px dashed rgba(59, 130, 246, 0.5)' : 'none',
              padding: '4px 8px',
              minWidth: editingTextId === textOverlay.id ? '200px' : 'auto'
            }}
            onMouseDown={(e) => handleTextMouseDown(e, textOverlay.id)}
            onDoubleClick={() => handleTextDoubleClick(textOverlay.id)}
          >
            {editingTextId === textOverlay.id ? (
              <input
                type="text"
                value={textOverlay.text}
                onChange={(e) => handleTextChange(textOverlay.id, e.target.value)}
                onBlur={handleTextBlur}
                autoFocus
                className="bg-transparent border-none outline-none w-full"
                style={{
                  fontSize: `${textOverlay.fontSize}px`,
                  color: textOverlay.color,
                  fontFamily: textOverlay.fontFamily
                }}
              />
            ) : (
              textOverlay.text
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
