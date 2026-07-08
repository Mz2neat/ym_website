//lib/distance.ts

import {supabase} from "@/lib/supabase/public";

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2:number)
{
    const R = 6371; //Radius of Earth in KMS
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    return distance;
}

export async function getCoordinates(postalCode: string)
{

    const cleanCode = postalCode.replace(/\s+/g, '').toUpperCase().substring(0, 3);

    const url = `https://api.zippopotam.us/CA/${cleanCode}`;

    try
    {

        const response = await fetch(url);

        if(!response.ok) {
            return null;
        }

        const data = await response.json();

        if (data && data.places && data.places.length > 0)
        {
            return {latitude: parseFloat(data.places[0].latitude), longitude: parseFloat(data.places[0].longitude)};
        }
        else
        {
            return null;
        }

    }

    catch
    {

        return null;

    }

}

export async function findNearestNeighbourNet (postalCode: string)
{

    const userCoordinates = await getCoordinates(postalCode)

    if (userCoordinates == null)
    {

        console.log("Invalid Postal Code");
        return null;

    }


    const { data: neighbournets, error } = await supabase.from('neighbournets').select('*')

      if (error)
        {
        console.error("Error Fetching NeighbourNets:", error);
        return "Failed to load NeighbourNets.";
        }

    const neighbourNetsWithDistance = neighbournets.map((neighbourNet) =>{

        const distanceKms = calculateDistance(userCoordinates.latitude, userCoordinates.longitude, neighbourNet.latitude, neighbourNet.longitude)

        return {...neighbourNet, distanceKms}

    })

    neighbourNetsWithDistance.sort((a, b) => a.distanceKms - b.distanceKms);

    return neighbourNetsWithDistance[0];

}