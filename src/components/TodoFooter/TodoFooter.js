import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"
import { t } from 'i18next'

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? t("task")
             : (t("tasks") + t("left"))}</p>
            <Link to="/followers">{t("followers")}</Link>
        </div>
    )
}

export default TodoFooter
