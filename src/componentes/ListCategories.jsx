import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { buscar } from "../api/api";
import "../assets/css/blog.css"

const ListCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        buscar(`/categorias`, setCategories)
    }, [])

    return (
        <ul className="category-list container flex">
            {
                categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/categoria/${category.id}`} title={category.nombre}>
                            <span className={`category-list__category category-list__category--${category.id}`}>
                                {category.nombre}
                            </span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default ListCategories;