import { useState } from "react"

const Quiz = () => {
    const [dummyData, setDummyData] = useState([
        {
            id: 1,
            about: 'Football',
            description: "lorem lorem ipsum, lorem lorem ipsum"
        },
        {
            id: 2,
            about: 'Pizza',
            description: "lorem lorem ipsum, lorem lorem ipsum"
        },
        {
            id: 3,
            about: 'Sushi',
            description: "lorem lorem ipsum, lorem lorem ipsum"
        },
        {
            id: 4,
            about: 'China',
            description: "lorem lorem ipsum, lorem lorem ipsum"
        },
    ])

    return (
    <div>
        <div className="quiz-list">
            {dummyData.map(item => {
                const { id, about, description } = item

                return (
                    <article key={id} className="quiz-item">
                        <h2>{about}</h2>
                        <p>{description}</p>
                        <button>
                            start quizz
                        </button>
                    </article>
                )
            })}
        </div>
    </div>
    )
}

export default Quiz