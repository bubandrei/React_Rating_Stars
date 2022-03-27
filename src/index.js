import React from 'react'
import ReactDOM from 'react-dom'


const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "l lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" }
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the yellow squash and place in the oven for 30 mins.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Remove from oven. Add the lettuce and serve."
    ]
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "l lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" }
    ],
    steps: [
      "Cook the fish on the grill until cooked through.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese."
    ]
  }
];

function Menu(props) {
  return (
    <div>
      <h1>
        <div>{props.title}</div>
      </h1>
      <div>
        {
          props.recipes.map((rec, i) => <Recipe key={i} name={rec.name} ingredients={rec.ingredients} steps={rec.steps} />)
        }
      </div>
    </div>
  )
}

// function Menu(props) {
//   return (
//     <article>
//       <header>
//         <h1>{props.title}</h1>
//       </header>
//       <div>
//         {props.recipes.map((recipe, i) => (
//           <Recipe key={i} {...recipe} />
//         ))}
//       </div>
//     </article>
//   );
// }


// 

function Recipe(props) {
  console.log(props)
  return (
    <div>
      <h3>
        <div>{props.name}</div>
      </h3>
      <div>{props.ingredients.map((ing, i) => (<li>{ing.name}</li>))}</div>
      <div>{props.steps.map((step, i)=>(<ul>{step}</ul>))}</div>
    </div>
  )
}

ReactDOM.render(
  <Menu recipes={data} title='Best choice' />,
  document.getElementById('root')

)
