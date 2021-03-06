import "../styles/globals.css";
import "../styles/components/Header.css";
import "../styles/components/PokeballLoader.css";
import "../styles/pages/Home.css";
import "../styles/pages/Pokemon.css";
import "../styles/pages/pokemon/pokemonDetail.css";
import { SWRConfig } from "swr";
import axiosInstance from "../helpers/axios";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{ fetcher: (url) => axiosInstance(url).then((r) => r.data) }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
