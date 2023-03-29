import {FC} from "react";
import Link from "next/link";

export type CitiesProps = {
    cities: {
        city_id: string
        city_name: string
    }[]
}
export const Cities: FC<CitiesProps> = ({cities}) => {
    return (
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
    )
}