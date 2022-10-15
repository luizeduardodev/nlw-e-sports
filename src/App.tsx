//Componentes / Propriedades;
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import Axios from "axios";

import GameBanner from "./components/GameBanner";
import CreateBannerAds from "./components/CreateAdBanner";
import CreateAdModal from "./components/CreateAdModal";

import logo from "./assets/logo-nlw-esports.svg";

import "./styles/main.css";

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    };
}

const App = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        Axios("http://localhost:3000/games").then((res) => {
            setGames(res.data);
        });
    }, []);

    return (
        <div className="w-11/12 max-w-[1200px] m-auto flex flex-col items-center my-7">
            <img src={logo} alt="Logo Nlw E-Sports" className="w-48 375px:w-52 425px:w-56 640px:w-60" />

            <h1 className="text-2xl 425px:text-3xl 1024px:text-5xl my-7 text-white font-black">
                Seu{" "}
                <span className="text-transparent bg-nlw-gradient bg-clip-text">
                    duo{" "}
                </span>
                está aqui.
            </h1>

            <div className="grid grid-cols-1 425px:grid-cols-2 640px:grid-cols-3 1024px:grid-cols-5 1280px:grid-cols-6 gap-5 425px:gap-3 640px:gap-4">
                {games.length > 0 &&
                    games.map((game) => (
                        <GameBanner
                            key={game.id}
                            bannerUrl={game.bannerUrl}
                            title={game.title}
                            adsCount={game._count.ads}
                        />
                    ))}
            </div>

            <Dialog.Root>
                <CreateBannerAds />
                <CreateAdModal />
            </Dialog.Root>
        </div>
    );
};

export default App;
