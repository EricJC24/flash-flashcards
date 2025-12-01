import { Template } from '../App';

const templates: Template[] = [
  { id: 'grid-2', name: '2 Images Grid', slots: 2, layout: 'grid-2' },
  { id: 'grid-3', name: '3 Images Grid', slots: 3, layout: 'grid-3' },
  { id: 'grid-4', name: '4 Images Grid', slots: 4, layout: 'grid-4' },
  { id: 'grid-6', name: '6 Images Grid', slots: 6, layout: 'grid-6' },
  { id: 'horizontal-2', name: '2 Horizontal', slots: 2, layout: 'horizontal-2' },
  { id: 'vertical-2', name: '2 Vertical', slots: 2, layout: 'vertical-2' },
  { id: 'featured-left', name: 'Featured Left', slots: 3, layout: 'featured-left' },
  { id: 'featured-right', name: 'Featured Right', slots: 3, layout: 'featured-right' },
];

interface TemplateSelectorProps {
  selectedTemplate: Template;
  onTemplateChange: (template: Template) => void;
}

export function TemplateSelector({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) {
  return (
    <div>
      <h2 className="text-gray-900 mb-4">Choose Template</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateChange(template)}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate.id === template.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="mb-2">
              <TemplatePreview layout={template.layout} />
            </div>
            <p className="text-xs text-gray-700">{template.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function TemplatePreview({ layout }: { layout: string }) {
  const getLayoutClasses = () => {
    switch (layout) {
      case 'grid-2':
        return 'grid grid-cols-2 gap-1';
      case 'grid-3':
        return 'grid grid-cols-3 gap-1';
      case 'grid-4':
        return 'grid grid-cols-2 gap-1';
      case 'grid-6':
        return 'grid grid-cols-3 gap-1';
      case 'horizontal-2':
        return 'flex gap-1';
      case 'vertical-2':
        return 'flex flex-col gap-1';
      case 'featured-left':
        return 'grid grid-cols-2 gap-1';
      case 'featured-right':
        return 'grid grid-cols-2 gap-1';
      default:
        return 'grid grid-cols-2 gap-1';
    }
  };

  const renderSlots = () => {
    switch (layout) {
      case 'grid-2':
        return [<div key={1} className="bg-gray-300 aspect-square" />, <div key={2} className="bg-gray-300 aspect-square" />];
      case 'grid-3':
        return Array(3).fill(0).map((_, i) => <div key={i} className="bg-gray-300 aspect-square" />);
      case 'grid-4':
        return Array(4).fill(0).map((_, i) => <div key={i} className="bg-gray-300 aspect-square" />);
      case 'grid-6':
        return Array(6).fill(0).map((_, i) => <div key={i} className="bg-gray-300 aspect-square" />);
      case 'horizontal-2':
        return [<div key={1} className="bg-gray-300 h-12 flex-1" />, <div key={2} className="bg-gray-300 h-12 flex-1" />];
      case 'vertical-2':
        return [<div key={1} className="bg-gray-300 h-8 w-full" />, <div key={2} className="bg-gray-300 h-8 w-full" />];
      case 'featured-left':
        return [
          <div key={1} className="bg-gray-300 row-span-2 aspect-square" />,
          <div key={2} className="bg-gray-300 aspect-square" />,
          <div key={3} className="bg-gray-300 aspect-square" />
        ];
      case 'featured-right':
        return [
          <div key={1} className="bg-gray-300 aspect-square" />,
          <div key={2} className="bg-gray-300 row-span-2 aspect-square" />,
          <div key={3} className="bg-gray-300 aspect-square" />
        ];
      default:
        return [];
    }
  };

  return (
    <div className={getLayoutClasses()}>
      {renderSlots()}
    </div>
  );
}
