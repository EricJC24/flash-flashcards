import { Plus, Trash2 } from 'lucide-react';
import { TextOverlay } from '../App';

interface TextOverlayPanelProps {
  textOverlays: TextOverlay[];
  selectedTextId: string | null;
  onAddText: () => void;
  onUpdateText: (id: string, updates: Partial<TextOverlay>) => void;
  onDeleteText: (id: string) => void;
  onSelectText: (id: string) => void;
}

const fontFamilies = [
  'Arial',
  'Helvetica',
  'Times New Roman',
  'Georgia',
  'Courier New',
  'Verdana',
  'Impact',
  'Comic Sans MS'
];

const colorPresets = [
  '#ffffff',
  '#000000',
  '#ef4444',
  '#f97316',
  '#f59e0b',
  '#84cc16',
  '#10b981',
  '#06b6d4',
  '#3b82f6',
  '#8b5cf6',
  '#ec4899',
  '#f43f5e'
];

export function TextOverlayPanel({
  textOverlays,
  selectedTextId,
  onAddText,
  onUpdateText,
  onDeleteText,
  onSelectText
}: TextOverlayPanelProps) {
  const selectedText = textOverlays.find(t => t.id === selectedTextId);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-900">Text Overlays</h2>
        <button
          onClick={onAddText}
          className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Add Text
        </button>
      </div>

      {textOverlays.length === 0 ? (
        <div className="text-center py-8 text-gray-500 text-sm">
          No text overlays yet. Click "Add Text" to get started.
        </div>
      ) : (
        <div className="space-y-4">
          {/* Text List */}
          <div className="space-y-2">
            {textOverlays.map((text) => (
              <div
                key={text.id}
                onClick={() => onSelectText(text.id)}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedTextId === text.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 truncate flex-1">
                    {text.text}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteText(text.id);
                    }}
                    className="text-gray-400 hover:text-red-600 ml-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Text Editor */}
          {selectedText && (
            <div className="border-t pt-4 space-y-4">
              <h3 className="text-gray-900">Edit Text</h3>

              {/* Text Content */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Text Content
                </label>
                <input
                  type="text"
                  value={selectedText.text}
                  onChange={(e) => onUpdateText(selectedText.id, { text: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Font Size */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Font Size: {selectedText.fontSize}px
                </label>
                <input
                  type="range"
                  min="12"
                  max="120"
                  value={selectedText.fontSize}
                  onChange={(e) => onUpdateText(selectedText.id, { fontSize: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>

              {/* Font Family */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Font Family
                </label>
                <select
                  value={selectedText.fontFamily}
                  onChange={(e) => onUpdateText(selectedText.id, { fontFamily: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {fontFamilies.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Text Color
                </label>
                <div className="grid grid-cols-6 gap-2 mb-2">
                  {colorPresets.map((color) => (
                    <button
                      key={color}
                      onClick={() => onUpdateText(selectedText.id, { color })}
                      className={`w-full aspect-square rounded-lg border-2 transition-all ${
                        selectedText.color === color
                          ? 'border-blue-500 scale-110'
                          : 'border-gray-300 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <input
                  type="color"
                  value={selectedText.color}
                  onChange={(e) => onUpdateText(selectedText.id, { color: e.target.value })}
                  className="w-full h-10 rounded-lg border border-gray-300 cursor-pointer"
                />
              </div>

              {/* Position */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    X Position
                  </label>
                  <input
                    type="number"
                    value={Math.round(selectedText.x)}
                    onChange={(e) => onUpdateText(selectedText.id, { x: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Y Position
                  </label>
                  <input
                    type="number"
                    value={Math.round(selectedText.y)}
                    onChange={(e) => onUpdateText(selectedText.id, { y: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
