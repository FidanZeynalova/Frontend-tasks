import React from 'react'
import furniture from '../../assets/furniture.png'

const data = [
    {
        title: 'To Do',
        cards: [
            {
                title: 'Design User Interface',
                desc: "Create wireframes and high-fidelity designs for the app's main screens.",
                subtasks: [
                    { text: 'Create wireframes for login and signup screens', },
                    { text: 'Design high-fidelity mockups for dashboard', },
                ],
                links: [],
                tags: [{ label: 'Design', type: 'gray' }],
                image: null,
            },
            {
                title: 'Set Up Backend Infrastructure',
                desc: 'Prepare the server environment and database for app development.',
                subtasks: [
                    { text: 'Choose hosting provider', },
                    { text: 'Set up database (PostgreSQL)', },
                ],
                links: [
                    { label: 'docs.google.com' },
                    { label: 'poster.png' },
                ],
                tags: [{ label: 'Backend', type: 'green' }],
            },
        ],
    },
    {
        title: 'Doing',
        cards: [
            {
                title: 'Design a sign up page',
                desc: '',
                subtasks: [],
                links: [],
                tags: [{ label: 'Design', type: 'gray' }],
                image: null,
            },
            {
                title: 'Develop Authentication Module',
                desc: 'Prepare the server environment and database for app development.',
                subtasks: [
                    { text: 'Create API endpoints for authentication', done: true },
                    { text: 'Test with OAuth2 integration', },
                ],
                links: [],
                tags: [
                    { label: 'Backend', type: 'green' },
                    { label: 'Frontend', type: 'purple' },
                ],
                image: null,
            },
        ],
    },
    {
        title: 'Done',
        cards: [
            {
                title: 'Research Target Audience',
                desc: 'Gather insights on potential users’ needs and behaviors.',
                subtasks: [
                    { text: 'Conduct user surveys', done: true },
                    { text: 'Create a summary report', done: true },
                ],
                links: [{ label: 'forms.google.com' }],
                tags: [],
                image: null,
            },
            {
                title: 'Finalize a logo',
                desc: 'Choose a logo from one of the logo directories online.',
                subtasks: [],
                links: [],
                tags: [{ label: 'Design', type: 'gray' }],
                image: furniture,
            },
        ],
    },
]


function Cards() {
    return (
        <div className="w-full max-w-[1108px] mx-auto flex flex-col md:flex-row gap-6">
            {data.map((column) => (
                <div
                    key={column.title}
                    className="flex-1 min-w-[280px] flex flex-col gap-3"
                >
                    {/* Column title */}
                    <div className="text-xs font-bold text-[#667085]">
                        {column.title}
                    </div>

                    {/* Cards */}
                    {column.cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-4 flex flex-col gap-4"
                        >
                            {/* Title */}
                            <div className="font-semibold text-lg text-[#101828]">
                                {card.title}
                            </div>

                            {/* Description */}
                            {card.desc && (
                                <div className="text-sm text-[#475467]">
                                    {card.desc}
                                </div>
                            )}

                            {/* Subtasks */}
                            {card.subtasks && (
                                <div className="flex flex-col gap-2">
                                    <div className="text-xs font-semibold text-[#667085]">
                                        Sub tasks
                                    </div>

                                    {card.subtasks.map((task, i) => (
                                        <label
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-[#344054]"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={task.done}
                                                readOnly
                                                className="mt-1 w-4 h-4 accent-[#12B76A]"
                                            />
                                            <span>
                                                {task.text}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                            {/* Links */}
                            {card.links.length > 0 && (
                                <div className="flex gap-2">
                                    {card.links.map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.url}
                                            className="text-sm text-blue-600"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            )}



                            {/* Image */}
                            {card.image && (
                                <img
                                    src={card.image}
                                    alt=""
                                    className="w-full h-[124px]  rounded-md"
                                />
                            )}

                            {/* Tags */}
                            {card.tags && (
                                <div className="flex gap-2 flex-wrap">
                                    {card.tags.map((tag, i) => (
                                        <span key={i} className={`px-2 py-1 rounded-md text-xs font-medium
                        ${tag.type === 'green'
                                                ? 'bg-green-100 text-green-700'
                                                : tag.type === 'purple'
                                                    ? 'bg-purple-100 text-purple-700'
                                                    : 'bg-gray-100 text-gray-700'
                                            }
                      `}
                                        >
                                            {tag.label}
                                        </span>
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
