import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function ProductLookup() {

    const [Products, setProducts] = useState([]);


    const getDepartment = async () => {
        const { data } = await axios.get(`/api/mfsolars/v1/products?category=solar-accessories`);
        if (data) {
            setProducts(data?.products);
        }
    }
    useEffect(() => {
        getDepartment();
    }, []);


    return (
        <section className="bg-slate-200 p-4 md:p-8 ">
            <div className="container mx-auto p-4 md:p-8 lg:p-12 ">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                        <img
                            src={Products?.[0]?.productImages?.[0]?.url}    
                            alt=""
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                        <h4 className="text-5xl font-bold mb-2">{Products[0]?.name}</h4>
                        <p className="text-gray-600 mb-4">{Products[0]?.description}</p>
                        <Link
                            to={"/products/product/" + Products[0]?._id}
                            className="bg-[#25a2e5] hover:bg-[#28a1e2e8] hover:text-white text-white font-bold py-2 px-4 rounded flex w-fit items-center gap-2"
                        >
                            Go Shopping <MdOutlineKeyboardArrowRight className="text-xl" />
                        </Link>
                    </div>
                </div>
                <div className="flex overflow-x-scroll py-4 no-scrollbar">
                    {Products?.slice(1)?.map((item, index) => (
                        <div key={index} className="w-48 scale-90 text-wrap md:w-80 p-4 mr-4 bg-slate-100 rounded-lg">
                            <img
                                src={item?.productImages?.[0]?.url}
                                alt=""
                                className="w-full aspect-video m-auto object-cover rounded-lg"
                            />
                            <span className="text-gray-800 font-bold mt-4">R {item?.price}</span>
                                <h3 className="text-sm font-semibold text-slate-700 mb-2">{item?.name}</h3>
                            <div className="flex mb-2 text-amber-500">
                                {
                                    Array.from({ length: Math.ceil(item?.ratings) }).map((_, i) => (
                                        <FaStar key={i} className="text-lg" />
                                    ))
                                }
                            </div>
                            <h3 className="text-sm font-normal text-slate-700 mb-2 text-ellipsis overflow-hidden overflow-y-scroll no-scrollbar ">{item?.description?.length > 30 ? `${item.description.slice(0, 30)}...` : item.description}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductLookup;