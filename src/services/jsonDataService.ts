const jsonData = { message: 'Ceci est un exemple de données JSON' };

const getJsonData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jsonData);
    }, 1000);
  });
};

const jsonDataService = {
  getJsonData,
};

export default jsonDataService;