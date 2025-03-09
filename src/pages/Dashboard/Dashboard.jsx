import styles from "./Dashboard.module.css";

export default function Dashboard() {

    return (
        <div className=" h-100 flex-grow-1" id={styles.Dashboard}>
            <h1>Dashboard</h1>
            <p className="display-1 text-center text-danger fw-bolder bg-warning p-4 m-5"> أنا داش بورد صدقوني</p>
            
        </div>
    )
}
