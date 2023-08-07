export const dataTest = {
  data: [
    {
      id: 1,
      name: "Gregg Brakus",
      title: "Gregg Brakus",
      url: "aaaaaaaa",
      likeCount: 10,
      reactVideo: null,
      createdAt: 1681016264415,
    },
    {
      id: 2,
      name: "Belarus",
      title: "Gregg Brakus",
      url: "aaaaaaaa",
      likeCount: 10,
      reactVideo: false,
      createdAt: 1681016264415,
    },
    {
      id: 3,
      name: "American Russia",
      title: "Gregg Brakus",
      url: "aaaaaaaa",
      likeCount: 10,
      reactVideo: true,
      createdAt: 1681016264415,
    },
    {
      id: 4,
      name: "Billaird 18",
      title: "Gregg Brakus",
      url: "aaaaaaaa",
      likeCount: 10,
      reactVideo: true,
      createdAt: 1681016264415,
    },
  ],
  pagination: {
    _page: 1,
    _limit: 10,
    _totalRows: 10,
  },
};

// export const updateDataTest = (idVideo: number, reactVideo: boolean | null) => {
//   // Tìm vị trí của phần tử có id trùng với idVideo trong mảng dataTest.data
//   const index = dataTest.data.findIndex((item) => item.id === idVideo);

//   // Nếu không tìm thấy phần tử có id trùng với idVideo, không làm gì cả
//   if (index === -1) {
//     return dataTest;
//   }
//   // Tạo mảng mới với reactVideo đã được cập nhật cho phần tử tìm thấy
//   const updatedData = [
//     ...dataTest.data.slice(0, index),
//     { ...dataTest.data[index], reactVideo: reactVideo },
//     ...dataTest.data.slice(index + 1),
//   ];

//   // Trả về đối tượng mới với mảng data đã cập nhật
//   return {
//     ...dataTest,
//     data: updatedData,
//   };
// };
