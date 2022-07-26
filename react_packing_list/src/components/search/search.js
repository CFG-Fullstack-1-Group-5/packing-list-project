import { useState } from 'react';

const Search = ({onSearchChange}) => {
    
    const [search, setSearch] = useState(null);
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <div className='Search'>
            <form>
                <input type='text' placeholder='City' id='City' /> 
                <input type='date' id='Date' />
                <select name='Activites' id='Activities'>
                    <option value="" disabled selected hidden>Activities</option>
                    <option value ='hiking'>Hiking</option>
                    <option value ='beach'>Beach Days</option>
                    <option value ='evening'>Out on the Town</option>
                    <option value ='ski'>Skiing</option>
                </select> 
                <select name='Style' id='Style'>
                    <option value="" disabled selected hidden>Style</option>
                    <option value ='masculine'>Masculine</option>
                    <option value ='feminine'>Feminine</option>
                    <option value ='neutral'>Neutral</option>
                </select>    
            </form>    
        </div>
    )
}

export default Search;
