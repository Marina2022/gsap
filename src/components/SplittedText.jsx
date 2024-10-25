import {useEffect, useRef, useState} from "react";

// eslint-disable-next-line react/prop-types
const SplittedText = ({text, setRef, lineClass, wrapperClass}) => {
  const containerRef = useRef();
  const [lines, setLines] = useState([]);

  useEffect(() => {

    window.addEventListener('resize', () => window.location.reload())

    const container = containerRef.current;
    const newLines = [];

    // Очищаем содержимое контейнера для дальнейшего использования
    container.innerHTML = '';

    // Создаем временный span для измерения ширины
    const tempSpan = document.createElement('span');
    tempSpan.style.display = 'inline-block'; // Убедитесь, что элемент отображается как inline-block
    tempSpan.classList.add(wrapperClass)
    document.body.appendChild(tempSpan); // Временно добавляем к body для измерения

    // Разделяем текст на слова
    // eslint-disable-next-line react/prop-types
    const words = text.split(' ');
    let currentLine = '';

    // Проходим по словам и собираем их в строки
    words.forEach(word => {
      const testLine = currentLine + (currentLine ? ' ' : '') + word;
      tempSpan.innerText = testLine;

      // Если текущая строка превышает ширину контейнера, добавляем её в массив и начинаем новую


      if (tempSpan.getBoundingClientRect().width >= container.clientWidth) {
        newLines.push(currentLine);
        currentLine = word; // Начинаем новую строку с текущего слова
      } else {
        currentLine = testLine;
      }
    });

    // Добавляем последнюю строку, если она не пустая
    if (currentLine) {
      newLines.push(currentLine);
    }

    // Удаляем временный элемент из body
    document.body.removeChild(tempSpan);

    // Обновляем состояние с новыми строками
    setLines(newLines);
  }, [text]);

  return (
    <div ref={containerRef} className={wrapperClass}>
      {lines.map((line, index) => (
        <div
          className={lineClass}
          ref={setRef}
          key={index}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default SplittedText;
