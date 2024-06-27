import { useEffect, useState } from "react";
import Catty from "../layout/Cat";
import Layout from "./Layout";
import { getCats } from "../fetchData/getCats";

function Home() {
  const [cats, setCats] = useState("");

  async function getData() {
    const data = await getCats();
    setCats(() => data);
  }

  useEffect(function () {
    getData();
  }, []);

  return (
    <Layout>
      <div className="container">
        {cats === "" ? (
          <p className="loading">isLoading....</p>
        ) : (
          cats.map((cat) => (
            <Catty
              id={cat.id}
              url={cat.url}
              width={cat.width}
              height={cat.height}
              key={cat.id}
            />
          ))
        )}
      </div>
    </Layout>
  );
}

export default Home;
