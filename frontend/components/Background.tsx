//pre povezivanja apija, koristeci niz
const cities = [
    { name: "PARIS", className: "top-10 left-4 text-5xl" },
    { name: "NEW YORK", className: "top-24 right-10 text-4xl" },
    { name: "TOKYO", className: "top-1/2 left-10 text-6xl" },
    { name: "LONDON", className: "top-1/3 right-1/4 text-5xl" },
    { name: "ROME", className: "bottom-10 left-1/3 text-4xl" },
    { name: "GAZA", className: "bottom-20 right-8 text-3xl" },
    { name: "SEOUL", className: "top-3/4 left-6 text-3xl" },
    { name: "SYDNEY", className: "bottom-8 right-1/4 text-5xl" },
];

export function CityBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden text-muted-foreground/10 select-none">
            {cities.map((city) => (
                <span
                    key={city.name}
                    className={`absolute font-bold tracking-[0.2em] uppercase ${city.className}`}
                >
                    {city.name}
                </span>
            ))}
        </div>
    );
}
