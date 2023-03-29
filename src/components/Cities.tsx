import React, {FC, useState} from "react";
import Link from "next/link";

export type CitiesProps = {
    cities: {
        city_id: string
        city_name: string
    }[]
}
export const Cities: FC<CitiesProps> = ({cities}) => {
    const [loading, setLoading] = useState(false)

    const refresh = async () => {
        setLoading(true);
        await refreshForecasts();
        setLoading(false);
    }

    return (
        <>
            <ul>
                {cities.map(city => (
                    <li key={city.city_id}>
                        <div className={"card"}>
                            <Link href={`/city/${city.city_id}`}>
                                {city.city_name}
                            </Link>
                        </div>
                    </li>
                ))}

                <style jsx>{`
                  ul {
                    display: flex;
                    flex-wrap: wrap;
                    list-style: none;
                    padding: 0;
                  }

                  li {
                    margin: 5px;
                  }
                `}</style>
            </ul>

            {!loading ? <button onClick={refresh}>Refresh Forecasts (WORKS AS CRON WITH
                    VERCEL)</button> :
                <span>Loading...</span>}
        </>
    )
}


const refreshForecasts = async () => {
    const request = await fetch(`/api/forecast-cron`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
    });

    if (request.status !== 200) {
        alert("Error refreshing forecasts");
    }

    return request.json();
}