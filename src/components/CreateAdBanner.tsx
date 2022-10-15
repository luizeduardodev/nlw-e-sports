import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

const CreateBannerAds = () => {
    return (
        <div className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
            <div className="flex flex-col 768px:flex-row 768px:justify-between gap-4 px-3 768px:px-4 py-5 1024px:py-7 bg-[#2A2634]">
                <div>
                    <strong className="text-lg 640px:text-xl text-white font-black block">
                        Não encontrou seu duo?
                    </strong>
                    <span className="text-sm 640px:text-base text-zinc-400 block">
                        Publique um anúncio para encontrar novos players!
                    </span>
                </div>

                <Dialog.Trigger className="w-40 640px:w-44 flex items-center justify-center gap-1 py-3 text-sm bg-violet-500 text-white rounded hover:bg-violet-900 transition duration-300">
                    <MagnifyingGlassPlus size={22} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    );
};

export default CreateBannerAds;
