const getMixedData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'Ceci est un exemple de données mixtes' });
      }, 1000);
    });
  };
  
  const mixedService = {
    getMixedData,
  };
  
  export default mixedService;