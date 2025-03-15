const delay = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
    await delay(1000);
  return <>Prostore</>;
};

export default Homepage;