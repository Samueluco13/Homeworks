import {rtdb, ref, set, push, onValue} from '../../firebase/config'
import { setLoading, setData } from '../firebaseSlice';

export const fetchFirebaseData = () => (dispatch) => {
    dispatch(setLoading()); //Cragando
    const dbRef = ref(rtdb, 'datos'); //Referencia a la base de datos en tiempo real
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(setData(data ? Object.values(data) : []));
    });
};

export const addDataToFirebase = (newData) => (dispatch) => {
    const dbRef = ref(rtdb, 'datos'); //Referencia a la base de datos en tiempo real
    const newEntry = push(dbRef);
    set(newEntry, newData);
}