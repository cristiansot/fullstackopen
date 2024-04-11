import Part from "./Part"

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part part={part1.name + part1.exercises} />
      <Part part={part2.name + part2.exercises}  />
      <Part part={part3.name + part3.exercises} />
    </div>
  )
}

export default Content;