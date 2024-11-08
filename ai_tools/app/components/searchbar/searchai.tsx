interface SearchAIProps {
    compact?: boolean;
}

const SearchAI = ({ compact = false }: SearchAIProps) => {
    return (
        <div className={`mx-auto ${compact ? 'max-w-full' : 'max-w-[850px]'}`}>
            <div className={`flex flex-row items-center border rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-gray-200 transition-all duration-300 ${
                compact ? 'h-[48px]' : 'h-[64px] lg:h-[64px]'
            }`}>
                <div className="p-2">
                    <div className={`cursor-pointer bg-aitools hover:opacity-40 transition rounded-full text-white ${
                        compact ? 'p-1.5' : 'p-2 lg:p-4'
                    }`}>
                        <svg 
                            viewBox="0 0 32 32" 
                            style={{display:'block', fill:'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth:4, overflow:'visible'}} 
                            aria-hidden="true" 
                            role="presentation" 
                            focusable="false"
                        >
                            <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                        </svg>
                    </div>
                </div>
                <div className={`cursor-text flex flex-col justify-center rounded-full ${
                    compact ? 'w-[200px] h-[40px]' : 'w-[250px] h-[48px] lg:h-[64px]'
                }`}>
                    <p className={`text-sm ${compact ? 'text-gray-600' : ''}`}>
                        Search Tool
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SearchAI;