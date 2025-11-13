import { Search } from "@/components/SearchBar";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 ">
            <h1 className="text-4xl font-bold text-center ">
                Explore any city in real time
            </h1>
            <p className="text-center text-muted-foreground mt-2">
                Weather • Currency • Events • Flights
            </p>
            <Search />
        </div>
    );
}
