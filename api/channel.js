export const getChannelById = async (id) => {
  try {
    const response = {
      fakeData: {
        id: id,
        name: `使用者 ${id}`,
        description: `這是使用者 ${id} 的描述，「熱愛程式開發，專注於前端與後端技術，喜歡探索新技術並解決挑戰。」`,
        age: 29,
        image: "https://fakeimg.pl/400x300/",
      },
    };
    return response.fakeData;
  } catch (error) {
    console.error(`無法獲取商品 ID ${id} 資料:`, error);
    throw error;
  }
};
