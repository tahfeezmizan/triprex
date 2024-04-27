import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import ItemCard from "./ItemCard";
import { BASE_URL } from "../../constant";

const MyListedItem = () => {
    const { user } = UseAuth();
    const [loadedData, setLoadedData] = useState([])
    const [item, setItem] = useState(loadedData);
    console.log(loadedData)

    useEffect(() => {
        fetch(`${BASE_URL}/mylist/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoadedData(data)
            })
    }, [])

    return (
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    item?.map(card => <ItemCard
                        card={card}
                        key={card._id}
                        item={item}
                        setItem={setItem}
                    ></ItemCard>)
                }
            </div>
        </div>
    );
};

export default MyListedItem;