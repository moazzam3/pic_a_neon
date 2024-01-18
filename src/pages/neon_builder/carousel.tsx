import { useEffect, useState } from 'react';
import IconButton from 'src/components/IconButton';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

interface CarouselProps {
  images: string[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

function Carousel(props: CarouselProps) {
  const { images, current, setCurrent } = props;
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentImagesIndex, setCurrentImagesIndex] = useState<number>(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setCurrent((current - 1 + images.length) % images.length);
    } else if (e.key === 'ArrowRight') {
      setCurrent((current + 1) % images.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [current, images, setCurrent]);

  useEffect(() => {
    setCurrentImages(images.slice(0, 3));
    setCurrentImagesIndex(0);
  }, [images, setCurrent]);

  const handleClickNext = () => {
    if (currentImagesIndex + 3 <= images.length) {
      setCurrentImages(images.slice(currentImagesIndex + 1, currentImagesIndex + 4));
      setCurrentImagesIndex((prev) => prev + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentImagesIndex > 0) {
      setCurrentImages(images.slice(currentImagesIndex - 1, currentImagesIndex + 2));
      setCurrentImagesIndex((prev) => prev - 1);
    }
  };

  return (
    <div className='flex'>
      <div className='self-center'>
        <IconButton className='text-white' onClick={handleClickPrev}>
          <IconArrowLeft />
        </IconButton>
      </div>
      <div className='flex gap-1'>
        {currentImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(currentImagesIndex + index)}
            className={`h-16 w-16 rounded overflow-hidden border relative after:absolute after:content-[""] after:inset-0 after:bg-white/40 hover:after:bg-transparent ${
              current === currentImagesIndex + index ? 'border-primary-500' : ''
            }`}
          >
            <img src={images[currentImagesIndex + index]} alt='' className='h-full w-full object-cover' />
          </button>
        ))}
      </div>
      <div className='self-center'>
        <IconButton className='text-white' onClick={handleClickNext}>
          <IconArrowRight />
        </IconButton>
      </div>
    </div>
  );
}

export default Carousel;
