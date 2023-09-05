import styles from './DropDown.module.css';

export default function DropDown(props){
    return(
        <div className={styles.container}>
            <select>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}