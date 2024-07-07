type Props = { name: string, link: string }

const Dashboard = (props: Props) => {
    console.log(props)
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full p-10 h-[calc(100dvh_-_60px)] bg-gray-300">
                <div className="dashboard-details w-fit text-lg sm:text-3xl">
                    <h2>
                        Current Page: <b>{props.name}</b>
                    </h2>
                    <h2>
                        Current Link: <b>{props.link}</b>
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Dashboard