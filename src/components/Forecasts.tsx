import {FC} from "react";
import Link from "next/link";
import {Forecast} from ".prisma/client";

export type ForecastsProps = {
    forecasts: Forecast[]
}
export const Forecasts: FC<ForecastsProps> = ({forecasts}) => {
    return (
        <ul>
            {forecasts.map(forecast => (
                <li key={forecast.id}>
                    <div className={"card"}>
                        <div className={"card-header"}>
                            {forecast.dt.toDateString()} - {forecast.dt.getHours()}:{forecast.dt.getMinutes() > 10 ? forecast.dt.getMinutes() : "0" + forecast.dt.getMinutes()}
                        </div>
                        <div className={"forecast-details"}>
                            <span>Temp: {forecast.temp}</span>
                            <span>Humidity: {forecast.humidity}</span>
                        </div>
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

              .forecast-details {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
              }

              .forecast-details span {
                font-size: 0.8rem;
                padding: 2px 0;
              }
            `}</style>
        </ul>
    )
}