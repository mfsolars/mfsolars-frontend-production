import styles from "./TopSearchBar.module.css"
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import mf_logo from "../../../assets/mf_logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoMdCall } from "react-icons/io";




function TopSearchBar() {
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        localStorage.setItem("keyword", fieldinput);
        SetFieldinput("");
        navigate("/products/search");

    }
    const [fieldinput, SetFieldinput] = useState("");
    return (<>
        <div className={styles['top-bar']}>
            <div className={`${styles.logo} sm:w-auto w-[50vw] m-auto object-cover`}>
                <img src={mf_logo} className="h-[2rem]" alt="Logo" />
            </div>
            <form
                role="search"
                method="get"
                onSubmit={handleSearch}
                className={styles['search-form']}
            >
                <input
                    type="text"
                    className="s"
                    placeholder="Search for products"
                    value={fieldinput}
                    onChange={(e) => SetFieldinput(e.target.value)}
                    name="s"
                    aria-label="Search"
                    title="Search for products"
                    required=""
                />
                <button type="submit" className="searchsubmit">
                    <IoSearch style={{ fontSize: '1.1rem' }} />
                </button>
            </form>
            <div className={styles['info-block']}>
                <div className={styles['info-item']}>
                    <IoMdCall style={{ fontSize: '1.1rem' }} />
                    <span className="flex flex-row items-center">Contact: <span className="flex flex-col"><span>+27661721041</span><span>+27607567282</span></span></span>
                </div>
                <div className={styles['info-item']}>
                    <MdOutlineLocalShipping style={{ fontSize: '1.1rem' }} />
                    <span>Free Shipping over R1000</span>
                </div>
            </div>
        </div>

    </>);
}

export default TopSearchBar;