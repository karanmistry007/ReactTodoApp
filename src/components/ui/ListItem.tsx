import { IoInformationCircle } from "react-icons/io5"
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6"
import { PiListBullets, PiListChecks } from "react-icons/pi";
import { HiOutlineStar } from "react-icons/hi2";
import { BiSolidStar } from "react-icons/bi";
import Drawer from "./Drawer";

// ALL CATEGORIES 
interface useGetAllCategories {
    category: string;
}

// SELECTED CATEGORIES 
interface useSelectedCategories {
    category: string;
};

// TODO ITEMS
interface useTodoData {
    completeTodo: boolean,
    importantTodo: boolean,
    isSendReminder: boolean,
    descriptionTodo: string,
    selectDueDate: string,
    selectedCategories: Array<useSelectedCategories>,
}

const ListItem = () => {
    // HOOKS
    const [completeTodo, setCompleteTodo] = useState<boolean>(false);
    const [importantTodo, setImportantTodo] = useState<boolean>(false);
    const [descriptionTodo, setDescriptionTodo] = useState<string>("Hello This is a sample todo text");
    const [selectDueDate, setSelectDueDate] = useState<string>("2024-12-12");
    const [isSendReminder, setIsSendReminder] = useState<boolean>(false);
    const [selectedCategories, setSelectedCategories] = useState<useSelectedCategories[]>([]);
    const [showCategories, setShowCategories] = useState<boolean>(false);
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
    const [showDrawer, setShowDrawer] = useState<boolean>(false);
    const [todoData, setTodoData] = useState<useTodoData>({
        completeTodo: completeTodo,
        importantTodo: importantTodo,
        isSendReminder: isSendReminder,
        descriptionTodo: descriptionTodo,
        selectDueDate: selectDueDate,
        selectedCategories: selectedCategories,
    })

    // SAVE TODO HANDLER
    const handleSaveTodo = () => {
        setTodoData({
            completeTodo: completeTodo,
            importantTodo: importantTodo,
            isSendReminder: isSendReminder,
            descriptionTodo: descriptionTodo,
            selectDueDate: selectDueDate,
            selectedCategories: selectedCategories,
        });

        // console.log(todoData)
    }

    // DRAWER DISPLAY HANDLER
    const handleDrawerDisplay = (data: boolean) => {
        setShowDrawer(data)
    };

    const haldleUpdatedDrawerData = (data: useTodoData) => {
        // console.log(data)
        setCompleteTodo(data.completeTodo);
        setImportantTodo(data.importantTodo);
        setIsSendReminder(data.isSendReminder);
        setDescriptionTodo(data.descriptionTodo);
        setSelectDueDate(data.selectDueDate);
        setSelectedCategories(data.selectedCategories);
    }

    // useEffect(() => {
        // console.log(todoData)

    // }, [todoData])


    // CATEGORIES MULTISELECT HANDLER
    const handleCategoryMultiSelect = (category: string) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.some((item) => item.category === category)) {
                return prevCategories.filter((item) => item.category !== category);
            } else {
                return [...prevCategories, { category }];
            }
        });
    };

    return (
        <>
            {/* LIST ITEMS */}
            <div className="list-items rounded-md border-gray-300 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] my-2 py-1 px-1.5 sm:py-2 sm:px-3 flex justify-between lg:grid gap-1 sm:gap-y-2 sm:gap-x-5  lg:grid-cols-8 xl:grid-cols-10 xxl:grid-cols-12 items-center">
                {/* EDIT AND CLOSE TASK */}
                <div className="item flex justify-start items-center gap-1 sm:gap-5 w-[85%] sm:w-[80%] text-center lg:w-auto lg:col-span-3 xl:col-span-5 xxl:col-span-7">
                    <div className={`complete hover:bg-gray-100-todo-button bg-transparent rounded-full p-0.5 w-fit text-xs sm:text-sm border border-gray-600 cursor-pointer`} title="Complete" onClick={() => { setCompleteTodo(!completeTodo) }} >
                        <FaCheck className={`${completeTodo ? "opacity-1" : "opacity-0"}`} />
                    </div>
                    <div className="input w-full">
                        <input type="text" className="outline-0 placeholder:text-gray-700 py-1.5 px-2 w-full" name="ToDo" id="ToDo" value={descriptionTodo} onChange={(e) => { setDescriptionTodo(e.target.value) }} />
                    </div>
                </div>
                {/* EDIT AND CLOSE TASK */}

                {/* DUE DATE */}
                <div className="item hidden lg:block lg:col-span-2 justify-self-center">
                    <div className="due-date">
                        <input className="outline-0 cursor-pointer rounded-md px-1 w-[120px]" type="date" name="Date" id="Date" value={selectDueDate} onChange={(e) => { setSelectDueDate(e.target.value) }} />
                    </div>
                </div>
                {/* END DUE DATE */}

                {/* IMPORTANCE */}
                <div className="item hidden lg:block lg:col-span-1 justify-self-center">
                    <div className="importance cursor-pointer" onClick={() => { setImportantTodo(!importantTodo) }}>
                        <HiOutlineStar className={`${importantTodo ? "hidden" : "show"} text-2xl`} />
                        <BiSolidStar className={`${importantTodo ? "show" : "hidden"} text-2xl`} />
                    </div>
                </div>
                {/* END IMPORTANCE */}

                {/* CATEGORIES */}
                <div className="item hidden lg:block lg:col-span-1 justify-self-center">
                    {/* CATEGORIES MULTISELECT */}
                    <div className="category-dropdown relative h-6">
                        {/* CATEGORIES ICONv */}
                        <button className="categories text-2xl" onClick={() => { setShowCategories(!showCategories) }} title="Categories">
                            <PiListBullets className={`${selectedCategories.length == 0 ? "show" : "hidden"}`} />
                            <PiListChecks className={`${selectedCategories.length == 0 ? "hidden" : "show"}`} />
                        </button>
                        {/* END CATEGORIES ICON */}

                        {/* CATEGORIES ITEMS DROPDOWN*/}
                        <div className={`categories-items bg-white p-1 rounded-md flex-col gap-1 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] max-h-[50dvh] overflow-y-scroll absolute right-0 z-50 ${showCategories ? "flex" : "hidden"}`}>
                            {getAllCategories.map((data, index) => (
                                <div key={data.category + index} className={`category cursor-pointer flex select-none justify-start items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded-md ${selectedCategories.some((item) => item["category"] === data.category) ? "bg-slate-100" : ""}`} onClick={() => handleCategoryMultiSelect(data.category)}>
                                    <div className={`save-todo-button bg-transparent rounded-full p-0.5 w-fit text-[10px] border border-gray-600 cursor-pointer`}>
                                        <FaCheck className={`${selectedCategories.some((item) => item["category"] === data.category) ? "opacity-1" : "opacity-0"}`} />
                                    </div>
                                    <div className="category-text">
                                        {data.category}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* END CATEGORIES ITEMS DROPDOWN */}
                    </div>
                    {/* END CATEGORIES MULTISELECT */}
                </div>
                {/* END CATEGORIES */}

                {/* MORE */}
                <div className="item more  w-[15%] sm:w-[20%] text-center  lg:w-auto lg:col-span-1 justify-self-center">
                    <div className="more cursor-pointer" onClick={() => { handleSaveTodo(), handleDrawerDisplay(true) }}>
                        <IoInformationCircle className="text-2xl m-auto lg:m-0" />
                    </div>
                </div>
                {showDrawer ? (
                    <Drawer handleDrawerDisplay={handleDrawerDisplay} todoData={todoData} haldleUpdatedDrawerData={haldleUpdatedDrawerData} />
                ) : ""}
                {/* END MORE */}
            </div>
            {/* END LIST ITEMS */}
        </>
    )
}

export default ListItem