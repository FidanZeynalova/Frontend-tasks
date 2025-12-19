import React from 'react'

const data = [
    {
        title: 'To Do',
        cards: [
            {
                title: 'Design User Interface',
                desc: "Create wireframes and high-fidelity designs for the app's main screens.",
                subtasks: [
                    'Create wireframes for login and signup screens',
                    'Design high-fidelity mockups for dashboard',
                ],
            },
            {
                title: 'Design User Interface',
                desc: "Create wireframes and high-fidelity designs for the app's main screens.",
                subtasks: [
                    'Create wireframes for login and signup screens',
                    'Design high-fidelity mockups for dashboard',
                ],
            },
        ],

    },
    {
        title: 'Doing',
        cards: [
            {
                title: 'Design User Interface',
                desc: "Create wireframes and high-fidelity designs for the app's main screens.",
                subtasks: [
                    'Create wireframes for login and signup screens',
                    'Design high-fidelity mockups for dashboard',
                ],
            },
            {
                title: 'Design User Interface',
                desc: "Create wireframes and high-fidelity designs for the app's main screens.",
                subtasks: [
                    'Create wireframes for login and signup screens',
                    'Design high-fidelity mockups for dashboard',
                ],
            },
        ],
    },
    {
        title: 'Done',
        cards: [
            {
                title: 'Design User Interface',
                desc: "Create wireframes and high-fidelity designs for the app's main screens.",
                subtasks: [
                    'Create wireframes for login and signup screens',
                    'Design high-fidelity mockups for dashboard',
                ],
            },
            {
                title: 'Design User Interface',
                desc: "Create wireframes and high-fidelity designs for the app's main screens.",
                subtasks: [
                    'Create wireframes for login and signup screens',
                    'Design high-fidelity mockups for dashboard',
                ],
            },
        ],
    },
]

function Cards() {
    return (
        <div className="w-full max-w-[1108px] flex flex-wrap md:flex-nowrap gap-6">

            {data.map((column) => (
                <div key={column.title} className="flex-1 min-w-[300px] flex flex-col gap-3">

                    {/* Column title */}
                    <div className="font-bold text-xs text-[#667085] ">
                        {column.title}
                    </div>

                    {/* Cards */}
                    {column.cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-4 flex flex-col gap-4 "
                        >
                            <div className="font-bold text-lg">{card.title}</div>
                            <div className="text-sm text-[#1D2939]">{card.desc}</div>

                            {/* Subtasks */}
                            {card.subtasks && (
                                <div className="flex flex-col gap-2">
                                    <div className="text-xs font-semibold text-[#667085]">
                                        Sub tasks
                                    </div>

                                    {card.subtasks.map((task, i) => (
                                        <label key={i} className="flex items-start gap-2 text-sm">
                                            <input
                                                type="checkbox"
                                                className="mt-1 w-4 h-4 "
                                            />
                                            <span>{task}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}

        </div>
    )
}

export default Cards
