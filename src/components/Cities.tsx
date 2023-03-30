import React, {FC, useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Weather} from "@/lib/cities";
import {Forecast} from ".prisma/client";

export type CitiesProps = {
    cities: {
        city_id: string
        city_name: string
        weather: Weather
        forecast: Forecast
    }[]
}
export const Cities: FC<CitiesProps> = ({cities}) => {
    const [loading, setLoading] = useState(false)

    const refresh = async () => {
        setLoading(true);
        alert("Refreshing forecasts for all cities");
        await refreshForecasts();
        setLoading(false);
    }

    return (
        <>
            <ul>
                {cities.map(city => (
                    <li key={city.city_id}>
                        <Link href={`/city/${city.city_id}`} passHref={true}>
                            <div className={"card"}>
                                <div className={"card-header"}>
                                    {city.city_name}
                                </div>
                                <div className={"card-body"}>
                                    {city.weather.description}
                                    <Image alt={city.weather.main}
                                           src={`https://openweathermap.org/img/wn/${city.weather.icon}.png`}
                                           width={30} height={30}/>
                                    {city.forecast.temp}°C
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}

                <style jsx>{`
                  ul {
                    display: flex;
                    flex-wrap: wrap;
                    list-style: none;
                    padding: 0;
                  }

                  li + li {
                    margin-left: 10px;
                  }

                  .card-body {
                    display: flex;
                    align-items: center;
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