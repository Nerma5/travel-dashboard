"use client";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";

export function Search() {
    const [query, setQuery] = useState("");
    const [cities, setCities] = useState<any[]>([]);
    async function fetchCities(query: string) {
        const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeURIComponent(
            query
        )}`;
        const res = await fetch(url, {
            headers: {
                "X-RapidAPI-Key": process.env
                    .NEXT_PUBLIC_GEODB_API_KEY as string,
                "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
        });
        const data = await res.json();
        console.log(data);
        // setCities(data.data);
        if (Array.isArray(data.data)) {
            setCities(data.data);
        } else {
            setCities([]);
        }
        console.log(data.data);
    }

    // useEffect(() => {
    //     fetchCities();
    // }, []);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);
        if (value.length < 2) {
            setCities([]);
            return;
        }
        fetchCities(value);
        console.log(value);
    }
    return (
        <div className="p-3">
            <InputGroup>
                <InputGroupInput
                    placeholder="Search..."
                    value={query}
                    onChange={handleChange}
                />
                <InputGroupAddon>
                    <SearchIcon />
                </InputGroupAddon>
            </InputGroup>
            {cities.map((city) => (
                <li key={city.id}>
                    {city.name}, {city.country}
                </li>
            ))}
        </div>
    );
}
