// src/data.js

export const stories = [
  {
    id: 's-001',
    title: '[Tom Riddle] Ác mộng',
    date: '2025-11-13',
    image: 'https://i.pinimg.com/736x/61/b3/f1/61b3f11ffdcf0e4d95e3975b31bea668.jpg',
    description: 'Một chuỗi ký ức lặng lẽ về những ngày không định nghĩa được.',
    chapters: [
      { id: 'c-001', title: 'Chương 1: Mùa thu đầu tiên',
        content: 'Hello'
        },
      { id: 'c-002', title: 'Chương 2: Những chiếc lá rơi' },
      { id: 'c-003', title: 'Chương 3: Giấc mơ cũ' },
    ],
  },
  {
    id: 's-002',
    title: 'Thành phố không ngủ',
    date: '2025-09-15',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
    description: 'Những đêm dài và ánh đèn không bao giờ tắt.',
    chapters: [
      { id: 'c-004', title: 'Chương 1: Đêm đầu tiên' },
      { id: 'c-005', title: 'Chương 2: Tiếng còi xe' },
    ],
  },
];
