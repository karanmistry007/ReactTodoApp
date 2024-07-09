import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { PiBellRingingLight } from "react-icons/pi";
import { PiBellRingingFill } from "react-icons/pi";
import { IoInformationCircle } from "react-icons/io5";
import { PiCalendarDotsLight } from "react-icons/pi";
import { RiPlayListAddLine } from "react-icons/ri";
import { FaListCheck } from "react-icons/fa6";
import { PiListChecks } from "react-icons/pi";
import { PiListBullets } from "react-icons/pi";




interface useGetAllCategories {
    category: string;
}

interface useSelectedCategories {
    category: string;
};

type Props = {}

function CreateTodo({ }: Props) {
    const [saveNewTodo, setSaveNewTodo] = useState<boolean>(false);
    const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
    const [showMoreOptions, setShowMoreOptions] = useState<boolean>(false);
    const [isSendReminder, setIsSendReminder] = useState<boolean>(false);
    const [showCategories, setShowCategories] = useState<boolean>(false);
    const [selectedCategories, setSelectedCategories] = useState<useSelectedCategories[]>([]);
    const [getAllCategories, setGetAllCategories] = useState<useGetAllCategories[]>([
        { category: 'Research' },
        { category: 'Development' },
        { category: 'Deployment' },
        { category: 'Social' },
        { category: 'Health' },
        { category: 'Finance' },
        { category: 'Shopping' },
        { category: 'Home' },
        { category: 'Personal' },
        { category: 'Work' }
    ]);

    console.log(selectedCategories)

    useEffect(() => {
        const setScreenWidth = () => {
            if (window.innerWidth < 640) {
                setIsMobileScreen(true)
            } else {
                setIsMobileScreen(false)
            }
        }
        setScreenWidth()
        window.addEventListener('resize', setScreenWidth);
    }, []);

    const handleCategoryClick = (category: string) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.some((item) => item.category === category)) {
                // Remove the category if it exists
                return prevCategories.filter((item) => item.category !== category);
            } else {
                // Add the category if it doesn't exist
                return [...prevCategories, { category }];
            }
        });
    };


    return (
        <>
            <div className="create-todo-container bg-purple-200 p-5 w-full">
                <div className="create-todo bg-white p-2.5 sm:p-5 flex flex-col shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] rounded-md">
                    <div className="row-1 flex gap-1 sm:gap-5 justify-between items-center">
                        <div className={`save hover:bg-gray-100-todo-button bg-transparent rounded-full p-0.5 w-fit text-xs sm:text-sm border border-gray-600 cursor-pointer`} onClick={() => { setSaveNewTodo(!saveNewTodo) }}>
                            <FaCheck className={`${saveNewTodo ? "opacity-1" : "opacity-0"}`} />
                        </div>
                        <input type="text" className="outline-0 placeholder:text-gray-700 py-1.5 px-2 w-full" placeholder="Add a Task..." name="createTodo" id="createTodo" />
                        <div className="show-more text-2xl" onClick={() => { setShowMoreOptions(!showMoreOptions) }}>
                            <IoInformationCircle className={`${isMobileScreen ? "show" : "hidden"}`} />
                        </div>

                    </div>
                    <div className={`row-2 flex gap-2.5 sm:gap-5 justify-start items-center sm:mt-2.5 pt-2 sm:pt-2.5 border-t ${isMobileScreen ? (showMoreOptions ? "show" : "hidden") : "show"}`}>
                        <button className="due-date relative cursor-pointer">
                            <input type="date" className="w-6 top-0 left-0 absolute opacity-0" name="dueDate" id="dueDate" />
                            <PiCalendarDotsLight className="text-2xl" />
                        </button>

                        <button className="send-reminder text-2xl" onClick={() => { setIsSendReminder(!isSendReminder) }}>
                            <PiBellRingingLight className={`${isSendReminder ? "hidden" : "show"}`} />
                            <PiBellRingingFill className={`${isSendReminder ? "show" : "hidden"}`} />
                        </button>
                        <div className="category-dropdown relative h-6">
                            <button className="categories text-2xl" onClick={() => { setShowCategories(!showCategories) }}>
                                <PiListBullets className={`${selectedCategories.length == 0 ? "show" : "hidden"}`} />
                                <PiListChecks className={`${selectedCategories.length == 0 ? "hidden" : "show"}`} />
                            </button>
                            <div className={`categories-items bg-white p-1 rounded-md flex-col gap-1 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] max-h-[50dvh] overflow-y-scroll ${showCategories ? "flex" : "hidden"}`}>
                                {getAllCategories.map((data, index) => (
                                    <div key={data.category + index} className={`category cursor-pointer flex select-none justify-start items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded-md ${selectedCategories.some((item) => item["category"] === data.category) ? "bg-slate-100" : ""}`} onClick={() => handleCategoryClick(data.category)}>
                                        <div className={`save-todo-button bg-transparent rounded-full p-0.5 w-fit text-[10px] border border-gray-600 cursor-pointer`}>
                                            <FaCheck className={`${selectedCategories.some((item) => item["category"] === data.category) ? "opacity-1" : "opacity-0"}`} />
                                        </div>
                                        <div className="category-text">
                                            {data.category}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CreateTodo