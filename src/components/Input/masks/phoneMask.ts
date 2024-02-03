import { ChangeEvent } from 'react';

const phoneMask = (e: ChangeEvent<HTMLInputElement>, keyPressed: string) => {
  let readyField = '';
  let input: string = e.target.value;
  const emptyMask = '+7 (   )    -  -  '; // для расчета позиции
  const startMask = '+7 (   )    -  -  '; // при первом вводе
  const regularMask = '+7 ($2) $3-$4-$5'; // последующие нажатия
  // +{countryCode} ({cityCode}) {part1}-{part2}-{part3}
  const poses = {
    currentPos: Number(e.target.selectionStart),
    countryCode: emptyMask.indexOf('+') + 1,
    cityCodeStart: emptyMask.indexOf('(') + 1,
    cityCodeFinish: emptyMask.indexOf(')'),
    part1Start: emptyMask.indexOf(')') + 2,
    part1Finish: emptyMask.indexOf('-'),
    part2Start: emptyMask.indexOf('-') + 1,
    part2Finish: emptyMask.lastIndexOf('-'),
    part3Start: emptyMask.lastIndexOf('-') + 1,
  };

  if (input.length > emptyMask.length) {
    input = input.slice(0, emptyMask.length);
  }

  const digits = input.replace(/[^0-9]/g, '');
  const setCursor = (pos: number) => {
    e.target.selectionStart = pos;
    e.target.selectionEnd = pos;
  };
  // ready
  const regexp = /(\d)(\d{1,3})(\d{1,3})?(\d{1,2})?(\d{1,2})?/;
  readyField = digits.replace(regexp, regularMask);
  e.target.value = readyField;

  if (digits.length === 1) {
    readyField = digits.replace(/(\d)/, startMask);
    e.target.value = readyField;
    setCursor(poses.cityCodeStart);
  } else if (/^\d$/g.test(keyPressed)) {
    if (poses.currentPos === poses.cityCodeFinish) {
      setCursor(poses.part1Start);
    } else if (poses.currentPos === poses.part1Finish) {
      setCursor(poses.part2Start);
    } else if (poses.currentPos === poses.part2Finish + 1) {
      setCursor(poses.part3Start + 1);
    } else {
      setCursor(poses.currentPos);
    }
  } else if (keyPressed === 'Backspace') {
    if (poses.currentPos === poses.part3Start) {
      setCursor(poses.part2Finish);
    } else if (poses.currentPos === poses.part2Start) {
      setCursor(poses.part1Finish);
    } else if (poses.currentPos === poses.part1Start) {
      setCursor(poses.cityCodeFinish);
    } else if (poses.currentPos === poses.cityCodeStart) {
      setCursor(2);
    }
  } else {
    setCursor(poses.currentPos);
  }
};

export default phoneMask;
