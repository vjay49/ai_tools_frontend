const Tabs = () => {
    return (
        <div className="flex space-x-6 items-center">
            <div className="flex space-x-6">
                <button className="text-base rounded-full transition-opacity hover:opacity-40 cursor-pointer"> 
                    Launch Tool
                </button>
            </div>

            <div className="flex space-x-6">
                <button className="text-base rounded-full transition-opacity hover:opacity-40 cursor-pointer"> 
                    Create
                </button>
            </div>

            <div className="flex space-x-6">
                <button className="text-base rounded-full transition-opacity hover:opacity-40 cursor-pointer"> 
                    AI News
                </button>
            </div>

            <div className="flex space-x-6">
                <button className="text-base rounded-full transition-opacity hover:opacity-40 cursor-pointer"> 
                    Community
                </button>
            </div>
        </div>
    )
}

export default Tabs;
