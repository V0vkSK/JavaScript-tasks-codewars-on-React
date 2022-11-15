import styles from './css/ToDo.module.scss';

const ToDo = () => {
    return (
        <>
            <div id="myDIV" className={styles.header}>
                <h2>My To Do List</h2>
                <input type="text" id="myInput" placeholder="Title..."></input>
                <span onClick="newElement()" className={styles.addBtn}>
                    Add
                </span>
            </div>

            <ul id="myUL">
                <li>Hit the gym</li>
                <li className={styles.checked}>Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs</li>
                <li>Read a book</li>
                <li>Organize office</li>
            </ul>
        </>
    );
};
export default ToDo;
