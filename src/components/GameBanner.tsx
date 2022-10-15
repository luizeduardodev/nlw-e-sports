interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

const GameBanner = (props: GameBannerProps) => {
    return (
        <a href="" className="w-44 h-60 relative rounded-lg overflow-hidden">
            <img src={props.bannerUrl} alt="Imagem do game" className="h-full" />

            <div className="w-full pl-2 pt-14 pb-3 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">
                    {props.title}
                </strong>
                <span className="text-zinc-300 text-sm block">
                    {props.adsCount} anúncio(s)
                </span>
            </div>
        </a>
    );
};

export default GameBanner;
