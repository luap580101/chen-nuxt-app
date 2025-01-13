export const getProductById = async (id) => {
  try {
    const response = {
      fakeData: {
        id: id,
        name: `商品 ${id}`,
        description: `這是商品 ${id} 的描述，這是一個非常好的商品。`,
        price: 29.99,
        image: "https://fakeimg.pl/400x300/",
        quantity: 1,
      },
    };
    return response.fakeData;
  } catch (error) {
    console.error(`無法獲取商品 ID ${id} 資料:`, error);
    throw error;
  }
};
