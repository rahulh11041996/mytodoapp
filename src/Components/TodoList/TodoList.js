import { Component } from "react";
import { Actions } from "../Actions/Actions";
import Checkbox from "../Checkbox/Checkbox";
import Status from "../Status/Status";
import Update from "../Update/Update";
import styles from './todo.module.css';

export class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            isEditMode: false,
            titleUpdated: undefined
        }
    }

    /**
     * Passing todo list id for delete to the parent
     */
    onDeleteHandler = () => {
        this.props.onDeleteTodo(this.props.todoId);
    }

    /**
     * Triggering editing of a todo id
     */
    onEditHandler = () => {
        this.setState({ isEditMode: true })
    }

    /**
     * Cancelling edit mode by reseting edit mode state and reseting back the todo title
     */
    onCancel = () => {
        this.setState({ isEditMode: false, titleUpdated: this.props.title });
    }

    /**
     * passing the id of todolist to edit and updated todo title to parent
     * Reseting editmode
     */
    onUpdate = () => {
        this.props.onUpdateTodo({ id: this.props.todoId, title: this.state.titleUpdated });
        this.setState({ isEditMode: false });
    }

    /**
     * Updating the title of the todo title on editmode from content editable element
     * @param {keyboard event } event 
     */
    handleKeyDown = (event) => {
        this.setState({ titleUpdated: event.target.textContent });
    }

    /**
     * Updating the todo list status toggling complete/pending
     */
    toggleTodoStatus = () => {
        this.props.toggleTodoStatus(this.props.todoId)
    }

    /**
     * Updating render JSX for table layout
     * @returns JSX
     */
    tableLayout = () => {
        if (this.props.isHeader) {
            return (<div className={`${styles.grid} ${styles.shadow} ${styles.pos_rel} ${styles.fz_16} ${styles.f_bold} ${styles.f_color} ${styles.ht_6}`}>
                <span><Checkbox disabled={true} /></span>
                <span>Title</span>
                <span>Status</span>
                <span>Action</span>
            </div>)
        }
        else {
            return (
                <div className={`${styles.grid} ${styles.fz_14}  ${styles.f_color} ${styles.ht_4} ${styles.border}`}>
                    <span><Checkbox disabled={this.state.isEditMode} todoId={this.props.todoId} onToggleStatus={this.toggleTodoStatus} /></span>
                    <div className={styles.content_parent}>
                        <span className={this.props.status ? styles.text_strike : styles.content_editable} suppressContentEditableWarning={true} onBlur={this.handleKeyDown} contentEditable={this.state.isEditMode}>{this.state.titleUpdated ?? this.props.title}</span>
                        {this.state.isEditMode && <Update onCancel={this.onCancel} onUpdate={this.onUpdate} />}
                    </div>
                    <span><Status status={this.props.status} /></span>
                    <span><Actions status={this.props.status} isEditMode={this.state.isEditMode} onDeleteTodo={this.onDeleteHandler} onEditTodo={this.onEditHandler} /></span>
                </div>
            )
        }
    }

    render() {
        return this.tableLayout()
    }

}