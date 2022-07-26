import { useFormik } from 'formik';

const FormikSearch = () => {

    const formik = useFormik({
        initialValues: {
            City: "",
            Date: "",
            Activity: "",
            Style: "",
        }
    })
    
    return (
        <form>
            <div className="input-container">
                <input
                    value={formik.values.City}
                    onChange={formik.handleChange} 
                    id ="City" 
                    name="City" 
                    type="text" 
                    placceholder="City" />
            </div>
            <div className="input-container">
                <input
                    value={formik.values.Date} 
                    onChange={formik.handleChange}
                    id ="Date" 
                    name="Date" 
                    type="date" 
                    placceholder="Date"/>
            </div>
            <div className="input-container">
                <input
                    value={formik.values.Activites} 
                    onChange={formik.handleChange}
                    id ="Activites" 
                    name="Activites" 
                    type="" 
                    placceholder="Activites"/>
            </div>
            <div className="input-container">
                <input
                    value={formik.values.Style}
                    onChange={formik.handleChange} 
                    id ="Style" 
                    name="Style" 
                    type="" 
                    placceholder="Style"/>
            </div>
        </form>
    )
}

export default FormikSearch;
