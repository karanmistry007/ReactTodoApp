import ListItem from "./ListItem"


const ListView = () => {
    // HOOKS


    return (
        <>
            {/* LIST VIEW */}
            <div className="list-view-container p-4 sm:p-5 w-full">
                <div className="list-view bg-white  flex flex-col rounded-md">
                    {/* LIST HEADINGS */}
                    <div className="list-heading border-b border-gray-300 sm:font-semibold pb-2 px-1.5 sm:px-3 flex justify-between lg:grid  gap-1 sm:gap-y-2 sm:gap-x-5 lg:grid-cols-8 xl:grid-cols-10 xxl:grid-cols-12 items-center justify-items-center">
                        <div className="heading w-[85%] sm:w-[80%] text-center lg:w-auto lg:col-span-3 xl:col-span-5 xxl:col-span-7">
                            Title
                        </div>
                        <div className="heading hidden lg:block lg:col-span-2">
                            Due Date
                        </div>
                        <div className="heading hidden lg:block lg:col-span-1">
                            Importance
                        </div>
                        <div className="heading hidden lg:block lg:col-span-1">
                            Categories
                        </div>
                        <div className="heading w-[15%] sm:w-[20%] text-center lg:w-auto lg:col-span-1">
                            More
                        </div>
                    </div>
                    {/* END LIST HEADINGS */}

                    {/* LIST VIEW ITEMS */}
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    {/* END LIST VIEW ITEMS */}
                </div>
            </div>
            {/* END LIST VIEW */}
        </>
    )
}

export default ListView