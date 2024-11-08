"use client";
import { useRef, useState, useEffect} from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";


interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}
const ScrollItems: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
    }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedItem, setSelectedItem] = useState<string>("Music");

    useEffect(() => {
        setCategory("Music");
    }, [setCategory]);

      // Function to scroll left
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

      // Function to scroll right
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    // Add click handler function
    const handleItemClick = (category: string) => {
        setSelectedItem(category);
        setCategory(category); // Update parent component if needed
    };

    return (
        <div className="relative w-full flex items-center">
            <button
                onClick={scrollLeft}
                aria-label="Scroll Left"
                className="absolute border border-black left-0 z-10 bg-white rounded-full p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-gray-200 md:mx-10"
            >
                <FiChevronLeft size={24} />
            </button>
        
            <div
                ref={scrollRef}
                className="flex overflow-x-scroll scrollbar-hide scroll-smooth whitespace-nowrap px-12 space-x-12 items-center md:mx-14"
            >

                <div 
                    onClick={() => handleItemClick("Music")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Music" 
                            ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400"
                            : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Music" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                    </svg>

                    <span>Music</span>
                </div>

                <div 
                    onClick={() => handleItemClick("Video")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Video" ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400" : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Video" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <span>Video</span>
                </div>

                <div 
                    onClick={() => handleItemClick("Art")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Art" ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400" : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Art" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                    </svg>

                    <span>Art</span>
                </div>

                <div 
                    onClick={() => handleItemClick("Code")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Code" ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400" : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Code" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <span>Code</span>
                </div>

                <div 
                    onClick={() => handleItemClick("Docs")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Docs" ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400" : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Docs" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>

                    <span>Docs</span>
                </div>

                <div 
                    onClick={() => handleItemClick("Study")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Study" ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400" : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Study" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                    <span>Study</span>
                </div>

                <div 
                    onClick={() => handleItemClick("Career")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Career" ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400" : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Career" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>

                    <span>Career</span>
                </div>

                <div 
                    onClick={() => handleItemClick("Present")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Present" ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400" : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Present" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>

                    <span>Present</span>
                </div>

                <div 
                    onClick={() => handleItemClick("Marketing")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Marketing" ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400" : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Marketing" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>

                    <span>Marketing</span>
                </div>

                <div 
                    onClick={() => handleItemClick("Finance")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Finance" ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400" : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Finance" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <span>Finance</span>
                </div>

                <div 
                    onClick={() => handleItemClick("Analytics")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Analytics" ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400" : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Analytics" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>

                    <span>Analytics</span>
                </div>

                <div 
                    onClick={() => handleItemClick("Translate")}
                    className={`flex flex-col items-center bg-white p-2 rounded cursor-pointer group relative
                        ${selectedItem === "Translate" ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gray-400" : "text-gray-400 hover:text-black"}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selectedItem === "Translate" ? "stroke-black" : "stroke-gray-400 group-hover:stroke-black"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                    </svg>

                    <span>Translate</span>
                </div>

            </div>

            
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent" />


            <button
                onClick={scrollRight}
                className="absolute border md:mx-8 border-black right-0 z-10 bg-white rounded-full p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-gray-200"
            >
                <FiChevronRight size={24} />
            </button>
        </div>
    )
}

export default ScrollItems;
