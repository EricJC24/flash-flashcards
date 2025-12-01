import { Upload, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImageUploaderProps {
  images: (string | null)[];
  onImageUpload: (index: number, imageUrl: string) => void;
}

export function ImageUploader({ images, onImageUpload }: ImageUploaderProps) {
  const handleFileUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onImageUpload(index, result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index: number) => {
    onImageUpload(index, '');
  };

  return (
    <div>
      <h2 className="text-gray-900 mb-4">Upload Images</h2>
      
      <div className="space-y-3">
        {images.map((image, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700">Image {index + 1}</span>
              {image && (
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {image ? (
              <div className="relative aspect-video w-full rounded overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={image}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center aspect-video w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors bg-gray-50">
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500">Click to upload</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(index, e)}
                  className="hidden"
                />
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
