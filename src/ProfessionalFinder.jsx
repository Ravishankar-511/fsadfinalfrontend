import React, { useState, useMemo, useEffect } from 'react';
import { getAllProfessionals, availableCities } from './data.js';
import PopularCategories from './components/PopularCategories.jsx';
import { Link } from 'react-router-dom';
import StarRating from './components/StarRating.jsx';
import useDebounce from './hooks/useDebounce.js';
import { BASE_API_URL } from './api/axiosConfig';

const ProfessionalFinder = () => {

    const [allProfessionals, setAllProfessionals] = useState(getAllProfessionals());

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProfession, setSelectedProfession] = useState('');
    const [sortByRating, setSortByRating] = useState(false);

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    // ✅ FIXED API CALL
    useEffect(() => {
        const fetchProfessionals = async () => {
            try {
                const res = await fetch(`${BASE_API_URL}/api/categories`);

                if (res.ok) {
                    const data = await res.json();
                    console.log("API Data:", data);
                    setAllProfessionals(data);
                }
            } catch (err) {
                console.error("API failed, using local data", err);
                setAllProfessionals(getAllProfessionals());
            }
        };
        fetchProfessionals();
    }, []);

    return (
        <main>
            <h1>Professional Finder</h1>

            {allProfessionals.map((p, index) => (
                <div key={index}>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                </div>
            ))}
        </main>
    );
};

export default ProfessionalFinder;