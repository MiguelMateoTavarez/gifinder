import { useState } from "react"
import PropTypes from 'prop-types';
import { TextField } from "@mui/material";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim()

        if (newInputValue.length <= 3) return;

        onNewCategory(newInputValue)
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <TextField
                id="outlined-basic"
                label="Search gifs"
                fullWidth
                color="warning"
                variant="filled"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func,
}