export const filmCategories = [
  {
    id: 1,
    title: "Romantic",
    films: [
      {
        id: "rom1",
        title: "La La Land",
        image: "/images/lalaland.jpg",
        episodes: [
          { id: "ep1", title: "Tập 1: Khởi đầu", videoUrl: "/videos/nhuy/tap1.mp4" },
          { id: "ep2", title: "Tập 2: Cuộc gặp gỡ", videoUrl: "/videos/lalaland-ep2.mp4" }
        ]
      },
      {
        id: "rom2",
        title: "The Notebook",
        image: "/images/notebook.jpg",
        episodes: [
          { id: "ep1", title: "Tập 1: Ký ức", videoUrl: "/videos/notebook-ep1.mp4" },
          { id: "ep2", title: "Tập 2: Lời hứa", videoUrl: "/videos/notebook-ep2.mp4" }
        ]
      }
    ]
  }
];
