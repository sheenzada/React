//  const { useState } = require("react")

// const Emoji = () => {
//     let [selectedMood, setSelectMood] = useState(null)

//     const moods = [
//         {name: "Happy" , emoji: "*" , message: "keep Smiling!"},
//         {name: "Sad" , emoji: "@" , message: "Everything Well!"},
//         {name: "Excited" , emoji: "&" , message: "Big things!"},
//         {name: "Angry" , emoji: "~`" , message: "keep Smiling!"},
//     ]
//     return (
//         <div className="app main-component">
//             <h1> * Emoji Mood Board</h1>
//             <p>Select your mood !</p>

//             <div className="mood-buttons">
//                 {
//                     moods.map((mood, index) => {
//                         return <button key={index} onClick={()=> setSelectMood} >{mood.name} {mood.emoji} </button>
//                     })
//                 }
//             </div>
//         {
//             selectedMood && 
//             <div className="mood-display">
//                 <h2>{selectedMood.emoji}</h2>
//                 <h4>{selectedMood.message}</h4>
//             </div>
// }

//         </div>
//     )
// }
// export default Emoji;


