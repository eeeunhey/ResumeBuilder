import { useState } from "react"

const SkillsForm = ({data, onChange}) => {
    const [newSkill, setNewSkill] = useState("")

    const addSkill = () => {
        if(newSkill.trim() && !data.includes(newSkill.trim())){
            onChange([...data, newSkill.trim()])
            setNewSkill("")
        }
    }

    const removeSkill = (indexToRemove)=>{
        onChange(data.filter((_,i) => i !==indexToRemove))   
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
            addSkill();
        }
    }

  return (
    <div>
        <div>

        </div>

    </div>
  )
}

export {SkillsForm};