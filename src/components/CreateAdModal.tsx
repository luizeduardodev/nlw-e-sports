import { useEffect, useState, FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import Axios from "axios";

import { Check, GameController, Info } from "phosphor-react";
import Input from "./Form/Input";

interface Game {
    id: string;
    title: string;
}

const CreateAdModal = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setuseVoiceChannel] = useState(false);

    useEffect(() => {
        Axios("http://localhost:3000/games").then((res) => {
            setGames(res.data);
        });
    }, []);

    async function handleCreateAd(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        if (!data.name) return;

        try {
            Axios.post(`http://localhost:3000/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hoursStart: data.hoursStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel
            });

            alert("Anúncio criado com sucesso!");
        } catch (err) {
            alert("Erro ao crair o anúncio!");
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed flex items-center justify-center bg-black/60 inset-0">
                <Dialog.Content className="w-[300px] 375px:w-[350px] 640px:w-[500px] fixed py-2 375px:py-3 640px:py-4 px-3 375px:px-4 640px:px-4 bg-[#2A2634] text-white rounded-lg shadow-black/25">
                    <Dialog.Title className="text-lg 640px:text-2xl text-white font-black">
                        Publique um anúncio
                    </Dialog.Title>

                    <form onSubmit={handleCreateAd} className="flex flex-col gap-2 640px:gap-3 mt-4 640px:mt-5" >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="game" className="text-sm 640px:text-base font-semibold">
                                Qual o game?
                            </label>

                            <select
                                name="game"
                                id="game"
                                className="text-xs 640px:text-sm bg-zinc-900 py-3 px-3 rounded placeholder:text-zinc-500 appearance-none"
                                defaultValue=""
                            >
                                <option disabled value="">
                                    Selecione o game que deseja jogar
                                </option>

                                {games.map((game) => (
                                    <option key={game.id} value={game.id}>
                                        {game.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm 640px:text-base">Seu nome (ou nickname)</label>
                            <Input
                                name="name"
                                id="game"
                                placeholder="Como te chamam dentro do game?"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-[12px] 640px:text-base">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="yearsPlaying">
                                    Joga há quantos anos?
                                </label>
                                <Input
                                    name="yearsPlaying"
                                    id="yearsPlaying"
                                    type="number"
                                    placeholder="Horas"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="discord">
                                    Qual o seu Discord?
                                </label>
                                <Input
                                    name="discord"
                                    id="discord"
                                    type="text"
                                    placeholder="Usuario#00"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="flex flex-col gap-2 text-[12px] 640px:text-base">
                                <label htmlFor="wekDays">
                                    Quando costuma jogar?
                                </label>

                                <ToggleGroup.Root
                                    type="multiple"
                                    className="grid grid-cols-4 gap-1"
                                    value={weekDays}
                                    onValueChange={setWeekDays}
                                >
                                    <ToggleGroup.Item
                                        value="0"
                                        className={`w-8 h-8 rounded ${
                                            weekDays.includes("0")
                                                ? "bg-violet-500"
                                                : "bg-zinc-900"
                                        }`}
                                        title="Domingo"
                                    >
                                        D
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="1"
                                        className={`w-8 h-8 rounded ${
                                            weekDays.includes("1")
                                                ? "bg-violet-500"
                                                : "bg-zinc-900"
                                        }`}
                                        title="Segunda"
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="2"
                                        className={`w-8 h-8 rounded ${
                                            weekDays.includes("2")
                                                ? "bg-violet-500"
                                                : "bg-zinc-900"
                                        }`}
                                        title="Terça"
                                    >
                                        T
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="3"
                                        className={`w-8 h-8 rounded ${
                                            weekDays.includes("3")
                                                ? "bg-violet-500"
                                                : "bg-zinc-900"
                                        }`}
                                        title="Quarta"
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="4"
                                        className={`w-8 h-8 rounded ${
                                            weekDays.includes("4")
                                                ? "bg-violet-500"
                                                : "bg-zinc-900"
                                        }`}
                                        title="Quinta"
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="5"
                                        className={`w-8 h-8 rounded ${
                                            weekDays.includes("5")
                                                ? "bg-violet-500"
                                                : "bg-zinc-900"
                                        }`}
                                        title="Sexta"
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="6"
                                        className={`w-8 h-8 rounded ${
                                            weekDays.includes("6")
                                                ? "bg-violet-500"
                                                : "bg-zinc-900"
                                        }`}
                                        title="Sábado"
                                    >
                                        S
                                    </ToggleGroup.Item>
                                </ToggleGroup.Root>
                            </div>

                            <div className="flex flex-col gap-2 flex-1 text-[12px] 640px:text-base">
                                <label htmlFor="hoursStart">
                                    Qual horário do dia?
                                </label>

                                <div className="grid grid-cols-1 640px:grid-cols-2 gap-1">
                                    <Input
                                        name="hoursStart"
                                        id="hoursStart"
                                        type="time"
                                        placeholder="De"
                                    />
                                    <Input
                                        name="hourEnd"
                                        id="hourEnd"
                                        type="time"
                                        placeholder="Até"
                                    />
                                </div>
                            </div>
                        </div>

                        <label className="flex items-center gap-2 mt-2 text-[12px] 640px:text-base">
                            <Checkbox.Root
                                checked={useVoiceChannel} //False;
                                onCheckedChange={(checked) => {
                                    if (checked === true) {
                                        setuseVoiceChannel(true);
                                    } else {
                                        setuseVoiceChannel(false);
                                    }
                                }}
                                className="w-5 640px:w-6 h-5 640px:h-6 p-1 rounded bg-zinc-900"
                            >
                                <Checkbox.Indicator>
                                    <Check className="w-3 640px:w-4 h-3 640px:h-4 text-emerald-400" />
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                            Costumo me conectar ao chat de voz
                        </label>

                        <footer className="flex gap-3 mt-3 text-[15px] 640px:text-base 640px:justify-end">
                            <Dialog.Close
                                type="button"
                                className="px-4 py-3 bg-zinc-500 rounded-md font-semibold hover:bg-zinc-600 transition duration-300"
                            >
                                Cancelar
                            </Dialog.Close>

                            <button
                                type="submit"
                                className="flex gap-1 px-4 py-3 bg-violet-500 rounded-md font-semibold hover:bg-violet-600 transition duration-300"
                            >
                                <GameController size={22} />
                                Encontrar duo
                            </button>
                        </footer>
                    </form>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    );
};

export default CreateAdModal;
function axios(arg0: string) {
    throw new Error("Function not implemented.");
}
