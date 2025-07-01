import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
    const [isOpen, setIsOpen] = useState({
        section1: true,
        section2: true,
        section3: true,
        section4: true,
        section5: true
    });

    const toggleSection = (section) => {
        setIsOpen(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <div className="px-10">
            <aside className='w-72'>
                <nav>
                    <ul className='border'>
                        <li
                            className="text-xl p-2 flex justify-between items-center cursor-pointer leading-10"
                            onClick={() => toggleSection('section3')}
                        >
                            <div className="flex items-center">
                                <div className="w-7 h-7">
                                    <img className='block w-full h-auto' src={require("../assets/aside/aside_demographic_img.png")} alt="users-img" />
                                </div>
                                <p className='ml-2'>Demographic Table</p>
                            </div>
                            <p className='text-4xl'>
                                {isOpen.section3 ? '-' : '+'}
                            </p>
                        </li>
                        <div
                            className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${isOpen.section3 ? 'max-h-[500px]' : 'max-h-0'}`}
                        >
                            <li className='p-4 hover:bg-gray-200 text-slate-700 text-lg'>
                                <Link to="/gpt"> GPT 대답</Link>
                            </li>
                        </div>
                        <div
                            className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${isOpen.section3 ? 'max-h-[500px]' : 'max-h-0'}`}
                        >
                            <li className='p-4 hover:bg-gray-200 text-slate-700 text-lg'>
                                <Link to="/city"> 시/도명 조회</Link>
                            </li>
                        </div>
                    </ul>
                </nav>

            </aside>
        </div>
    );
};

export default Aside;
