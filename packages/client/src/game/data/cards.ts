import type { CardData } from 'game/types/cards';
import {
  ARREST,
  CardLevel,
  INFRASTRUCTURE,
  NONE,
  PRISON,
  RAILWAY,
  RANDOM,
  RESOURCES,
  STREET,
  STREET_1,
  STREET_2,
  STREET_3,
  STREET_4,
  STREET_5,
  STREET_6,
  STREET_7,
  STREET_8,
  TAX,
  ZERO,
} from 'game/types/cards';
import start from 'assets/game/mapCard/start.svg';
import greyArrow from 'assets/game/mapCard/greyArrow.svg';
import redArrow from 'assets/game/mapCard/redArrow.svg';
import treasury from 'assets/game/mapCard/treasury.svg';
import money from 'assets/game/mapCard/money.svg';
import railway from 'assets/game/mapCard/railway.svg';
import dice from 'assets/game/mapCard/dice.svg';
import prison from 'assets/game/mapCard/prison.svg';
import yellowArrow from 'assets/game/mapCard/yellowArrow.svg';
import powerLines from 'assets/game/mapCard/powerLines.svg';
import waterPipes from 'assets/game/mapCard/waterPipes.svg';
import greenArrow from 'assets/game/mapCard/greenArrow.svg';
import parking from 'assets/game/mapCard/parking.svg';
import arrest from 'assets/game/mapCard/arrest.svg';
import { PlayerColor } from 'types/enums/main';

export const cardsData: CardData[] = [
  {
    title: ' ',
    imgSrc: start,
    type: ZERO,
    family: NONE,
  },
  {
    title: 'Житная',
    imgSrc: greyArrow,
    price: 60,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_1,
  },
  {
    title: 'Казна',
    imgSrc: treasury,
    type: RANDOM,
    family: NONE,
  },
  {
    title: 'Нагатинская',
    imgSrc: greyArrow,
    price: 60,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_1,
  },
  {
    title: 'Налог',
    imgSrc: money,
    price: 200,
    type: TAX,
    family: NONE,
  },
  {
    title: 'Рижская ж/д',
    imgSrc: railway,
    price: 200,
    type: INFRASTRUCTURE,
    property: null,
    family: RAILWAY,
  },
  {
    title: 'Варшавка',
    imgSrc: redArrow,
    price: 100,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_2,
  },
  {
    title: 'Шанc',
    imgSrc: dice,
    type: RANDOM,
    family: NONE,
  },
  {
    title: 'Огарева',
    imgSrc: redArrow,
    price: 100,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_2,
  },
  {
    title: 'Парковая',
    imgSrc: redArrow,
    price: 120,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },

    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_2,
  },
  {
    title: '',
    imgSrc: prison,
    type: PRISON,
    family: NONE,
  },
  {
    title: 'Полянка',
    imgSrc: yellowArrow,
    price: 140,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: {
      ownerId: 2,
      color: PlayerColor.BLUE,
      level: CardLevel.LEVEL_5,
    },
    family: STREET_3,
  },
  {
    title: 'Электростанция',
    imgSrc: powerLines,
    price: 150,
    type: INFRASTRUCTURE,
    property: {
      ownerId: 2,
      color: PlayerColor.BLUE,
      level: CardLevel.LEVEL_0,
    },
    family: RESOURCES,
  },
  {
    title: 'Сретенка',
    imgSrc: yellowArrow,
    price: 140,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: {
      ownerId: 0,
      color: PlayerColor.RED,
      level: CardLevel.LEVEL_0,
    },
    family: STREET_3,
  },
  {
    title: 'Ростовская',
    imgSrc: yellowArrow,
    price: 160,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_3,
  },
  {
    title: 'Курская ж/д',
    imgSrc: railway,
    price: 200,
    type: INFRASTRUCTURE,
    property: null,
    family: RAILWAY,
  },
  {
    title: 'Рязанский пр-т',
    imgSrc: greenArrow,
    price: 180,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_4,
  },
  {
    title: 'Казна',
    imgSrc: treasury,
    type: RANDOM,
    family: NONE,
  },
  {
    title: 'Вавилова',
    imgSrc: greenArrow,
    price: 180,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_4,
  },
  {
    title: 'Рублевское ш.',
    imgSrc: greenArrow,
    price: 200,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_4,
  },
  {
    title: '',
    imgSrc: parking,
    type: ZERO,
    family: NONE,
  },
  {
    title: 'Тверская',
    imgSrc: greenArrow,
    price: 220,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: {
      ownerId: 0,
      color: PlayerColor.RED,
      level: CardLevel.LEVEL_4,
    },
    family: STREET_5,
  },
  {
    title: 'Шанс',
    imgSrc: dice,
    type: RANDOM,
    family: NONE,
  },
  {
    title: 'Пушкинская',
    imgSrc: greenArrow,
    price: 220,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_5,
  },
  {
    title: 'Маяковская',
    imgSrc: greenArrow,
    price: 240,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_5,
  },
  {
    title: 'Казанская ж/д',
    imgSrc: railway,
    price: 200,
    type: INFRASTRUCTURE,
    property: null,
    family: RAILWAY,
  },
  {
    title: 'Грузинский Вал',
    imgSrc: yellowArrow,
    price: 260,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_6,
  },
  {
    title: 'чайковского 260',
    imgSrc: yellowArrow,
    price: 260,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_6,
  },
  {
    title: 'Водопровод',
    imgSrc: waterPipes,
    price: 150,
    type: INFRASTRUCTURE,
    property: null,
    family: RESOURCES,
  },
  {
    title: 'Смоленская пл.',
    imgSrc: yellowArrow,
    price: 280,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_6,
  },
  {
    title: '',
    imgSrc: arrest,
    type: ARREST,
    family: NONE,
  },
  {
    title: 'Щусева',
    imgSrc: yellowArrow,
    price: 300,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_7,
  },
  {
    title: 'Гоголевский б-р',
    imgSrc: yellowArrow,
    price: 300,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_7,
  },
  {
    title: 'Казна',
    imgSrc: treasury,
    type: RANDOM,
    family: NONE,
  },
  {
    title: 'Кутузовка',
    imgSrc: yellowArrow,
    price: 320,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_7,
  },
  {
    title: 'Ленинградская ж/д',
    imgSrc: railway,
    price: 200,
    type: INFRASTRUCTURE,
    property: null,
    family: RAILWAY,
  },
  {
    title: 'Шанс',
    imgSrc: dice,
    type: RANDOM,
    family: NONE,
  },
  {
    title: 'Малая Бронная',
    imgSrc: yellowArrow,
    price: 350,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_8,
  },
  {
    title: 'Уплатите сверхналог',
    imgSrc: money,
    price: 100,
    type: TAX,
    family: NONE,
  },
  {
    title: 'Арбат',
    imgSrc: redArrow,
    price: 400,
    upgradeCost: {
      home: 777,
      hotel: 123,
    },
    collateralCost: 8888,
    rent: {
      level_0: 0,
      level_1: 111,
      level_2: 222,
      level_3: 333,
      level_4: 444,
      level_5: 555,
    },
    type: STREET,
    property: null,
    family: STREET_8,
  },
];

export const randomCards = [
  {
    desc: 'Банк платит вам дивиденды в размере ',
    credit: 50,
  },
  {
    desc: 'Наступил срок исполнения платежа по вашей ссуде на строительство ',
    credit: 150,
  },
  {
    desc: 'Штраф за превышение скорости ',
    debt: 150,
  },
];
