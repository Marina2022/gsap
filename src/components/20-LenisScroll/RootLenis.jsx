import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import LenisScroll from "@/components/20-LenisScroll/LenisScroll.jsx";

const RootLenis = () => {

  useEffect(() => {
    const lenis = new Lenis({
      // Опции настройки, например, скорость прокрутки
      smooth: true,
      duration: 1.2, // Укажите желаемую длительность анимации
    });

    function raf(time) {
      lenis.raf(time); // Обновляем анимацию на каждом кадре
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Убираем эффекты при размонтировании
    };
  }, []);
  
  return (
    <div>
      <LenisScroll />
    </div>
  );
};

export default RootLenis;