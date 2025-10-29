import React from 'react';
import { SlideData, SlideContentItem } from '../types';
import CodeBlock from './CodeBlock';

interface SlideProps {
  data: SlideData;
  slideNumber: number;
  totalSlides: number;
}

const Slide: React.FC<SlideProps> = ({ data, slideNumber, totalSlides }) => {
  const renderContentItem = (item: SlideContentItem, index: number) => {
    if (typeof item === 'string') {
      return (
        <p
          key={index}
          className="text-gray-300 text-lg md:text-xl mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      );
    }
    if (item.type === 'code') {
      return <CodeBlock key={index} data={item} />;
    }
    if (item.type === 'list') {
      const ListTag = item.ordered ? 'ol' : 'ul';
      const listItemClasses = item.ordered
        ? 'list-decimal list-inside'
        : 'list-disc list-inside';

      return (
        <ListTag
          key={index}
          className={`${listItemClasses} text-gray-300 text-lg md:text-xl mb-4 space-y-2 pl-4`}
        >
          {item.items.map((listItem, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: listItem }} />
          ))}
        </ListTag>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 w-full mx-auto flex flex-col h-full">
      <div className="flex-grow">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6 pb-4 border-b-2 border-cyan-500/30">
          {data.title}
        </h2>
        <div className="space-y-4">{data.content.map(renderContentItem)}</div>
      </div>
      <div className="text-right text-gray-500 mt-8 text-sm">
        <span>
          Diapositiva {slideNumber} de {totalSlides}
        </span>
      </div>
    </div>
  );
};

export default Slide;
